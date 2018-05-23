webpackJsonp([2],{

/***/ "./resources/assets/js/angular/controllers/dashboard-controller.js":
/***/ (function(module, exports) {

dashboard.controller('DashboardController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage) {
  NProgress.start();

  $scope.hide = true;

  $scope.transferEarnings = function () {
    sendRequest.postRequest('user/transfer-earnings').then(function (rsp) {
      if (rsp.status == 200) {
        if (rsp.data.status == true) {
          Notification.success({ message: 'Earnings transferred to wallet', positionX: 'center' });
        } else if (rsp.data.status == 'Insufficient') {
          Notification.error({ message: 'No earnings to transfer', positionX: 'center' });
        }
      }

      sendRequest.getUserDetails('/user/get-user-details', true).then(function (rsp) {
        $scope.userdetails = rsp.userdetails;
      });
      sendRequest.getTotalEarnings('/user/get-total-earnings', true).then(function (rsp) {
        $scope.total_earnings = rsp.total_earnings;
      });
    });
  };

  $scope.sendMessage = function () {
    sendRequest.postRequest('/user/send-message', $scope.message).then(function (rsp) {
      if (rsp.status == 200) {
        NProgress.done();
      }
    });
    $scope.message = null;
  };

  bootstrapPage.dashboard($scope);

  NProgress.done();
}]);

dashboard.controller('ProfileController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage) {
  NProgress.start();

  bootstrapPage.profile($scope);

  NProgress.done();
}]);

dashboard.controller('SettingsController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', function ($scope, Notification, sendRequest, bootstrapPage) {
  NProgress.start();

  $scope.updateDetails = function () {
    $scope.loading = true;
    sendRequest.postRequest('/user/update-user-details', $scope.userdetails).then(function (rsp) {
      Notification.success({ message: 'Updated', positionX: 'center' });
      $scope.loading = null;
    });
  };

  $scope.updatePassword = function () {
    if (!$scope.userdetails.old_password || !$scope.userdetails.password) {
      Notification.error('Old and new password required');
      return;
    }
    sendRequest.postRequest('/user/confirm-user-password', $scope.userdetails.old_password).then(function (rsp) {
      if (rsp.status == 423) {
        Notification.error('Old password mismatch');
      } else if (rsp.status == 200) {
        if (rsp.data.status) {
          $scope.updateDetails();
          $scope.logout();
        }
      }
    });
  };

  bootstrapPage.settings($scope);

  NProgress.done();
}]);

dashboard.controller('GamePlayController', ['$scope', 'Notification', 'sendRequest', 'bootstrapPage', 'gameActive', function ($scope, Notification, sendRequest, bootstrapPage, gameActive) {
  NProgress.start();

  $scope.game_timer = gameActive.game_timer;
  $scope.total_examinees = gameActive.total_examinees;

  bootstrapPage.gameplay($scope);

  NProgress.done();
}]);

dashboard.controller('DisplayResultsController', ['$scope', 'bootstrapPage', function ($scope, bootstrapPage) {
  NProgress.start();

  bootstrapPage.results($scope);

  NProgress.done();
}]);

dashboard.controller('MessageController', ['$scope', 'bootstrapPage', 'sendRequest', function ($scope, bootstrapPage, sendRequest) {
  NProgress.start();
  // var hello = _.dropRightWhile($scope.userdetails.messages, ['read', true]).length;
  // console.log(hello);

  $scope.markAsRead = function (msg) {
    msg.read = true;
    sendRequest.postRequest('/user/mark-message-as-read', msg);
  };
  $scope.deleteMessage = function (msg) {
    sendRequest.postRequest('/user/delete-message', msg).then(function (rsp) {
      var removedMessage = $scope.userdetails.messages.indexOf(msg);
      $scope.userdetails.messages.splice(removedMessage, 1);
    });
  };

  bootstrapPage.messages($scope);

  NProgress.done();
}]);

