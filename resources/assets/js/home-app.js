// Require the stuffs that are particular to this app
require('owl.carousel');

home = angular.module('home', ['ngRoute', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago',
 											'sendRequest', 'countdownTimer', 'miniGameState', 'demoPlay', 'range', 'cacheBusting']);

home.run(['$rootScope', '$window', 'Notification', 'sendRequest', function ($rootScope, $window, Notification, sendRequest) {

	$rootScope._ = _;
	$rootScope.logout = function () {
		sendRequest.postRequest('/logout')
			.then(function (response) {
				if (response.status == 200) {
					Notification.success({
						message: 'Logout successful',
						positionX: 'center'
					});
					$window.location.href = '/login';
				} else {
					Notification.error({
						message: 'Logout failed! Reload page.',
						positionX: 'center'
					});
				}
			});
	};
}]);

home.factory('bootstrapPage', ['$timeout', '$window', 'sendRequest', function ($timeout, $window, sendRequest) {
	return {
	 homepage: function (scope) {

     sendRequest.request('/api/get-home-page-details')
               .then(function (rsp) {
                 scope.$parent.total_games_played = rsp.total_games_played;
                 scope.$parent.total_num_of_users = rsp.total_num_of_users;
                 scope.$parent.total_user_earnings = rsp.total_user_earnings;
                 scope.$parent.top_three_earners = rsp.top_three_earners;

                 var carousel = () => {
                   $('.owl-carousel').owlCarousel({
                      loop:true,
                      autoplay: true,
                      margin:10,
                      responsive:{
                          0:{
                              items:1
                          },
                          600:{
                              items:1
                          },
                          1000:{
                              items:1
                          }
                      }
                   });
                 };

                 $timeout(carousel, 1000);
               });

      scope.$on('$viewContentLoaded', function() {
				var windowWidth = $window.innerWidth;
				if (windowWidth >= 374) {
					scope.$parent.register = 125;
					scope.$parent.login = 80;
				}
				else if (windowWidth < 374) {
					scope.$parent.register = 120;
					scope.$parent.login = 75;
				}



      });
		},
	 terms: function (scope) {
		 scope.title = 'Terms of Use';
      scope.$on('$viewContentLoaded', function() {
      });
		},
	 privacy: function (scope) {
		 scope.title = 'Privacy';
      scope.$on('$viewContentLoaded', function() {
      });
		},
	 support: function (scope) {
      scope.$on('$viewContentLoaded', function() {
      });
		},
	 faq: function (scope) {
      scope.$on('$viewContentLoaded', function() {
				$('#faq').accordion();
      });
		},
	 calculator: function (scope) {
		 scope.$parent.height = 90;
      scope.$on('$viewContentLoaded', function() {
      });
		},
	};
}]);


require('./angular/services/services');

require('./angular/directives/countdownTimer');
require('./angular/directives/miniGameState');
require('./angular/directives/demoPlay');
require('./angular/directives/cacheBusting');


require('./angular/filters/rangeFilter');


require('./angular/routes/home-routes');

require('./angular/controllers/home-controller');
