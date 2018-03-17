// This directive just triggers the history.back() to takje the browser back to the previous pageY

// the directive is an element and is sth like this.

// <navigation-buttons back="back" forward="text" classes="class text eg btn btn-success etc"></navigation-buttons>
// to make a button show include an attribute either back or forward on the directive

//To use this module in your app, just inject it into your module declaration like This
// shop = angular.module('shop', ['ngRoute', require('angular-ui-bootstrap'), 'navBtn']);


angular.module('navBtn', []).directive('navigationButtons', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div><button class="{{bclasses}}" ng-if="back">{{back}}</button><button class="{{fclasses}}" ng-if="forward">{{forward}}</button></div>',
        scope: {
            back: '@back',
            forward: '@forward',
            icons: '@icons',
            bclasses: '@bclasses',
            fclasses: '@fclasses'
        },
        link: function(scope, element, attrs) {
            $(element[0]).on('click', function() {
                history.back();
                scope.$apply();
            });
            $(element[1]).on('click', function() {
                history.forward();
                scope.$apply();
            });
        }
    };
});
