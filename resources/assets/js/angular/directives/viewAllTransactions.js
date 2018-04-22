// EXAMPLE
// <transaction-play></transaction-play>


var url = `
<section class="ui segment red"  id="content-context" style="max-height: 60vh; overflow: auto;">
      <div class="ui search flex-center" style="justify-content:flex-end; margin-bottom: 15px;">
        <div class="ui icon input">
          <input class="prompt" type="text" placeholder="Search transactions..." ng-model="search">
          <i class="search icon"></i>
        </div>
        <div class="results"></div>
      </div>
      <div ng-show="!transactionrecord">
        <table class="ui  striped celled table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Type</th>
              <th>User</th>
              <th>Amount</th>
              <th>Channel</th>
              <th>Status</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>

            <tr ng-repeat="trans in transactions | filter : search" ng-class="{'negative' : trans.trans_type == 'Admin Correction'}">
              <td ng-click="viewTransactionRecord(trans)">{{ $index + 1 }}</td>
              <td>{{ trans.trans_type }}</td>
              <td>{{ trans.user.firstname }} {{ trans.user.lastname }}</td>
              <td>{{ trans.amount }}</td>
              <td>{{ trans.channel }}</td>
              <td>
                <div class="ui mini labeled button" tabindex="-1" ng-if="trans.trans_type == 'withdrawal' && trans.status == 'pending'"">
                  <div class="ui mini red button" ng-click="markAsPaid(trans)">
                    <i class="tags icon"></i> Mark as Paid
                  </div>
                  <a class="ui basic red left pointing label">
                    {{ trans.status }}
                  </a>
                </div>
                <div class="ui mini labeled button" tabindex="-1" ng-if="trans.trans_type == 'withdrawal' && trans.status != 'pending'"">
                  <div class="ui mini basic blue button">
                    <i class="thumbs up outline icon"></i>
                  </div>
                  <a class="ui basic left pointing blue label">
                    {{ trans.status }}
                  </a>
                </div>
              </td>
              <td>{{ trans.created_at | timeAgo }}</td>
            </tr>

          </tbody>
        </table>
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
              <td>Alt Phone Number</td>
              <td>{{ trans_record.user.phone2 }} </td>
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
              <td>{{ trans_record.amount }} </td>
            </tr>

            <tr>
              <td>Request Type</td>
              <td>
                <span ng-if="trans_record.amount > 1000 "> Cash </span>
                <span ng-if="trans_record.amount < 1000 "> Recharge Card </span>
              </td>
            </tr>

            <tr>
              <td>Balance Units</td>
              <td>{{ trans_record.user.available_units }} </td>
            </tr>

            <tr>
              <td>Total Purchsaed Units</td>
              <td>{{ trans_record.user.units_purchased }} </td>
            </tr>

          </tbody>
        </table>
      </div>

</section>

`;


angular.module('displayTransactions', []).directive('displayTransactions', ['$location', '$localStorage', '$sessionStorage', 'Notification', 'sendRequest', function ($location, $localStorage, $sessionStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/transactionPlayTemplate.php',
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      $scope.transactionrecord = false;

      $scope.markAsPaid = (transaction) => {
        console.log(transaction);
        sendRequest.postRequest(route_root + '/api/mark-transaction-as-paid', transaction)
                    .then( rsp => {
                      if (rsp.status == 200) {
                        transaction.status = 'Completed';
                        $scope.transactions_records = rsp.data.transactions_records;
                      }
                    });
      };

      $scope.viewTransactionRecord = (transaction) => {
        if (transaction.trans_type == 'purchase') {
          return;
        }
        $scope.trans_record = transaction;
        $scope.transactionrecord = true;
        // $scope.$parent.active = 'transactionRecord';
      };

      $scope.goBack = () => {
        $scope.transactionrecord = false;
        // $scope.$parent.active = 'allTransactions';

      };

      sendRequest.postRequest(route_root + '/api/get-all-transactions')
                  .then( rsp => {
                    if (rsp.status == 200) {
                      $scope.transactions = rsp.data.transactions;
                      NProgress.done();
                    }
                  });
    }]
  };
}]);
