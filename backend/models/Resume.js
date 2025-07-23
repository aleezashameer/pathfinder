const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  experiences: [String],
  skills: [String],
  education: [String],
  internships: [String],
  extracurriculars: [String],
});

module.exports = mongoose.model('Resume', resumeSchema); 