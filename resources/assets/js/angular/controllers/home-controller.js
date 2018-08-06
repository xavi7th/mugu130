
  home.controller('HomeController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage ) {
    NProgress.start();

    bootstrapPage.homepage($scope);
    NProgress.done();
  }]);

  home.controller('RegisterController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage ) {

    NProgress.start();
    bootstrapPage.homepage($scope);

    $scope.$parent.height=135;

    NProgress.done();

  }]);

  home.controller('DemoGameController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage ) {

    NProgress.start();
    // bootstrapPage.homepage($scope);
    NProgress.done();
  }]);

  home.controller('TermsController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage ) {

    NProgress.start();
    bootstrapPage.terms($scope);
    NProgress.done();

  }]);

  home.controller('CalculatorController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage ) {

    NProgress.start();
    // bootstrapPage.terms($scope);
    NProgress.done();

  }]);

  home.controller('SupportController', ['$scope', 'sendRequest', 'bootstrapPage', 'Notification', function ($scope, sendRequest, bootstrapPage, Notification ) {

    NProgress.start();

    $scope.contactAdmin = () => {
      $scope.loading = true;

      sendRequest.postRequest('/send-message', $scope.msg)
      .then(function (rsp) {
        $scope.loading = false;

        console.log(rsp);
        if (rsp.data.status == 422) {
          Notification.error(rsp.data.message);
        }
        else if (rsp.status == 200) {
          $scope.sent = true;
          Notification.primary(rsp.data.message);
        }
      });


    };


    // bootstrapPage.terms($scope);
    NProgress.done();

  }]);

  home.controller('FAQController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage ) {

    NProgress.start();
      $scope.title = 'Frequently Asked Questions';
      bootstrapPage.faq($scope);
    NProgress.done();

  }]);
