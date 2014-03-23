var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var slideSchema = new Schema({
  id: {type: Number, unique: true},
  title: String,
  content: String,
  image: String
});

module.exports = mongoose.model('Slide', slideSchema);