require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

const initializeDatabase = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((error) => {
      console.log("Error connecting to Database :" + error);
    });
};

module.exports = { initializeDatabase };
