webpackJsonp([4],{

/***/ "./resources/assets/js/angular/controllers/home-controller.js":
/***/ (function(module, exports) {


home.controller('HomeController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage) {
  NProgress.start();

  var getPageDetails = function getPageDetails() {
    sendRequest.request('/api/get-home-page-details').then(function (rsp) {
      console.log(rsp);
      // if (rsp.slides) {
      //   $scope.slides = rsp.slides;
      //   NProgress.done();
      // }
      // if (rsp.news_items) {
      //   $scope.news_items = rsp.news_items;
      //   NProgress.done();
      // }
      // if (rsp.team_members) {
      //   $scope.team_members = rsp.team_members;
      //   NProgress.done();
      // }
      //
      // else {
      //   // Notification.error({ message: 'There was a '})
      // }
    });
  };
  // getPageDetails();

  bootstrapPage.homepage($scope);
  NProgress.done();
}]);

home.controller('RegisterController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage) {

  NProgress.start();
  bootstrapPage.homepage($scope);

  $scope.$parent.height = 135;

  NProgress.done();
}]);

home.controller('DemoGameController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage) {

  NProgress.start();
  // bootstrapPage.homepage($scope);
  NProgress.done();
}]);

home.controller('TermsController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage) {

  NProgress.start();
  bootstrapPage.terms($scope);
  NProgress.done();
}]);

home.controller('CalculatorController', ['$scope', 'sendRequest', 'bootstrapPage', function ($scope, sendRequest, bootstrapPage) {

  NProgress.start();
  // bootstrapPage.terms($scope);
  NProgress.done();
}]);

home.controller('SupportController', ['$scope', 'sendRequest', 'bootstrapPage', 'Notification', function ($scope, sendRequest, bootstrapPage, Notification) {

  NProgress.start();

  $scope.contactAdmin = function () {
    $scope.loading = true;

    sendRequest.postRequest('/send-message', $scope.msg).then(function (rsp) {
      $scope.loading = false;

      console.log(rsp);
      if (rsp.data.status == 422) {
        Notification.error(rsp.data.message);
      } else if (rsp.status == 200) {
        $scope.sent = true;
        Notification.primary(rsp.data.message);
      }
    });
  };

  // bootstrapPage.terms($scope);
  NProgress.done();
}]);