dashboard.controller('NoticeController', ['$scope', 'bootstrapPage', 'sendRequest', function ($scope, bootstrapPage, sendRequest) {
  NProgress.start();

  $scope.markAsRead = function (notice) {
    notice.read = true;
    sendRequest.postRequest('/user/mark-notice-as-read', notice);
  };
  $scope.deleteNotice = function (notice) {
    sendRequest.postRequest('/user/delete-notice', notice).then(function (rsp) {
      var removedNotice = $scope.userdetails.notices.indexOf(notice);
      $scope.userdetails.notices.splice(removedNotice, 1);
    });
  };

  bootstrapPage.notices($scope);

  NProgress.done();
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/buyUnits.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = '\n<section id="buyUnits" class="ui right floated horizontal list">\n  <div class="ui vertical blue compact animated button" tabindex="-1" ng-click="openModal()">\n    <div class="hidden content"><i class="shop icon"></i></div>\n    <div class="visible content">\n      Fund Account\n    </div>\n  </div>\n\n\n  <div class="ui tiny modal buyUnits transition hidden">\n      <div class="header">\n        Fund Account: Input Amount\n      </div>\n      <div class="image content flex-center">\n        <div class="ui form">\n          <div class="inline field">\n            <input type="number" placeholder="Minimum: \u20A6300" ng-model="requested_amount" ng-min="300">\n          </div>\n        </div>\n      </div>\n      <div class="actions  flex-center">\n        <pay-with-paystack></pay-with-paystack>\n        <div class="ui black left deny button">\n        Close\n        </div>\n      </div>\n      <div class="ui segments" id="info-images">\n        <div class="ui segment">\n        <p style="color:green"><i class="lock icon"></i>SSL Encryption Enabled</p>\n          <p>\n\n          </p>\n        </div>\n        <div class="ui secondary segment">\n          <p>\n            <img src="/img/paystack_preview.png" alt="" />\n          </p>\n        </div>\n        <div class="ui secondary segment" id="extra">\n          <div class="ui small header">Pay via bank Deposit or Wire transfer</div>\n          <p>\n            <b>Account Name:</b> Tcom Wireless Nigeria\n          </p>\n          <p>\n            <b>Account Number:</b> 1019040225 (United Bank for Africa)\n          </p>\n          <p>\n            <b>  Account type:</b> Current\n          </p>\n          <p>\n            <img src="/img/uba.jpg" alt="" />\n          </p>\n\n          <div class="ui positive message">\n            <div class="header">\n              NB:\n            </div>\n            <p>After payment, send your payment details to hello@fastplay24.com. Your account will be credited as soon as your payment is confirmed. If your account is not credited within 24 hours, send an email to hello@fastplay24.com.</p>\n          </div>\n\n          <div class="ui message">\n            <div class="header">\n              NB:\n            </div>\n            <p>When making payments, please ensure you confirm that the account number you pay into matches the one shown above as we will not be liable for any payments made to a bank account that is not ours.</p>\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n</section>\n';

angular.module('buyUnits', []).directive('buyUnits', ['$timeout', 'Notification', 'sendRequest', function ($timeout, Notification, sendRequest) {
  return {
    restrict: 'E',
    scope: {},
    template: url,
    replace: true,
    controller: ['$scope', function ($scope) {

      $scope.amt_per_unit = 1;

      $scope.openModal = function () {
        $('.ui.modal.buyUnits').modal({
          allowMultiple: false,
          centered: false,
          blurring: true,
          onDeny: function onDeny() {
            return true;
          },
          onHide: function onHide() {
            var remove = function remove() {
              $('.ui.modal.buyUnits').remove();
            };
            setTimeout(remove, 1000);
            // return false;
          },
          onApprove: function onApprove() {
            return true;
          }
        }).modal('show');
      };

      $scope.awardCredits = function () {

        sendRequest.postRequest('/user/credit-account', { 'amt': $scope.requested_amount }).then(function (rsp) {
          if (rsp.status == 422) {
            Notification.error({ message: 'No active game in progress', positionX: 'center' });
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              Notification.primary({ message: 'Units added to account', positionX: 'center' });
              $scope.$parent.userdetails.available_units = $scope.$parent.userdetails.available_units + $scope.requested_amount;
              $scope.requested_amount = null;
            }
          }
        });
      };

      $scope.$on('$destroy', function () {
        $timeout(function () {
          // $('.ui.modal.buyUnits').remove();

        }, 0);
      });
    }]
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

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

/***/ "./resources/assets/js/angular/directives/customFileChange.js":
/***/ (function(module, exports) {

//This directive saves the selected file details on the passed variables AND then aves the base64 version of the image on the model.
// <input type="file" class="form-control" file-change="yourHandler($event, files)" ng-model="details.test3"/>
//
// $scope.yourHandler = function ($event, files) {
//   console.log($event);
//   console.log(files);
//   // console.log(data);
//   console.log($scope.details.test3);
// };

angular.module('customFileChange', []).directive('fileChange', ['$parse', function ($parse) {

  return {
    require: 'ngModel',
    restrict: 'A',
    link: function link($scope, element, attrs, ngModel) {

      // Get the function provided in the file-change attribute.
      // Note the attribute has become an angular expression,
      // which is what we are parsing. The provided handler is
      // wrapped up in an outer function (attrHandler) - we'll
      // call the provided event handler inside the handler()
      // function below.
      var attrHandler = $parse(attrs['fileChange']);

      // This is a wrapper handler which will be attached to the
      // HTML change event.
      var handler = function handler(e) {

        // Execute the provided handler in the directive's scope.
        // The files variable will be available for consumption
        // by the event handler.
        var reader = new FileReader();

        reader.onload = function (et) {
          $scope.$apply(function () {

            // $scope.details.headerImage = et.target.result;
            ngModel.$setViewValue(et.target.result);
            attrHandler($scope, { $event: e, files: e.target.files, data: et.target.result });
          });
        };

        reader.readAsDataURL(e.target.files[0]);
      };
      $scope.$watch(function () {
        return ngModel.$viewValue;
      }, function (value) {
        if (!value) {
          element.val("");
        }
      });
      // Attach the handler to the HTML change event
      element[0].addEventListener('change', handler, false);
    }
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/customFileUpload.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <custom-file-upload dest="'u32/'" mdl="post.postImage" attr="postImage" altText="Post Image Upload"></custom-file-upload>

// The mdl attribute is the model to use for the element and the attr is the name and the id to use. the dest folder is the folder to upload the image to in our storage directory
// We use jQLite to set the id and the name attribute in the link method and we set the model and the destination folder in the controller

// The attr attribute is used to set the name and the id attributes of the generated filefield from the template userdetails
// The altText attr is used to set the alt attribut of the nested image used for displaying the uploaded image

// // NOTE:

// This directive requires the file change directive to be loaded. We use the file change directive to respond to when the user selects an image and then trigger the upload
// This directive also requires the sendRequest directives
// The directive passes the filename of the aved imnage on the server back to the model instance that was passed in


// EXAMPLE templateUrl
// <div>
//   <img ng-if="mdl" ng-src="{{mdl}}" class="img-responsive" style="max-width:25%;">
//   <input type="file" class="form-control" file-change="uploadImage($event, files)" ng-model="mdl">
// </div>

// EXAMPLE LARAVEL CONTROLLER TO HANDLE THE ROUTYE
// public function handleImageUpload(){
//
//     // dump(request()->all());
//
//     $data = request('image');
//     $foldername = request('fn');
//
//     list($type, $data) = explode(';', $data);
//     list(, $data)      = explode(',', $data);
//
//     $data = base64_decode($data);
//     $imageName = time().'.png';
//     $hey = Storage::disk('public')->put($foldername.$imageName, $data);
//
//     return ['filename' => '/storage/'.$foldername.$imageName];
//
// }

var url = '\n<div>\n   <img ng-if="mdl" ng-src="{{mdl}}" class="img-responsive" style="max-width:25%;">\n   <input type="file" class="form-control" file-change="uploadImage($event, files)" ng-model="mdl">\n</div>\n\n';

angular.module('customFileUpload', []).directive('customFileUpload', ['$localStorage', 'sendRequest', function ($localStorage, sendRequest) {
  return {
    restrict: 'E',
    scope: {
      dest: '=',
      mdl: '=',
      attr: '=',
      altText: '='
    },
    template: url,
    // templateUrl:'angular/directive-templates/customFileUploadTemplate.php',
    replace: true,
    link: function link(scope, element, attributes) {

      // console.log(attributes); //literal string "{{some string}}", no interpolation
      // console.log(element); //literal string "{{some string}}", no interpolation
      // console.log(attributes.anotherParam); //literally "another string"
      element.children('input[type="file"]').attr('id', attributes.attr);
      element.children('input[type="file"]').attr('name', attributes.attr);
      element.children('img').attr('alt', attributes.altText);
      // attributes.$observe('myDirective', function(value){
      // 	console.log(value);
      // });
      //
      // attributes.$observe('anotherParam', function(value){
      // 	console.log(value);
      // });
    },
    controller: ['$scope', function ($scope) {
      $scope.uploadImage = function ($event, files) {
        sendRequest.processImageUpload('/api/upload-image', $scope.mdl, $scope.dest, $localStorage.userToken).then(function (data) {
          console.log(data);
          if (undefined == data.filename) {
            console.error('Server Route Error');
          } else {
            $scope.mdl = data.filename;
            $scope.$parent.filename = data.filename;
            // Notification.success({ message: 'Upload Successful', positionX: 'center'});
          }
        });
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/gamePlay.js":
/***/ (function(module, exports) {

// EXAMPLE
// <game-play></game-play>


var url = '\n<section id="game-play">\n\n\n<style>\n  #timer h1{\n    margin: 0 !important;\n  }\n</style>\n<style media="(max-width:767px)">\n  #heading{\n    -webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;\n  }\n  #game-play{\n    margin-top: -140px;\n  }\n</style>\n\n\n\n  <div class="ui compact horizontal segments flex-center" style="background-color: rgba(255,255,255,0.6);" id="heading">\n    <div class="ui segment">\n      <div class="ui compact menu">\n        <a class="item" style="padding: 0 20px !important;">\n          <i class="icon clock outline"></i> <countdown-timer countdown="game_timer" finish="displayResults()" id="timer"></countdown-timer>\n        </a>\n      </div>\n    </div>\n\n    <div class="ui segment">\n      <div class="ui violet label" style="font-size: 13px;">\n        <span style="padding-right: 10px;">Active Gamers</span>\n        <i class="users icon"></i> {{ total_examinees }}\n      </div>\n    </div>\n\n\n    <div class="ui segment">\n      <h1 style="color: white; float: right;">Lifelines</h1>\n    </div>\n\n    <div class="ui segment">\n      <div class="ui compact menu">\n        <a class="item">\n          50/50\n          <div class="floating ui red label">1</div>\n        </a>\n        <a class="item" style="background:#21BA45; color: white;">\n          CHANGE QUESTION\n          <div class="floating ui teal label">1</div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n\n  <div class="ui styled fluid accordion">\n\n    <div ng-repeat="q in user_questions" ng-if="$index < 10">\n\n      <div ng-class="{ \'title\': true, \'active\': $index == 0 }">\n        <i class="dropdown icon"></i> Question {{ $index + 1}}\n      </div>\n\n      <div ng-class="{ \'content\': true, \'active\': $index == 0 }">\n        <div class="ui stacked segment">\n\n          <p id="question">{{ q.question.question }}</p>\n\n          <div class="ui middle aligned selection list">\n\n            <label class="item" for="option1{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.question.option_1">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_1" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_1" id="option1{{$index}}">\n                  <label>{{ q.question.option_1 }}</label>\n                </div>\n              </div>\n            </label>\n\n\n\n            <label class="item" for="option2{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.question.option_2">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_2" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_2" id="option2{{$index}}">\n                  <label>{{ q.question.option_2 }}</label>\n                </div>\n              </div>\n            </label>\n\n\n\n            <label class="item" for="option3{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.question.option_3">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_3" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_3" id="option3{{$index}}">\n                  <label>{{ q.question.option_3 }}</label>\n                </div>\n              </div>\n            </label>\n\n\n\n            <label class="item" for="option4{{$index}}">\n              <div class="content">\n                <div class="ui slider checkbox" ng-if="q.question.option_4">\n                  <input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_4" ng-model="q.answered_option" ng-change="q.answered_option = q.question.option_4" id="option4{{$index}}">\n                  <label>{{ q.question.option_4 }}</label>\n                </div>\n              </div>\n            </label>\n\n            <div class="ui buttons">\n              <button class="ui button" ng-click="requestOptions(q)" ng-disabled="lifelines.options">50/50</button>\n              <div class="or"></div>\n              <button class="ui positive button" ng-click="requestExtra(q)" ng-disabled="lifelines.extra">CHANGE QUESTION</button>\n            </div>\n\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <div class="text-center" style="display: flex; align-items: center; justify-content: center;">\n      <button ng-click="submitExam()" ng-class="[\'positive\', \'ui\', \'button\', {\'loading\' : loading}]">Finish</button>\n  </div>\n\n</section>\n\n';

angular.module('gamePlay', []).directive('gamePlay', ['$location', '$localStorage', 'Notification', 'sendRequest', function ($location, $localStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {
      $scope.lifelines = $localStorage;
      $scope.lifelines.extra = $scope.lifelines.extra || false;
      $scope.lifelines.options = $scope.lifelines.options || false;

      sendRequest.getUserQuestions('/user/get-user-questions').then(function (rsp) {
        $scope.user_questions = rsp;
      });

      $scope.submitExam = function () {
        $scope.loading = true;

        sendRequest.postRequest('/user/submit-exam', $scope.user_questions).then(function (rsp) {
          delete $localStorage.user_questions;
          delete $localStorage.extra;
          delete $localStorage.options;

          if (rsp.status == 422) {
            Notification.error({ message: 'No active game in progress', positionX: 'center' });
            $location.path('/dashboard');
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              sendRequest.storeData('user_score', rsp.data.user_score);
              $localStorage.user_score = rsp.data.user_score;
              $location.path('/dashboard');
            }
          }
        });
      };

      $scope.requestExtra = function (q) {
        var removedQuestion = $scope.user_questions.indexOf(q);
        $scope.user_questions.splice(removedQuestion, 1);
        $scope.lifelines.extra = true;
      };

      $scope.requestOptions = function (q) {
        var count = 0;
        if (q.question.option_1 != q.question.correct_option) {
          q.question.option_1 = null;
          count++;
        }
        if (q.question.option_2 != q.question.correct_option) {
          q.question.option_2 = null;
          count++;
        }
        if (q.question.option_3 != q.question.correct_option && count < 2) {
          q.question.option_3 = null;
          count++;
        }
        if (q.question.option_4 != q.question.correct_option && count < 2) {
          q.question.option_4 = null;
          count++;
        }

        $scope.lifelines.options = true;
      };

      $scope.displayResults = function () {
        sendRequest.postRequest('/user/end-exam', $scope.user_questions).then(function (rsp) {
          delete $localStorage.user_questions;
          delete $localStorage.extra;
          delete $localStorage.options;

          if (rsp.status == 422) {
            Notification.error({ message: 'No active game in progress', positionX: 'center' });
            $location.path('/dashboard');
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              sendRequest.storeData('user_score', rsp.data.user_score);
              $localStorage.user_score = rsp.data.user_score;
              $location.path('/dashboard/display-results');
            }
          }
        });
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/gameState.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-state><game-state>


var url = '\n<div id="game">\n  <div id="card" class="ui segments" ng-if="game_state == \'loading\' && !transition">\n    <!-- game load -->\n    <div class="ui segment">\n      <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">\n        <span>Countdown to next game</span>\n      </div>\n    </div>\n    <div class="ui segment">\n      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>\n      <button>Next game</button>\n    </div>\n  </div>\n\n  <div id="card" class="ui segments" ng-if="game_state == \'waiting\' && !transition">\n    <!-- game waiting -->\n    <div class="ui segment">\n      <div class="ui horizontal list">\n        <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">\n          <span style="padding-right: 10px;">Active Gamers</span>\n          <i class="users icon"></i> {{ total_examinees }}\n        </div>\n      </div>\n    </div>\n    <div class="ui segment">\n      <countdown-timer countdown="game_timer" finish="displayResults()"></countdown-timer>\n    </div>\n\n    <div class="ui segment">\n\n      <div class="ui labeled button" tabindex="-1" ng-if="user_score == null">\n        <div class="ui green button">\n          <i class="fork icon"></i> Score\n        </div>\n        <a class="ui basic green left pointing label">\n          Awaiting results\n        </a>\n      </div>\n\n      <div class="ui labeled button" tabindex="-1" ng-if="user_score < 10">\n        <div class="ui red button">\n          <i class="fork icon"></i> Score\n        </div>\n        <a class="ui basic red left pointing label">\n          {{ user_score }} out of 10\n        </a>\n      </div>\n      <div class="ui labeled button" tabindex="-1" ng-if="user_score > 9">\n        <div class="ui basic blue button">\n          <i class="fork icon"></i> Score\n        </div>\n        <a class="ui basic left pointing blue label">\n        {{ user_score }} out of 10\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div id="card" class="ui segments" ng-if="game_state == \'active\' && !transition">\n    <!-- game active -->\n    <div class="ui segment">\n      <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">\n        <span>Game in progress</span>\n      </div>\n    </div>\n    <div class="ui segment">\n      <countdown-timer countdown="game_timer" finish="pageReload()"></countdown-timer>\n      <button style="cursor: pointer" ng-click="joinGame()" ng-disabled="transition">Join Game</button>\n    </div>\n  </div>\n\n  <div id="card" class="ui segments" ng-if="game_state == \'paused\' && !transition">\n    <!-- game paused -->\n    <div class="ui segment">\n      <div class="ui horizontal list">\n        <div class="ui label" style="background-color: #0195d2; color: #fff; font-size: 13px;">\n          <span style="padding-right: 10px;">Active Gamers</span>\n          <i class="users icon"></i> {{ total_examinees }}\n        </div>\n      </div>\n    </div>\n    <div class="ui segment">\n      <countdown-timer countdown="game_timer" finish="endGameReload()"></countdown-timer>\n      <button style="cursor: pointer" ng-click="resumeGame()">Resume Game</button>\n    </div>\n  </div>\n\n  <div id="card" class="ui segments">\n    <div class="content" style="padding-bottom: 5px;">\n      <div class="ui compact segment">\n        <div class="ui blue image label">\n          Referral link\n          <div class="detail" id="refcode" ng-click="copy()" style="cursor: pointer;" title="Click to copy">https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }}</div>\n          <input type="text" ng-hide="true" id="hiddenref">\n        </div>\n        <div class="a2a_kit a2a_kit_size_32 a2a_default_style">\n          <br />\n          <strong style="margin-right: 15px; color:#555!important;"">INVITE SOMEONE AND GET PAID:</strong>\n          <a class="ui facebook icon button" href="https://www.facebook.com/sharer/sharer.php?u=https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }}" target="_blank">\n            <i class="facebook f icon"></i>\n          </a>\n          <a class="ui twitter button icon" ng-href="https://twitter.com/intent/tweet?text=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }} Thank me later. #fastplay24" title="Tweet" target="_blank">\n            <i class="twitter icon"></i>\n          </a>\n          <a class="ui black button icon" href="mailto:?subject=Join FastPlay24&body=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }} Thank me later." title="Email">\n            <i class="envelope outline icon"></i>\n          </a>\n          <a class="ui green button icon" ng-href="whatsapp://send?text=Win up to N15, 000 in 10mins with just N35. Join @fastplay24 now. https://fastplay24.com/register/ref/{{ $parent.userdetails.refcode }} Thank me later. #fastplay24" title="Whatsapp Share">\n              <i class="whatsapp icon"></i>\n            </a>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n';

angular.module('gameState', []).directive('gameState', ['$location', '$route', 'Notification', '$localStorage', 'sendRequest', function ($location, $route, Notification, $localStorage, sendRequest) {
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
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.transition = true;

      if (sendRequest.getData('user_score') || !angular.isUndefined($localStorage.user_score)) {
        $scope.user_score = $localStorage.user_score;
      }

      //when the game was paused, ends the user's incomplete game and displays the results
      $scope.endGameReload = function () {
        $scope.transition = true;
        alert('The game has ended');
        //Send a request to end the user's game and redirect to results display page
        sendRequest.postRequest('/user/end-exam', $localStorage.user_questions).then(function (rsp) {
          delete $localStorage.user_questions;
          delete $localStorage.extra;
          delete $localStorage.options;

          if (rsp.status == 422) {
            Notification.error({ message: 'No active game in progress', positionX: 'center' });
            $location.path('/dashboard');
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              sendRequest.storeData('user_score', rsp.data.user_score);
              $localStorage.user_score = rsp.data.user_score;
              $location.path('/dashboard/display-results');
            }
          }
        });
      };

      //when the game was paused, take the user back to the game
      $scope.resumeGame = function () {
        $scope.transition = true;

        sendRequest.postRequest('user/resume-game').then(function () {
          $location.path('/dashboard/game-play');
        });

        //Send a request to resume the game and set the session back to active

        $scope.displayResults();
      };

      // handle page reload on timer countdown so that the page can get the next thing from the server
      $scope.pageReload = function () {
        // location.reload();
        sendRequest.getGameState().then(function (rsp) {
          $scope.game_state = rsp.game_state;
          $scope.game_timer = rsp.game_timer;
          $scope.total_examinees = rsp.total_examinees;
        });
      };

      // refresh the game state and then redirect to the display results page
      $scope.displayResults = function () {
        NProgress.start();
        $scope.transition = true;

        sendRequest.getGameState('/user/get-game-state').then(function (rsp) {
          $scope.game_state = rsp.game_state;
          $scope.game_timer = rsp.game_timer;

          if (rsp.game_state == 'loading') {
            $location.path('/dashboard/display-results');
          } else {
            // $location.url('/invalid');
            $route.reload();
          }
          NProgress.done();
        });
      };

      $scope.joinGame = function () {
        $scope.transition = true;

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
              $scope.transition = true;
              $location.path('/dashboard/game-play');
            }
          } else if (rsp.status == 402) {
            $scope.transition = false;
            Notification.error({ message: 'Insufficient credits to join game.', positionX: 'center' });
          } else if (rsp.status == 403) {
            $scope.transition = true;
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
        $scope.transition = false;
      });
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/inputCountValidator.js":
/***/ (function(module, exports) {

//This directive is used for instance to validate whether the values entered into a numeric field == 10

var INTEGER_REGEXP = /^-?\d+$/;
angular.module('inputCountValidator', []).directive('count', function () {
  return {
    require: 'ngModel',
    link: function link(scope, elm, attrs, ctrl) {
      ctrl.$validators.count = function (modelValue, viewValue) {

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

/***/ }),

/***/ "./resources/assets/js/angular/directives/makeWithdrawal.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = '\n<section id="makeWithdrawal" class="ui right floated horizontal  list">\n  <div class=" ui vertical animated orange compact button" tabindex="-1" ng-click="openModal()">\n    <div class="hidden content"><i class="icon money bill alternate outline"></i></div>\n    <div class="visible content">\n      Cash Out\n    </div>\n  </div>\n\n\n  <div class="ui tiny modal makeWithdrawal transition hidden">\n\n      <div class="ui icon mini message">\n        <i class="inbox icon"></i>\n        <div class="content">\n          <div class="header">\n            TRANSFER EARNINGS FIRST\n          </div>\n          <p> To cashout your earnings, first transfer it to your wallet by clicking the \'transfer earnings\' button. Otherwise proceed.</p>\n        </div>\n      </div>\n\n      <div class="header">\n        Enter an Amount\n      </div>\n      <div class="image content flex-center">\n        <div class="ui form">\n          <div class="inline field">\n            <input type="number" placeholder="Max {{ $parent.userdetails.available_units | currency }}" ng-model="requested_amount" ng-max="$parent.userdetails.available_units" ng-min="150">\n          </div>\n        </div>\n      </div>\n      <div class="actions  flex-center">\n        <div class="ui black left deny button">\n          Close\n        </div>\n        <div ng-class="{\'ui positive right labeled icon button\': true, \'disabled\': !requested_amount}" prompt-password="requestWithdrawal()">\n          Yep, proceed!\n          <i class="checkmark icon"></i>\n        </div>\n      </div>\n      <div class="image content flex-center">\n        <div class="ui icon mini message positive">\n          <i class="inbox icon"></i>\n          <div class="content">\n            <div class="header">\n              NOTE:\n            </div>\n            <p> For withdrawals below \u20A61000, a service fee of \u20A650 will be charged. </p>\n            <p> While an additional service fee of \u20A650 will be charged for every \u20A65000.</p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n</section>\n';

angular.module('makeWithdrawal', []).directive('makeWithdrawal', ['$timeout', 'Notification', 'sendRequest', function ($timeout, Notification, sendRequest) {
  return {
    restrict: 'E',
    scope: {
      // dest : '=',
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.openModal = function () {
        $('.ui.modal.makeWithdrawal').modal({
          centered: false,
          blurring: true,
          onDeny: function onDeny() {
            return true;
          },
          onHide: function onHide() {
            var remove = function remove() {
              $('.ui.modal.makeWithdrawal').remove();
            };
            setTimeout(remove, 1000);
            // return false;
          },
          onApprove: function onApprove() {
            return true;
          }
        }).modal('show');
      };

      $scope.requestWithdrawal = function () {

        sendRequest.postRequest('/user/request-withdrawal', { 'amt': $scope.requested_amount }).then(function (rsp) {
          if (rsp.status == 422) {
            Notification.error(rsp.data.message);
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              if ($scope.requested_amount < 1000) {
                Notification.primary('Amount requested will be sent a recharge card to ' + $scope.$parent.userdetails.phone1);
              } else {
                Notification.primary({ message: 'Amount requested will be sent to account number ' + $scope.$parent.userdetails.acct_no, positionX: 'center' });
              }

              $scope.$parent.userdetails.available_units = $scope.$parent.userdetails.available_units - $scope.requested_amount;
              $scope.requested_amount = null;
            }
          }
        });
      };

      $scope.$on('$destroy', function () {
        $timeout(function () {
          // $('.ui.modal.makeWithdrawal').remove();
        }, 0);
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

/***/ "./resources/assets/js/angular/directives/payWithPaystack.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = '\n<section id="payWithPaystack" class="ui right floated horizontal list">\n  <button ng-class="{\'ui blue right labeled icon button\': true, \'disabled\': !requested_amount}"  type="button" name="pay_now" id="pay-now" title="Pay now"  ng-click="saveOrderThenPayWithPaystack()">\n    Pay Online\n    <i class="credit card outline icon"></i>\n  </button>\n</section>\n';

angular.module('payWithPaystack', []).directive('payWithPaystack', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    template: url,
    replace: true,
    link: function link(scope, element) {
      var scriptTag = angular.element(document.createElement('script'));
      scriptTag.attr('charset', 'utf-8');
      scriptTag.attr('src', 'https://js.paystack.co/v1/inline.js');
      element.append(scriptTag);
    },
    controller: ['$scope', '$location', function ($scope, $location) {

      $scope.saveOrderThenPayWithPaystack = function () {

        $scope.awardCredits().then(function (rsp) {
          $scope.payWithPaystack();
        }, function (err) {
          alert('Network Error. Please refresh the page and try again.');
        });
      };

      $scope.payWithPaystack = function () {

        var orderid = _.random(676764765, 544765545646456);
        var handler = PaystackPop.setup({
          // This assumes you already created a constant named
          // PAYSTACK_PUBLIC_KEY with your public key from the
          // Paystack dashboard. You can as well just paste it
          // instead of creating the constant
          key: PAYSTACK_PUBLIC_KEY,
          email: $scope.$parent.userdetails.email,
          first_name: $scope.$parent.userdetails.firstname,
          last_name: $scope.$parent.userdetails.lastname,
          phone: $scope.$parent.userdetails.phone1,
          amount: $scope.requested_amount * 100,
          ref: orderid,
          metadata: {
            cartid: orderid,
            orderid: orderid,
            custom_fields: [// to be displayed on paystack transaction page and paystack email.
            {
              display_name: "Paid on",
              variable_name: "paid_on",
              value: 'Website'
            }, {
              display_name: "Paid via",
              variable_name: "paid_via",
              value: 'Inline Popup'
            }, {
              display_name: "User Details",
              variable_name: "user_details",
              value: $scope.$parent.userdetails.firstname + ' ' + $scope.$parent.userdetails.lastname + ': ' + $scope.$parent.userdetails.phone1
            }, {
              display_name: "User ID",
              variable_name: "user_id",
              value: $scope.$parent.userdetails.id
            }]
          },
          callback: function callback(response) {
            Notification.warning({ message: 'Acknowledging payment. Please wait...', delay: 20000, replaceMessage: true });

            // post to server to verify transaction before giving value
            sendRequest.postRequest('/user/credit-account?reference=' + response.reference).then(function (rsp) {
              if (rsp.status == 200) {
                if (rsp.data.verified) {

                  sendRequest.storeData('activeTransaction', true);

                  Notification.primary({ message: 'Units added to account', positionX: 'center' });
                  $scope.$parent.userdetails.available_units += $scope.requested_amount;
                  $scope.requested_amount = null;
                  $location.path('/dashboard/order-successful');
                } else {
                  Notification.error('Automatic transction verification failed. Transaction will be manually verified and a sales rep will get in touch with you. Thank you.');
                }
              }
            });
          },
          onClose: function onClose() {
            $scope.requested_amount = null;
            Notification.error('Transaction cancelled by user');
          }
        });
        handler.openIframe();
        $('.buyUnits.ui.modal').modal('hide');
        Notification.warning({ message: 'Contacting payment gate way. Please wait...', delay: 20000, replaceMessage: true });
      };

      $scope.awardCredits = function () {

        var data = {
          'amt': $scope.requested_amount,
          'trans_type': 'wallet funding',
          'status': 'pending'
        };

        return sendRequest.postRequest('/user/send-credit-account-request', data).then(function (rsp) {
          if (rsp.status == 200) {
            if (rsp.data.status) {
              return true;
            }
          }
        });
      };
    }]
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/directives/promptPassword.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-play></game-play>
// <button ng-class="['ui purple button', {'loading':verifying}]" confirm-action="verifyUser(u)" ng-hide="u.verified">Verify</button>


angular.module('promptPassword', []).directive('promptPassword', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'A',
    transclude: true,
    template: "<div ng-transclude></div>",
    link: function link(scope, el, attrs) {

      var msg = "Enter your password";
      var clickAction = attrs.promptPassword;
      el.bind('click', function (event) {
        var pwd = window.prompt(msg);
        sendRequest.postRequest('/user/confirm-user-password', pwd).then(function (rsp) {
          if (rsp.status == 423) {
            Notification.error('Incorrect password');
            scope.$parent.logout();
            // console.log(scope.$parent);
          } else if (rsp.status == 200) {
            if (rsp.data.status) {
              scope.$eval(clickAction);
            }
          }
        });
      });
    }
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/directives/sendMessage.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = '\n<div class="ui small basic green icon buttons right floated">\n  <button class="ui button active" ng-click="openModal()">\n    <ng-transclude></ng-transclude>\n  </button>\n  <div class="ui mini modal sendMessage transition hidden">\n      <div class="header">\n        Send a message\n      </div>\n      <div class="content flex-center">\n        <div class="ui form">\n          <div class="field">\n            <input type="text" placeholder="Message Subject" ng-model="m.subject">\n          </div>\n          <div class="field">\n            <textarea placeholder="Message goes here" ng-model="m.message" ></textarea>\n          </div>\n        </div>\n      </div>\n      <div class="actions  flex-center">\n        <div class="ui black left deny button">\n          Bail\n        </div>\n        <div ng-class="{\'ui positive right labeled icon button\': true, \'disabled\': !m.message || !m.subject}" ng-click="sendMessage()">\n          Send\n          <i class="checkmark icon"></i>\n        </div>\n      </div>\n    </div>\n</div>\n';

angular.module('sendMessage', []).directive('sendMessage', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    scope: {
      msg: '='
      // mdl:'=',
      // attr: '=',
      // altText: '='
    },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template: url,
    replace: true,
    transclude: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.openModal = function () {
        $('.ui.modal.sendMessage').modal({
          blurring: true
        }).modal('show');
      };

      $scope.sendMessage = function () {
        sendRequest.postRequest('/user/send-message', $scope.m).then(function (rsp) {
          if (rsp.data.status) {
            Notification.primary('Message sent');
            $scope.msg.read = true;
            sendRequest.postRequest('/user/mark-message-as-read', $scope.msg);
            $scope.m = null;
          }
        }, function (err) {
          Notification.error('Sending Failed');
        });
      };
    }]
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/directives/userProfile.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {

var url = '\n<section id="u_details">\n  <div class="grid-container">\n    <div class="grid-50">\n      <div class="content">\n        <h2 class="header" style="margin-bottom: 2px;">{{ userdetails.firstname }} {{ userdetails.lastname }}</h2>\n        <div class="content" style="padding-bottom: 5px;">\n          <div class="meta">\n            <span class="date">Joined {{ userdetails.created_at | timeAgo }}</span>\n          </div>\n          <div class="description">\n            {{ userdetails.address }}\n          </div>\n        </div>\n        <div class="content" style="padding-bottom: 5px;">\n          <div class="ui blue label">\n            <i class="marker icon"></i> {{ userdetails.town }}, {{ userdetails.state }}.\n          </div>\n          <div class="ui blue label">\n            <i class="mail icon"></i> {{ userdetails.email }}\n          </div>\n        </div>\n        <div class="content" style="padding-bottom: 5px;">\n          <div class="ui green label">\n            <i class="call square icon"></i> {{ userdetails.phone1 }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="grid-50">\n      <div class="content" style="margin-bottom: 15px;">\n        <div class="ui orange image label">\n          My Bank\n          <div class="detail">{{ userdetails.bank }}</div>\n        </div>\n\n        <button class="ui compact right floated violet button" ng-click="transferEarnings()">\n          <i class="icon credit card amazon pay"></i>\n          Transfer Earnings\n        </button>\n      </div>\n      <div class="content" style="padding-bottom: 25px;">\n        <div class="ui teal image label">\n          Acct. No.\n          <div class="detail">{{ userdetails.acct_no }}</div>\n        </div>\n\n        <make-withdrawal></make-withdrawal>\n      </div>\n      <div class="content" style="padding-bottom: 25px;">\n        <div class="ui purple image label">\n          Acct. Name.\n          <div class="detail">{{ userdetails.firstname }} {{ userdetails.lastname }}</div>\n        </div>\n\n        <buy-units></buy-units>\n      </div>\n    </div>\n  </div>\n</section>\n';

angular.module('userProfile', []).directive('userProfile', [function () {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/userProfileTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', 'Notification', 'sendRequest', function ($scope, Notification, sendRequest) {

      $scope.copy = function () {
        console.log($('#refcode'));
        $('#hiddenref').val($('#refcode').text());
        $('#hiddenref').select();
        document.execCommand('Copy');
        Notification.primary('Referral code copied');
      };

      $scope.transferEarnings = function () {
        sendRequest.postRequest('user/transfer-earnings').then(function (rsp) {
          if (rsp.status == 200) {
            if (rsp.data.status == true) {
              Notification.success({ message: 'Earnings transferred to wallet', positionX: 'center' });
            } else if (rsp.data.status == 'Insufficient') {
              Notification.error({ message: 'No earnings to transfer', positionX: 'center' });
            }
          }

          sendRequest.getUserDetails('/user/get-user-details', true).then(function (rsp) {
            $scope.userdetails = rsp.userdetails;
          });
          sendRequest.getTotalEarnings('/user/get-total-earnings', true).then(function (rsp) {
            $scope.total_earnings = rsp.total_earnings;
          });
        });
      };
    }]
  };
}]);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/angular/directives/verifyAccount.js":
/***/ (function(module, exports) {

// EXAMPLE uploadPostImage
// <game-play></game-play>


var url = '\n<section id="verifyAccount" class="ui left floated horizontal  list">\n\n  <div class="ui circular green labels" ng-if="userdetails.verified">\n    <a class="ui label">\n      <i class="check circle icon" style="margin: 0;"></i>\n    </a>\n  </div>\n\n  <div class="ui labeled button" tabindex="-1" ng-click="sendVerificationMail()" ng-if="!userdetails.verified">\n    <div class="ui red label right pointing">\n      <i class="exclamation triangle icon"></i>\n    </div>\n    <a class="ui basic red label ng-binding">Verify now</a>\n  </div>\n</section>\n';

angular.module('verifyAccount', []).directive('verifyAccount', ['Notification', 'sendRequest', function (Notification, sendRequest) {
  return {
    restrict: 'E',
    // scope:{
    //   // dest : '=',
    //   // mdl:'=',
    //   // attr: '=',
    //   // altText: '='
    // },
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template: url,
    replace: true,
    link: function link(scope, element, attributes) {},
    controller: ['$scope', function ($scope) {

      $scope.sendVerificationMail = function () {

        Notification.warning({ message: 'Attempting to send verification email...', delay: 2000 });

        sendRequest.postRequest('/user/send-verification-mail', $scope.userdetails.email).then(function (rsp) {
          if (rsp.status == 422 || rsp.status == 408) {
            Notification.error({ message: rsp.data.message, delay: 1500, replace: true });
          } else if (rsp.status == 200) {
            if (rsp.data.message) {
              // Notification.success('Verification mail sent to ' + $scope.userdetails.email);
              Notification.success({ message: rsp.data.message, replace: true });
            }
          }
        });
      };
    }]
  };
}]);

/***/ }),

/***/ "./resources/assets/js/angular/filters/parseHTML.js":
/***/ (function(module, exports) {


// SAMPLE USAGE
// <td ng-bind-html="post.summary | trusted | truncate:200"></td>


angular.module('parseHTML', []).filter('trusted', ['$sce', function ($sce) {
	return function (stringToParse) {
		return $sce.trustAsHtml(stringToParse);
	};
}]);

// home.filter('trusted', ['$sce', function($sce) {
//     var div = document.createElement('div');
//     return function(text) {
//         div.innerHTML = text;
//         return $sce.trustAsHtml(div.textContent);
//     };
// }]);

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

/***/ "./resources/assets/js/angular/routes/dashboard-routes.js":
/***/ (function(module, exports) {

dashboard.config(['$routeProvider', '$locationProvider', '$compileProvider', '$localStorageProvider', 'NotificationProvider', 'timeAgoSettings', '$provide', function ($routeProvider, $locationProvider, $compileProvider, $localStorageProvider, NotificationProvider, timeAgoSettings, $provide) {

  $routeProvider.when('/dashboard', {
    templateUrl: 'angular/views/dashboard/index.html',
    controller: 'DashboardController',
    animation: 'slide'
  }).when('/dashboard/profile', {
    templateUrl: 'angular/views/dashboard/profile.html',
    controller: 'ProfileController',
    animation: 'slide'
  }).when('/dashboard/messages', {
    templateUrl: 'angular/views/dashboard/messages.html',
    controller: 'MessageController',
    animation: 'slide'
  }).when('/dashboard/notices', {
    templateUrl: 'angular/views/dashboard/notices.html',
    controller: 'NoticeController',
    animation: 'slide'
  }).when('/dashboard/settings', {
    templateUrl: 'angular/views/dashboard/settings.html',
    controller: 'SettingsController',
    animation: 'slide'
  }).when('/dashboard/game-play', {
    templateUrl: 'angular/views/dashboard/game-play.html',
    controller: 'GamePlayController',
    animation: 'slide',
    resolve: {
      gameActive: ['$location', 'sendRequest', function ($location, sendRequest) {
        return sendRequest.getGameState().then(function (rsp) {
          if (rsp.game_state != 'active') {
            $location.path('/dashboard');
          } else {
            return rsp;
          }
        });
      }]
    }
  }).when('/dashboard/display-results', {
    templateUrl: 'angular/views/dashboard/display-results.html',
    controller: 'DisplayResultsController',
    resolve: {
      gameActive: ['$location', 'sendRequest', function ($location, sendRequest) {
        sendRequest.getGameState().then(function (rsp) {
          if (rsp.game_state != 'loading') {
            $location.path('/dashboard');
          }
        });
      }]
    }
  }).when('/dashboard/order-successful', {
    templateUrl: 'angular/views/dashboard/order-successful.html',
    //  controller: 'DisplayResultsController',
    resolve: {
      activeTransaction: ['$location', 'sendRequest', function ($location, sendRequest) {
        if (!sendRequest.getData('activeTransaction')) {
          $location.path('/dashboard/profile');
        }
      }]
    }
  }).otherwise({
    redirectTo: '/dashboard'
  });

  $locationProvider.hashPrefix('');
  $locationProvider.html5Mode(true);
  $localStorageProvider.setKeyPrefix('game-');
  timeAgoSettings.allowFuture = true;
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

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|sms|tel|whatsapp):/);
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
            scope.results = rsp.data.results;
            scope.user_earning = rsp.data.user_earning;
            scope.max_winners = rsp.data.max_winners;
            scope.total_players = rsp.data.total_players;
            scope.total_prize_money = rsp.data.total_prize_money;
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

/***/ "./resources/assets/js/dashboard-app.js":
/***/ (function(module, exports, __webpack_require__) {


dashboard = angular.module('dashboard', ['ngRoute', 'ngAnimate', 'ngStorage', 'ui-notification', 'yaru22.angular-timeago', 'sendRequest', 'parseHTML', 'customFileChange', 'customFileUpload', 'inputCountValidator', 'countdownTimer', 'miniGameState', 'gameState', 'gamePlay', 'userProfile', 'range', 'buyUnits', 'sendMessage', 'makeWithdrawal', 'bootstrapPage', 'verifyAccount', 'payWithPaystack', 'promptPassword']);

dashboard.run(['$rootScope', '$window', 'Notification', 'sendRequest', function ($rootScope, $window, Notification, sendRequest) {

  $rootScope._ = _;
  $rootScope.logout = function () {
    delete localStorage['game-user_score'];
    sendRequest.postRequest('/logout').then(function (response) {
      if (response.status == 200) {
        Notification.success({ message: 'Logout successful', positionX: 'center' });
        $window.location.href = '/login';
      } else {
        Notification.error({ message: 'Logout failed! Reload page.', positionX: 'center' });
      }
    });
  };

  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    sendRequest.getTotalEarnings('/user/get-total-earnings').then(function (rsp) {
      $rootScope.total_earnings = rsp.total_earnings;
    });
    sendRequest.getUserDetails('/user/get-user-details').then(function (rsp) {
      $rootScope.userdetails = rsp.userdetails;
    });
  });

  // $rootScope.markAsRead = function(msg) {
  //  sendRequest.postRequest('api/user/mark-as-read', msg);
  // };
}]);

__webpack_require__("./resources/assets/js/angular/filters/parseHTML.js");
__webpack_require__("./resources/assets/js/angular/services/services.js");
//
__webpack_require__("./resources/assets/js/angular/filters/rangeFilter.js");
//
__webpack_require__("./resources/assets/js/angular/directives/customFileChange.js");
__webpack_require__("./resources/assets/js/angular/directives/customFileUpload.js");
__webpack_require__("./resources/assets/js/angular/directives/inputCountValidator.js");
__webpack_require__("./resources/assets/js/angular/directives/countdownTimer.js");
__webpack_require__("./resources/assets/js/angular/directives/miniGameState.js");
__webpack_require__("./resources/assets/js/angular/directives/gameState.js");
__webpack_require__("./resources/assets/js/angular/directives/gamePlay.js");
__webpack_require__("./resources/assets/js/angular/directives/buyUnits.js");
__webpack_require__("./resources/assets/js/angular/directives/sendMessage.js");
__webpack_require__("./resources/assets/js/angular/directives/makeWithdrawal.js");
__webpack_require__("./resources/assets/js/angular/directives/userProfile.js");
__webpack_require__("./resources/assets/js/angular/directives/verifyAccount.js");
__webpack_require__("./resources/assets/js/angular/directives/payWithPaystack.js");
__webpack_require__("./resources/assets/js/angular/directives/promptPassword.js");
// require('./angular/directives/timer');
//
//
// require('./angular/directives/ngRepeatFinishedCallback');
//


__webpack_require__("./resources/assets/js/angular/routes/dashboard-routes.js");

__webpack_require__("./resources/assets/js/angular/controllers/dashboard-controller.js");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/dashboard-app.js");


/***/ })

},[2]);
//# sourceMappingURL=dashboard-app.js.map