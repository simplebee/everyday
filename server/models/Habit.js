const mongoose = require('mongoose');
const { Schema } = mongoose;

const habitSchema = new Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    goalValue: { type: Number, required: true, min: 0 },
    frequency: {
      type: String,
      required: true,
      enum: ['daily', 'weekly', 'monthly']
    },
    datapoints: [{ type: Schema.Types.ObjectId, ref: 'Datapoint' }]
  },
  { timestamps: true }
);

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
