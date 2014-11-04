angular.module('helloMEAN', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {                    
      templateUrl: './resource-view/view.html',
      controller: "viewCtrl"
    })
  })

  // function userController($scope, $http) {
  //   $scope.user = {};
  //   $http.get('/getusers')
  //     .then(function(response) {
  //       $scope.users = response.data;
  //     });
  //   $scope.update = function(user){
  //     console.log(user);
  //     $scope.user.name = user.name;
  //   }
  //   $scope.delete = function(user){
  //     $http.get('/delete/'+user.name);
  //   }
  // }

// todo move $http.get(users) into a factory
// refresh page on delete


/*
you can still use {{ }} in the majority of your templates. For the data binding you do in your index.html page, however, use ng-bind instead. That way, your users will see nothing until the data has loaded.

each controller defines a namespace ? 








*/
