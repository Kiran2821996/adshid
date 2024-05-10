const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  offerPrice: {
    type: Number,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
    trim: true,
  },
});


const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
