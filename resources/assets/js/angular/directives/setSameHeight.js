// this directive makes all ng-repeat elements that have the same value in the same-height attribute and makes them the same height. It needs jQuery. It works whether the ng-repeat gets to the last or it is limited with an ng-if
//
// <div class="col-md-3 col-xs-6 highlight" ng-repeat="cat in categories"  ng-if="$index < 4" on-finish-render="ngRepeatFinished" limit="4"  same-height="category1">
//   <div class="mobile-card">
//     <div class="highlight-img">
//       <img ng-src="{{ cat.img }}" alt="" data-enlarge="187">
//     </div>
//     <ul>
//       <li class="category-name"><a href="/shop/{{ cat.slug }}" >{{ cat.name }}</a></li>
//       <li class="sub-category " ng-repeat="subcat in cat.subcategories"  ng-if="$index < 3"><a href="/shop/{{cat.slug}}/{{subcat.slug}}">{{ subcat.name }}</a></li>
//     </ul>
//   </div>
// </div>
// </div>



angular.module('sameHeight', []).directive('sameHeight', ['$timeout', function($timeout){
    return {
        link: function (scope, $element, $attrs) {

            var elements = $('[same-height='+$attrs.sameHeight+']');
            var maxHeight = 0;

            if(undefined !== $attrs.limit || scope.$last === true){

              if (scope.$index === $attrs.limit - 1  || scope.$last === true) {

                //Get the max height and set to the other div
                $timeout(function(){
                   for (var i = 0; i < elements.length; i++) {
                      var elementHeight = elements[i].offsetHeight;

                      if (elements[i].offsetHeight > maxHeight) {
                          maxHeight = elementHeight + 20;
                      }
                   }

                   elements.height(maxHeight);
                });

              }
            }
        }
    };
}]);
