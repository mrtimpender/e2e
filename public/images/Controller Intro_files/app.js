// var app = angular.module("app", []);
// app.controller("InitialController", function($scope){
//   $scope.name = "Severus Snape";
// });
//
// // var app = angular.module("app", []);
// app.controller('ExcercisesController', function($scope){
//   $scope.color = 'blue';
//   $scope.secondsInACentury = (60*60*24*365*100)
//   $scope.rightNow = new Date()
// });


var app = angular.module('app', []);
app.controller('MadlibsController', function($scope){
  $scope.boy = 'asd';
  $scope.adj = 'asd';
  $scope.plural1 = 'asd';
  $scope.plural2 = 'asd';
  $scope.insects = 'asd';
  $scope.plural3 = 'asd';
  $scope.verb = 'asd';
  $scope.test = 'false'
  $scope.populateMadlib = function () {
    $scope.test = true;
  };
  $scope.clearMadlib = function() {
    $scope.boy = '';
    $scope.adj = '';
    $scope.plural1 = '';
    $scope.plural2 = '';
    $scope.insects = '';
    $scope.plural3 = '';
    $scope.verb = '';
    $scope.test = 'false';
  }
});
