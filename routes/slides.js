var Slide = require('../models/Slide');

exports.slide = function(req, res) {
  Slide.findOne({id: req.params.id}, function(err, slide) {
    console.log('Found slide:');
    console.log(slide);
    res.send(slide);
  });
};

exports.slides = function(req, res) {
  Slide.find(function (err, slides) {
    console.log('Found slides:');
    console.log(slides);
    res.send(slides);
  });
};