// Notice that I didn't use .ready() but rather wrapped it in a $timeout. $timeout makes sure it's executed when the ng-repeated elements have REALLY finished rendering (because the $timeout will execute at the end of the current digest cycle -- and it will also call $apply internally, unlike setTimeout). So after the ng-repeat has finished, we use $emit to emit an event to outer scopes (sibling and parent scopes).
//
// And then in your controller, you can catch it with $on:
//
// $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
//     //you also get the actual event object
//     //do stuff, execute functions -- whatever...
// });
//
// <div ng-repeat="item in items" on-finish-render="ngRepeatFinished" limit="'2'">
//     <div>{{item.name}}}<div>
// </div>

// <div class="col-md-3 col-xs-6 highlight" ng-repeat="cat in categories"  ng-if="$index < 4" on-finish-render="ngRepeatFinished" limit="4">
//   <div class="mobile-card">
//     <div class="highlight-img">
//       <img ng-src="{{ cat.img }}" alt="" data-enlarge="187">
//     </div>
//     <ul>
//       <li class="category-name"><a href="/shop/{{ cat.slug }}" >{{ cat.name }}</a></li>
//       <li class="sub-category " ng-repeat="subcat in cat.subcategories"><a href="/shop/{{cat.slug}}/{{subcat.slug}}">{{ subcat.name }}</a></li>
//     </ul>
//   </div>
// </div>

// The limit is optional and only necesssary if you are not going to the repeat to the last element. Eg you are terminating the ng-repeat with an ng-if



angular.module('onFinishRender', []).directive('onFinishRender', ['$timeout', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {

          if(undefined !== attr.limit){

            if (scope.$index === attr.limit - 1) {

              $timeout(function () {
                  scope.$emit(attr.onFinishRender);
              });

            }
          }
          else if (scope.$last === true) {
              $timeout(function () {
                  scope.$emit(attr.onFinishRender);
              });
          }
        }
    };
}]);
