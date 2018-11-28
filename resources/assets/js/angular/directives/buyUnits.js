// EXAMPLE uploadPostImage
// <game-play></game-play>

var url = `
<section id="buyUnits" class="ui horizontal list">

  <div id="form" class="ui segments animate fade" ng-show="makeDeposit == 1">

    <div id="session-menu" class="ui one item menu">
      <a class="item" style="background-color: #03A9F4; color:#FFF;">PAY ONLINE</a>
    </div>

    <div class="ui segment" style="padding-bottom: 30px;">
      <div class="image content flex-center">
        <div class="ui form">
          <div class="field">
            <input type="number" placeholder="Minimum: ₦500 | Maximum: ₦5,000" ng-model="requested_amount" ng-min="500" ng-max="5000" style="width: 270px;">
          </div>
          <div class="actions  flex-center row" >
            <div ng-class="['ui green left button', {'disabled': !requested_amount}]" ng-click="switch(2)">Pay Online</div>
          </div>
        </div>
      </div>

      <div class="ui segments" id="info-images">
        <div class="ui segment">
          <p style="color:green"><i class="lock icon"></i>SSL Encryption Enabled</p>
          <p></p>
        </div>
      </div>
    </div>
  </div>

  <div class="ui segments animate translate-in" ng-if="makeDeposit == 2" id="info-images">
    <div class="ui segment">
      <p><b>Amount:</b> {{ requested_amount | currency }}</p>
      <p><b>Charge:</b> {{ fees | currency }}</p>
      <p><b>Payment channel:</b> Paystack Limited</p>
      <p><b>Payment Due:</b> {{ requested_amount + fees | currency }}</p>
      <p><b>Status:</b> <span style="color:gold">Pending</span></p>
    </div>
    <div class="ui segment">
      <p style="color:green"><i class="lock icon"></i>SSL Encryption Enabled</p>
      <div class="actions  flex-center row" >
        <pay-with-paystack></pay-with-paystack>
        <div class="ui red left button" ng-click="switch(1)">Go back</div>
      </div>
    </div>
    <div class="ui secondary segment">
      <p>
        <img src="/img/paystack_preview.png" alt="" />
      </p>
    </div>
  </div>


</section>
`;


angular.module('buyUnits', []).directive('buyUnits', ['$timeout', 'Notification', 'sendRequest', function ($timeout, Notification, sendRequest) {
  return {
    restrict: 'E',
    scope:{},
    template:url,
    replace: true,
    controller: ['$scope',  ($scope) => {

      $scope.amt_per_unit = 1;
      $scope.makeDeposit = 1;

      $scope.switch = (num) => {
        $scope.fees = 0.017 * $scope.requested_amount;

        if ($scope.requested_amount > 2500) {
          $scope.fees = (0.017 * $scope.requested_amount) + 100;
        }
          $timeout(function () {
            $scope.makeDeposit = num;
          }, 500);
      };

    }]
  };
}]);
