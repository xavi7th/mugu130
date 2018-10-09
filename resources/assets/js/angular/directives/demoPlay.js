// EXAMPLE
// <game-play></game-play>


var url = `

<section id="game-play">


<style>
  #timer h1{
    margin: 0 !important;
  }
</style>
<style media="(max-width:767px)">
  #heading{
    -webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;
  }
</style>

<style media="(max-width:767px)">
  #summary{
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
    div#main-controller .ui.buttons button {
      margin-bottom: 0;
    }
    input{
      margin-bottom: 10px !important;
    }
</style>

  <div class="ui blue segment">
    <div class="ui icon error message">
      <i class="exclamation icon"></i>
      <div class="content">
        <div class="header">
          Note
        </div>
        <p>You don’t get paid to play the demo. To start playing live and earning, please <a href="/register" target="_self">register</a> and fund your wallet.</p>
      </div>
    </div>
  </div>


  <div class="ui compact horizontal segments flex-center" style="background-color: rgba(255,255,255,0.6);" id="heading">
    <div class="ui segment">
      <div class="ui compact menu">
        <a class="item" style="padding: 0 20px !important;">
          <i class="icon clock outline"></i> <countdown-timer countdown="game_timer" finish="submitExam()" ng-if="!display_results" id="timer"></countdown-timer>
        </a>
      </div>
    </div>

    <div class="ui segment">
      <div class="ui violet label" style="font-size: 13px;">
        <span style="padding-right: 10px;">Active Gamers</span>
        <i class="users icon"></i> {{ total_examinees }}
      </div>
    </div>


    <div class="ui segment">
      <h1 style="color: white; float: right;">Lifelines</h1>
    </div>

    <div class="ui segment">
      <div class="ui compact menu">
        <a class="item">
          50/50
          <div class="floating ui red label">1</div>
        </a>
        <a class="item" style="background:#21BA45; color: white;">
          CHANGE QUESTION
          <div class="floating ui teal label">1</div>
        </a>
      </div>
    </div>
  </div>

  <div class="ui styled fluid accordion" ng-if="!display_results">

    <div ng-repeat="q in user_questions" ng-if="$index < 10">

      <div ng-class="{ 'title': true, 'active': $index == 0 }">
        <i class="dropdown icon"></i> Question {{ $index + 1}}
      </div>

      <div ng-class="{ 'content': true, 'active': $index == 0 }">
        <div class="ui stacked segment">
          <p id="question">{{ q.question }}</p>

          <div class="ui middle aligned selection list">
            <label class="item" for="option1{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.option_1">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_1" ng-model="q.answered_option" ng-change="q.answered_option = q.option_1" id="option1{{$index}}">
                  <label>{{ q.option_1 }}</label>
                </div>
              </div>
            </label>

            <label class="item" for="option2{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.option_2">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_2" ng-model="q.answered_option" ng-change="q.answered_option = q.option_2" id="option2{{$index}}">
                  <label>{{ q.option_2 }}</label>
                </div>
              </div>
            </label>

            <label class="item" for="option3{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.option_3">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_3" ng-model="q.answered_option" ng-change="q.answered_option = q.option_3" id="option3{{$index}}">
                  <label>{{ q.option_3 }}</label>
                </div>
              </div>
            </label>

            <label class="item" for="option4{{$index}}">
              <div class="content">
                <div class="ui slider checkbox" ng-if="q.option_4">
                  <input type="radio" name="question{{$index + 1}}" ng-value="q.option_4" ng-model="q.answered_option" ng-change="q.answered_option = q.option_4" id="option4{{$index}}">
                  <label>{{ q.option_4 }}</label>
                </div>
              </div>
            </label>

            <div class="ui buttons">
              <button class="ui button" ng-click="requestOptions(q)" ng-disabled="lifelines.options">50/50</button>
              <div class="or"></div>
              <button class="ui positive button" ng-click="requestExtra(q)" ng-disabled="lifelines.extra">CHANGE QUESTION</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="ui segment" style="min-height:60vh; margin-top: 5vh" ng-if="loading">
      <div class="ui active inverted dimmer">
        <div class="ui large text loader">Loading questions...</div>
      </div>
    </div>
  </div>

  <div class="text-center" style="display: flex; align-items: center; justify-content: center; padding-bottom: 30px;" ng-if="!loading && !display_results">
    <button class="positive ui button" ng-click=submitExam()>Finish</button>
  </div>


  <div class="grid-container" style="margin-top:70px; padding-bottom:100px;" ng-if="display_results">
    <div class="grid-100">
      <div class="ui red segment">
        <div class="ui icon message">
          <i class="newspaper icon"></i>
          <div class="content">
            <div class="header">
              Results Display
            </div>
          </div>
          <div class="ui left labeled button" tabindex="-1">
            <a class="ui basic blue label">
              {{ user_earning  | currency : '₦' : 0 }}
            </a>
            <div class="ui icon button">
              <i class="visa icon"></i>
              My Earning
            </div>
          </div>
        </div>
      </div>

      <div class="ui segment" ng-if="loading">
        <div class="ui active inverted dimmer">
          <div class="ui large text loader">Computing results...</div>
        </div>
        <p style="height:200px;"></p>
        <p></p>
        <p></p>
      </div>

      <div class="ui red segment"  ng-if="!loading">

        <div class="ui raised horizontal segments" id="summary">
          <div class="ui segment">
            <div class="ui labeled button" tabindex="-1">
              <div class="ui button">
                <i class="heart icon"></i> Players
              </div>
              <a class="ui basic label">
                {{ total_players }}
              </a>
            </div>
          </div>

          <div class="ui segment">
            <div class="ui left labeled button" tabindex="-1">
              <a class="ui basic right pointing label">
                {{ max_winners }}
              </a>
              <div class="ui button">
                <i class="heart icon"></i> Winners
              </div>
            </div>
          </div>

          <div class="ui segment">
            <div class="ui labeled button floated right" tabindex="-1">
              <div class="ui icon button">
                <i class="fork icon"></i>All Players Won
              </div>
              <a class="ui basic label">
                ₦{{ total_prize_money + (5 * total_players) }}
              </a>
            </div>
          </div>
        </div>

        <table class="ui  striped celled table" style="text-align: center;">
          <thead>
            <tr ng-repeat="result in results">
              <th>Position - {{ result.position }}</th>
              <th>Score - {{ result.score }}</th>
            </tr>
          </thead>

        </table>
      </div>
    </div>
  </div>
</section>

`;


