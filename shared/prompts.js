// Shared AI prompt templates
exports.GUIDANCE_PROMPT = (user) =>
  `Give personalized college and major guidance for a high school student interested in ${user.dreamCareer}.`;

exports.RESUME_SUGGESTIONS_PROMPT = (career) =>
  `Suggest internships, extracurriculars, and classes for a student who wants to become a ${career}.`; 