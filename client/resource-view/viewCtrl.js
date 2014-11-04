angular.module('helloMEAN')
  .controller('viewCtrl', function userController($scope, $http, resourceFactory) {
    $scope.user = {};
    resourceFactory.get()
      .then(function(response) {
        $scope.users = response.data;
    });
    $scope.update = function(user){
      resourceFactory.update(user);
    }
    $scope.delete = function(user){
      resourceFactory.remove(user);
    }
  })
