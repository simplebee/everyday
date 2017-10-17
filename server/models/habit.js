const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  name: String,
  startDate: String,
  endDate: String,
  timesPerDay: Number,
  frequency: String,
  timesPerWeek: Number,
  datapoints: [
    {
      date: String,
      value: Number
    }
  ]
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;