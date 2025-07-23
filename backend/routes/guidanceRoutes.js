const express = require('express');
const router = express.Router();
const guidanceController = require('../controllers/guidanceController');

router.get('/', guidanceController.getGuidance);

module.exports = router; 