admin.config(['$routeProvider', '$locationProvider', '$localStorageProvider', '$provide', 'NotificationProvider', 'timeAgoSettings', function ($routeProvider, $locationProvider, $localStorageProvider, $provide, NotificationProvider, timeAgoSettings) {

  $routeProvider

   .when(route_root, {
     templateUrl: 'angular/views/admin/users.html',
     controller: 'UsersController'
   })

   .when(route_root + '/settings', {
     templateUrl: 'angular/views/admin/settings.html',
     controller: 'SettingsController'
   })

   .when(route_root + '/questions', {
     templateUrl: 'angular/views/admin/questions.html',
     controller: 'QuestionsController'
   })

   .when(route_root + '/admins', {
     templateUrl: 'angular/views/admin/admins.html',
     controller: 'AdminsController'
   })

   .when(route_root + '/users', {
     templateUrl: 'angular/views/admin/users.html',
     controller: 'UsersController'
   })

   .when(route_root + '/earnings', {
     templateUrl: 'angular/views/admin/earnings.html',
     controller: 'EarningsController'
   })

   .when(route_root + '/games', {
     templateUrl: 'angular/views/admin/games.html',
     controller: 'GamesController'
   })

   .when(route_root + '/transactions', {
     templateUrl: 'angular/views/admin/transactions.html',
     controller: 'TransactionsController'
   })

   .when(route_root + '/messages', {
     templateUrl: 'angular/views/admin/messages.html',
     controller: 'MessagesController'
   })

   .otherwise({
     redirectTo: route_root
   });
   $locationProvider.hashPrefix('');
   $locationProvider.html5Mode(true);
   $localStorageProvider.setKeyPrefix('game-');
   timeAgoSettings.allowFuture = true;
   NotificationProvider.setOptions({
       delay: 5000,
       replaceMessage: true,
       positionX: 'center',
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

}]);
