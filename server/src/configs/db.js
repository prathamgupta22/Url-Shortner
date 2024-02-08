const mongoose = require("mongoose");
require("dotenv").config();

// const DB_URL = 'mongodb://localhost:27017/urlshortener';

const connect = () => {
  return mongoose.connect(process.env.DB_URL, function (err, db) {
    if (!err) {
      console.log("You are connected!");
    }
  });
};

module.exports = connect;
