var mainModule = angular.module('mainApp');

mainModule.controller('applicationController', ['$scope', function ($scope) {
  $scope.emitKeyEvent = function(keyName) {
    $scope.$broadcast(keyName);
  }
}]);