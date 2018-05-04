const mongoose = require('mongoose');
const { Schema } = mongoose;

const habitSchema = new Schema({
  name: String,
  startDate: String,
  goalValue: Number,
  frequency: String,
  datapoints: [{ type: Schema.Types.ObjectId, ref: 'Datapoint' }]
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
