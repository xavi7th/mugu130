// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = `
<section id="verifyAccount" class="ui left floated horizontal  list">
  <style>
    .tooltip {
      position: relative;
      display: inline-block;
      border-bottom: 1px dotted black;
    }

    .tooltip .tooltiptext {
      visibility: hidden;
      width: 120px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 0;

      /* Position the tooltip */
      position: absolute;
      z-index: 1;
    }

    .tooltip:hover .tooltiptext {
      visibility: visible;
    }

  </style>
  <div class="ui circular green labels " ng-if="userdetails.verified" title="Verified Account" >
    <a class="ui label tooltip">
      <i class="check circle icon " style="margin: 0;"></i>
      <span class="tooltiptext">Account verified</span>
    </a>
  </div>

  <div class="ui labeled button" tabindex="-1" ng-click="sendVerificationMai()" ng-if="!userdetails.verified">
  <!--
    <div class="ui red label right pointing" >
      <i class="exclamation triangle icon"></i>
    </div>
    <a class="ui basic red label ng-binding tooltip">
      Unverified
      <span class="tooltiptext">Account not yet verified.</span>
    </a>
    -->
  </div>
</section>
`;


angular.module('verifyAccount', []).directive('verifyAccount', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    // scope:{
    //   // dest : '=',
    //   // mdl:'=',
    //   // attr: '=',
    //   // altText: '='
    // },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template:url,
    replace: true,
    link: (scope, element, attributes) => {

		},
    controller: ['$scope',  ($scope) => {

      $scope.sendVerificationMail = () => {

        Notification.warning({message: 'Attempting to send verification email...', delay: 2000});

        sendRequest.postRequest('/user/send-verification-mail', $scope.userdetails.email)
                 .then(function (rsp) {
                   if (rsp.status == 422 || rsp.status == 408) {
                     Notification.error({message: rsp.data.message, delay : 1500, replace : true});
                   }
                   else if (rsp.status == 200) {
                     if (rsp.data.message) {
                        // Notification.success('Verification mail sent to ' + $scope.userdetails.email);
                        Notification.success({message: rsp.data.message, replace: true});
                     }
                   }
                 });

      };

    }]
  };
}]);