home.controller('FAQController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage) {

  NProgress.start();
  $scope.title = 'Frequently Asked Questions';
  bootstrapPage.faq($scope);
  NProgress.done();
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/countdownTimer.js":
/***/ (function(module, exports) {

// This is a highly modified and specific version of the timer. For a more robust and better baseline see the timer setup in Evernote.
// This is a directive that accepts countdown time in seconds and counts down those seconds till now.

angular.module('countdownTimer', []).directive('countdownTimer', ['$timeout', '$compile', function ($timeout, $compile) {

	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		scope: {
			countdownAttr: '=countdown', //what unit? seconds
			onfinish: '&finish'
		},

		template: '<div>' + '<h1 class="time">{{ minutes }}:' + '{{ seconds }}</h1>' + '<ng-transclude></ng-transclude>' + '</div>',

		link: function link(scope, elem, attrs) {

			//Properties
			var countdown = parseInt(scope.countdownAttr, 10);

			function tick() {

				//The default time that the timer will be reset to after count down expires.
				scope.millis = 0;

				if (countdown > 0) {
					scope.millis = countdown * 1000;
					countdown--;
				} else if (countdown <= 0) {
					scope.stop();
					// elem.children('h1').html('Time up!');
					scope.onfinish();
				}

				scope.seconds = twoNumbers(Math.floor(scope.millis / 1000 % 60));
				scope.minutes = Math.floor(scope.millis / (1000 * 60) % 60);
				scope.hours = Math.floor(scope.millis / (1000 * 60 * 60) % 24);
				scope.days = Math.floor(scope.millis / (1000 * 60 * 60) / 24);

				scope.$apply();
			}

			function resetInterval() {
				if (scope.intervalId) {
					clearInterval(scope.intervalId);
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
				scope.intervalId = setInterval(tick, 1000); // make the interval fire every 1000ms = 1s
			}

			start(); //start timer automatically

			function twoNumbers(num) {
				if (num < 10) {
					return '0' + num;
				}

				return num;
			}
			//Cleanup
			elem.on('$destroy', function () {
				resetInterval();
			});
		}
	};
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/demoPlay.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// EXAMPLE
// <game-play></game-play>


var url = '\n\n<section id="game-play">\n\n\n<style>\n  #timer h1{\n    margin: 0 !important;\n  }\n</style>\n<style media="(max-width:767px)">\n  #heading{\n    -webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;\n  }\n</style>\n\n<style media="(max-width:767px)">\n  #summary{\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n  }\n    div#main-controller .ui.buttons button {\n      margin-bottom: 0;\n    }\n    input{\n      margin-bottom: 10px !important;\n    }\n</style>\n\n\n\n\n  <div class="ui compact horizontal segments flex-center" style="background-color: rgba(255,255,255,0.6);" id="heading">\n    <div class="ui segment">\n      <div class="ui compact menu">\n        <a class="item" style="padding: 0 20px !important;">\n          <i class="icon clock outline"></i> <countdown-timer countdown="game_timer" finish="submitExam()" ng-if="!display_results" id="timer"></countdown-timer>\n        </a>\n      </div>\n    </div>\n\n    <div class="ui segment">\n      <div class="ui violet label" style="font-size: 13px;">\n        <span style="padding-right: 10px;">Active Gamers</span>\n        <i class="users icon"></i> {{ total_examinees }}\n      </div>\n    </div>\n\n\n    <div class="ui segment">\n      <h1 style="color: white; float: right;">Lifelines</h1>\n    </div>\n\n    <div class="ui segment">\n      <div class="ui compact menu">\n        <a class="item">\n          50/50\n          <div class="floating ui red label">1</div>\n        </a>\n        <a class="item" style="background:#21BA45; color: white;">\n          CHANGE QUESTION\n          <div class="floating ui teal label">1</div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div class="ui styled fluid accordion" ng-if="!display_results">\n\n    <div ng-repeat="q in user_questions" ng-if="$index < 10">\n\n      <div ng-class="{ \'title\': true, \'active\': $index == 0 }">\n        <i class="dropdown icon"></i> Question {{ $index + 1}}\n      </div>\n\n      <div ng-class="{ \'content\': true, \'active\': $index == 0 }">\n        <div class="ui stacked segment">\n          <p id="question">{{ q.question }}</p>\n\n          <div class="ui middle aligned selection list">\n            <label class="item" for="option1{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.option_1">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_1" ng-model="q.answered_option" ng-change="q.answered_option = q.option_1" id="option1{{$index}}">\n                  <label>{{ q.option_1 }}</label>\n                </div>\n              </div>\n            </label>\n\n            <label class="item" for="option2{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.option_2">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_2" ng-model="q.answered_option" ng-change="q.answered_option = q.option_2" id="option2{{$index}}">\n                  <label>{{ q.option_2 }}</label>\n                </div>\n              </div>\n            </label>\n\n            <label class="item" for="option3{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.option_3">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_3" ng-model="q.answered_option" ng-change="q.answered_option = q.option_3" id="option3{{$index}}">\n                  <label>{{ q.option_3 }}</label>\n                </div>\n              </div>\n            </label>\n\n            <label class="item" for="option4{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.option_4">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_4" ng-model="q.answered_option" ng-change="q.answered_option = q.option_4" id="option4{{$index}}">\n                  <label>{{ q.option_4 }}</label>\n                </div>\n              </div>\n            </label>\n\n            <div class="ui buttons">\n              <button class="ui button" ng-click="requestOptions(q)" ng-disabled="lifelines.options">50/50</button>\n              <div class="or"></div>\n              <button class="ui positive button" ng-click="requestExtra(q)" ng-disabled="lifelines.extra">CHANGE QUESTION</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class="ui segment" style="min-height:60vh; margin-top: 5vh" ng-if="loading">\n      <div class="ui active inverted dimmer">\n        <div class="ui large text loader">Loading questions...</div>\n      </div>\n    </div>\n  </div>\n\n  <div class="text-center" style="display: flex; align-items: center; justify-content: center; padding-bottom: 30px;" ng-if="!loading && !display_results">\n    <button class="positive ui button" ng-click=submitExam()>Finish</button>\n  </div>\n\n\n  <div class="grid-container" style="margin-top:70px; padding-bottom:100px;" ng-if="display_results">\n    <div class="grid-100">\n      <div class="ui red segment">\n        <div class="ui icon message">\n          <i class="newspaper icon"></i>\n          <div class="content">\n            <div class="header">\n              Results Display\n            </div>\n          </div>\n          <div class="ui left labeled button" tabindex="-1">\n            <a class="ui basic blue label">\n              {{ user_earning  | currency : \'\u20A6\' : 0 }}\n            </a>\n            <div class="ui icon button">\n              <i class="visa icon"></i>\n              My Earning\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class="ui segment" ng-if="loading">\n        <div class="ui active inverted dimmer">\n          <div class="ui large text loader">Computing results...</div>\n        </div>\n        <p style="height:200px;"></p>\n        <p></p>\n        <p></p>\n      </div>\n\n      <div class="ui red segment"  ng-if="!loading">\n\n        <div class="ui raised horizontal segments" id="summary">\n          <div class="ui segment">\n            <div class="ui labeled button" tabindex="-1">\n              <div class="ui button">\n                <i class="heart icon"></i> Players\n              </div>\n              <a class="ui basic label">\n                {{ total_players }}\n              </a>\n            </div>\n          </div>\n\n          <div class="ui segment">\n            <div class="ui left labeled button" tabindex="-1">\n              <a class="ui basic right pointing label">\n                {{ max_winners }}\n              </a>\n              <div class="ui button">\n                <i class="heart icon"></i> Winners\n              </div>\n            </div>\n          </div>\n\n          <div class="ui segment">\n            <div class="ui labeled button floated right" tabindex="-1">\n              <div class="ui icon button">\n                <i class="fork icon"></i>Total Prize Money\n              </div>\n              <a class="ui basic label">\n                \u20A6{{ total_prize_money + (5 * total_players) }}\n              </a>\n            </div>\n          </div>\n        </div>\n\n        <table class="ui  striped celled table" style="text-align: center;">\n          <thead>\n            <tr ng-repeat="result in results">\n              <th>Position - {{ result.position }}</th>\n              <th>Score - {{ result.score }}</th>\n            </tr>\n          </thead>\n\n        </table>\n      </div>\n    </div>\n  </div>\n</section>\n\n';

angular.module('demoPlay', []).directive('demoPlay', ['$location', '$localStorage', '$sessionStorage', 'Notification', 'sendRequest', function ($location, $localStorage, $sessionStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template: url,
    replace: true,
    scope: {},
    link: function link(scope, element, attributes) {},
    controller: ['$scope', '$timeout', function ($scope, $timeout) {

      $scope.game_timer = game_timer;
      $scope.total_examinees = _.random(37);
      $scope.display_results = false;
      $scope.loading = true;
      $scope.lifelines = $sessionStorage;
      $scope.lifelines.extra = $scope.lifelines.extra || false;
      $scope.lifelines.options = $scope.lifelines.options || false;

      var updateExaminees = setInterval(function () {
        if ($scope.total_examinees < 10000) {
          //to make the increment of the users appear ransom onstead of every fixed time
          if (_.random(50) < 15) {
            $scope.total_examinees += _.random(593);
          }
        }
      }, 1500);

      $scope.requestExtra = function (q) {
        var removedQuestion = $scope.user_questions.indexOf(q);
        $scope.user_questions.splice(removedQuestion, 1);
        $scope.lifelines.extra = true;
      };

      $scope.requestOptions = function (q) {
        var count = 0;
        if (q.option_1 != q.correct_option) {
          q.option_1 = null;
          count++;
        }
        if (q.option_2 != q.correct_option) {
          q.option_2 = null;
          count++;
        }
        if (q.option_3 != q.correct_option && count < 2) {
          q.option_3 = null;
          count++;
        }
        if (q.option_4 != q.correct_option && count < 2) {
          q.option_4 = null;
          count++;
        }

        $scope.lifelines.options = true;
      };

      $scope.submitExam = function () {
        clearInterval(updateExaminees);
        delete $sessionStorage.user_questions;
        delete $sessionStorage.extra;
        delete $sessionStorage.options;

        $scope.loading = true;
        $scope.display_results = true;

        sendRequest.postRequest('/submit-demo-exam', { 'total_examinees': $scope.total_examinees, 'answers': $scope.user_questions }).then(function (rsp) {
          if (rsp.status == 200) {
            if (rsp.data.status) {
              $scope.results = rsp.data.results;
              $scope.user_earning = rsp.data.user_earning;
              $scope.max_winners = _.parseInt(rsp.data.max_winners);
              $scope.total_players = _.parseInt(rsp.data.total_players);
              $scope.total_prize_money = _.parseInt(rsp.data.total_prize_money);
              $scope.loading = false;
            }
          }
        });
      };

      $scope.$parent.$on('$viewContentLoaded', function () {

        sendRequest.getUserQuestions('/get-deno-questions', true).then(function (rsp) {
          $scope.loading = false;
          $scope.user_questions = rsp;
        });

        $timeout(function () {
          $('.ui.accordion').accordion();
        }, 500);
      });
      $scope.$on('$destroy', function () {
        // $timeout(function () {
        //   sendRequest.postRequest('/user/pause-game');
        // }, 0);
      });
    }]
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/directives/miniGameState.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-state><game-state>


var url = '\n\n<div id="mini-game">\n<style>\n\n</style>\n\n  <div class="ui labeled button" tabindex="-1" ng-if="game_state == \'loading\'">\n    <div class="ui red button">\n      <i class="clock icon"></i> <ng-transclude></ng-transclude> Next Game\n    </div>\n    <a class="ui basic red left pointing label">\n      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>\n    </a>\n  </div>\n\n\n  <div class="ui labeled button" tabindex="-1" ng-if="game_state == \'active\'" ng-click="joinGame()">\n    <div class="ui green button">\n     <ng-transclude></ng-transclude>\n      <i class="gamepad icon"></i>Game On\n    </div>\n    <a class="ui basic left pointing green label" ng-click="joinGame()">\n        <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>\n    </a>\n  </div>\n\n';

angular.module('miniGameState', []).directive('miniGameState', ['$location', 'Notification', '$localStorage', 'sendRequest', function ($location, Notification, $localStorage, sendRequest) {
  return {
    restrict: 'E',
    scope: {
      // dest : '=',
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gameStateTemplate.php',
    template: url,
    replace: true,
    transclude: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      if (sendRequest.getData('user_score') || !angular.isUndefined($localStorage.user_score)) {
        $scope.user_score = $localStorage.user_score;
      }

      // handle page reload on timer countdown so that the page can get the next thing from the server
      $scope.pageReload = function () {
        // location.reload();
        sendRequest.getGameState().then(function (rsp) {
          $scope.game_state = rsp.game_state;
          $scope.game_timer = rsp.game_timer;
          $scope.total_examinees = rsp.total_examinees;
        });
      };

      $scope.joinGame = function () {
        NProgress.start();

        delete $localStorage.user_score;
        delete $localStorage.extra;
        delete $localStorage.options;
        delete $localStorage.user_questions;

        sendRequest.postRequest('/user/join-game').then(function (rsp) {

          if (rsp.status == 422) {
            Notification.error({ message: 'No active game in progress', positionX: 'center' });
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              $scope.game_state = 'transition';
              $location.path('/dashboard/game-play');
            }
          } else if (rsp.status == 402) {
            Notification.error({ message: 'Insufficient credits to join game.', positionX: 'center' });
          } else if (rsp.status == 403) {
            $scope.game_state = 'transition';
            Notification.error({ message: 'Already in a game session.', positionX: 'center' });
            $location.path('/dashboard/game-play');
          }
        });

        NProgress.done();
      };

      sendRequest.getGameState().then(function (rsp) {
        $scope.game_state = rsp.game_state;
        $scope.game_timer = rsp.game_timer;
        $scope.total_examinees = rsp.total_examinees;
      });
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/filters/rangeFilter.js":
/***/ (function(module, exports) {

//n in _.range(1,16)
//n in [] | range:20

var app = angular.module('range', []);

app.filter('range', function () {
  return function (input, total) {
    console.log(total);
    total = parseInt(input);
    for (var i = 0; i < total; i++) {
      input.push(i);
    }return input;
  };
});

/***/ }),

/***/ "./resources/assets/js/angular/routes/home-routes.js":
/***/ (function(module, exports) {

home.config(['$routeProvider', '$locationProvider', '$provide', 'NotificationProvider', function ($routeProvider, $locationProvider, $provide, NotificationProvider) {
  $routeProvider.when('/', {
    controller: 'HomeController',
    template: '',
    animation: 'slide'
  }).when('/test', {
    controller: 'HomeController',
    template: '',
    animation: 'slide'
  }).when('/login', {
    controller: 'HomeController',
    template: ''

  }).when('/register', {
    controller: 'RegisterController',
    template: ''

  }).when('/register/ref/:refcode', {
    controller: 'RegisterController',
    template: ''

  }).when('/verify-user/:token', {
    controller: 'RegisterController',
    template: ''

  }).when('/password/reset', {
    controller: 'RegisterController',
    template: ''

  }).when('/register/success', {
    controller: 'RegisterController',
    template: ''

  }).when('/demo-play', {
    templateUrl: 'angular/views/demo/index.html',
    controller: 'DemoGameController'
  }).when('/support-center', {
    templateUrl: 'angular/views/home/support-center.html',
    controller: 'SupportController'
  }).when('/frequently-asked-questions', {
    templateUrl: 'angular/views/home/frequently-asked-questions.html',
    controller: 'FAQController'
  }).when('/privacy', {
    templateUrl: 'angular/views/home/privacy.html',
    controller: 'PrivacyController'
  }).when('/calculator', {
    templateUrl: '',
    controller: 'CalculatorController'
  }).when('/terms-and-conditions', {
    templateUrl: 'angular/views/home/terms.html',
    controller: 'TermsController'
  }).otherwise({
    redirectTo: '/'
  });

  $locationProvider.html5Mode(true);

  NotificationProvider.setOptions({
    delay: 5000,
    replaceMessage: true,
    //  startTop: 20,
    //  startRight: 10,
    //  verticalSpacing: 20,
    //  horizontalSpacing: 20,
    positionX: 'center'
    //  positionY: 'bottom'
  });

  $provide.decorator('$locale', ['$delegate', function ($delegate) {
    $delegate.NUMBER_FORMATS = {
      DECIMAL_SEP: '.',
      GROUP_SEP: ',',
      PATTERNS: [{ // Decimal Pattern
        minInt: 1,
        minFrac: 0,
        maxFrac: 3,
        posPre: '',
        posSuf: '',
        negPre: '-',
        negSuf: '',
        gSize: 3,
        lgSize: 3
      }, { //Currency Pattern
        minInt: 1,
        minFrac: 0,
        maxFrac: 2,
        posPre: '\xA4',
        posSuf: '',
        negPre: '(\xA4',
        negSuf: ')',
        gSize: 3,
        lgSize: 3
      }],
      CURRENCY_SYM: '₦'
    };
    return $delegate;
  }]);
}]);

/***/ }),

/***/ "./resources/assets/js/angular/services/services.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {angular.module('sendRequest', []).factory('sendRequest', ['$http', '$q', '$localStorage', function ($http, $q, $localStorage) {

  var data = {};
  return {
    storeData: function storeData(key, value) {
      data[key] = value;
    },

    getData: function getData(key) {
      return data[key];
    },

    getUserDetails: function getUserDetails(url) {
      var flushStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var deferred = $q.defer();

      if (flushStore || !this.getData('userdetails')) {
        var _this = this;
        return this.postRequest(url).then(function (rsp) {
          _this.storeData('userdetails', rsp.data);
          return _this.getData('userdetails');
        });
      }
      deferred.resolve(this.getData('userdetails'));
      return deferred.promise;
    },

    getTotalEarnings: function getTotalEarnings(url) {
      var flushStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var deferred = $q.defer();

      if (flushStore || !this.getData('total_earnings')) {
        var _this = this;
        return this.postRequest(url).then(function (rsp) {
          _this.storeData('total_earnings', rsp.data);
          return _this.getData('total_earnings');
        });
      }
      deferred.resolve(this.getData('total_earnings'));
      return deferred.promise;
    },

    getBanks: function getBanks(url) {
      var deferred = $q.defer();

      if (!this.getData('banks_list')) {
        var _this = this;
        return this.postRequest(url).then(function (rsp) {
          _this.storeData('banks_list', rsp.data);
          return _this.getData('banks_list');
        });
      }
      deferred.resolve(this.getData('banks_list'));
      return deferred.promise;
    },

    getGameState: function getGameState() {
      return this.postRequest('/user/get-game-state').then(function (rsp) {
        return rsp.data;
      });
    },

    getUserQuestions: function getUserQuestions(url) {
      var flushStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var deferred = $q.defer();

      if (flushStore) {
        delete $localStorage.user_questions;
        delete $localStorage.extra;
        delete $localStorage.options;
      }

      if (!$localStorage.user_questions) {
        var _this = this;
        return this.postRequest(url).then(function (rsp) {
          $localStorage.user_questions = rsp.data.user_questions;
          return $localStorage.user_questions;
        });
      }
      deferred.resolve($localStorage.user_questions);
      return deferred.promise;
    },

    getCountriesStates: function getCountriesStates() {
      var deferred = $q.defer();

      if (!this.getData('countries_states')) {
        var _this = this;
        return this.postRequest('/api/get-countries-state').then(function (rsp) {
          _this.storeData('countries_states', rsp.data);
          return _this.getData('countries_states');
        });
      }
      deferred.resolve(this.getData('countries_states'));
      return deferred.promise;
    },

    processImageUpload: function processImageUpload(url, data, foldername) {
      //Handle image changes
      NProgress.start();

      // send the image to the server as base64 data
      return $http.post(url, { image: data, fn: foldername }).then(function (response) {
        NProgress.done();
        return response.data;
      }, function (err) {
        console.log(err.statusText);
      });
    },

    postRequest: function postRequest(url, data) {

      return $http.post(url, { details: data }).then(function (response) {
        return response;
      }, function (err) {
        if (err.status == 419 || err.status == 401) {
          location.href = '/login';
        } else if (err.status == 403) {
          location.href = '/suspended';
        }
        console.log(err);
        return err;
      });
    },

    request: function request(url) {
      var data = [];
      return $http.get(url).then(function (response) {
        return response.data;
      }, function (err) {
        console.log(err.statusText);
      });
    }
  };
}]);

angular.module('bootstrapPage', []).factory('bootstrapPage', ['$timeout', '$location', 'Notification', 'sendRequest', function ($timeout, $location, Notification, sendRequest) {
  return {
    dashboard: function dashboard(scope) {

      sendRequest.postRequest('/user/get-dashboard-page-details');
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('#notice.ui.modal').modal({
            centered: false,
            blurring: true,
            onDeny: function onDeny() {
              return true;
            },
            onHide: function onHide() {
              var remove = function remove() {
                $('#notice.ui.modal').remove();
              };
              setTimeout(remove, 1000);
              // return false;
            },
            onApprove: function onApprove() {
              return true;
            }
          }).modal('show');

          Echo.channel('exam_member_count').listen('ExamJoined', function (e) {
            scope.total_examinees = e.total_examinees;
          });
        }, 1000);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {
          Echo.leave('exam_member_count');
        }, 0);
      });
    },
    profile: function profile(scope) {
      sendRequest.postRequest('/user/get-profile-page-details').then(function (rsp) {
        if (rsp.status == 200) {
          scope.user_transactions = rsp.data.page_details.transactions;
          scope.user_earnings = rsp.data.page_details.earnings;
          scope.user_games = rsp.data.page_details.games;
          scope.referrals = rsp.data.page_details.referrals;
        }
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('#profile-menu .item').tab();
          $('.dropdown_menu').dropdown();
        }, 500);
      });
    },
    settings: function settings(scope) {
      sendRequest.getBanks('/api/get-banks-list').then(function (rsp) {
        scope.banks = rsp.banks;
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('#edit .item').tab();
          $('.dropdown_menu').dropdown();
        }, 500);
      });
    },
    gameplay: function gameplay(scope) {
      sendRequest.getUserDetails('/user/get-user-details', true).then(function (rsp) {
        scope.userdetails = rsp.userdetails;
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.ui.accordion').accordion();

          Echo.channel('exam_member_count').listen('ExamJoined', function (e) {
            scope.total_examinees = e.total_examinees;
          });
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {
          sendRequest.postRequest('/user/pause-game');
          Echo.leave('exam_member_count');
        }, 0);
      });
    },
    results: function results(scope) {
      sendRequest.postRequest('/user/get-exam-results').then(function (rsp) {
        if (rsp.status == 200) {
          if (rsp.data.results == false) {
            $location.path('/dashboard');
            Notification.error({ message: 'Error fetching results.', positionX: 'center' });
          }
          if (rsp.data != 'invalid') {
            scope.results = _.parseInt(rsp.data.results);
            scope.user_earning = _.parseInt(rsp.data.user_earning);
            $scope.max_winners = _.parseInt(rsp.data.max_winners);
            $scope.total_players = _.parseInt(rsp.data.total_players);
            $scope.total_prize_money = _.parseInt(rsp.data.total_prize_money);
          } else {
            $location.path('/dashboard');
            Notification.error({ message: 'Insufficient users for game session. Units reversed', positionX: 'center' });
          }
        }
      });

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
        }, 500);
      });
    },
    messages: function messages(scope) {

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.special.cards .image').dimmer({
            on: 'hover'
          });
        }, 500);
      });
    },
    notices: function notices(scope) {
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
        }, 500);
      });
    }
  };
}]);

