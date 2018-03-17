//This directive is used for instance to validate whether the values entered into a numeric field == 10

var INTEGER_REGEXP = /^-?\d+$/;
angular.module('inputCountValidator', []).directive('count', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.count = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty models to be valid
          return true;
        }

        if (viewValue.length != attrs.count) {
          // it is invalid
          return false;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          // it is valid
          return true;
        }

        // it is invalid
        return false;
      };
    }
  };
});
