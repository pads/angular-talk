var slides = [
  {
    id: 1,
    title: 'Foo',
    contents: '<b>Bar</b>'
  },
  {
    id: 2,
    title: 'Bar',
    contents: '<b>Foo</b>'
  },
  {
    id: 3,
    title: 'Baz',
    contents: '<b>Lurman</b>'
  }
];

exports.slide = function(req, res) {
  res.send(slides[req.params.id - 1]);
};

exports.slides = function(req, res) {

  res.send(slides);
};