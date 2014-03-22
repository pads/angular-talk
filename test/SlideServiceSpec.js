describe('Slide Service', function() {

  var slideResource;
  var mockHttpBackend;

  beforeEach(function() {
    module('slideshow');
    inject(function(Slide, _$httpBackend_) {
      slideResource = Slide;
      mockHttpBackend = _$httpBackend_;
    });
  });

  it('should fetch a slide using the correct URI', function() {
    mockHttpBackend.expectGET('/api/slides/1').respond(200);

    slideResource.get({slideId: 1});

    mockHttpBackend.flush();
  });

  it('should query all slides using the correct URI', function() {
    mockHttpBackend.expectGET('/api/slides').respond(200);

    slideResource.query();

    mockHttpBackend.flush();
  });

});