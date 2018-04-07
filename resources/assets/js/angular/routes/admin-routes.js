admin.config(['$routeProvider', '$locationProvider', '$localStorageProvider', 'NotificationProvider', 'timeAgoSettings', function ($routeProvider, $locationProvider, $localStorageProvider, NotificationProvider, timeAgoSettings) {

  $routeProvider

   .when(route_root, {
     templateUrl: 'angular/views/admin/index.html',
     controller: 'DashboardController'
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

}]);
