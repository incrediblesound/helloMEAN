angular.module('helloMEAN')
  .controller('ui-form', function ($scope, resourceFactory){
    $scope.user = resourceFactory;
  })
