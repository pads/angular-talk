
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'BrumJS Angular Talk' });
};

exports.slide = function(req, res){
  res.render('slide');
};

exports.edit  = function(req, res){
  res.render('edit');
};