admin.controller('DashboardController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage ) {
  NProgress.start();

  $scope.flipLeft = () => {
    $('.shape').shape('flip left');
  };

  $scope.flipRight = () => {
    $('.shape').shape('flip right');
  };

  bootstrapAdminPage.dashboard($scope);

}]);

admin.controller('QuestionsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage ) {
  NProgress.start();

  $scope.previewQuestion = (q) => {
    $scope.particular_q = q.question;
    $scope.particular_q_option1 = q.option_1;
    $scope.particular_q_option2 = q.option_2;
    $scope.particular_q_option3 = q.option_3;
    $scope.particular_q_option4 = q.option_4;
    $scope.particular_q_correct = q.correct_option;

    $('.ui.modal.showQuestion').modal({
      blurring: true
    }).modal('show');
  };

  $scope.openModal = (q) => {
    $scope.q = q;

    $('.ui.modal.editQuestion').modal({
      blurring: true
    }).modal('show');
  };

  $scope.editQuestion = () => {
    NProgress.start();

    sendRequest.postRequest(route_root + '/api/edit-question', $scope.q)
                .then(rsp => {
                  if (rsp.status == 200) {
                    Notification.warning('Edited');
                    $scope.correct = null;
                    $scope.q = null;
                    $('.ui.modal.editQuestion').modal('hide');
                    NProgress.done();

                  }
                });
  };


    $scope.newQuestion = () => {
      $('.ui.modal.createQuestion').modal({
        blurring: true
      }).modal('show');
    };


  $scope.createQuestion = () => {
    NProgress.start();
    $scope.creating = true;

    sendRequest.postRequest(route_root + '/api/create-question', $scope.q)
                .then(rsp => {
                  if (rsp.status == 200) {
                    $('.ui.modal.createQuestion').modal('hide');
                    Notification.success('Created');
                    $scope.correct = null;
                    $scope.q = null;
                    console.log($scope.questions);
                    console.log(rsp.data.status);
                    $scope.questions.push(rsp.data.status);
                    NProgress.done();

                  }
                  else if (rsp.status == 422) {
                    $scope.errs = rsp.data.errors;
                  }
                  $scope.creating = false;
                });
  };

  $scope.deleteQuestion = (q) => {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/delete-question', q)
                .then(rsp => {
                  console.log(rsp);
                  if (rsp.status == 200) {
                    Notification.error('Deleted');
                    $scope.correct = null;
                    $('.ui.modal.editQuestion').modal('hide');
                    var removed = $scope.questions.indexOf(q);
                    $scope.questions.splice(removed, 1);
                    NProgress.done();

                  }
                });
  };


  bootstrapAdminPage.questions($scope);

}]);

admin.controller('AdminsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage ) {
  NProgress.start();

  $scope.previewAdmin = (q) => {
    $scope.particular_q = q.admin;
    $scope.particular_q_option1 = q.option_1;
    $scope.particular_q_option2 = q.option_2;
    $scope.particular_q_option3 = q.option_3;
    $scope.particular_q_option4 = q.option_4;
    $scope.particular_q_correct = q.correct_option;

    $('.ui.modal.showAdmin').modal({
      blurring: true
    }).modal('show');
  };

  $scope.openModal = (q) => {
    $scope.q = q;

    $('.ui.modal.editAdmin').modal({
      blurring: true
    }).modal('show');
  };

  $scope.editAdmin = () => {
    NProgress.start();

    sendRequest.postRequest(route_root + '/api/edit-admin', $scope.q)
                .then(rsp => {
                  if (rsp.status == 200) {
                    Notification.warning('Edited');
                    $scope.correct = null;
                    $scope.q = null;
                    $('.ui.modal.editAdmin').modal('hide');
                    NProgress.done();

                  }
                });
  };


    $scope.newAdmin = () => {
      $('.ui.modal.createAdmin').modal({
        blurring: true
      }).modal('show');
    };

  //
  // $scope.createAdmin = () => {
  //   NProgress.start();
  //
  //   sendRequest.postRequest(route_root + '/api/create-admin', $scope.q)
  //               .then(rsp => {
  //                 if (rsp.status == 200) {
  //                   $('.ui.modal.createAdmin').modal('hide');
  //                   Notification.success('Created');
  //                   $scope.correct = null;
  //                   $scope.q = null;
  //                   console.log($scope.admins);
  //                   console.log(rsp.data.status);
  //                   $scope.admins.push(rsp.data.status);
  //                   NProgress.done();
  //
  //                 }
  //               });
  // };

  $scope.deleteAdmin = (q) => {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/delete-admin', q)
                .then(rsp => {
                  if (rsp.status == 200) {
                    Notification.warning('Deleted');
                    var removed = $scope.admins.indexOf(q);
                    $scope.admins.splice(removed, 1);

                  }
                  else if (rsp.status == 410) {
                    Notification.error(rsp.data.message);
                  }
                  NProgress.done();

                });
  };

  $scope.removeAdmin = (q) => {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/remove-admin', q)
                .then(rsp => {
                  if (rsp.status == 200) {
                    Notification.success('Removed');
                    var removed = $scope.admins.indexOf(q);
                    $scope.admins.splice(removed, 1);

                  }
                  else if (rsp.status == 410) {
                    Notification.error(rsp.data.message);
                  }
                  NProgress.done();

                });
  };


  bootstrapAdminPage.admins($scope);

}]);

