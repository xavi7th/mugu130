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

    }]
  };
}]);
