const express = require("express");
const router = express.Router();
const User=require("../models/user");
const wrapasync = require("../utils/wrapasync");
const passport = require("passport");
const { saveoriginalurl } = require("../middleware");
const usercontroller=require("../controllers/users")
router.get('/signup',usercontroller.rendersignup)
router.post("/signup", wrapasync(usercontroller.registeruser));

router.get("/login",usercontroller.renderlogin)
router.post("/login", saveoriginalurl  ,passport.authenticate('local',{failureRedirect:"/login" ,failureFlash:true}) , usercontroller.postlogin)
  
router.get("/logout",usercontroller.logout)

module.exports = router;