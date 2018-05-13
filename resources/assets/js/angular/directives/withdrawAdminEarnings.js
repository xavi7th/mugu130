// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="withdrawAdminEarnings" class="ui left floated horizontal  list" style="margin-bottom: 45px;">

  <button class="ui compact right floated violet button" ng-click="transferEarnings()">
    <i class="icon credit card amazon pay"></i>
    Withdraw Admin Earnings
  </button>


</section>
`;


angular.module('withdrawAdminEarnings', []).directive('withdrawAdminEarnings', ['$route', 'Notification', 'sendRequest', function ($route, Notification, sendRequest) {
  return {
    restrict: 'E',
    scope:{
      // dest : '=',
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      $scope.transferEarnings = () => {
        sendRequest.postRequest(route_root + '/api/withdraw-admin-earnings')
                  .then(rsp => {
                    if (rsp.status == 200) {
                      if (rsp.data.status) {
                        Notification.success({message: 'All Earnings marked as withdrawn', positionX: 'center'});
                        $route.reload();
                      }
                    }

                  });
      };

    }]
  };
}]);
