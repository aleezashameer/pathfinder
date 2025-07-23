const express = require('express');
const router = express.Router();

// TODO: Add user registration and login endpoints
router.post('/register', (req, res) => {
  res.status(201).json({ message: 'User registered (stub)' });
});

router.post('/login', (req, res) => {
  res.json({ token: 'fake-jwt-token' });
});

module.exports = router; 