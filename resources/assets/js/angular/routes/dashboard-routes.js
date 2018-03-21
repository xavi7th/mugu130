dashboard.config(['$routeProvider', '$locationProvider', 'timeAgoSettings', function ($routeProvider, $locationProvider, timeAgoSettings) {

  $routeProvider

   .when('/dashboard', {
     templateUrl: 'angular/views/dashboard/index.html',
     controller: 'DashboardController'
   })

   .when('/dashboard/profile', {
     templateUrl: 'angular/views/dashboard/profile.html',
     controller: 'ProfileController'
   })

   .when('/dashboard/settings', {
     templateUrl: 'angular/views/dashboard/settings.html',
     controller: 'SettingsController'
   })

   .when('/dashboard/game-play', {
     templateUrl: 'angular/views/dashboard/game-play.html',
     controller: 'GamePlayController'
   })

   .when('/dashboard/display-results', {
     templateUrl: 'angular/views/dashboard/display-results.html',
     controller: 'DisplayResultsController'
   })

   .otherwise({
     redirectTo: '/dashboard'
   });
   $locationProvider.hashPrefix('');
   $locationProvider.html5Mode(true);
  //  $localStorageProvider.setKeyPrefix('money-');
   timeAgoSettings.allowFuture = true;

}]);
