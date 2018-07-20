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
        Fund Wallet
      </div>

      <div id="form" class="ui segments">
        <div class="ui segment">
          <div id="session-menu" class="ui two item menu">
          <a class="item active" data-tab="online-transfer" style="background-color: #03A9F4; color:#FFF;">PAY ONLINE</a>
          <a class="item" data-tab="bank-transfer">BANK TRANSFER</a>
          </div>
        </div>

        <div class="ui segment" style="padding-bottom: 30px;">
          <div class="ui tab active" data-tab="online-transfer">
            <div class="image content flex-center">
              <div class="ui form">
                <div class="inline field" style="text-align: center;">
                  <input type="number" placeholder="Minimum: ₦500" ng-model="requested_amount" ng-min="500">
                </div>
                <div class="actions  flex-center">
                  <pay-with-paystack></pay-with-paystack>
                  <div class="ui black left deny button">
                  Close
                  </div>
                </div>
                <div class="ui message">
                  <div class="header">
                    NB:
                  </div>
                  <p>This transaction will have attract a charge of 1.7%. Also, transactions ranging from ₦2,500 and above will attract an additional fixed charge of ₦100.</p>
                </div>
              </div>
            </div>

            <div class="ui segments" id="info-images">
              <div class="ui segment">
                <p style="color:green"><i class="lock icon"></i>SSL Encryption Enabled</p>
                <p></p>
              </div>
              <div class="ui secondary segment">
                <p>
                  <img src="/img/paystack_preview.png" alt="" />
                </p>
              </div>
            </div>
          </div>

          <div class="ui tab" data-tab="bank-transfer">
            <div class="ui segment" id="extra">
              <div class="ui small header">Pay via bank Deposit or Wire transfer(Minimum ₦500)</div>
              <p>
                <b style="font-weight: 900; margin-right:5%; color:red; font-size:2em;">!</b>  Use your email as depositor's name or transaction description
              </p>
              <p>
                <b>Account Name:</b> Tcom Wireless Nigeria
              </p>
              <p>
                <b>Account Number:</b> 1019040225 (United Bank for Africa)
              </p>
              <p>
                <b>  Account type:</b> Current
              </p>
              <p style="width: 70px;">
                <img style="min-width: 100%;" src="/img/uba.jpg" alt="" />
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
        $('#session-menu .item').tab();
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
                };
                setTimeout(remove, 1000);
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