angular.module('bootstrapAdminPage', []).factory('bootstrapAdminPage', ['$timeout', '$location', 'Notification', 'sendRequest', function ($timeout, $location, Notification, sendRequest) {
  return {
    dashboard: function dashboard(scope) {

      sendRequest.postRequest(route_root + '/api/get-dashboard-page-details').then(function (rsp) {
        if (rsp.status == 200) {}
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.shape').shape();
          NProgress.done();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    questions: function questions(scope) {

      sendRequest.postRequest(route_root + '/api/get-questions-page-details').then(function (rsp) {
        if (rsp.status == 200) {
          scope.questions = rsp.data.questions;
        }
      }, function (err) {
        Notification.error('Error retrieving questions from server');
      });

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.shape').shape();
          NProgress.done();
        }, 500);
      });
      // scope.$on('$destroy', function() {
      //   $timeout(function () {
      //   }, 0);
      // });
    },

    admins: function admins(scope) {

      sendRequest.postRequest(route_root + '/api/get-admins-page-details').then(function (rsp) {
        if (rsp.status == 200) {
          scope.admins = rsp.data.admins;
          NProgress.done();
        }
      }, function (err) {
        Notification.error('Error retrieving admins from server');
      });

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    users: function users(scope) {

      sendRequest.postRequest(route_root + '/api/get-users-page-details').then(function (rsp) {
        if (rsp.status == 200) {
          scope.users = rsp.data.users;
          NProgress.done();
        }
      }, function (err) {
        Notification.error('Error retrieving users from server');
      });

      sendRequest.getBanks('/api/get-banks-list').then(function (rsp) {
        scope.banks = rsp.banks;
      });

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    games: function games(scope) {

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          // $('.ui.sticky')
          // .sticky({
          //   context: '#content-context'
          // });
          NProgress.done();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    transactions: function transactions(scope) {

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
          $('.ui.sticky').sticky({
            context: '#content-context'
          });
        }, 500);
      });
      scope.$on('$destroy', function () {
        // $timeout(function () {
        // }, 0);
      });
    },

    messages: function messages(scope) {

      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('.dropdown_menu').dropdown();
        }, 500);
      });
      scope.$on('$destroy', function () {
        $timeout(function () {}, 0);
      });
    },

    settings: function settings(scope) {
      sendRequest.getBanks('/api/get-banks-list').then(function (rsp) {
        scope.banks = rsp.banks;
      });
      scope.$on('$viewContentLoaded', function () {
        $timeout(function () {
          $('#edit .item').tab();
          $('.dropdown_menu').dropdown();
        }, 500);
      });
    }
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/home-app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// Require the stuffs that are particular to this app


