dashboard.controller('DashboardController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {
  NProgress.start();

  $scope.hide=true;

  $scope.transferEarnings = () => {
    sendRequest.postRequest('user/transfer-earnings')
              .then(rsp => {
                if (rsp.status == 200) {
                  if (rsp.data.status == true) {
                    Notification.success({message: 'Earnings transferred to wallet', positionX: 'center'});
                  }
                  else if(rsp.data.status == 'Insufficient'){
                    Notification.error({message: 'No earnings to transfer', positionX: 'center'});
                  }
                }

                sendRequest.getUserDetails('/user/get-user-details', true)
                            .then( (rsp) => {
                              $scope.userdetails = rsp.userdetails;
                            });
                sendRequest.getTotalEarnings('/user/get-total-earnings', true)
                            .then(function (rsp) {
                              $scope.total_earnings = rsp.total_earnings;
                            });
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
    $scope.loading = true;
    sendRequest.postRequest('/user/update-user-details', $scope.userdetails)
              .then(function (rsp) {
                if (rsp.status == 422) {
                  Notification.error({ message: 'Invalid data', positionX:'center' });
                }
                else{
                  Notification.success({ message: 'Updated', positionX:'center' });
                }
                $scope.loading = null;

              });
  };

  $scope.updatePassword = () => {
    if (!$scope.userdetails.old_password || !$scope.userdetails.password) {
      Notification.error('Old and new password required');
      return;
    }
    sendRequest.postRequest('/user/confirm-user-password', $scope.userdetails.old_password)
              .then(function (rsp) {
                if (rsp.status == 423) {
                  Notification.error('Old password mismatch');
                }
                else if (rsp.status == 200){
                  if (rsp.data.status) {
                    $scope.updateDetails();
                    $scope.logout();

                  }
                }
              });
  };

  bootstrapPage.settings($scope);

  NProgress.done();
}]);

dashboard.controller('GamePlayController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', 'gameActive', function ($scope, Notification, sendRequest, bootstrapPage, gameActive ) {
  NProgress.start();

  $scope.game_timer = gameActive.game_timer;
  $scope.total_examinees = gameActive.total_examinees;

  bootstrapPage.gameplay($scope);

  NProgress.done();
}]);

dashboard.controller('DisplayResultsController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage ) {
  NProgress.start();

  bootstrapPage.results($scope);

  NProgress.done();

}]);

dashboard.controller('MessageController', ['$scope', 'bootstrapPage', 'sendRequest', function ($scope, bootstrapPage, sendRequest ) {
  NProgress.start();
  // var hello = _.dropRightWhile($scope.userdetails.messages, ['read', true]).length;
  // console.log(hello);

  $scope.markAsRead = (msg) => {
    msg.read = true;
    sendRequest.postRequest('/user/mark-message-as-read', msg);
  };
  $scope.deleteMessage = (msg) => {
    sendRequest.postRequest('/user/delete-message', msg)
                .then(rsp => {
                  var removedMessage = $scope.userdetails.messages.indexOf(msg);
                      $scope.userdetails.messages.splice(removedMessage, 1);
                });
  };

  bootstrapPage.messages($scope);

  NProgress.done();

}]);

dashboard.controller('NoticeController', ['$scope', 'bootstrapPage', 'sendRequest', function ($scope, bootstrapPage, sendRequest ) {
  NProgress.start();

  $scope.markAsRead = (notice) => {
    notice.read = true;
    sendRequest.postRequest('/user/mark-notice-as-read', notice);
  };
  $scope.deleteNotice = (notice) => {
    sendRequest.postRequest('/user/delete-notice', notice)
                .then(rsp => {
                  var removedNotice = $scope.userdetails.notices.indexOf(notice);
                      $scope.userdetails.notices.splice(removedNotice, 1);
                });
  };

  bootstrapPage.notices($scope);

  NProgress.done();

}]);
