dashboard.controller('DashboardController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {
  NProgress.start();

  $scope.sendMessage = function () {
    sendRequest.postRequest('/user/send-message', $scope.message)
              .then(function (rsp) {
                if (rsp.status == 200) {
                  NProgress.done();
                }
              });
    $scope.message=null;
  };


  bootstrapPage.dashboard($scope);

  NProgress.done();


}]);

dashboard.controller('ProfileController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {
  NProgress.start();

  bootstrapPage.profile($scope);

  NProgress.done();

}]);

dashboard.controller('SettingsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {
  NProgress.start();

  $scope.updateDetails = () => {
    sendRequest.postRequest('/user/update-user-details', $scope.userdetails)
              .then(function (rsp) {
                Notification.success({ message: 'Updated', positionX:'center' });
              });
  };

  bootstrapPage.settings($scope);

  NProgress.done();
}]);

dashboard.controller('GamePlayController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', 'gameActive', function ($scope, Notification, sendRequest, bootstrapPage, gameActive ) {
  NProgress.start();

  console.log(gameActive);

  $scope.game_timer = gameActive.game_timer;

  bootstrapPage.gameplay($scope);

  NProgress.done();
}]);

dashboard.controller('DisplayResultsController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage ) {
  NProgress.start();

  bootstrapPage.results($scope);

  NProgress.done();

}]);
