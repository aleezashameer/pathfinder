const express = require('express');
const cors = require('cors');
const applicationRoutes = require('./routes/applicationRoutes');
const guidanceRoutes = require('./routes/guidanceRoutes');
const resumeRoutes = require('./routes/resumeRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/applications', applicationRoutes);
app.use('/api/guidance', guidanceRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/users', userRoutes);

module.exports = app; 