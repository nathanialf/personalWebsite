var app = angular.module('personal', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(false).hashPrefix('');
	
	$routeProvider.when("/experience",{
		templateUrl: "pages/exp.html",
		controller: "expController"
	}).when("/",{
		templateUrl: "pages/home.html",
		controller: "homeController"
	}).when("/personal",{
		templateUrl: "pages/personal.html",
		controller: "personalController"
	}).otherwise({redirectTo: "/"});
});