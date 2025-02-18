const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    png: String,
    webp: String,
  },
  description: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  travel: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Destination', destinationSchema);
