var slides = [
  {
    id: 1,
    title: 'Foo',
    contents: '<h2>Subtitle</h2><ul><li>List Item</li><li>List Item</li></ul><pre>Some code</pre>',
    image: 'http://placekitten.com/200/200'
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