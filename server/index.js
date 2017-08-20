require('dotenv').config()

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(process.env.DB_URL);

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/api/habit', function(req, res) {
  res.json(
    {
      "1": {
        "id": "1",
        "name": "Run",
        "datapoints": [
          {
            "id": "1",
            "date": "2017-08-07",
            "value": 1
          },
          {
            "id": "2",
            "date": "2017-08-08",
            "value": 1
          },
          {
            "id": "3",
            "date": "2017-08-09",
            "value": 1
          }
        ]
      },
      "2": {
        "id": "2",
        "name": "Exercise",
        "datapoints": [
          {
            "id": "1",
            "date": "2017-08-08",
            "value": 1
          },
          {
            "id": "2",
            "date": "2017-08-09",
            "value": 1
          },
          {
            "id": "3",
            "date": "2017-08-10",
            "value": 1
          }
        ]
      },
      "3": {
        "id": "3",
        "name": "Read",
        "datapoints": [
          {
            "id": "1",
            "date": "2017-08-09",
            "value": 1
          },
          {
            "id": "2",
            "date": "2017-08-10",
            "value": 1
          },
          {
            "id": "3",
            "date": "2017-08-11",
            "value": 1
          }
        ]
      }
    }
  );
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
});

const port = process.env.PORT || 3001;
app.listen(port);