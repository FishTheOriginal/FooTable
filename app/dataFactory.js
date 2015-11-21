'use strict';
angular.module('footable').factory('dataFactory',function() {

	var service = {};
	var firstName = ['Cedric', 'Justin', 'Nicole', 'Tasha', 'Matt', 'Maria', 'Samson', 'Selena'];
    var lastName = ['Smith','Rodriguez', 'Jones', 'Johnson', 'Patterson'];
    var state = ['Louisiana', 'California', 'District of Columbia', 'Hawaii', 'Florida', 'New York'];
    var age = [19,34,23,18,43,38,29,51,22,46];
    var favSport = ['Basketball', 'Football', 'Soccer', 'Baseball', 'Track & Field', 'Lacrosse'];
    var favFood = ['Gumbo', 'Jambalaya', 'Crawfish Etouffee', 'Spaghetti', 'Cheeseburger', 'Lasagna'];
    var job = ['Engineer', 'Lawyer', 'Doctor', 'Architect', 'Accountant', 'HR Manager', 'Electrician', 'Coach'];
    var graduationDate = [new Date(2015, 3, 23), new Date(2015, 4, 24), new Date(2015, 9, 2), new Date(2015, 10,19)];
   

	service.generateData = function(){

		var allData = [];
		
		for(var i = 0; i < 10000; i++){
   		var d = {};
   		d.firstname = firstName[Math.floor(firstName.length * Math.random())];
   		d.lastname = lastName[Math.floor(lastName.length * Math.random())];
   		d.state = state[Math.floor(state.length * Math.random())];
   		d.age = age[Math.floor(age.length * Math.random())];
   		d.favsport = favSport[Math.floor(favSport.length * Math.random())];
   		d.favfood = favFood[Math.floor(favFood.length * Math.random())];
   		d.job = job[Math.floor(job.length * Math.random())];
   		d.graduation = graduationDate[Math.floor(graduationDate.length * Math.random())];
   		d.gradTime = d.graduation.getTime();

   		allData.push(d);
   	    }

   	    return allData;


	}

	return service;


});