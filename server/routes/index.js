const express = require('express');
const router = express.Router();
const path = require('path');
const habitRoute = require('./habitRoute');
const datapointRoute = require('./datapointRoute');

router.use('/api/habit/', habitRoute);
router.use('/api/habit/:habitId/datapoint', datapointRoute);

// Always redirect to index.html, react router renders on client side
router.route('*').get(function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

module.exports = router;
