require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Habit = require('./models/habit');

// Database config 
mongoose.connect(process.env.DB_URL);

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Habit index
app.get('/api/habit', function(req, res) {
  Habit.find({}, function(err, habits) {
    if (err) return console.error(err);
    res.json(habits);
  });
});

// Habit create
app.post('/api/habit', function(req, res) {
  Habit.create(req.body)
    .then((habit) => res.json(habit))
    .catch((err) => console.log(err));
});

// Habit show
app.get('/api/habit/:habitId', function(req, res) {
  const habitId = req.params.habitId;
  Habit.findById(habitId)
    .then(habit => res.json(habit))
    .catch((err) => console.error(err));
});

// Always redirect to index.html, react router renders on client side 
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
});

const port = process.env.PORT || 3001;
app.listen(port);