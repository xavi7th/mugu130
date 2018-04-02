admin.controller('DashboardController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {
  NProgress.start();

  bootstrapPage.dashboard($scope);

  NProgress.done();


}]);
