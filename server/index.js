require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DB_URL);

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/api/habit', function(req, res) {
  res.json(
    [
      {
        "id": "1",
        "name": "Run",
        "datapoints": [
          {
            "id": "1",
            "date": "2017-08-21",
            "value": 1
          },
          {
            "id": "2",
            "date": "2017-08-22",
            "value": 1
          },
          {
            "id": "3",
            "date": "2017-08-23",
            "value": 1
          }
        ]
      },
      {
        "id": "2",
        "name": "Exercise",
        "datapoints": [
          {
            "id": "1",
            "date": "2017-08-21",
            "value": 1
          },
          {
            "id": "2",
            "date": "2017-08-22",
            "value": 1
          },
          {
            "id": "3",
            "date": "2017-08-23",
            "value": 1
          }
        ]
      },
      {
        "id": "3",
        "name": "Read",
        "datapoints": [
          {
            "id": "1",
            "date": "2017-08-21",
            "value": 1
          },
          {
            "id": "2",
            "date": "2017-08-22",
            "value": 1
          },
          {
            "id": "3",
            "date": "2017-08-23",
            "value": 1
          }
        ]
      }
    ]
  );
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
});

const port = process.env.PORT || 3001;
app.listen(port);