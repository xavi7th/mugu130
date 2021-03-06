var url = `
<div ng-click="showPlayers()">
  <ng-transclude></ng-transclude>
  <div class="ui modal players{{game}} transition hidden">
      <div class="header">
        Top Winners
      </div>
      <div class="content flex-center">
        <div class="actions  flex-center">
          <div class="ui black left deny button">
            Close
          </div>
        </div>
        <table class="ui red fixed single line striped celled table" style="text-align: center;">
          <thead>
            <tr>
              <th colspan="2">Game ID: {{ top_ten[0].game.id }}</th>
              <th colspan="3">Number of Players: {{ top_ten[0].game.num_of_players }}</th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Score</th>
              <th>Finish Time</th>
              <th>Earning</th>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat="record in top_ten">
              <th style="padding:5px 0;">{{ record.user.firstname }}</th>
              <th style="padding:5px 0;">{{ record.position || 'N/A' }}</th>
              <th style="padding:5px 0;">{{ record.score }}</th>
              <th style="padding:5px 0;">{{ record.ended_at }} </th>
              <th style="padding:5px 0;">{{ record.earning }}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="actions  flex-center">
        <div class="ui black left deny button">
          Close
        </div>
      </div>
    </div>
</div>
`;


angular.module('viewTopTenPlayers', []).directive('viewTopTenPlayers', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'A',
    scope:{
      game : '='
    },
    template:url,
    replace: true,
    transclude:true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      $scope.showPlayers = () => {
        $('.ui.modal.players'+ $scope.game)
          .modal({
            allowMultiple: false,
            centered: false,
            blurring: true,
            onDeny    : function(){
                 return true;
               },
              onHide    : function(){
                var remove = () => {
                };
                setTimeout(remove, 1000);
              },
              onApprove : function() {
                return true;
              }
            })
          .modal('show');
        sendRequest.request('user/get-exam-top-ten/' + $scope.game)
                 .then( data => {
                     $scope.top_ten = data.top_ten;
                 });
      };

    }]
  };
}]);
