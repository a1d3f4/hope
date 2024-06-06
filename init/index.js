const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initData = require("./data");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.once("open", async () => {
  console.log("Connected to MongoDB database");

  // Clear existing data
  await Listing.deleteMany({});

  // Insert sample data
  try {
    initData.data=initData.data.map((obj)=>(
      {...obj,owner:'6659801dbecb6f4750bf2c7f'}
    ))
    const result = await Listing.insertMany(initData.data);
    console.log(`${result.length} documents inserted`);
  } catch (error) {
    console.error("Error inserting data:", error);
  }
});
