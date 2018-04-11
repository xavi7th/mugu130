// Require the stuffs that are particular to this app



home = angular.module('home', ['ngRoute', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago', 'sendRequest', 'countdownTimer', 'miniGameState']);

home.run(['$rootScope', '$window', 'Notification', 'sendRequest', function ($rootScope, $window, Notification, sendRequest) {
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

home.factory('bootstrapPage', ['$timeout', function InboxService($timeout) {
	return {
	 homepage: function (scope) {
      scope.$on('$viewContentLoaded', function() {
      });

		}
	};
}]);


require('./angular/services/services');

require('./angular/directives/countdownTimer');
require('./angular/directives/miniGameState');


require('./angular/routes/home-routes');

require('./angular/controllers/home-controller');
