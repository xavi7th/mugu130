
  dashboard = angular.module('dashboard',
                [
                  'ngRoute', 'ngAnimate', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago', 'sendRequest',
                  'parseHTML', 'customFileChange', 'customFileUpload', 'inputCountValidator', 'countdownTimer',
                  'gameState', 'userProfile', 'range'
                ]);

  dashboard.run(['$rootScope', '$window', 'Notification', 'sendRequest', function($rootScope, $window, Notification, sendRequest) {

    //run auythentication here or failed
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


   dashboard.factory('bootstrapPage', ['$timeout', 'sendRequest', ($timeout, sendRequest) => {
   	return {
   	 profile: function (scope) {
       sendRequest.getUserDetails('/api/get-user-details')
                 .then(function (rsp) {
                   scope.userdetails = rsp.userdetails;
                 });
         scope.$on('$viewContentLoaded', function() {
           $timeout(function () {
             $('#profile-menu .item').tab();
             $('.dropdown_menu').dropdown();
           }, 500);
         });

   		},
   	 dashboard: function (scope) {
       sendRequest.getUserDetails('/api/get-user-details')
                 .then(function (rsp) {
                   scope.userdetails = rsp.userdetails;
                 });
         scope.$on('$viewContentLoaded', function() {
           $timeout(function () {
             $('.dropdown_menu').dropdown();
           }, 500);
         });

   		},
   	 settings: function (scope) {
       sendRequest.getUserDetails('/api/get-user-details')
                 .then(function (rsp) {
                   scope.userdetails = rsp.userdetails;
                 });
       sendRequest.getBanks('/api/get-banks-list')
                 .then(function (rsp) {
                   scope.banks = rsp.banks;
                 });
         scope.$on('$viewContentLoaded', function() {
           $timeout(function () {
             $('#edit .item').tab();
             $('.dropdown_menu').dropdown();
           }, 500);
         });

   		}
   	};
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
   require('./angular/directives/userProfile');
   // require('./angular/directives/timer');
   //
   //
   // require('./angular/directives/ngRepeatFinishedCallback');
   //



  require('./angular/routes/dashboard-routes');

  require('./angular/controllers/dashboard-controller');
