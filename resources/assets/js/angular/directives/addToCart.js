// This directive creates an add to cart button that receives the product model from Laravel set on the parent scope and the passed into the directive througn the add-to-cart attribute.

// EXAMPLE usage
//   <span add-to-cart="details" class="btn red-btn"></span>




shop.directive('addToCart', [function () {
  return {
    restrict: 'A',
    scope:{
      details : '=addToCart',
      class: '@'
    },
    template:'<button type="button" ng-click="addToCart()" class="{{ class }}">Add to cart</button>',
    replace: true,
    controller: ['$scope', '$localStorage', '$filter', '$attrs', 'Notification', function ($scope, $localStorage, $filter, $attrs, Notification) {

      $scope.updateCartCountBadge = function () {
        if (angular.isUndefined($localStorage.cart)) {
          $("#cartItemsCount").html(0);
        } else {
          $("#cartItemsCount").html($localStorage.cart.length);
        }
      };

      $scope.updateCartPriceBadge = function () {
          if (angular.isUndefined($localStorage.cart)) {
              $("#cartTotalPrice").text(0);
          } else {
              var total = 0;
              angular.forEach($localStorage.cart, function (val, key) {
                  total += val.quantity * val.product.price;
              });
              $("#cartTotalPrice").text($filter('currency')(total, '₦', 2));
          }
      };

      $scope.addToCart = function () {
        $scope.match = false;

        if (angular.isUndefined($localStorage.cart)) {

          //Incase of an empty cart just add it and set the quantity to whatever the model value is

            $localStorage.cart = [];
            $localStorage.cart.push({
              'product' : $scope.details,
              'quantity' : $scope.$parent.quantity
            });
            Notification.primary({message: 'Added to cart',  positionX: 'center'});
            $scope.updateCartPriceBadge();
            $scope.updateCartCountBadge();

        }

        else {
          angular.forEach($localStorage.cart, function (val, key) {
              if (val.product.id == $scope.details.id) {
                  $scope.match = true;
                  val.quantity +=  $scope.$parent.quantity;
                  Notification.primary({message: 'Cart item updated',  positionX: 'center'});
              }
          });

          if (!$scope.match) {
            console.log('!match');
               $localStorage.cart.push({
                 'product' : $scope.details,
                 'quantity' : $scope.$parent.quantity
               });
              Notification.primary({message: 'Added to cart',  positionX: 'center'});
          }
        }

        $scope.updateCartPriceBadge();
        $scope.updateCartCountBadge();
        console.log($localStorage.cart);
      };

      //Initialise the values of the cart icons
      $scope.updateCartCountBadge();
      $scope.updateCartPriceBadge();

      $scope.deleteAdvert = function () {
        sendRequest.request('/whatever/delete-advert/' + $scope.$parent.advert.id);
        var removedAdvert = $scope.$parent.sidebaradverts.indexOf($scope.$parent.advert);
        $scope.$parent.sidebaradverts.splice(removedAdvert, 1);
        NProgress.done();
      };
    }]
  };
}]);
