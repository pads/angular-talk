var utilsModule = angular.module('utils', []);

utilsModule.directive('arrowKey', function () {
  return function(scope, element, attributes) {
    element.bind('keypress keydown', function(event) {
      if(event.keyCode === 37) {
        scope.$eval(attributes.left);
      } else if (event.keyCode === 39) {
        scope.$eval(attributes.right);
      }
    });
  };
});