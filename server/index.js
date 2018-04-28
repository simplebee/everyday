require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Habit = require('./models/Habit');
const Datapoint = require('./models/Datapoint');

// Database config 
mongoose.connect(process.env.DB_URL);
// Use native promise library
mongoose.Promise = Promise;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Habit index
app.get('/api/habit', function(req, res) {
  Habit.find({}).populate('datapoints').exec()
    .then((habits) => res.json(habits))
    .catch((err) => console.error(err));
});

// Habit create
app.post('/api/habit', function(req, res) {
  Habit.create(req.body)
    .then((habit) => res.json(habit))
    .catch((err) => console.error(err));
});

// Habit show
app.get('/api/habit/:habitId', function(req, res) {
  const habitId = req.params.habitId;
  Habit.findById(habitId).populate('datapoints').exec()
    .then((habit) => res.json(habit))
    .catch((err) => console.error(err));
});

// Habit update
app.put('/api/habit/:habitId', function(req, res) {
  const { habitId } = req.params;
  Habit.findByIdAndUpdate(habitId, req.body, { new: true }).exec()
    .then((habit) => res.json(habit))
    .catch((err) => console.error(err));
});

// Habit destroy
app.delete('/api/habit/:habitId', function(req, res) {
  const { habitId } = req.params;
  Habit.findByIdAndRemove(habitId).exec()
    .then(habit => {
      const promises = habit.datapoints.map(datapointId => {
        return Datapoint.findByIdAndRemove(datapointId).exec();
      });
      return Promise.all(promises)
        .then(() => res.json(habit));
    })
    .catch((err) => console.error(err));
});

// Habit create
app.post('/api/habit/:habitId/datapoint', function(req, res) {
  const { habitId } = req.params;
  const { date } = req.body;
  const { value } = req.body;

  Habit.findById(habitId).exec()
    .then(habit => {
      return Datapoint
        .find()
        .where('_id')
        .in(habit.datapoints)
        .where('date').equals(date)
        .exec(addOrUpdateDatapoint)
      })
  
  function addOrUpdateDatapoint(err, data) {
    if (err) console.error(err);
    if (Array.isArray(data) && !data.length) {
      Datapoint.create(req.body, function(err, datapointData) {
        if (err) console.error(err);
        Habit.findByIdAndUpdate(
          habitId,
          {$push: {"datapoints": datapointData._id}},
          { new: true },
          function (err, habitData) {
            if (err) console.error(err);
            res.send(datapointData);
          });
        });
    } else {
      const newValue = data[0].value + value;
      Datapoint.findByIdAndUpdate(
        data[0]._id,
        { $set: { value: newValue } },
        { new: true },
        function (err, datapointData) {
          if (err) console.error(err);
          res.send(datapointData);
        });
    }
  }
});

// Always redirect to index.html, react router renders on client side 
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
});

const port = process.env.PORT || 3001;
app.listen(port);