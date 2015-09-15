var app = angular.module('MyApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

   $scope.components = [{
 
      what: 'Angular Material Design',
      about: 'Responsive UI,Shown here common primitive example ',

    }, {

      what: 'AngularJS',
      about: 'Client side Framework',

    }, {
      
      what: 'Bower',
      about: 'keep track of packages',

    }, {
      
      what: 'CSS and Jquery',
      about: 'animations and event-listeners',

    }];

 
}]);









