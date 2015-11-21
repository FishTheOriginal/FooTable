'use strict';

angular.module('footable')
.directive('footablewrap',function(){
		return {
	    templateUrl:'app/footable-wrap.html',
	    restrict: 'E',
	    replace: true,
	    controller: function($scope, $rootScope, dataFactory){

	    	$scope.allData = dataFactory.generateData();
			
        }
	}
});

angular.module('footable').directive('footable',function($compile, $parse, $timeout){
    return {
      link: function(scope,element, attrs){
        
        var paging = 25;

        scope.showData = scope.allData.slice(0, Math.min(paging, scope.allData.length));

       
         $('table').footable({
      "paging": {"enabled":true, "size": paging},
      "filtering": {"enabled":true},
      "sorting": {"enabled":true},
      "rows": scope.allData,
      "on": {
        "postdraw.ft.table": function(a, b, c){
          var users = b.rows.array;
          var u = [];
          for(var i = 0; i < users.length; i++)
            u.push(users[i].value);
          
        scope.footable = b;
        scope.loading = false;        
        
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
