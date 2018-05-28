// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="buyUnits" class="ui right floated horizontal list">
  <div class="ui vertical blue compact animated button" tabindex="-1" ng-click="openModal()">
    <div class="hidden content"><i class="shop icon"></i></div>
    <div class="visible content">
      Fund Wallet
    </div>
  </div>


  <div class="ui tiny modal buyUnits transition hidden">
      <div class="header">
        Fund Wallet: Input Amount
      </div>
      <div class="image content flex-center">
        <div class="ui form">
          <div class="inline field">
            <input type="number" placeholder="Minimum: ₦300" ng-model="requested_amount" ng-min="300">
          </div>
        </div>
      </div>
      <div class="actions  flex-center">
        <pay-with-paystack></pay-with-paystack>
        <div class="ui black left deny button">
        Close
        </div>
      </div>
      <div class="ui segments" id="info-images">
        <div class="ui segment">
        <p style="color:green"><i class="lock icon"></i>SSL Encryption Enabled</p>
          <p>

          </p>
        </div>
        <div class="ui secondary segment">
          <p>
            <img src="/img/paystack_preview.png" alt="" />
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
            <p>After payment, send your payment details to <a href="mailto:hello@fastplay24.com">hello@fastplay24.com</a>. Your account will be credited as soon as your payment is confirmed. If your account is not credited within 24 hours, send an email to <a href="mailto:hello@fastplay24.com">hello@fastplay24.com</a> or use the <a href="/support-center" target="_blank">support form</a>.</p>
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


angular.module('buyUnits', []).directive('buyUnits', ['$timeout', 'Notification', 'sendRequest', function ($timeout, Notification, sendRequest) {
  return {
    restrict: 'E',
    scope:{},
    template:url,
    replace: true,
    controller: ['$scope',  ($scope) => {

      $scope.amt_per_unit = 1;

      $scope.openModal = () => {
        $('.ui.modal.buyUnits')
          .modal({
            allowMultiple: false,
            centered: false,
            blurring: true,
            onDeny    : function(){
                 return true;

               },
              onHide    : function(){
                var remove = () => {
                  // $('.ui.modal.buyUnits')[1].remove();
                };
                setTimeout(remove, 1000);
                // return false;
              },
              onApprove : function() {
                return true;
              }
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

      $scope.$on('$routeChangeStart', function() {
        $timeout(function () {
          if ($('.ui.modal.buyUnits').length > 1) {
            //remove extras
            $('.ui.modal.buyUnits')[1].remove();
          }
        }, 0);
      });

    }]
  };
}]);
