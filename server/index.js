const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/api/habit', function(req, res) {
  res.json(
    {
      "1": {
        "id": "1",
        "name": "Run"
      },
      "2": {
        "id": "2",
        "name": "Exercise"
      },
      "3": {
        "id": "3",
        "name": "Read"
      }
    }
  );
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
});

const port = process.env.PORT || 3001;
app.listen(port);