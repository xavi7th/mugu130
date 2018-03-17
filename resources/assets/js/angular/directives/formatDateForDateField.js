angular.module('bindTimestamp', []).directive('bindTimestamp', [function ($filter) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
      ngModel.$formatters.push(function (value) {
        // return new Date($filter("date")(new Date(value), 'dd-MM-yyyy'));
        return new Date(value);
      });
    }
  };
}]);
