const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataPointSchema = new Schema(
  {
    date: { type: Date, default: Date.now },
    value: { type: Number, required: true, min: 0 }
  },
  { timestamps: true }
);

const Datapoint = mongoose.model('Datapoint', dataPointSchema);

module.exports = Datapoint;
