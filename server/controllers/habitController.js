const Habit = require('../models/Habit');
const Datapoint = require('../models/Datapoint');

exports.index = function(req, res) {
  Habit.find({})
    .populate('datapoints')
    .exec()
    .then(habits => res.json({ data: habits }))
    .catch(err => console.error(err));
};

exports.create = function(req, res) {
  Habit.create(req.body)
    .then(habit => res.json({ data: habit }))
    .catch(err => console.error(err));
};

exports.show = function(req, res) {
  const habitId = req.params.habitId;
  Habit.findById(habitId)
    .populate('datapoints')
    .exec()
    .then(habit => res.json({ data: habit }))
    .catch(err => console.error(err));
};

exports.update = function(req, res) {
  const { habitId } = req.params;
  Habit.findByIdAndUpdate(habitId, req.body, { new: true })
    .exec()
    .then(habit => res.json({ data: habit }))
    .catch(err => console.error(err));
};

exports.destroy = function(req, res) {
  const { habitId } = req.params;
  Habit.findByIdAndRemove(habitId)
    .exec()
    .then(habit => {
      const promises = habit.datapoints.map(datapointId => {
        return Datapoint.findByIdAndRemove(datapointId).exec();
      });
      return Promise.all(promises).then(() => res.sendStatus(200));
    })
    .catch(err => console.error(err));
};
