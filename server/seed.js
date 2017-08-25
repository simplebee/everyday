require('dotenv').config()
const mongoose = require('mongoose');
const Habit = require('./models/habit');

mongoose.connect(process.env.DB_URL);

const habitData = [{
  "name": "Reading",
  "datapoints": [
    {
      "date": "2017-08-21",
      "value": 1
    },
    {
      "date": "2017-08-22",
      "value": 1
    },
    {
      "date": "2017-08-23",
      "value": 1
    }
  ]
}];

Habit.create(habitData, function(err, data) {
  if (err) console.error(err);
  console.error(data);
});