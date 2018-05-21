const express = require('express');
const router = express.Router({ mergeParams: true });
const datapointController = require('../controllers/datapointController');

router
  .route('/')
  .get(datapointController.index)
  .post(datapointController.create);

router
  .route('/:datapointId')
  .get(datapointController.show)
  .put(datapointController.update)
  .delete(datapointController.destroy);

module.exports = router;
