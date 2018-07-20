const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataPointSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    value: Number
  },
  { timestamps: true }
);

const Datapoint = mongoose.model('Datapoint', dataPointSchema);

module.exports = Datapoint;
