
var app = angular.module('website', ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
	$locationProvider.html5Mode(false).hashPrefix('');
	
	$routeProvider.when("/",{
		templateUrl: "pages/home.html",
		controller: "homeController"
	}).when("/faves",{
		templateUrl: "pages/faves.html",
		controller: "favesController"
	}).when("/jobs",{
		templateUrl: "pages/jobs.html",
		controller: "jobsController"
	}).when("/personal",{
		templateUrl: "pages/personal.html",
		controller: "personalController"
	}).when("/ideas",{
		templateUrl: "pages/ideas.html",
		controller: "ideasController"
	}).when("/ideas/:ideaId",{
		templateUrl: "pages/ideas.html",
		controller: "ideasController"
	}).otherwise({redirectTo: "/"});
});