require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const Habit = require('./models/habit');

mongoose.connect(process.env.DB_URL);

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/api/habit', function(req, res) {
  Habit.find({}, function(err, habits) {
    if (err) return console.error(err);
    res.json(habits);
  });
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
});

const port = process.env.PORT || 3001;
app.listen(port);