const Habit = require('../models/Habit');
const Datapoint = require('../models/Datapoint');

exports.index = function(req, res) {
  res.send('index');
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
