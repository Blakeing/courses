require('dotenv').config();
const mongoose = require('mongoose');
const Lesson = require('./models/Lesson');
const Course = require('./models/Course');

const connectDb = async () => {
  if (mongoose.connection.readyState !== 1) {
    const uri = process.env.MONGO_URI;
    try {
      await mongoose.connect(uri, { useNewUrlParser: true });
      console.log('connected to mongo db');
    } catch(error) {
      console.log(error);
    }
  }
  return { Course, Lesson };
}

module.exports = { connectDb };