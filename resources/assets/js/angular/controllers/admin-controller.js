admin.controller('DashboardController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {
  NProgress.start();

  $scope.flipLeft = () => {
    $('.shape').shape('flip left');
  };

  $scope.flipRight = () => {
    $('.shape').shape('flip right');
  };

  bootstrapPage.dashboard($scope);

  NProgress.done();


}]);

admin.controller('QuestionsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {
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


  bootstrapPage.questions($scope);

  NProgress.done();


}]);

admin.controller('AdminsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage ) {
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


  $scope.createAdmin = () => {
    NProgress.start();

    sendRequest.postRequest(route_root + '/api/create-admin', $scope.q)
                .then(rsp => {
                  if (rsp.status == 200) {
                    $('.ui.modal.createAdmin').modal('hide');
                    Notification.success('Created');
                    $scope.correct = null;
                    $scope.q = null;
                    console.log($scope.admins);
                    console.log(rsp.data.status);
                    $scope.admins.push(rsp.data.status);
                    NProgress.done();

                  }
                });
  };

  $scope.deleteAdmin = (q) => {
    NProgress.start();
    sendRequest.postRequest(route_root + '/api/delete-admin', q)
                .then(rsp => {
                  console.log(rsp);
                  if (rsp.status == 200) {
                    Notification.error('Deleted');
                    $scope.correct = null;
                    $('.ui.modal.editAdmin').modal('hide');
                    var removed = $scope.admins.indexOf(q);
                    $scope.admins.splice(removed, 1);
                    NProgress.done();

                  }
                });
  };


  bootstrapPage.admins($scope);

  NProgress.done();


}]);
