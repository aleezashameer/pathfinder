const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

router.get('/suggestions', resumeController.getSuggestions);
router.post('/save', resumeController.saveResume);

module.exports = router; 