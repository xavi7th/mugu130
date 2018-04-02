admin.config(['$routeProvider', '$locationProvider', '$localStorageProvider', 'NotificationProvider', 'timeAgoSettings', function ($routeProvider, $locationProvider, $localStorageProvider, NotificationProvider, timeAgoSettings) {

  $routeProvider

   .when(route_root, {
     templateUrl: 'angular/views/admin/index.html',
     controller: 'DashboardController'
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
