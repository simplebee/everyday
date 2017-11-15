const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: String,
  startDate: String,
  goalValue: Number,
  frequency: String,
  datapoints: [
    {
      date: String,
      value: Number
    }
  ]
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;