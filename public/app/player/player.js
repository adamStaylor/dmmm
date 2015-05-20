angular.module('dmmm.player', [])
	.directive('player', function($q, $timeout){
		return {
			link: function(scope, elem, attrs){

				var isLoaded = $q.defer();
				function youtubeAPIReady(){
					if(YTAPIReady){
						isLoaded.resolve();
					}else{
						$timeout(youtubeAPIReady, 100);
					}
				}
				youtubeAPIReady();

				var player = null;
				function createPlayer(videoId){
					isLoaded.promise.then(function(){
						player = new YT.Player(elem[0].id, {
							videoId: videoId,
							events: {
								'onReady': onPlayerReady,
								'onStateChange': onPlayerStateChange
							}
						});						
					});
				} 

				function onPlayerReady(){
					console.log('ready!!');
				}

				function onPlayerStateChange(){
					console.log('state change!!');
				}

				function playVideo(){
					player.playVideo();
				}

				createPlayer('mpAkMk0phOs');

				scope.$on('play', function(){
					playVideo();
				});
			}
		};
	});