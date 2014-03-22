describe('Slideshow Controller', function() {

  var scope;
  var controller;
  var slideSpy;
  var slides = [
    {
      id: 1,
      title: 'Foo',
      contents: 'Bar'
    },
    {
      id: 2,
      title: 'Bar',
      contents: 'Foo'
    }
  ];

  beforeEach(function() {
    module('slideshow');
    inject(function($rootScope, $controller, Slide) {
      scope = $rootScope.$new();

      slideSpy = Slide;
      spyOn(slideSpy, 'get').andCallFake(function (param) {
        return slides[param.slideId - 1];
      });
      spyOn(slideSpy, 'query').andReturn(slides);

      controller = $controller('slideshowController', {
        $scope: scope,
        Slide: slideSpy
      });
    });
  });

  it('should fetch the first slide on initialisation', function() {
    expect(scope.currentSlide).toEqual(slides[0]);
  });

  it('should query the list of slides to get the length', function() {
    expect(scope.allSlides.length).toEqual(2);
  });

  it('should be able to fetch the next slide', function() {
   scope.nextSlide();

    expect(scope.currentSlide).toEqual(slides[1]);
  });

  it('should be able to fetch the previous slide', function() {
    scope.nextSlide();
    scope.previousSlide();

    expect(scope.currentSlide).toEqual(slides[0]);
  });
});