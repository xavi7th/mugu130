// Usage:
//
// {{some_text | cut:true:100:' ...'}}
// Options:
//
// wordwise (boolean) - if true, cut only by words bounds,
// max (integer) - max length of the text, cut to this number of chars,
// tail (string, default: ' …') - add this string to the input string if the string was cut.
var app = angular.module('truncate', []);
app.filter('truncate', [function () {
        return function (value, max, tail, wordwise) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.toString().substr(0, max);

            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace !== -1) {
                  //Also remove . and , so its gives a cleaner result.
                  if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
                    lastspace = lastspace - 1;
                  }
                  value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    }]);
