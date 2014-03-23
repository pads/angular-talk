var slideshowModule = angular.module('slideshow');

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