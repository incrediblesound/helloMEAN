angular.module('helloMEAN')
  .factory('resourceFactory', function ($http){
    var services = {
      get: get,
      remove: remove,
      update: update,
      setCurrent: setCurrent,
      getCurrent: getCurrent,
      save: save
    };
    return services;

    var currentData = {};

    function getCurrent(){
      return currentData;
    }

    function setCurrent(data){
      return currentData = data;
    }

    function get(){
      return $http.get('/getusers');
    }

    function save(user){
      return $http.post('/user', user);
    }

    function update(user){
      services.current = user
    }

    function remove(user){
      $http.get('/delete/'+user.name);
    }

  })
