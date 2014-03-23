var Slide = require('../models/Slide');

exports.get = function(req, res) {
  Slide.findOne({id: req.params.id}, function(err, slide) {
    if(slide === null) {
      res.status(404).send('Not found');
    } else {
      console.log('Found slide:');
      console.log(slide);
      res.send(slide);
    }
  });
};

exports.all = function(req, res) {
  Slide.find(function (err, slides) {
    console.log('Found slides:');
    console.log(slides);
    res.send(slides);
  });
};

exports.save = function(req, res) {
  var data = req.body;
  delete data['_id'];
  Slide.findOneAndUpdate({id: req.params.id}, data, {upsert: true},
    function(err, slide) {
      if(err) {
        res.status(400).send(err);
      } else {
        res.send(slide);
      }
    }
  )
};