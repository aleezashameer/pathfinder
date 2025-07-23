const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  college: String,
  checklist: [
    {
      task: String,
      completed: Boolean,
      dueDate: Date,
    },
  ],
  documents: [String],
});

module.exports = mongoose.model('Application', applicationSchema); 