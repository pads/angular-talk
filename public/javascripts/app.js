var mainModule = angular.module('mainApp', [
  'ngSanitize', 'ngRoute', 'slideshow', 'utils'
]);
var slideshowModule = angular.module('slideshow', ['ngResource']);
var utilsModule = angular.module('utils', []);

mainModule.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/slide.html',
      controller: 'slideshowController',
    })
    .when('/slide/:slideId', {
      templateUrl: '/templates/slide.html',
      controller: 'slideshowController'
    })
    .when('/edit/:slideId', {
      templateUrl: '/templates/edit.html',
      controller: 'editController'
    });
  $locationProvider.html5Mode(true);
});

mainModule.controller('applicationController', ['$scope', function ($scope) {
  $scope.emitKeyEvent = function(keyName) {
    $scope.$broadcast(keyName);
  }
}]);

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

slideshowModule.controller('editController', ['$scope', '$routeParams', 'Slide',
  function ($scope, $routeParams, Slide) {
    $scope.currentSlide = Slide.get({slideId: $routeParams.slideId});

    $scope.updateSlide = function (slide) {
      slide.$save();
    };
  }
]);

slideshowModule.factory('Slide', ['$resource', function ($resource) {
  return $resource('/api/slides/:slideId',
    {
      slideId: '@id',
      title: '@title',
      content: '@content',
      image: '@image'
    },
    {
      get: {
        method: 'GET',
        cache: true
      }
    }
    );
}]);

utilsModule.directive('arrowKey', function () {
  return function(scope, element, attributes) {
    element.bind('keypress keydown', function(event) {
      if(event.keyCode === 37) {
        scope.$apply(function() {
          scope.$eval(attributes.left);
        });
      } else if (event.keyCode === 39) {
        scope.$apply(function() {
          scope.$eval(attributes.right);
        });
      }
    });
  };
});