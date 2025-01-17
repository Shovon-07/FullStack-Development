const mongoose = require("mongoose");
// const URI = `mongodb://127.0.0.1:27017/db_connection`;
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected");
  } catch (err) {
    console.error(err);
    process.exit(0);
  }
};
module.exports = connectDb;
