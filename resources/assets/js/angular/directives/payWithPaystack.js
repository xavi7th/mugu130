// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="payWithPaystack" class="ui right floated horizontal list">
  <form action="/dashboard/save-order-and-pay" method="POST">
   <input type="hidden" name="amount" value="{{ requested_amount * 100 }}">
   <input type="hidden" name="_token" value="{{ CSRF_TOKEN }}">
   <button type="submit" ng-class="{'ui purple right labeled icon button': true, 'loading disabled':loading}" id="pay-now" title="Pay now">
     Pay Now
     <i class="credit card outline icon"></i>
   </button>
  </form>

</section>
`;

angular.module('payWithPaystack', []).directive('payWithPaystack', ['Notification', 'SweetAlert', 'sendRequest', 'CSRF_TOKEN', function (Notification, SweetAlert, sendRequest, CSRF_TOKEN) {
  return {
    restrict: 'E',
    template:url,
    replace: true,
    link: (scope, element)=>{
      var scriptTag = angular.element(document.createElement('script'));
        scriptTag.attr('charset', 'utf-8');
        scriptTag.attr('src', 'https://js.paystack.co/v1/inline.js');
        element.append(scriptTag);
        console.log(element);
    },
    controller: ['$scope', '$location',  ($scope, $location) => {

      $scope.CSRF_TOKEN = CSRF_TOKEN;

      $scope.saveOrderThenPayWithPaystack = () => {
        console.log(PAYSTACK_PUBLIC_KEY);

            $scope.loading = true;
            SweetAlert.swal({
               title: "Please wait.....",
               text: "Contacting Paystack payment gateway.",
               showCancelButton: false,
               showConfirmButton: false,
             });
             $scope.awardCredits()
                   .then(function (rsp) {
                     $scope.payWithPaystack();
                   },
                   function (err) {
                     SweetAlert.swal("Error", "Network Error. Please refresh the page and try again.", "error");
                   });
      };

      $scope.payWithPaystack = () => {
        console.log(PAYSTACK_PUBLIC_KEY);
            let fees = 0.017 * $scope.requested_amount;

            if ($scope.requested_amount > 2500) {
              fees = (0.017 * $scope.requested_amount) + 100;
            }

            var orderid = _.random(676764765, 544765545646456);
            var handler = PaystackPop.setup({
              // This assumes you already created a constant named
              // PAYSTACK_PUBLIC_KEY with your public key from the
              // Paystack dashboard. You can as well just paste it
              // instead of creating the constant
              key: PAYSTACK_PUBLIC_KEY,
              email: $scope.$root.userdetails.email,
              first_name: $scope.$root.userdetails.firstname,
              last_name: $scope.$root.userdetails.lastname,
              phone: $scope.$root.userdetails.phone1,
              amount: Math.ceil(($scope.requested_amount + fees) * 100),
              // ref: orderid,
              metadata: {
                  cartid: orderid,
                  orderid: orderid,
                  custom_fields: [ // to be displayed on paystack transaction page and paystack email.
                                {
                                  display_name: "Paid on",
                                  variable_name: "paid_on",
                                  value: 'Website'
                                },
                                {
                                  display_name: "Paid via",
                                  variable_name: "paid_via",
                                  value: 'Inline Popup'
                                },
                                {
                                  display_name: "User Details",
                                  variable_name: "user_details",
                                  value: $scope.$root.userdetails.firstname + ' ' + $scope.$root.userdetails.lastname + ': ' + $scope.$root.userdetails.phone1
                                },
                                {
                                  display_name: "User ID",
                                  variable_name: "user_id",
                                  value: $scope.$root.userdetails.id
                                },
                                {
                                  display_name: "Fees",
                                  variable_name: "fees",
                                  value: fees * 100
                                }
                                  ]
              },
              callback: function(response){
                SweetAlert.swal({
                   title: "Please wait.....",
                   text: "We are attempting to acknowledge your payment.",
                   icon: 'info',
                   showCancelButton: false,
                   showConfirmButton: false,
                 });


                // post to server to verify transaction before giving value
                sendRequest.postRequest('/user/credit-account?reference=' + response.reference)
                         .then(function (rsp) {
                           if (rsp.status == 200) {
                             if (rsp.data.verified) {

                               sendRequest.storeData('activeTransaction', true);

                               SweetAlert.swal('Success!', 'Transaction verified. Units added to account', 'success');

                                $scope.$root.userdetails.available_units += $scope.requested_amount;
                                $scope.requested_amount = null;
                               $location.path('/dashboard/order-successful');
                              } else {
                                SweetAlert.swal('Notice!', 'Automatic transction verification failed. Transaction will be manually verified and a sales rep will get in touch with you. Thank you.', 'warning');
                              }
                           }
                         });

              },
              onClose: function(){
                $scope.requested_amount = null;
                SweetAlert.swal('Error!', 'Transaction cancelled by user', 'error');
                // Notification.error('Transaction cancelled by user');
                location.reload();
              }
          });
          handler.openIframe();
          // Notification.warning({message:'Contacting payment gate way. Please wait...', delay:20000, replaceMessage:true});
      };

      $scope.awardCredits = () => {

        var data = {
          'amt': $scope.requested_amount,
          'trans_type': 'wallet funding',
          'status': 'pending',
        };

        return sendRequest.postRequest('/user/send-credit-account-request', data)
                 .then(function (rsp) {
                   if (rsp.status == 200) {
                     if (rsp.data.status) {
                       return true;
                     }
                   }
                 });

      };

    }]
  };
}]);
