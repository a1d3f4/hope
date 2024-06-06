const express = require("express");
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/Expresserror.js");
const { listingSchema } = require("../schema.js");
const {isloggedin , isOwner}=require("../middleware.js")
const listingcontroller=require("../controllers/listings.js")
const multer  = require('multer')
const { storage } = require('../cloudConfig.js');
const upload = multer({ storage });

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const message = error.details.map((el) => el.message).join(",");
    throw new ExpressError(message, 400);
  } else {
    next();
  }
};

router.get("/", wrapasync(listingcontroller.index));

router.get("/new", isloggedin ,listingcontroller.rendernewform);

router.get("/:id", wrapasync(listingcontroller.showlisting));

router.post("/", upload.single('listing[image]'),validateListing,wrapasync(listingcontroller.savenewlisting));



router.get("/:id/edit", isloggedin , isOwner ,wrapasync(listingcontroller.editlisting));

router.put("/:id", isloggedin,  upload.single('listing[image]') ,validateListing, wrapasync(listingcontroller.saveeditedlisting));

router.delete("/:id", isloggedin, isOwner ,wrapasync(listingcontroller.deletelisting));

// const reviewRouter = require("./reviews");
// router.use("/:id/reviews", reviewRouter);

module.exports = router;
