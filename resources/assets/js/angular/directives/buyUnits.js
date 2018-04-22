// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="buyUnits" class="ui right floated horizontal list">
  <div class="ui vertical teal compact animated button" tabindex="-1" ng-click="openModal()">
    <div class="hidden content"><i class="shop icon"></i></div>
    <div class="visible content">
      Buy Units
    </div>
  </div>


  <div class="ui mini modal buyUnits transition hidden">
      <div class="header">
        Select an Amount
      </div>
      <div class="image content flex-center">
        <div class="ui form">
          <div class="inline field">
            <input type="number" placeholder="{{ amt_per_unit  | currency }} / unit" ng-model="requested_amount" ng-min="300">
          </div>
        </div>
      </div>
      <div class="actions  flex-center">
        <div class="ui black left deny button">
          Bail
        </div>
        <div ng-class="{'ui positive right labeled icon button': true, 'disabled': !requested_amount}" ng-click="awardCredits()">
          Yep, proceed!
          <i class="checkmark icon"></i>
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
            blurring: true
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
