var slideshowModule = angular.module('slideshow');

slideshowModule.controller('editController', ['$scope', '$routeParams', 'Slide',
  function ($scope, $routeParams, Slide) {
    $scope.currentSlide = Slide.get({slideId: $routeParams.slideId});

    $scope.updateSlide = function (slide) {
      slide.$save();
    };
  }
]);
