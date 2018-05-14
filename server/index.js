require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

// Database config
mongoose.connect(process.env.DB_URL);
// Use native promise library
mongoose.Promise = Promise;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);

const port = process.env.PORT || 3001;
app.listen(port);
