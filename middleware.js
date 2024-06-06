const Listing=require("./models/listing")
const Review=require("./models/review")

module.exports.isloggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
      req.session.redirectUrl = req.originalUrl;
      req.flash("error", "you must be logged-in");
      return res.redirect("/login");
  }
  next();
};

module.exports.saveoriginalurl = (req, res, next) => {
  if (req.session.redirectUrl) {
      res.locals.redirectUrl = req.session.redirectUrl; 
  }
  next();
}; 


module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params; 
    const listing = await Listing.findById(id);
    
    if (!listing) {
      req.flash("error", "Listing not found");
      return res.redirect('/listings');
    }

    if (!listing.owner.equals(req.user._id)) { 
      req.flash("error", "You don't have permission to do that");
      return res.redirect(`/listings/${id}`);
    }

    next(); 
  }
  module.exports.isreviewOwner = async (req, res, next) => {
    const { listingId } = req.query;
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);

    if (!review) {
      req.flash("error", "Review not found");
      return res.redirect(`/listings/${listingId}`);
    }

    if (!review.author.equals(req.user._id)) {
      req.flash("error", "You don't have permission to do that");
      return res.redirect(`/listings/${listingId}`);
    }

    next();
  }