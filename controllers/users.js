const User=require("../models/user");
const wrapasync = require("../utils/wrapasync");
const passport = require("passport");
const { saveoriginalurl } = require("../middleware");


module.exports.rendersignup=(req,res)=>{
    res.render("user/signup.ejs")
}
module.exports.registeruser=async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (error) => { // Pass the registered user to req.login
            if (error) {
                req.flash("error", "Sorry, you could not be logged in");
                return res.redirect('/signup');
            }
            req.flash("success", 'Welcome to Wanderlust');
            res.redirect('/listings');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    }
}

module.exports.renderlogin=(req,res)=>{
    res.render('user/login.ejs')
}

module.exports.postlogin=async(req,res)=>{
    req.flash("success","welcome to wanderlust,you are logged in")
    let redirectUrl=res.locals.redirectUrl||"/listings"
    console.log(redirectUrl)
    res.redirect(redirectUrl)
    }

module.exports.logout=(req,res)=>{
    req.logOut((error)=>{
        if(error){
            req.flash("error","something went wrong can not log out at the moment")
        }
        req.flash("success","you have been successfully logged out")
        res.redirect("/listings")
    })
}