angular.module('demoPlay', []).directive('demoPlay', ['$location', '$localStorage', '$sessionStorage', 'Notification', 'sendRequest', function ($location, $localStorage, $sessionStorage, Notification, sendRequest) {
  return {
    restrict: 'E',
    // templateUrl:'angular/directive-templates/gamePlayTemplate.php',
    template:url,
    replace: true,
    scope:{},
    link: (scope, element, attributes) => {

		},
    controller: ['$scope', '$timeout', ($scope, $timeout) => {

      $scope.game_timer = game_timer;
      $scope.total_examinees = _.random(37);
      $scope.display_results = false;
      $scope.loading=true;
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

      $scope.requestExtra = (q) => {
        var removedQuestion = $scope.user_questions.indexOf(q);
        $scope.user_questions.splice(removedQuestion, 1);
        $scope.lifelines.extra = true;
      };

      $scope.requestOptions = (q) => {
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

      $scope.submitExam = () => {
        clearInterval(updateExaminees);
        delete $sessionStorage.user_questions;
        delete $sessionStorage.extra;
        delete $sessionStorage.options;

        $scope.loading = true;
        $scope.display_results = true;

        sendRequest.postRequest('/submit-demo-exam', {'total_examinees':$scope.total_examinees, 'answers':$scope.user_questions} )
                 .then(function (rsp) {
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

      $scope.$parent.$on('$viewContentLoaded', function() {

        sendRequest.getUserQuestions('/get-deno-questions', true)
                    .then( rsp => {
                      $scope.loading=false;
                      $scope.user_questions = rsp;
                    });

         $timeout(function () {
           $('.ui.accordion').accordion();

         }, 500);
      });
      $scope.$on('$destroy', function() {
        // $timeout(function () {
        //   sendRequest.postRequest('/user/pause-game');
        // }, 0);
      });

    }]
  };
}]);
