
  dashboard = angular.module('dashboard',
                [
                  'ngRoute', 'ngAnimate', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago', 'sendRequest',
                  'parseHTML', 'customFileChange', 'customFileUpload', 'inputCountValidator', 'countdownTimer',
                  'miniGameState', 'gameState', 'gamePlay', 'userProfile', 'range', 'buyUnits', 'sendMessage',
                  'makeWithdrawal', 'bootstrapPage', 'verifyAccount', 'payWithPaystack', 'promptPassword'
                ]);

  dashboard.run(['$rootScope', '$window', 'Notification', 'sendRequest', ($rootScope, $window, Notification, sendRequest) => {

      $rootScope._ = _;
      $rootScope.logout = function() {
        delete localStorage['game-user_score'];
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
        sendRequest.getTotalEarnings('/user/get-total-earnings')
                  .then(function (rsp) {
                    $rootScope.total_earnings = rsp.total_earnings;
                  });
        sendRequest.getUserDetails('/user/get-user-details')
          .then( (rsp) => {
            $rootScope.userdetails = rsp.userdetails;
          });
      });

      // $rootScope.markAsRead = function(msg) {
      //  sendRequest.postRequest('api/user/mark-as-read', msg);
      // };
   }]);

  require('./angular/filters/parseHTML');
  require('./angular/services/services');
  //
  require('./angular/filters/rangeFilter');
  //
  require('./angular/directives/customFileChange');
  require('./angular/directives/customFileUpload');
  require('./angular/directives/inputCountValidator');
  require('./angular/directives/countdownTimer');
  require('./angular/directives/miniGameState');
  require('./angular/directives/gameState');
  require('./angular/directives/gamePlay');
  require('./angular/directives/buyUnits');
  require('./angular/directives/sendMessage');
  require('./angular/directives/makeWithdrawal');
  require('./angular/directives/userProfile');
  require('./angular/directives/verifyAccount');
  require('./angular/directives/payWithPaystack');
  require('./angular/directives/promptPassword');
   // require('./angular/directives/timer');
   //
   //
   // require('./angular/directives/ngRepeatFinishedCallback');
   //



  require('./angular/routes/dashboard-routes');

  require('./angular/controllers/dashboard-controller');