admin.controller('UsersController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage ) {
  NProgress.start();
  $scope.loading = true;

  $scope.previewUser = (u) => {
    $scope.u = u;
    console.log('hhh');

    $('.ui.modal.showUser').modal({
      blurring: true
    }).modal('show');
  };

  $scope.creditUser = (u) => {
    $scope.u = u;
    $('.ui.modal.creditUser').modal({
      blurring: true
    }).modal('show');
  };

  $scope.openEditModal = (u) => {
    $scope.u = u;
    $scope.earnings = _.sumBy(u.untransferred_earnings, function(o) { return o.amount; });

    $('.ui.modal.editUser').modal({
      blurring: true
    }).modal('show');
  };

  $scope.editUser = () => {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/edit-user', $scope.u)
                .then(rsp => {
                  if (rsp.status == 200) {
                    Notification.warning('Edited');
                    $scope.correct = null;
                    $scope.u = null;
                    $('.ui.modal.editUser').modal('hide');
                    NProgress.done();

                  }
                });
  };


    $scope.newUser = () => {
      $('.ui.modal.createUser').modal({
        blurring: true
      }).modal('show');
    };

  $scope.openReferralsModal = (u) => {

    sendRequest.postRequest(route_root + '/api/get-user-referrals', u.id)
                .then(rsp => {
                  if (rsp.status == 200) {
                    $scope.u = u;
                    $scope.referrals = rsp.data.referrals;
                  }
                  else if (rsp.status == 403) {
                    Notification.error(rsp.data.status);
                  }
                  NProgress.done();
                });

    $('.ui.modal.userReferrals').modal({
      blurring: true
    }).modal('show');
  };

  $scope.deleteUser = (u) => {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/delete-user', u)
                .then(rsp => {
                  if (rsp.status == 200) {
                    Notification.warning('Deleted');
                    var removed = $scope.users.indexOf(u);
                    $scope.users.splice(removed, 1);

                  }
                  else if (rsp.status == 403) {
                    Notification.error(rsp.data.status);
                  }
                  NProgress.done();
                });
  };

  $scope.suspendUser = (u) => {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/suspend-user', u)
                .then(rsp => {
                  console.log(rsp);
                  if (rsp.status == 200) {
                    Notification.warning('Suspended');
                    u.useraccstatus = 'suspended';
                  }
                  else if (rsp.status == 403) {
                    Notification.error(rsp.data.status);
                  }
                  NProgress.done();
                });
  };

  $scope.activateUser = (u) => {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/activate-user', u)
                .then(rsp => {
                  console.log(rsp);
                  if (rsp.status == 200) {
                    Notification.primary('Activated');
                    u.useraccstatus = 'active';
                  }
                  else if (rsp.status == 403) {
                    Notification.error(rsp.data.status);
                  }
                  NProgress.done();
                });
  };

  $scope.verifyUser = (u) => {
    $scope.verifying = true;
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/verify-user', u)
                .then(rsp => {
                  if (rsp.status == 200) {
                    Notification.success('Verified');
                    u.verified = true;
                  }
                  else if (rsp.status == 403) {
                    Notification.error(rsp.data.status);
                  }
                  NProgress.done();
                  $scope.verifying = false;
                });
  };

  $scope.processCreditAddition = (u) => {
    $scope.loading = true;
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/create-transaction', u)
                .then(rsp => {
                  if (rsp.status == 200) {
                    Notification.success('Completed');
                    $('.ui.modal.creditUser').modal('hide');
                    u.units = null;
                  }
                  else if (rsp.status == 403) {
                    Notification.error(rsp.data.status);
                  }
                  NProgress.done();
                  $scope.loading = false;
                });
  };

  $scope.makeAdmin = (u) => {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/create-admin', u)
                .then(rsp => {
                  if (rsp.status == 200) {
                    Notification('User made an admin');
                    var removed = $scope.users.indexOf(u);
                    $scope.users.splice(removed, 1);
                  }
                  else if (rsp.status == 410) {
                    Notification.error(rsp.data.message);
                  }
                  NProgress.done();
                });
  };

  bootstrapAdminPage.users($scope);

}]);

admin.controller('GamesController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage ) {
  NProgress.start();

  $scope.active = 'liveSession';

  bootstrapAdminPage.games($scope);

}]);

admin.controller('TransactionsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage ) {
  NProgress.start();

  bootstrapAdminPage.transactions($scope);

}]);

admin.controller('MessagesController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage ) {
  NProgress.start();

  bootstrapAdminPage.messages($scope);

}]);

admin.controller('EarningsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage ) {
  NProgress.start();

  $scope.active = 'allEarnings';

  bootstrapAdminPage.games($scope);

}]);

admin.controller('SettingsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapAdminPage', function ($scope, Notification, sendRequest, bootstrapAdminPage ) {
  NProgress.start();

  $scope.updateDetails = () => {
    $scope.loading = true;
    sendRequest.postRequest('/user/update-user-details', $scope.userdetails)
              .then(function (rsp) {
                Notification.success({ message: 'Updated', positionX:'center' });
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
                    console.log('here');
                    $scope.updateDetails();
                  }
                }
              });
  };

  bootstrapAdminPage.settings($scope);

  NProgress.done();
}]);
