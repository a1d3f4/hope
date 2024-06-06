const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const maptoken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: maptoken });

module.exports.index=async(req,res)=>{
    const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });

}

module.exports.rendernewform=(req, res) => {
    res.render("listings/new.ejs");
  }

module.exports.showlisting=async (req, res) => {
    const listing = await Listing.findById(req.params.id).populate({path:'reviews',populate:{path:"author"}}).populate('owner');
    if (!listing) {
      throw new ExpressError("Listing not found", 404);
    }
    res.render("listings/show.ejs", { listing });
  }


module.exports.filterlisting=async (req, res) => {
  const { category } = req.query;

  let filter = {};
  if (category) {
    filter.description = new RegExp(category, 'i');
  }

  const listings = await Listing.find(filter);
  res.render("listings/index", { listings });
}


module.exports.savenewlisting=async (req, res) => {
  console.log(maptoken)
  let response= await geocodingClient.forwardGeocode({
    query: req.body.listing.location,
    limit: 1
  })
    .send();
   let url=req.file.path
   let filename=req.file.filename
  //  console.log(url)
  //  console.log(filename)
    const newListing = new Listing(req.body.listing);
    newListing.owner=req.user._id;
    newListing.image={url,filename}
    newListing.geometry=response.body.features[0].geometry;
    let savedlisting=await newListing.save();
    console.log(savedlisting)
    req.flash("success",'New listing created!');
    res.redirect("/listings");
  }

  module.exports.editlisting = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      throw new ExpressError("Listing not found", 404);
    }
    let originalurl = listing.image.url;
    originalurl = originalurl.replace("/upload", "/upload/w_250"); // Assign the result back to originalurl
    res.render("listings/edit.ejs", { listing, originalurl });
  }
  
module.exports.saveeditedlisting=async (req, res) => {
    const { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing, { new: true });
    if(typeof req.file!=='undefined'){

      let url=req.file.path
      let filename=req.file.filename
      updatedListing.image={url,filename}
      await updatedListing.save()
    }
    req.flash("success",'One listing updated!');
    res.redirect(`/listings/${updatedListing._id}`);
  }

module.exports.deletelisting=async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success",'Listing deleted!');
    res.redirect("/listings");
  }