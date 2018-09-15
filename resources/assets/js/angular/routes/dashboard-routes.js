dashboard.config(['$routeProvider', '$locationProvider', '$compileProvider', '$localStorageProvider', 'NotificationProvider', 'timeAgoSettings', '$provide', function ($routeProvider, $locationProvider, $compileProvider, $localStorageProvider, NotificationProvider, timeAgoSettings, $provide) {

  $routeProvider

   .when('/dashboard', {
     templateUrl: 'angular/views/dashboard/index.html',
     controller: 'DashboardController',
   })

   .when('/register/success', {
     templateUrl: 'angular/views/dashboard/register-success.html',
     controller: 'DashboardController',
   })

   .when('/dashboard/withdrawal/success', {
     templateUrl: 'angular/views/dashboard/withdrawal-instructions.html',
     controller: 'WithdrawalController',
   })

   .when('/dashboard/profile', {
     templateUrl: 'angular/views/dashboard/profile.html',
     controller: 'ProfileController',
   })

   .when('/dashboard/messages', {
     templateUrl: 'angular/views/dashboard/messages.html',
     controller: 'MessageController',
   })

   .when('/dashboard/notices', {
     templateUrl: 'angular/views/dashboard/notices.html',
     controller: 'NoticeController',
   })

   .when('/dashboard/settings', {
     templateUrl: 'angular/views/dashboard/settings.html',
     controller: 'SettingsController',
   })

   .when('/dashboard/game-play', {
     templateUrl: 'angular/views/dashboard/game-play.html',
     controller: 'GamePlayController',
     resolve: {
                gameActive: ['$location', 'sendRequest', function($location, sendRequest) {
                  return sendRequest.getGameState()
                              .then(rsp => {
                                if (rsp.game_state != 'active') {
                                  $location.path('/dashboard');
                                }
                                else{
                                  return rsp;
                                }
                              });
                }]
              }
   })

   .when('/dashboard/display-results', {
     templateUrl: 'angular/views/dashboard/display-results.html',
     controller: 'DisplayResultsController',
     resolve: {
                 gameActive: ['$location', 'sendRequest', function($location, sendRequest) {
                   sendRequest.getGameState()
                               .then(rsp => {
                                 if (rsp.game_state != 'loading') {
                                   $location.path('/dashboard');
                                 }
                               });
                 }]
              }
   })

   .when('/dashboard/order-successful', {
     templateUrl: 'angular/views/dashboard/order-successful.html',
    //  controller: 'DisplayResultsController',
     resolve: {
                 activeTransaction: ['$location', 'sendRequest', function($location, sendRequest) {
                     if (!sendRequest.getData('activeTransaction')) {
                       $location.path('/dashboard/profile');
                     }
                 }]
              }
   })

   .otherwise({
     redirectTo: '/dashboard'
   });


   $locationProvider.hashPrefix('');
   $locationProvider.html5Mode(true);
   $localStorageProvider.setKeyPrefix('game-');
   timeAgoSettings.allowFuture = true;
   NotificationProvider.setOptions({
       delay: 5000,
       replaceMessage: true,
      //  startTop: 20,
      //  startRight: 10,
      //  verticalSpacing: 20,
      //  horizontalSpacing: 20,
       positionX: 'center',
      //  positionY: 'bottom'
   });

   $provide.decorator('$locale', ['$delegate', function($delegate) {
      $delegate.NUMBER_FORMATS = {
        DECIMAL_SEP: '.',
        GROUP_SEP: ',',
        PATTERNS: [{ // Decimal Pattern
          minInt: 1,
          minFrac: 0,
          maxFrac: 3,
          posPre: '',
          posSuf: '',
          negPre: '-',
          negSuf: '',
          gSize: 3,
          lgSize: 3
        }, { //Currency Pattern
          minInt: 1,
          minFrac: 0,
          maxFrac: 2,
          posPre: '\u00A4',
          posSuf: '',
          negPre: '(\u00A4',
          negSuf: ')',
          gSize: 3,
          lgSize: 3
        }],
        CURRENCY_SYM: '₦'
      };
      return $delegate;
    }]);

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|sms|tel|whatsapp):/);

}]);
