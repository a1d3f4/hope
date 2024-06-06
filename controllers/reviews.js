const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
module.exports.createreview=async (req, res) => {
    const { listingId } = req.query;
    const listing = await Listing.findById(listingId);
    if (!listing) {
      throw new ExpressError("Listing not found", 404);
    }
    const newReview = new Review(req.body.review);
    newReview.author=res.locals.currUser._id;
    console.log(req.user._id)
    console.log(res.locals.currUser._id)
    console.log(newReview.author)
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success",'New review created!');
    res.redirect(`/listings/${listing._id}`);
  }

  module.exports.deleteReview = async (req, res) => {
    console.log('Received DELETE request for review:', req.params);
    const { reviewId } = req.params;
    const { id } = req.query;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    console.log("review is waiting")
    await Review.findByIdAndDelete(reviewId);
    console.log("review deleted")
    req.flash("success","review deleted successfully")
    res.redirect(`/listings/${id}`);
  }
  