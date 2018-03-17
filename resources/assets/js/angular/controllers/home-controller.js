
  home.controller('HomeController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage ) {
    NProgress.start();

    var getPageDetails = function () {
      sendRequest.request('/api/get-home-page-details')
                .then(function (rsp) {
                  // console.log(rsp);
                  if (rsp.slides) {
                    $scope.slides = rsp.slides;
                    NProgress.done();
                  }
                  if (rsp.news_items) {
                    $scope.news_items = rsp.news_items;
                    NProgress.done();
                  }
                  if (rsp.team_members) {
                    $scope.team_members = rsp.team_members;
                    NProgress.done();
                  }

                  else {
                    // Notification.error({ message: 'There was a '})
                  }
                });
    };

    getPageDetails();

    bootstrapPage.homepage($scope);
  }]);

  home.controller('AboutController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage ) {

    $scope.title = "About Us";
    NProgress.start();
    var getPageDetails = function () {
      sendRequest.request('/api/get-about-page-details')
                .then(function (rsp) {
                  // console.log(rsp);
                  if (rsp.team_members) {
                    $scope.team_members = rsp.team_members;
                    NProgress.done();
                  }


                  else {
                    // Notification.error({ message: 'There was a '})
                  }
                });
    };

    getPageDetails();
    bootstrapPage.homepage($scope);

  }]);

  home.controller('FAQController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage ) {

    $scope.title = "FAQ";
    NProgress.start();
    bootstrapPage.homepage($scope);
    NProgress.done();
  }]);

  home.controller('StartGuideController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage ) {

    $scope.title = "Start Guide for members";
    NProgress.start();
    bootstrapPage.homepage($scope);
    NProgress.done();
  }]);

  home.controller('BuySellCryptoController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage ) {

    $scope.title = "Buy and Sell Crypto";
    NProgress.start();
    var getPageDetails = function () {
      sendRequest.request('/api/get-crypto-page-details')
                .then(function (rsp) {
                  if (rsp.crypto_sites) {
                    $scope.crypto_sites = rsp.crypto_sites;
                    NProgress.done();
                  }


                  else {
                    // Notification.error({ message: 'There was a '})
                  }
                });
    };

    getPageDetails();


    bootstrapPage.homepage($scope);
    NProgress.done();
  }]);

  home.controller('AffilliatesController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage ) {

    $scope.title = "Hello from rentals controller.js";
    NProgress.start();
    bootstrapPage.homepage($scope);
  }]);

  home.controller('RepsController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage ) {

    $scope.title = "Hello from rentals controller.js";
    NProgress.start();
    bootstrapPage.homepage($scope);
    NProgress.done();
  }]);

  home.controller('SecurityController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage ) {

    $scope.title = "Security";
    NProgress.start();
    bootstrapPage.homepage($scope);
    NProgress.done();
  }]);

  home.controller('ContactController', ['$scope', 'bootstrapPage', 'sendRequest', function ($scope, bootstrapPage, sendRequest ) {

    $scope.title = "Support Desk";
    NProgress.start();
    $scope.contactSupport = function () {
      // console.log();
      sendRequest.postRequest('/api/contact-support', $scope.contact)
                .then(function (rsp) {

                  if (rsp.status == 200) {
                    if (rsp.data.status) {
                      $scope.contact = null;
                      $scope.messagesent = true;
                      // $scope.support.$setPristine();
                    } else {
                      $scope.messagenotsent = true;
                      $scope.support.$setPristine();
                    }
                  } else {
                    // Notification.error({ message: 'There was a '})
                    $scope.messagenotsent = true;
                  }
                  NProgress.done();
                });
    };


    bootstrapPage.homepage($scope);
    NProgress.done();
  }]);

  home.controller('RegisterController', ['$scope', '$location', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, $location, Notification, sendRequest, bootstrapPage ) {

    NProgress.start();
    $scope.title = "Create Account";
    $scope.userdetails = {referrer : refdetails};
    $scope.registerAccount = function () {
      $scope.submitted = true;

      if (angular.isUndefined($scope.userdetails)) {
        Notification.error({ message: 'All fields required', positionX: 'center' });
      }
      else {
        sendRequest.postRequest('/register', $scope.userdetails)
                  .then(function (rsp) {
                    if (rsp.status == 422) {
                      $scope.errors = rsp.data.errors;
                      Notification.error({ message: 'The given data was invalid', positionX: 'center' });
                      $scope.submitted = false;

                    }
                    else if (rsp.status == 200) {
                      $scope.details = null;
                      Notification.success({ message: 'Registration successful', positionX: 'center' });
                      window.location.replace('/login');
                    }
                    NProgress.done();
                  });
      }

    };





    bootstrapPage.homepage($scope);
    NProgress.done();

  }]);

  home.controller('LoginController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage ) {

    NProgress.start();
    $scope.title = "Begin your session";
    let token = document.head.querySelector('meta[name="csrf-token"]');
    $scope.token = token.content;
    $scope.errors = undefined == errors ? null : _.isEmpty(JSON.parse(errors)) ? null : JSON.parse(errors);

    bootstrapPage.homepage($scope);
    NProgress.done();
  }]);
