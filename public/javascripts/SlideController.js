var slideshowModule = angular.module('slideshow');

slideshowModule.controller('slideshowController', ['$location', '$scope', '$routeParams', 'Slide',
  function ($location, $scope, $routeParams, Slide) {
    var slideId = parseInt($routeParams.slideId ? $routeParams.slideId : 1, 10);
    $scope.currentSlide = Slide.get({slideId: slideId});
    $scope.allSlides = Slide.query();

    $scope.$on('right-key', function() {
      $scope.nextSlide();
    });

    $scope.$on('left-key', function() {
      $scope.previousSlide();
    });

    $scope.previousSlide = function () {
      slideId--;
      $scope.currentSlide = Slide.get({slideId: slideId});

      $location.path('/slide/' + slideId);
    };

    $scope.nextSlide = function () {
      slideId++;
      $scope.currentSlide = Slide.get({slideId: slideId});

      $location.path('/slide/' + slideId);
    };
  }
]);