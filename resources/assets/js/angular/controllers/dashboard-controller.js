dashboard.controller('DashboardController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {
  NProgress.start();

  var pagedetails = function () {
    sendRequest.getUserDetails('/api/get-user-details')
              .then(function (rsp) {
                $scope.userdetails = rsp.userdetails;
              });
    sendRequest.postRequest('/api/get-dashboard-page-details')
              .then(function (rsp) {
                if (rsp.status == 200) {
                  $scope.packages = rsp.data.packages;
                  $scope.total_investments = _.sumBy(rsp.data.packages, function(o) { return o.thisghamt; });
                  $scope.total_returns = _.sumBy(rsp.data.packages, function(o) { return o.expectedghamt; });
                  $scope.payments_received = _.sumBy(rsp.data.payments_received, function(o) { return o.expectedghamt; });
                  $scope.notification = rsp.data.notification;
                  NProgress.done();
                }
              });
  };

  $scope.sendMessage = function () {
    sendRequest.postRequest('/user/send-message', $scope.message)
              .then(function (rsp) {
                if (rsp.status == 200) {
                  NProgress.done();
                }
              });
    $scope.message=null;
  };

  // pagedetails();
  bootstrapPage.dashboard($scope);

  NProgress.done();


}]);

dashboard.controller('ProfileController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {


  bootstrapPage.profile($scope);

}]);

dashboard.controller('SettingsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {

  $scope.updateDetails = () => {
    sendRequest.postRequest('/user/update-user-details', $scope.userdetails)
              .then(function (rsp) {
                Notification.success({ message: 'Updated', positionX:'center' });
              });
  };

  bootstrapPage.settings($scope);

}]);
