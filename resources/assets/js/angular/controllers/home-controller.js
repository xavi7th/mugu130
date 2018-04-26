
  home.controller('HomeController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage ) {
    NProgress.start();


    var getPageDetails = function () {
      sendRequest.request('/api/get-home-page-details')
                .then(function (rsp) {
                  console.log(rsp);
                  // if (rsp.slides) {
                  //   $scope.slides = rsp.slides;
                  //   NProgress.done();
                  // }
                  // if (rsp.news_items) {
                  //   $scope.news_items = rsp.news_items;
                  //   NProgress.done();
                  // }
                  // if (rsp.team_members) {
                  //   $scope.team_members = rsp.team_members;
                  //   NProgress.done();
                  // }
                  //
                  // else {
                  //   // Notification.error({ message: 'There was a '})
                  // }
                });
    };
    // getPageDetails();

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
