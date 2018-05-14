const express = require('express');
const router = express.Router({ mergeParams: true });
const datapointController = require('../controllers/datapointController');

router
  .route('/')
  .get(datapointController.index)
  .post(datapointController.create);

// show
// update
// destroy

module.exports = router;
