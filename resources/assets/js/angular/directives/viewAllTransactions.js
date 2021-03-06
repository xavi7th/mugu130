var url = `
<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">
      <div class="ui segment compact left floated">
        <div class="ui horizontal statistic">
            <div class="value">
              {{ total }}
            </div>
            <div class="label">
              Transactions
            </div>
          </div>
      </div>
      <br>
      <div class="ui search flex-center" style="justify-content:flex-end; margin-bottom: 15px;">
        <button ng-class="['ui green button', {'loading':searching}]" ng-click="performDatabaseSearch('pending')">View All Pending Cashouts</button>
        <button ng-class="['ui blue button', {'loading':searching}]" ng-click="performDatabaseSearch('approved')">View All Approved Cashouts</button>
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Search transactions..." ng-model="search">
          <i class="search icon"></i>
        </div>
      </div>


      <div ng-show="!transactionrecord">
        <table class="ui  striped celled table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Type</th>
              <th>User</th>
              <th>Amount</th>
              <th>Charges</th>
              <th>Channel</th>
              <th>Status</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat="trans in data | filter : search" ng-class="['animate translate-in', {'negative' : trans.trans_type == 'Admin Correction'}]" ng-show="!loading">
              <td ng-click="viewTransactionRecord(trans)">{{ trans.id }}</td>
              <td ng-click="viewTransactionRecord(trans)" title="click to view details">{{ trans.trans_type }} {{ trans.ref_no['agent'] ? 'by ' + trans.ref_no['agent']['firstname'] : null }}</td>
              <td ng-click="viewTransactionRecord(trans)" title="click to view details">{{ trans.user.firstname }} {{ trans.user.lastname }}</td>
              <td ng-if="trans.amount > 0">{{ trans.amount | currency }}</td>
              <td ng-if="trans.amount < 0">₦{{ trans.amount }}.00</td>
              <td>{{ trans.charges | currency }}</td>
              <td>{{ trans.channel }}</td>
              <td>
                <div class="ui mini labeled button" tabindex="-1" ng-if="trans.trans_type == 'withdrawal' && trans.status == 'pending'">
                  <div ng-class="['ui mini red button', {'loading':loading}]" ng-click="markAsPaid(trans)">
                    <i class="tags icon"></i> Mark as Paid
                  </div>
                  <a class="ui basic red left pointing label">
                    {{ trans.status }}
                  </a>
                </div>
                <div class="ui mini labeled button" tabindex="-1" ng-if="trans.trans_type == 'withdrawal' && trans.status != 'pending'">
                  <div class="ui mini basic blue button">
                    <i class="thumbs up outline icon"></i>
                  </div>
                  <a class="ui basic left pointing blue label">
                    {{ trans.status }}
                  </a>
                </div>
                <div class="ui mini left labeled button" tabindex="-1" ng-if="trans.trans_type !== 'withdrawal'">
                  <a class="ui basic pointing label">
                    {{ trans.status }}
                  </a>
                </div>
              </td>
              <td>{{ trans.created_at | timeAgo }}</td>
            </tr>
          </tbody>
          <serv-side-nav url="getUsersUrl" style="display:table-footer-group;" ng-if="getUsers"></serv-side-nav>
        </table>
        <div ng-show="loading" class="animate fade">
          <div class="ui segment"  style="min-height: 300px;">
            <div class="ui active inverted dimmer">
              <div class="ui text loader">Loading</div>
            </div>
            <p></p>
          </div>
        </div>
      </div>

      <div ng-show="transactionrecord" class="grid-80 prefix-10">

        <div class="ui teal buttons">
          <button class="ui labeled icon button" ng-click="goBack()">
            <i class="left chevron icon"></i>
            Go Back
          </button>
        </div>
        <table class="ui  striped celled table">
          <thead>
            <tr>
              <th>Detail</th>
              <th>Value</th>

            </tr>
          </thead>
          <tbody>

            <tr>
              <td>User Name</td>
              <td>{{ trans_record.user.firstname }} {{ trans_record.user.lastname }} </td>
            </tr>

            <tr>
              <td>Email</td>
              <td>{{ trans_record.user.email }} </td>
            </tr>

            <tr>
              <td>Phone Number</td>
              <td>{{ trans_record.user.phone1 }} </td>
            </tr>

            <tr>
              <td>Phone Network</td>
              <td>{{ trans_record.user.network | uppercase }} </td>
            </tr>

            <tr>
              <td>Bank</td>
              <td>{{ trans_record.user.bank }} </td>
            </tr>

            <tr>
              <td>Account Number</td>
              <td>{{ trans_record.user.acct_no }} </td>
            </tr>

            <tr>
              <td>Account Type</td>
              <td>{{ trans_record.user.acct_type }} </td>
            </tr>

            <tr>
              <td>Requested Amount</td>
              <td>{{ trans_record.amount | currency }} </td>
            </tr>

            <tr>
              <td>Request Type</td>
              <td>
                <span ng-if="trans_record.amount > 929 "> Cash </span>
                <span ng-if="trans_record.amount <= 929 "> Recharge Card </span>
              </td>
            </tr>

            <tr>
              <td>Balance Units</td>
              <td>{{ trans_record.user.available_units | currency }} </td>
            </tr>

            <tr>
              <td>Total Purchsaed Units</td>
              <td>{{ trans_record.user.units_purchased | currency }} </td>
            </tr>

            <tr>
              <td>Twitter</td>
              <td> <a ng-href="{{ 'https://' + trans_record.user.twitter }}" target="_blank">{{ trans_record.user.twitter }}</a> </td>
            </tr>

            <tr>
              <td>Telegram</td>
              <td> <a ng-href="{{ trans_record.user.telegram }}">{{ trans_record.user.telegram }}</a> </td>
            </tr>

            <tr>
              <td>Facebook</td>
              <td> <a ng-href="{{ 'https://' + trans_record.user.facebook }}" target="_blank">{{ trans_record.user.facebook }}</a> </td>
            </tr>

            <tr>
              <td>Instagram</td>
              <td> <a ng-href="{{ 'https://' + trans_record.user.instagram }}" target="_blank">{{ trans_record.user.instagram }}</a> </td>
            </tr>

          </tbody>
        </table>
      </div>

</section>

`

