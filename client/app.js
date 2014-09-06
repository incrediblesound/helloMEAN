angular.module('helloMEAN', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {                    // where does .when come from?
      templateUrl: './viewMe.html',
      controller: viewMeController
    })
    .when('/viewMe', {
      templateUrl: './viewMe.html',
      controller: viewMeController
    })
    .when('/viewYou', {
      templateUrl: './viewYou.html',
      controller: viewYouController
    })
  })

  function viewMeController($scope, $http) {
    $http.get('/getusers')
      .then(function(response) {
        $scope.users = response.data;
      });

    $scope.display = function(name) {
      $http.get('/getuser/' + name)
        .then (function(response) {
          console.log(response.data);
        });
    };
  }
  function viewYouController($scope, $http) {
    $scope.data = 'ho';
  }

/*
you can still use {{ }} in the majority of your templates. For the data binding you do in your index.html page, however, use ng-bind instead. That way, your users will see nothing until the data has loaded.

each controller defines a namespace ? 








*/
