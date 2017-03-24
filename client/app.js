var app = angular.module('app', ['ngRoute'])

app.config(function($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: './partials/login.html'
		})
		.when('/dashboard', {
			templateUrl: './partials/dashboard.html'
		})
		.when('/create', {
			templateUrl: './partials/create.html'
		})
		.when('/survey/:id', {
			templateUrl : './partials/survey.html'
		})
		.when('/logout',{
			templateUrl: './partials/login.html'
		})
		.otherwise({
			redirectTo: ('/login')
		})
})