angular.module('displayTransactions', []).directive('displayTransactions', [
	'sendRequest',
	function(sendRequest) {
		return {
			restrict: 'E',
			// templateUrl:'angular/directive-templates/transactionPlayTemplate.php',
			template: url,
			replace: true,
			link: (scope, element, attributes) => {},
			controller: [
				'$scope',
				'$timeout',
				($scope, $timeout) => {
					$scope.transactionrecord = false
					$scope.getUsers = true
					$scope.getUsersUrl = '/api/get-all-transactions'

					$scope.markAsPaid = transaction => {
						$scope.loading = true
						sendRequest.postRequest(route_root + '/api/mark-transaction-as-paid', transaction).then(rsp => {
							if (rsp.status == 200) {
								transaction.status = 'Completed'
								$scope.transactions_records = rsp.data.transactions_records
								$scope.loading = false
							}
						})
					}

					$scope.performDatabaseSearch = searchPhrase => {
						$scope.searching = true
						$scope.getUsers = false
						console.log($scope.getUsersUrl)
						if (searchPhrase == 'pending') {
							$scope.getUsersUrl = '/api/database-search/transaction?details=pending'
						} else if (searchPhrase == 'approved') {
							$scope.getUsersUrl = '/api/database-search/transaction?details=approved'
						}

						$timeout(() => {
							$scope.getUsers = true
						}, 500)

						console.log($scope.getUsersUrl)
					}

					$scope.viewTransactionRecord = transaction => {
						if (transaction.trans_type != 'withdrawal') {
							return
						}
						$scope.trans_record = transaction
						$scope.transactionrecord = true
						// $scope.$parent.active = 'transactionRecord';
					}

					$scope.goBack = () => {
						$scope.transactionrecord = false
						// $scope.$parent.active = 'allTransactions';
					}
				},
			],
		}
	},
])
