var mainModule = angular.module('mainApp', ['ngSanitize', 'slideshow', 'utils']);
var slideshowModule = angular.module('slideshow', ['ngResource']);
var utilsModule = angular.module('utils', []);

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
  return $resource('/api/slides/:slideId', {}, {
    get: {
      method: 'GET',
      cache: true
    }
  });
}]);

utilsModule.directive('arrowKey', function () {
  return function(scope, element, attributes) {
    element.bind('keypress keydown', function(event) {
      if(event.keyCode === 37) {
        scope.$apply(function() {
          scope.$eval(attributes.left);
        });
        event.preventDefault();
      } else if (event.keyCode === 39) {
        scope.$apply(function() {
          scope.$eval(attributes.right);
        });
        event.preventDefault();
      }
    });
  };
});