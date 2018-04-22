// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="makeWithdrawal" class="ui right floated horizontal  list">
  <div class=" ui vertical animated blue compact button" tabindex="-1" ng-click="openModal()">
    <div class="hidden content"><i class="icon money bill alternate outline"></i></div>
    <div class="visible content">
      Request Withdrawal
    </div>
  </div>


  <div class="ui tiny modal makeWithdrawal transition hidden">
      <div class="header">
        Enter an Amount
      </div>
      <div class="image content flex-center">
        <div class="ui form">
          <div class="inline field">
            <input type="number" placeholder="Max {{ $parent.userdetails.available_units | currency }}" ng-model="requested_amount" ng-max="$parent.userdetails.available_units" ng-min="150">
          </div>
        </div>
      </div>
      <div class="image content flex-center">
      <div class="ui icon mini message">
        <i class="inbox icon"></i>
        <div class="content">
          <div class="header">
            NOTE:
          </div>
          <p> For withdrawals below 1000, a service fee of ₦50 will be deducted. </p>
          <p> While for withdrawals above 1000, an additional service fee of ₦50 for every ₦5000 will be deducted </p>
        </div>
      </div>
      </div>
      <div class="actions  flex-center">
        <div class="ui black left deny button">
          Bail
        </div>
        <div ng-class="{'ui positive right labeled icon button': true, 'disabled': !requested_amount}" ng-click="requestWithdrawal()">
          Yep, proceed!
          <i class="checkmark icon"></i>
        </div>
      </div>
    </div>

</section>
`;


angular.module('makeWithdrawal', []).directive('makeWithdrawal', ['Notification', 'sendRequest', function (Notification, sendRequest) {
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

      $scope.openModal = () => {
        $('.ui.modal.makeWithdrawal').modal({
            blurring: true
          })
          .modal('show');
      };

      $scope.requestWithdrawal = () => {

        sendRequest.postRequest('/user/request-withdrawal', {'amt': $scope.requested_amount})
                 .then(function (rsp) {
                   console.log(rsp);
                   console.log($scope);
                   if (rsp.status == 422) {
                     Notification.error(rsp.data.message);
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.status) {
                       if ($scope.requested_amount < 1000) {
                         Notification.primary('Amount requested will be sent a recharge card to ' + $scope.$parent.userdetails.phone1);
                       }
                       else {
                         Notification.primary({ message: 'Amount requested will be sent to account number ' + $scope.$parent.userdetails.acct_no, positionX: 'center'});
                       }

                       $scope.$parent.userdetails.available_units = $scope.$parent.userdetails.available_units - $scope.requested_amount;
                       $scope.requested_amount = null;
                     }
                   }
                 });

      };

    }]
  };
}]);
