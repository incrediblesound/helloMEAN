angular.module('helloMEAN')
  .factory('resourceFactory', function ($http){
    var services = {
      get: get,
      remove: remove,
      update: update,
      current: current
    };
    return services;

    var current = {
      name: '',
      age: '',
      description: '',
      location: '',
      updated: ''
    };

    function current(){
      return currentData;
    }

    function get(){
      return $http.get('/getusers');
    }

    function update(user){
      current = user
    }

    function remove(user){
      $http.get('/delete/'+user.name);
    }

  })
