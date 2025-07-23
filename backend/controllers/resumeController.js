// Handles resume builder logic
exports.getSuggestions = (req, res) => {
  // TODO: Use AI to suggest internships, extracurriculars, classes
  res.json({ suggestions: [] });
};

exports.saveResume = (req, res) => {
  // TODO: Save resume data
  res.status(201).json({ message: 'Resume saved' });
}; 