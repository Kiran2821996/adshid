const mongoose = require('mongoose');


const ContactusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
});


const Contactus = mongoose.model('Contactus', ContactusSchema);

module.exports = Contactus;
