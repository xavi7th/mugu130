// EXAMPLE uploadPostImage
// <game-play></game-play>

angular.module('confirmAction', []).directive('confirmAction', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'A',
    transclude: true,
    template: "<div ng-transclude></div>",
    link: (scope, el, attrs) => {

      var msg =  "Are you sure?";
      var clickAction = attrs.confirmAction;
      el.bind('click',function (event) {
          if ( window.confirm(msg) ) {
              scope.$eval(clickAction);
          }
      });
		}
  };
}]);
