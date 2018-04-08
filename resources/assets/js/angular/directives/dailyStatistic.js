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
      <div ng-show="!statistics">
        <div class="ui piled segment" style="min-height:400px;">
          <div class="grid-30 push-20">
            <h4 class="ui header dash_header">Choose a date</h4>
               <form class="ui form attached fluid segment">
                 <div class="field">


                   <datepicker date-format="MMMM d, y" date-max-limit="{{ today }}" datepicker-show="true" datepicker-toggle="false">
                     <input type="text" ng-model="date1">
                   </datepicker>


                 </div>
                  <div class="ui blue submit button push-30" style="margin-top:10px;" ng-click="getStatistics()">Retrieve Statistics</div>
                </form>
                <div class="ui bottom attached warning message">
                  <i class="icon help"></i>
                  Choose a date to retrieve the statistics
                </div>
          </div>
        </div>
      </div>

      <div ng-show="statistics" class="grid-50 prefix-25">
        <div class="ui teal buttons">
          <button class="ui labeled icon button" ng-click="goBack()">
            <i class="left chevron icon"></i>
            Go Back
          </button>
        </div>
        <table class="ui  table ">
        <h4 class="ui header dash_header">Date: </h4>

          <thead>
            <tr>
              <th>Section</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>New Users</td>
              <td>{{stats.new_users}}</td>
            </tr>
            <tr>
              <td>New Referrals</td>
              <td>{{ stats.new_referrals }} </td>
            </tr>
            <tr>
              <td>Top Gamer</td>
              <td>{{ stats.top_ganer.user.firstname }} {{ stats.top_ganer.user.lastname }} </td>
            </tr>
            <tr>
              <td>Online Payments</td>
              <td>{{ stats.online_payments }} </td>
            </tr>
            <tr>
              <td>Offline Payments</td>
              <td>{{ stats.offline_payments }} </td>
            </tr>
            <tr>
              <td>Number of Games</td>
              <td>{{ stats.number_of_games }} </td>
            </tr>
            <tr>
              <td>Number of Players</td>
              <td>{{ stats.total_num_of_players }} </td>
            </tr>
            <tr>
              <td>Online Payment Amount</td>
              <td>{{ stats.online_payments_amount }} </td>
            </tr>
            <tr>
              <td>Offline Payment Amount</td>
              <td>{{ stats.offline_payments_amount }} </td>
            </tr>
            <tr>
              <td>Payments by Earnings</td>
              <td>{{ stats.payments_by_earnings }} </td>
            </tr>
            <tr>
              <td>Admin Payment by Earning</td>
              <td>{{ stats.admin_payments_by_earnings }} </td>
            </tr>
          </tbody>
        </table>
      </div>



</section>

`;


angular.module('dailyStatistics', []).directive('dailyStatistics', ['Notification', 'sendRequest', function (Notification, sendRequest) {
	return {
		restrict: 'E',
		template: url,
		replace: true,
		link: (scope, element, attributes) => {

		},
		controller: ['$scope', ($scope) => {

			$scope.today = Date();

			$scope.getStatistics = () => {
				console.log($scope.date1);
				if (undefined == $scope.date1) {
					Notification.error('Pick a date');
				} else {
					sendRequest.postRequest(route_root + '/api/get-daily-statistics', $scope.date1)
						.then(rsp => {
							if (rsp.status == 200) {
								$scope.statistics = true;
								$scope.stats = rsp.data.stats;
							}
						});
				}
			};

      $scope.setKey = (key) => {
        $scope.cur = key;
      };

			$scope.goBack = () => {
				$scope.statistics = false;
			};

    }]
	};
}]);
