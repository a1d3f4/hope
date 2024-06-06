const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapasync");
const Listing = require("../models/listing");


router.get("/", wrapAsync(async (req, res) => {
    console.log("We have reached the filter route");
    const { category } = req.query;

    let filter = {};
    if (category) {
        // Use MongoDB's $regex operator to perform a case-insensitive substring search
        filter.description = { $regex: category, $options: 'i' };
        console.log(filter.description);
    }

    try {
        // Find listings that match the filter
        const allListings = await Listing.find(filter);
        if (allListings.length === 0) {
            console.log("No listings found");
        } else {
            console.log("yooooo found you")
            console.log(`${allListings.length} listings found`);
        }
        // console.log(allListings)
        res.render("listings/index.ejs", { allListings });
        // res.send("listings have been filtered")
    } catch (error) {
        console.error("Error fetching listings:", error);
        res.status(500).send("Internal Server Error");
    }
}));

module.exports = router;
