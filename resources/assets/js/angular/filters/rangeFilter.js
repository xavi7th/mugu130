//n in _.range(1,16)

var app = angular.module('range', []);

app.filter('range', function() {
  return function(input, total) {
    console.log(total);
    total = parseInt(input);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});
