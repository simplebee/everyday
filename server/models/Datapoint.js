const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataPointSchema = new Schema({
  date: String,
  value: Number
});

const Datapoint = mongoose.model('Datapoint', dataPointSchema);

module.exports = Datapoint;