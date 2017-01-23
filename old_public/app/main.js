angular.module('dmmm', ['ngRoute', 'dmmm.player'])
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
	.controller('MainCtrl', function($scope){

	})
	.controller('PlaylistCtrl', function($scope){

		$scope.play = function(){
			$scope.$broadcast('play');
		};
	});



