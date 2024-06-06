if(process.env.NODE_ENV!='production'){
  require('dotenv').config()
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapasync = require("./utils/wrapasync.js");
const ExpressError = require("./utils/Expresserror.js");
const session=require('express-session')
const MongoStore = require('connect-mongo');
const listingsRouter = require("./routes/listings");
const reviewRouter = require("./routes/reviews.js");
const userRouter=require("./routes/users.js")
const filterRouter=require("./routes/filter.js")
const searchrouter=require("./routes/search.js")
const flash=require("connect-flash")
const passport=require('passport')
const Localstrategy=require("passport-local")
const User=require("./models/user.js")
const dburl=process.env.ATLASDB_URL

mongoose.connect(dburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to DB");
})
.catch((err) => {
  console.error("Connection error", err);
});


app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

const store=MongoStore.create({
  mongoUrl:dburl,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter:24*3600


})

store.on("error",()=>{
  console.log("error in mongo session store",err)
})

const sessionOptions={
  store,
  secret:process.env.SECRET,
  resave:false,
  saveUninitialized:true,
  cookie:{
expires:Date.now()+7*24*60*60*1000,
maxAge:7*24*60*60*1000,
httpOnly:true
  }

}

app.use(session(sessionOptions))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
passport.use(new Localstrategy(User.authenticate()))

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use((req,res,next)=>{
  res.locals.success=req.flash("success");
  res.locals.error = req.flash('error');
  res.locals.currUser=req.user
  next()
})


app.get("/",(req,res)=>{
  res.render("home")
})
app.get("/aboutus",(req,res)=>{
  res.render('about')
})
// Mount the listings router

app.use("/",userRouter);
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", (req, res, next) => {
  req.query.listingId = req.params.id;
  reviewRouter(req, res, next);
});
app.use("/filter", filterRouter);
app.use("/search",searchrouter)

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode && Number.isInteger(err.statusCode) ? err.statusCode : 500;
  const message = err.message || "Something went wrong";
  
  res.status(statusCode).render("listings/error.ejs", { err: { statusCode, message } });
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
