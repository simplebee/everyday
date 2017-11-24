require('dotenv').config();
const mongoose = require('mongoose');
const moment = require('moment');
const Habit = require('./models/habit');

mongoose.connect(process.env.DB_URL);

const habitJson = {
  "name": "Run",
  "startDate": moment().isoWeekday(1).format("YYYY-MM-DD"),
  "goalValue": 1,
  "frequency": "daily",
  "datapoints": [
    {
      "date": moment().isoWeekday(1).format("YYYY-MM-DD"),
      "value": 1
    },
    {
      "date": moment().isoWeekday(2).format("YYYY-MM-DD"),
      "value": 1
    },
    {
      "date": moment().isoWeekday(3).format("YYYY-MM-DD"),
      "value": 1
    }
  ]
};

function createJson(obj, n) {
  const arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(obj);
  }
  return arr;
}

function seed() {
  Habit.remove()
    .then(() => {
      Habit.create(createJson(habitJson, 3))
      console.log('Created habits')
    })
    .catch((err) => console.error(err));
}

seed();