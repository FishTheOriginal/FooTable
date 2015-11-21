
'use strict';
angular.module('footable').controller('TableCtrl', ['$scope', 'dataFactory',function($scope, dataFactory) {

   $scope.allData = [];
   $scope.footable = {};
   $scope.loading = true;

   $scope.generateData = function(){
  

   	$scope.allData = dataFactory.generateData();

   };

   $scope.regenerate = function(){

   };

   $scope.outputRow = function(d){
   	console.log(d);

   };

   $scope.generateData();



}]);

