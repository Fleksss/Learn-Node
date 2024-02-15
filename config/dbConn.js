const mongoose = require("mongoose")
const connectDB = async() => {
  try {
    await mongoose.connect(process.env.DATABASE_URI)
  } catch (err) {
    console.log(process.env.DATABASE_URI)
    console.error(err)
  }
}

module.exports = connectDB