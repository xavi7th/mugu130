
  require('angularjs-datepicker');

  admin = angular.module('admin',
                [
                  'ngRoute', 'ngAnimate', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago', 'sendRequest', '720kb.datepicker',
                  'parseHTML', 'customFileChange', 'customFileUpload', 'countdownTimer', 'sendMessage', 'bootstrapAdminPage',
                  'liveGameSession', 'viewAllGames', 'dailyGameLog', 'dailyStatistics', 'monthlyStatistics', 'displayTransactions',
                  'displayMessages', 'userEarnings', 'allEarnings', 'adminEarnings', 'gameEarnings', 'confirmAction'

                ]);

  admin.run(['$rootScope', '$window', 'Notification', 'sendRequest', ($rootScope, $window, Notification, sendRequest) => {

      $rootScope._ = _;
      $rootScope.route_root = route_root;
      $rootScope.logout = function() {
       sendRequest.postRequest('/logout')
                 .then(function (response) {
                   if (response.status == 200) {
                     Notification.success({message: 'Logout successful',  positionX: 'center'});
                     $window.location.href = '/login';
                   }
                   else {
                     Notification.error({message: 'Logout failed! Reload page.',  positionX: 'center'});
                   }
                 });
      };

      $rootScope.$on("$routeChangeStart", function (event, next, current) {
        // TODO: Merge this tow to one server cal;l. Eager load the total Earning on the get user details
        sendRequest.getTotalEarnings('/user/get-total-earnings')
                  .then(function (rsp) {
                    $rootScope.total_earnings = rsp.total_earnings;
                  });
        sendRequest.getUserDetails('/user/get-user-details')
          .then( (rsp) => {
            $rootScope.userdetails = rsp.userdetails;
          });
      });
   }]);

  require('./angular/filters/parseHTML');

  require('./angular/services/services');

  require('./angular/directives/customFileChange');
  require('./angular/directives/customFileUpload');
  require('./angular/directives/countdownTimer');
  require('./angular/directives/questionField');
  require('./angular/directives/sendMessage');
  require('./angular/directives/liveGameSession');
  require('./angular/directives/viewAllGames');
  require('./angular/directives/dailyGameLog');
  require('./angular/directives/dailyStatistic');
  require('./angular/directives/monthlyStatistic');
  require('./angular/directives/viewAllTransactions');
  require('./angular/directives/displayMessages');
  require('./angular/directives/userEarnings');
  require('./angular/directives/allEarnings');
  require('./angular/directives/adminEarnings');
  require('./angular/directives/gameEarnings');
  require('./angular/directives/confirmAction');


  require('./angular/routes/admin-routes');

  require('./angular/controllers/admin-controller');
