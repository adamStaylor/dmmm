angular.module('dmmm', ['ngRoute'])
	.config(function($locationProvider, $routeProvider){

		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: '/app/main.html',
				controller: 'MainCtrl'
			})
			.when('/:playlistId', { 
				templateUrl: '/app/playlist.html',
				controller: 'PlaylistCtrl'
			});
	})
	.controller('MainCtrl', function(){

	})
	.controller('PlaylistCtrl', function(){

	});



