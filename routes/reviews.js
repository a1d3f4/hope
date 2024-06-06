const express = require("express");
const router = express.Router();
const wrapasync = require("../utils/wrapasync.js");
const Listing = require("../models/listing.js");
const ExpressError = require("../utils/Expresserror.js");
const Review = require("../models/review.js");
const { reviewSchema } = require("../schema.js");
const { isloggedin , isreviewOwner, saveoriginalurl  } = require("../middleware.js");
const reviewcontroller=require("../controllers/reviews.js")

const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const message = error.details.map((el) => el.message).join(",");
    throw new ExpressError(message, 400);
  } else {
    next();
  }
};

router.post(
  "/",
  isloggedin,
  validateReview,
  wrapasync(reviewcontroller.createreview)
);
router.delete("/:reviewId", saveoriginalurl, isloggedin, isreviewOwner, wrapasync(reviewcontroller.deleteReview));

module.exports = router;