home = angular.module('home', ['ngRoute', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago', 'sendRequest', 'countdownTimer', 'miniGameState', 'demoPlay', 'range']);

home.run(['$rootScope', '$window', 'Notification', 'sendRequest', function ($rootScope, $window, Notification, sendRequest) {

	$rootScope._ = _;
	$rootScope.logout = function () {
		sendRequest.postRequest('/logout').then(function (response) {
			if (response.status == 200) {
				Notification.success({
					message: 'Logout successful',
					positionX: 'center'
				});
				$window.location.href = '/login';
			} else {
				Notification.error({
					message: 'Logout failed! Reload page.',
					positionX: 'center'
				});
			}
		});
	};
}]);

home.factory('bootstrapPage', ['$timeout', '$window', function ($timeout, $window) {
	return {
		homepage: function homepage(scope) {
			scope.$on('$viewContentLoaded', function () {
				var windowWidth = $window.innerWidth;
				if (windowWidth >= 374) {
					scope.$parent.register = 125;
					scope.$parent.login = 80;
				} else if (windowWidth < 374) {
					scope.$parent.register = 120;
					scope.$parent.login = 75;
				}
			});
		},
		terms: function terms(scope) {
			scope.title = 'Terms of Use';
			scope.$on('$viewContentLoaded', function () {});
		},
		privacy: function privacy(scope) {
			scope.title = 'Privacy';
			scope.$on('$viewContentLoaded', function () {});
		},
		support: function support(scope) {
			scope.$on('$viewContentLoaded', function () {});
		},
		faq: function faq(scope) {
			scope.$on('$viewContentLoaded', function () {
				$('#faq').accordion();
			});
		},
		calculator: function calculator(scope) {
			scope.$parent.height = 90;
			scope.$on('$viewContentLoaded', function () {});
		}
	};
}]);

__webpack_require__("./resources/assets/js/angular/services/services.js");

__webpack_require__("./resources/assets/js/angular/directives/countdownTimer.js");
__webpack_require__("./resources/assets/js/angular/directives/miniGameState.js");
__webpack_require__("./resources/assets/js/angular/directives/demoPlay.js");

__webpack_require__("./resources/assets/js/angular/filters/rangeFilter.js");

__webpack_require__("./resources/assets/js/angular/routes/home-routes.js");

__webpack_require__("./resources/assets/js/angular/controllers/home-controller.js");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/home-app.js");


/***/ })

},[1]);
//# sourceMappingURL=home-app.js.map