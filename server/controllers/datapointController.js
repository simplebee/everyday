const Habit = require('../models/Habit');
const Datapoint = require('../models/Datapoint');

exports.index = function(req, res) {
  const { habitId } = req.params;
  Habit.findById(habitId)
    .populate('datapoints')
    .exec()
    .then(habit => res.json(habit.datapoints))
    .catch(err => console.error(err));
};

exports.create = function(req, res) {
  const { habitId } = req.params;

  Habit.findById(habitId)
    .exec()
    .then(habitDoc => {
      Datapoint.create(req.body).then(datapointDoc => {
        habitDoc.datapoints.push(datapointDoc._id);
        habitDoc.save().then(() => {
          res.json(datapointDoc);
        });
      });
    })
    .catch(err => console.error(err));
};

exports.show = function(req, res) {
  const { datapointId } = req.params;
  Datapoint.findById(datapointId)
    .exec()
    .then(datapoint => res.json(datapoint))
    .catch(err => console.error(err));
};

exports.update = function(req, res) {
  const { datapointId } = req.params;
  Datapoint.findByIdAndUpdate(datapointId, { $set: req.body }, { new: true })
    .exec()
    .then(datapoint => res.json(datapoint))
    .catch(err => console.error(err));
};

exports.destroy = function(req, res) {
  const { datapointId } = req.params;
  const { habitId } = req.params;
  Datapoint.findByIdAndRemove(datapointId)
    .exec()
    .then(datapoint => {
      Habit.findByIdAndUpdate(
        habitId,
        { $pull: { datapoints: datapointId } },
        { new: true }
      )
        .exec()
        .then(() => res.json(datapoint));
    })
    .catch(err => console.error(err));
};
