var mainModule = angular.module('mainApp', [
  'ngSanitize', 'ngRoute', 'slideshow', 'utils'
]);
angular.module('slideshow', ['ngResource']);

mainModule.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/slide.html',
      controller: 'slideshowController'
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
