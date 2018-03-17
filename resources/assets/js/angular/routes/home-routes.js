// module.exports = function () {
  home.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
   $routeProvider

     .when('/', {
      //  templateUrl: 'angular/views/welcome.php',
       controller: 'HomeController'
     })

    //  .when('/about', {
    //    templateUrl: 'angular/views/about.php',
    //    controller: 'AboutController'
    //  })
     //
    //  .when('/faq', {
    //    templateUrl: 'angular/views/faq.php',
    //    controller: 'FAQController'
    //  })
     //
    //  .when('/start-guide', {
    //    templateUrl: 'angular/views/startguide.php',
    //    controller: 'StartGuideController'
    //  })
     //
    //  .when('/buy-sell-crypto', {
    //    templateUrl: 'angular/views/buy-sell-crypto.php',
    //    controller: 'BuySellCryptoController'
    //  })
     //
    //  .when('/affiliates', {
    //    templateUrl: 'angular/views/affiliates.php',
    //    controller: 'AffilliatesController'
    //  })
     //
    //  .when('/reps', {
    //    templateUrl: 'angular/views/reps.php',
    //    controller: 'RepsController'
    //  })
     //
    //  .when('/security', {
    //    templateUrl: 'angular/views/security.php',
    //    controller: 'SecurityController'
    //  })
     //
    //  .when('/support', {
    //    templateUrl: 'angular/views/contact.php',
    //    controller: 'ContactController'
    //  })

     .when('/login', {
      //  templateUrl: 'angular/views/login.php',
       controller: 'LoginController'
     })

     .when('/register', {
      //  templateUrl: 'angular/views/register.php',
       controller: 'RegisterController'
     })

    //  .when('/register/:refcode', {
    //    templateUrl: 'angular/views/register.php',
    //    controller: 'RegisterController'
    //  })

     .otherwise({
       redirectTo: '/'
     });
    //  $locationProvider.hashPrefix('');
     $locationProvider.html5Mode(true);
  }]);

// };
