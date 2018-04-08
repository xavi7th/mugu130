// EXAMPLE
// <game-play></game-play>


var url = `
<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">
  <style>
    ._720kb-datepicker-calendar{
      left:105%;
      top:-40%;
      visibility:visible;
    }
  </style>
      <div ng-show="!daily_log">
        <div class="ui piled segment" style="min-height:400px;">
          <div class="grid-30 push-20">
            <h4 class="ui header dash_header">Choose a date</h4>
               <form class="ui form attached fluid segment">
                 <div class="field">


                   <datepicker date-format="MMMM d, y" date-max-limit="{{ today }}" datepicker-show="true" datepicker-toggle="false">
                     <input type="text" ng-model="date1">
                   </datepicker>


                 </div>
                  <div class="ui blue submit button push-30" style="margin-top:10px;" ng-click="getDailyLog()">Retrieve Data</div>
                </form>
                <div class="ui bottom attached warning message">
                  <i class="icon help"></i>
                  Choose a date to retrieve the logs
                </div>
          </div>
        </div>
      </div>

      <div ng-show="daily_log">
        <div class="ui teal buttons">
          <button class="ui labeled icon button" ng-click="goBack()">
            <i class="left chevron icon"></i>
            Go Back
          </button>
        </div>
        <table class="ui  striped celled table">
          <thead>
            <tr>
              <th colspan="10">
                <div class="ui right floated pagination menu">
                  <a class="icon item positive">CHOOSE A GAME SESSION TO VIEW DETAILS</a>
                  <a class="item" ng-repeat="(key, value) in daily_log" ng-click="setKey(key)">{{ key }}</a>
                </div>
              </th>
            </tr>
            <tr>
              <th>S/N</th>
              <th>Status</th>
              <th>Session</th>
              <th>Player Name</th>
              <th>Payment Status</th>
              <th>Score</th>
              <th>Earning</th>
              <th>Position</th>
              <th>Started At</th>
              <th>Finished At</th>
            </tr>
          </thead>
          <tbody>

            <tr ng-repeat="game in daily_log[cur]">
              <td>{{ $index + 1 }}</td>
              <td>{{ game.status }}</td>
              <td>{{ game.game_id }}</td>
              <td>{{ game.user.firstname }} {{ game.user.lastname }}</td>
              <td>{{ game.payment_status }}</td>
              <td>{{ game.score }}</td>
              <td>{{ game.earning }}</td>
              <td>{{ game.position }}</td>
              <td>{{ game.created_at }}</td>
              <td>{{ game.ended_at }}</td>
            </tr>

          </tbody>
          <tfoot>
            <tr>
              <th colspan="10">
                <div class="ui right floated pagination menu">
                  <a class="icon item">CHOOSE A GAME SESSION TO VIEW DETAILS</a>

                  <a class="item" ng-repeat="(key, value) in daily_log" ng-click="setKey(key)">{{ key }}</a>
                </div>
              </th>
            </tr>
          </tfoot>
        </table>
      </div>



</section>

`;


angular.module('dailyGameLog', []).directive('dailyGameLog', ['Notification', 'sendRequest', function (Notification, sendRequest) {
	return {
		restrict: 'E',
		template: url,
		replace: true,
		link: (scope, element, attributes) => {

		},
		controller: ['$scope', ($scope) => {

			$scope.today = Date();

			$scope.getDailyLog = () => {
				console.log($scope.date1);
				if (undefined == $scope.date1) {
					Notification.error('Pick a date');
				} else {
					sendRequest.postRequest(route_root + '/api/get-logs-by-day', $scope.date1)
						.then(rsp => {
							if (rsp.status == 200) {
								$scope.daily_log = true;
								$scope.daily_log = rsp.data.daily_log;

                //set the current log displayed
                $scope.cur = Object.keys(rsp.data.daily_log)[0];
							}
						});
				}
			};

      $scope.setKey = (key) => {
        $scope.cur = key;
      };

			$scope.goBack = () => {
				$scope.daily_log = false;
			};

    }]
	};
}]);
