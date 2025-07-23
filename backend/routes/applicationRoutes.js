const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.get('/checklist', applicationController.getChecklist);
router.post('/task', applicationController.addTask);
router.post('/upload', applicationController.uploadDocument);

module.exports = router; 