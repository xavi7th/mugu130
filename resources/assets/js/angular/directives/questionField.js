// EXAMPLE
// <game-play></game-play>


var url = `
<tr>
  <td>{{ $index + 1 }}</td>
  <td>{{ transaction.created_at | timeAgo}}</td>
  <td>{{ transaction.trans_type }}</td>
  <td>{{ transaction.amount | currency }}</td>
</tr>

`;


angular.module('questionField', []).directive('questionField', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    template:url,
    replace: true,
    scope: {

    },
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      // $scope.displayResults = () => {
      //   sendRequest.postRequest('/user/end-exam', $scope.user_questions)
      //            .then(function (rsp) {
      //              delete $sessionStorage.user_questions;
      //              delete $sessionStorage.extra;
      //              delete $sessionStorage.options;
      //
      //              if (rsp.status == 422) {
      //                Notification.error({ message: 'No active game in progress', positionX: 'center'});
      //                $location.path('/dashboard');
      //              }
      //              else if (rsp.status == 200) {
      //                if (rsp.data.status) {
      //                  sendRequest.storeData('user_score', rsp.data.user_score);
      //                  $localStorage.user_score = rsp.data.user_score;
      //                  $location.path('/dashboard/display-results');
      //                }
      //              }
      //            });
      // };

    }]
  };
}]);
