angular.module('helloMEAN', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
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

  function viewMeController($scope) {
    $scope.data = 'hey';
  }
  function viewYouController($scope) {
    $scope.data = 'ho';
  }

/*
you can still use {{ }} in the majority of your templates. For the data binding you do in your index.html page, however, use ng-bind instead. That way, your users will see nothing until the data has loaded.
*/

/* each controller defines a namespace ? */
