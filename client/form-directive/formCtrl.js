angular.module('helloMEAN')
  .controller('ui-form', function ($scope, resourceFactory){
    $scope.user = {};
    $scope.save = function(){
    	resourceFactory.setCurrent($scope.user);
    	console.log(resourceFactory.getCurrent($scope.user))
    	resourceFactory.save();
    }
  })
