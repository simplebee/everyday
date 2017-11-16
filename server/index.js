require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Habit = require('./models/habit');

// Database config 
mongoose.connect(process.env.DB_URL);
// Use native promise library
mongoose.Promise = Promise;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Habit index
app.get('/api/habit', function(req, res) {
  Habit.find({}).exec()
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
  Habit.findById(habitId).exec()
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

// Always redirect to index.html, react router renders on client side 
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
});

const port = process.env.PORT || 3001;
app.listen(port);