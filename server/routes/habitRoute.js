const express = require('express');
const router = express.Router({ mergeParams: true });
const habitController = require('../controllers/habitController');

router
  .route('/')
  .get(habitController.index)
  .post(habitController.create);

router
  .route('/:habitId')
  .get(habitController.show)
  .put(habitController.update)
  .delete(habitController.destroy);

module.exports = router;
