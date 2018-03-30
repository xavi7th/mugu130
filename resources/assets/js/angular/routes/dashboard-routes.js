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

   .otherwise({
     redirectTo: '/dashboard'
   });
   $locationProvider.hashPrefix('');
   $locationProvider.html5Mode(true);
  //  $localStorageProvider.setKeyPrefix('money-');
   timeAgoSettings.allowFuture = true;

}]);
