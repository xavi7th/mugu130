  home.config(['$routeProvider', '$locationProvider', '$provide', function ($routeProvider, $locationProvider, $provide) {
   $routeProvider

     .when('/', {
       controller: 'HomeController'
     })

     .when('/login', {
       controller: 'LoginController'
     })

     .when('/register', {
       controller: 'RegisterController'
     })

     .when('/register/ref/:refcode', {
       controller: 'RegisterController'
     })

     .when('/demo-play', {
       templateUrl: 'angular/views/demo/index.html',
       controller: 'DemoGameController'
     })

     .otherwise({
       redirectTo: '/'
     });

     $locationProvider.html5Mode(true);

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
