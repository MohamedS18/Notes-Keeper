const mongoose = require("mongoose");

async function connectDB(req, res, next) {
  try {
    const uri = process.env.MONGO_URI;
    await mongoose.connect(uri);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
  next();
}

module.exports = { connectDB };
