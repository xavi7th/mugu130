// Require the stuffs that are particular to this app



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

home.factory('bootstrapPage', ['$timeout', '$window', function ($timeout, $window) {
	return {
	 homepage: function (scope) {
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
