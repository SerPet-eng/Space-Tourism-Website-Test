const mongoose = require('mongoose');

const crewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  images: {
    png: String,
    webp: String,
  },
  role: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Crew', crewSchema);
