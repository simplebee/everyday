const mongoose = require('mongoose');
const { Schema } = mongoose;

const habitSchema = new Schema(
  {
    name: String,
    startDate: Date,
    goalValue: Number,
    frequency: String,
    datapoints: [{ type: Schema.Types.ObjectId, ref: 'Datapoint' }]
  },
  { timestamps: true }
);

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
