  home.config(['$routeProvider', '$locationProvider', '$provide', 'NotificationProvider', function ($routeProvider, $locationProvider, $provide, NotificationProvider) {
   $routeProvider

     .when('/', {
       controller: 'HomeController',
       template : '',
       animation: 'slide'
     })

     // .when('/test', {
     //   controller: 'HomeController',
     //   template : '',
     //   animation: 'slide'
     // })

     .when('/login', {
       controller: 'HomeController',
       template : '',

     })

     .when('/register', {
       controller: 'RegisterController',
       template : '',

     })

     .when('/register/ref/:refcode', {
       controller: 'RegisterController',
       template : '',

     })

     .when('/verify-user/:token', {
       controller: 'RegisterController',
       template : '',

     })

     .when('/password/reset', {
       controller: 'RegisterController',
       template : '',

     })

     .when('/register/success', {
       controller: 'RegisterController',
       template : '',

     })

     .when('/demo-play', {
       templateUrl: 'angular/views/demo/index.html',
       controller: 'DemoGameController'
     })

     .when('/support-center', {
       templateUrl: 'angular/views/home/support-center.html',
       controller: 'SupportController'
     })

     .when('/frequently-asked-questions', {
       templateUrl: 'angular/views/home/frequently-asked-questions.html',
       controller: 'FAQController'
     })

     .when('/privacy', {
       templateUrl: 'angular/views/home/privacy.html',
       controller: 'PrivacyController'
     })

     .when('/calculator', {
       templateUrl: '',
       controller: 'CalculatorController'
     })

     .when('/terms-and-conditions', {
       templateUrl: 'angular/views/home/terms.html',
       controller: 'TermsController'
     })

     .otherwise({
       redirectTo: '/'
     });

     $locationProvider.html5Mode(true);

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
  }]);
