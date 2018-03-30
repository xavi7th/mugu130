
  dashboard = angular.module('dashboard',
                [
                  'ngRoute', 'ngAnimate', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago', 'sendRequest',
                  'parseHTML', 'customFileChange', 'customFileUpload', 'inputCountValidator', 'countdownTimer',
                  'gameState', 'gamePlay', 'userProfile', 'range', 'buyUnits', 'bootstrapPage',
                ]);

  dashboard.run(['$rootScope', '$window', 'Notification', 'sendRequest', ($rootScope, $window, Notification, sendRequest) => {

      $rootScope._ = _;
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
  require('./angular/directives/gameState');
  require('./angular/directives/gamePlay');
  require('./angular/directives/buyUnits');
  require('./angular/directives/userProfile');
   // require('./angular/directives/timer');
   //
   //
   // require('./angular/directives/ngRepeatFinishedCallback');
   //



  require('./angular/routes/dashboard-routes');

  require('./angular/controllers/dashboard-controller');
