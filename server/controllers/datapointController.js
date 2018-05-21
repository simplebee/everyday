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
  const { date } = req.body;
  const { value } = req.body;

  Habit.findById(habitId)
    .exec()
    .then(habit => {
      return Datapoint.find()
        .where('_id')
        .in(habit.datapoints)
        .where('date')
        .equals(date)
        .exec(addOrUpdateDatapoint);
    });

  function addOrUpdateDatapoint(err, data) {
    if (err) console.error(err);
    if (Array.isArray(data) && !data.length) {
      Datapoint.create(req.body, function(err, datapointData) {
        if (err) console.error(err);
        Habit.findByIdAndUpdate(
          habitId,
          { $push: { datapoints: datapointData._id } },
          { new: true },
          function(err, habitData) {
            if (err) console.error(err);
            res.send(datapointData);
          }
        );
      });
    } else {
      const newValue = data[0].value + value;
      Datapoint.findByIdAndUpdate(
        data[0]._id,
        { $set: { value: newValue } },
        { new: true },
        function(err, datapointData) {
          if (err) console.error(err);
          res.send(datapointData);
        }
      );
    }
  }
};

exports.show = function(req, res) {
  const { datapointId } = req.params;
  Datapoint.findById(datapointId)
    .exec()
    .then(datapoint => res.json(datapoint))
    .catch(err => console.error(err));
};

exports.update = function(req, res) {
  const { habitId } = req.params;
  const { datapointId } = req.params;
  const { date } = req.body;

  isSameDatapointDate(datapointId, date).then(isSameDate => {
    if (isSameDate) {
      updateDatapoint(datapointId, req.body).then(datapoint =>
        res.json(datapoint)
      );
    } else {
      isUniqueDatapointDate(habitId, date).then(dateIsUnique => {
        if (dateIsUnique) {
          updateDatapoint(datapointId, req.body).then(datapoint =>
            res.json(datapoint)
          );
        } else {
          res.status(400).send({
            error: {
              code: 101,
              message: 'Date already exist'
            }
          });
        }
      });
    }
  });
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

function isSameDatapointDate(datapointId, date) {
  return Datapoint.findById(datapointId)
    .exec()
    .then(datapoint => {
      if (datapoint.date === date) {
        return true;
      } else {
        return false;
      }
    });
}

function isUniqueDatapointDate(habitId, date) {
  return Habit.findById(habitId)
    .exec()
    .then(habit => {
      return Datapoint.find()
        .where('_id')
        .in(habit.datapoints)
        .where('date')
        .equals(date)
        .exec()
        .then(datapoint => {
          if (Array.isArray(datapoint) && !datapoint.length) {
            return true;
          } else {
            return false;
          }
        });
    });
}

function updateDatapoint(datapointId, updateData) {
  return Datapoint.findByIdAndUpdate(
    datapointId,
    { $set: updateData },
    { new: true }
  ).exec();
}
