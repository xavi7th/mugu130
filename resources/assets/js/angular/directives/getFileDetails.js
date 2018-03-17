// <div ng-app="myApp" ng-controller="MyController">
// <input type="file" data-bind-file="" data-ng-model="theFile" />
// <input type="button" data-ng-click="resetFile()" value="Reset" />
//     <div ng-show="theFile">
//         {{theFile.name}}<br />
//         {{theFile.size}} byte(s)<br/>
//         {{theFile.type}}
//     </div>
// </div>

// app = angular.module('myApp', []);

//     app.controller('MyController', ['$scope', function ($scope) {
//         $scope.theFile = null;
//
//         $scope.resetFile = function () {
//             $scope.theFile = null;
//         };
//     }]);
    app.directive('bindFile', [function () {
    return {
        require: "ngModel",
        restrict: 'A',
        link: function ($scope, el, attrs, ngModel) {
            el.bind('change', function (event) {
                ngModel.$setViewValue(event.target.files[0]);
                $scope.$apply();
            });

            $scope.$watch(function () {
                return ngModel.$viewValue;
            }, function (value) {
                if (!value) {
                    el.val("");
                }
            });
        }
    };
}]);

// The model will contain the selected file details
