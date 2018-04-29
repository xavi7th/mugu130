// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="buyUnits" class="ui right floated horizontal list">
  <div class="ui vertical teal compact animated button" tabindex="-1" ng-click="openModal()">
    <div class="hidden content"><i class="shop icon"></i></div>
    <div class="visible content">
      Fund Account
    </div>
  </div>


  <div class="ui tiny modal buyUnits transition hidden">
      <div class="header">
        Input Amount
      </div>
      <div class="image content flex-center">
        <div class="ui form">
          <div class="inline field">
            <input type="number" placeholder="Minimum: ₦300" ng-model="requested_amount" ng-min="300">
          </div>
        </div>
      </div>
      <div class="actions  flex-center">
        <div class="ui black left deny button">
          Close
        </div>
        <div ng-class="{'ui positive right labeled icon button': true, 'disabled': !requested_amount}" ng-click="awardCredits()">
          Pay Online
          <i class="checkmark icon"></i>
        </div>
      </div>
      <div class="ui segments" id="info-images">
        <div class="ui segment">
        <p style="color:green"><i class="lock icon"></i>SSL Encryption Enabled</p>
          <p>
            <img src="/img/paywithcashenvoylogo.gif" alt="" />
          </p>
        </div>
        <div class="ui secondary segment">
          <p>
            <img src="/img/cashenvoy.png" alt="" />
          </p>
        </div>
        <div class="ui secondary segment" id="extra">
          <div class="ui small header">Pay via bank Deposit or Wire transfer</div>
          <p>
            <b>Account Name:</b> Tcom Wireless Nigeria
          </p>
          <p>
            <b>Account Number:</b> 1019040225 (United Bank for Africa)
          </p>
          <p>
            <b>  Account type:</b> Current
          </p>
          <p>
            <img src="/img/uba.jpg" alt="" />
          </p>

          <div class="ui positive message">
            <div class="header">
              NB:
            </div>
            <p>After payment, send your payment details to hello@fastplay24.com. Your account will be credited as soon as your payment is confirmed. If your account is not credited within 24 hours, send an email to hello@fastplay24.com.</p>
          </div>

          <div class="ui message">
            <div class="header">
              NB:
            </div>
            <p>When making payments, please ensure you confirm that the account number you pay into matches the one shown above as we will not be liable for any payments made to a bank account that is not ours.</p>
          </div>

        </div>
      </div>

    </div>

</section>
`;


angular.module('buyUnits', []).directive('buyUnits', ['Notification', 'sendRequest', function (Notification, sendRequest) {
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

      $scope.amt_per_unit = 1;

      $scope.openModal = () => {
        $('.ui.modal.buyUnits').modal({
            blurring: true,
            allowMultiple: false
          })
          .modal('show');
      };

      $scope.awardCredits = () => {

        sendRequest.postRequest('/user/credit-account', {'amt': $scope.requested_amount})
                 .then(function (rsp) {
                   if (rsp.status == 422) {
                     Notification.error({ message: 'No active game in progress', positionX: 'center'});
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.status) {
                       Notification.primary({ message: 'Units added to account', positionX: 'center'});
                       $scope.$parent.userdetails.available_units = $scope.$parent.userdetails.available_units + $scope.requested_amount;
                       $scope.requested_amount = null;
                     }
                   }
                 });

      };

    }]
  };
}]);
