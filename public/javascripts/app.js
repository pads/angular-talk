var mainModule = angular.module('mainApp', ['ngSanitize', 'slideshow']);
var slideshowModule = angular.module('slideshow', ['ngResource']);

slideshowModule.controller('slideshowController', ['$scope', 'Slide',
  function ($scope, Slide) {

    $scope.currentSlide = Slide.get({slideId: 1});
    $scope.allSlides = Slide.query();
    $scope.slideIndex = 0;

    $scope.previousSlide = function () {
      $scope.slideIndex--;
      $scope.currentSlide = Slide.get({slideId: $scope.slideIndex + 1});
    };

    $scope.nextSlide = function () {
      $scope.slideIndex++;
      $scope.currentSlide = Slide.get({slideId: $scope.slideIndex + 1});
    };
  }
]);

slideshowModule.factory('Slide', ['$resource', function ($resource) {
  return $resource('/api/slides/:slideId');
}]);