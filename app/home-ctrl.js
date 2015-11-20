
'use strict';
angular.module('footable').controller('HomeCtrl', ['$scope',function($scope) {

   var firstName = ['Cedric', 'Justin', 'Nicole', 'Tasha', 'Matt', 'Maria', 'Samson', 'Selena'];
   var lastName = ['Smith','Rodriguez', 'Jones', 'Johnson', 'Patterson'];
   var state = ['Louisiana', 'California', 'District of Columbia', 'Hawaii', 'Florida', 'New York'];
   var age = [19,34,23,18,43,38,29,51,22,46];
   var favSport = ['Basketball', 'Football', 'Soccer', 'Baseball', 'Track & Field', 'Lacrosse'];
   var favFood = ['Gumbo', 'Jambalaya', 'Crawfish Etouffee', 'Spaghetti', 'Cheeseburger', 'Lasagna'];
   var job = ['Engineer', 'Lawyer', 'Doctor', 'Architect', 'Accountant', 'HR Manager', 'Electrician', 'Coach'];
   $scope.allData = [];
   $scope.footable = {};

   $scope.generateData = function(){

   	for(var i = 0; i < 300; i++){
   		var d = {};
   		d.firstname = firstName[Math.floor(firstName.length * Math.random())];
   		d.lastname = lastName[Math.floor(lastName.length * Math.random())];
   		d.state = state[Math.floor(state.length * Math.random())];
   		d.age = age[Math.floor(age.length * Math.random())];
   		d.favsport = favSport[Math.floor(favSport.length * Math.random())];
   		d.favfood = favFood[Math.floor(favFood.length * Math.random())];
   		d.job = job[Math.floor(job.length * Math.random())];

   		$scope.allData.push(d);
   	}

   	console.log($scope.allData);

   };

   $scope.regenerate = function(){

   };

   $scope.viewRow = function(d){

   };

   $scope.generateData();



}]);

angular.module('footable').directive('footable',function($compile, $parse, $timeout){
    return {
      link: function(scope,element, attrs){
        
        console.log(scope);
        console.log(element);
        console.log(attrs);
        console.log($timeout);
        var paging = 50;

        scope.showData = scope.allData.slice(0, Math.min(paging, scope.allData.length));

         $('table').footable({
      "paging": {"enabled":true, "size": paging},
      "filtering": {"enabled":true},
      "sorting": {"enabled":true},
      "rows": scope.showData,
      "on": {
        "postdraw.ft.table": function(a, b, c){
          var users = b.rows.array;
          var u = [];
          for(var i = 0; i < users.length; i++)
            u.push(users[i].value);
          
        scope.footable = b;
        
        
       },
       "after.ft.filtering": function(a, b, c){
          var users = b.rows.array;
          var u = [];
          for(var i = 0; i < users.length; i++)
            u.push(users[i].value);
         

        $timeout(function(){ scope.showData = u;});
       
        scope.footable = b;
       },"after.ft.sorting": function(a, b, c){
          var users = b.rows.array;
          var u = [];
          for(var i = 0; i < users.length; i++)
            u.push(users[i].value);
        

        $timeout(function(){ scope.showData = u;});
       
        scope.footable = b;
       },"after.ft.paging": function(a, b, c){
       
          var users = b.rows.array;
          var u = [];
          for(var i = 0; i < users.length; i++)
            u.push(users[i].value);
          

        $timeout(function(){ scope.showData = u;});
       
        scope.footable = b;
       }
      }
    }); 


      },
      restrict: 'C'

    }

  });

