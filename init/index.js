const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

main()
    .then(() => {
        console.log('MongoDB Connected Successfully');
    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "688fb11860e7ca2be1ef9a14" }))
    await Listing.insertMany(initData.data);
    console.log("Data Was Initialized");
}

initDB();