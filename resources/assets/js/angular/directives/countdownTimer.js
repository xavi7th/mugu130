// This is a highly modified and specific version of the timer. For a more robust and better baseline see the timer setup in Evernote.
// This is a directive that accepts countdown time in seconds and counts down those seconds till now.

angular.module( 'countdownTimer', [] ).directive( 'countdownTimer', ['$timeout', '$compile', function ( $timeout, $compile ) {

	return {
		restrict: 'E',
    replace:true,
		transclude:true,
		scope: {
			countdownAttr: '=countdown', //what unit? seconds
			onfinish: '&finish'
		},

		template: '<div>' +
			'<h1 class="time">{{ minutes }}:' +
			'{{ seconds }}</h1>'+
			'<ng-transclude></ng-transclude>' +
			'</div>',

		link: function ( scope, elem, attrs ) {

			//Properties
			var countdown = parseInt( scope.countdownAttr, 10 );

			function tick() {

				//The default time that the timer will be reset to after count down expires.
				scope.millis = 0;

        if ( countdown > 0 ) {
					scope.millis = countdown * 1000;
					countdown--;
				} else if ( countdown <= 0 ) {
					scope.stop();
          // elem.children('h1').html('Time up!');
					scope.onfinish();
				}

				scope.seconds = twoNumbers(Math.floor( ( scope.millis / 1000 ) % 60 ));
				scope.minutes = Math.floor( ( ( scope.millis / ( 1000 * 60 ) ) % 60 ) );
				scope.hours = Math.floor( ( ( scope.millis / ( 1000 * 60 * 60 ) ) % 24 ) );
				scope.days = Math.floor( ( ( scope.millis / ( 1000 * 60 * 60 ) ) / 24 ) );

				scope.$apply();

			}

			function resetInterval() {
				if ( scope.intervalId ) {
					clearInterval( scope.intervalId );
					scope.intervalId = null;
				}
			}

			scope.stop = function () {
				scope.stoppedTime = new Date();
				resetInterval();
        scope.$emit('timer-stopped', { intervalId: scope.intervalId, millis: scope.millis });
			};

			//if not used anywhere, make it a regular function so you don't pollute the scope
			function start() {
				resetInterval();
				scope.intervalId = setInterval( tick, 1000); // make the interval fire every 1000ms = 1s
			}

			start(); //start timer automatically

			function twoNumbers(num) {
				if (num < 10) {
					return '0' + num;
				}

				return num;
			}
			//Cleanup
			elem.on( '$destroy', function () {
				resetInterval();
			} );

		}
	};
}] );
