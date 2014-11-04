angular.module('helloMEAN')
.directive('uiForm', function() {
  return {
    restrict: 'E',
    templateUrl: '/form-directive/form.html'
  }
});
