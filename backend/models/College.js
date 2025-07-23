const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  name: String,
  majors: [String],
  location: String,
  website: String,
});

module.exports = mongoose.model('College', collegeSchema); 