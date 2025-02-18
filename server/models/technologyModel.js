const mongoose = require('mongoose');

const technologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    portrait: String,
    landscape: String,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Technology', technologySchema);
