// EXAMPLE
// <game-play></game-play>

var url = `
<section id="game-play">


<style>
  #timer h1{
    margin: 0 !important;
	}
	

	.questions{
		justify-content: center;
		padding: 50px 0;
	}
	.question__card{
		flex-basis: 80%;
	}
	.question__card__question h4{
		text-transform: initial !important;
		line-height: 1.5em !important;
		font-size: 1.2em !important;
		font-weight: 100 !important;
		margin-bottom: 26px !important;
	}
	.question__card__option{
		padding-bottom:15px !important;
	}
	.question__card__option label{
		padding-right: 15%;
		text-align: left;
		padding-left: 7rem !important;
	}
	.question__card__option input{
		margin-left: 3rem !important;
		width: 21rem !important;
	}
	.question__card__option label::before, .question__card__option label::after{
		margin-left: 5%;

	}
	.question__actions{
		display: flex;
	}

	.question__actions .buttons{
		flex: 1 1 auto;
	}

	.submit-button{
		margin-top:15px !important;
	}
	.ui.pagination.menu .active.item{
		background-color:rgba(92, 243, 33, 0.27);
	}
</style>
<style media="(max-width:767px)">
  #heading{
    -webkit-flex-direction: column;-ms-flex-direction: column;flex-direction: column;
  }
  #game-play{
    margin-top: -140px;
	}
	
</style>



  <div class="ui compact horizontal segments flex-center" style="background-color: rgba(255,255,255,0.6);" id="heading">
    <div class="ui segment">
      <div class="ui compact menu">
        <a class="item" style="padding: 0 20px !important;">
          <i class="icon clock outline"></i> <countdown-timer countdown="game_timer" finish="displayResults()" id="timer"></countdown-timer>
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

	<div class="grid-100">
	<div class="ui segment" style="min-height:60vh; margin-top: 5vh" ng-if="loading">
      <div class="ui active inverted dimmer">
        <div class="ui large text loader">Loading questions...</div>
      </div>
    </div>
	<div class="ui green segment">
	
		<div class="ui cards questions">
			<div class="card question__card no-animate" ng-repeat="q in user_questions" ng-show="current_number == $index">
				<div class="content">
					<div class="header question__card__title">Question {{ $index + 1}}</div>
				</div>
				<div class="content question__card__question">
					<h4 class="ui sub header dash_header question">
						{{ q.question.question }} 
					</h4>
					
					<div class="ui small feed question__card__options">
						
						<div class="event question__card__option">
							<div class="content">
								<div class="summary">
										<div class="ui slider checkbox" ng-if="q.question.option_1">
												<input type="radio" name="question{{$index + 1}}" ng-value="q.question.option_1" ng-model="q.answered_option" 
																ng-change="q.answered_option = q.question.option_1" id="option1{{$index}}">
												<label >{{ q.question.option_1 }}</label>
											</div>
								</div>
							</div>
						</div>
						
						<div class="event question__card__option">
							<div class="content">
								<div class="summary">
										<div class="ui slider checkbox" ng-if="q.question.option_2">
												<input type="radio" name="question{{$index + 2}}" ng-value="q.question.option_2" ng-model="q.answered_option" 
																ng-change="q.answered_option = q.question.option_2" id="option2{{$index}}">
												<label >{{ q.question.option_2 }}</label>
										</div>
								</div>
							</div>
						</div>
						
						<div class="event question__card__option">
							<div class="content">
								<div class="summary">
								<div class="ui slider checkbox" ng-if="q.question.option_3">
										<input type="radio" name="question{{$index + 3}}" ng-value="q.question.option_3" ng-model="q.answered_option" 
														ng-change="q.answered_option = q.question.option_3" id="option3{{$index}}">
										<label >{{ q.question.option_3 }}</label>
								</div>
								</div>
							</div>
						</div>
						
						<div class="event question__card__option">
							<div class="content">
								<div class="summary">
								<div class="ui slider checkbox" ng-if="q.question.option_4">
										<input type="radio" name="question{{$index + 4}}" ng-value="q.question.option_4" ng-model="q.answered_option" 
														ng-change="q.answered_option = q.question.option_4" id="option4{{$index}}">
										<label >{{ q.question.option_4 }}</label>
								</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div class="extra content question__actions">
					<div class="ui buttons">
							<button class="ui left labeled icon black button" ng-click="prev()"  ng-disabled="current_number == 0">
								<i class="left arrow icon"></i>
								Previous
							</button>
							<div class="or"></div>
							<button class="ui button" ng-click="requestOptions(q)" ng-disabled="lifelines.options">50/50</button>
							<div class="or"></div>
							<button class="ui positive button" ng-click="requestExtra(q)" ng-disabled="lifelines.extra">CHANGE QUESTION</button>
							<div class="or"></div>
							<button class="ui right labeled icon black button" ng-click="next()" ng-disabled="current_number == 9">
								<i class="right arrow icon"></i>
								Next
							</button>
						</div>
				</div>
				<div class="ui buttons">
					<button class="ui blue button submit-button" ng-click="submitExam()" ng-class="{'loading' : loading, 'disabled': disabled}">Submit</button>
				</div>
			</div>
			
			
			<div class="ui right floated pagination menu">
				<a class="item" ng-class="{'active' : q.answered_option }" ng-click="setCurrent($index)"
				    ng-repeat="q in user_questions track by q.id" ng-if="$index < 10">{{ $index + 1 }}</a>
      </div>
			
		</div>
	</div>
</div>

</section>

`

angular.module('gamePlay', []).directive('gamePlay', [
	'$location',
	'$localStorage',
	'Notification',
	'sendRequest',
	function($location, $localStorage, Notification, sendRequest) {
		return {
			restrict: 'E',
			// templateUrl:'angular/directive-templates/gamePlayTemplate.php',
			template: url,
			replace: true,
			link: (scope, element, attributes) => {},
			controller: [
				'$scope',
				$scope => {
					$scope.lifelines = $localStorage
					$scope.lifelines.extra = $scope.lifelines.extra || false
					$scope.lifelines.options = $scope.lifelines.options || false
					$scope.current_number = 0

					sendRequest.getUserQuestions('/user/get-user-questions').then(rsp => {
						$scope.user_questions = rsp
					})

					$scope.next = () => {
						$scope.current_number++
					}

					$scope.prev = () => {
						$scope.current_number--
					}

					$scope.setCurrent = n => {
						$scope.current_number = n
					}

					$scope.submitExam = () => {
						$scope.loading = true
						sendRequest.storeData('prevent', true)

						sendRequest
							.postRequest('/user/submit-exam', $scope.user_questions)
							.then(function(rsp) {
								delete $localStorage.user_questions
								delete $localStorage.extra
								delete $localStorage.options

								if (rsp.status == 422) {
									Notification.error({
										message: 'No active game in progress',
										positionX: 'center'
									})
									$location.path('/dashboard')
								}
								if (rsp.status == 416) {
									$scope.disabled = true
									return
								} else if (rsp.status == 200) {
									if (rsp.data.status) {
										sendRequest.storeData('user_score', rsp.data.user_score)
										$localStorage.user_score = rsp.data.user_score
										$location.path('/dashboard')
									}
								}
							})
					}

					$scope.requestExtra = q => {
						q.answered_option = 'skipped'
						var removedQuestion = $scope.user_questions.indexOf(q)
						$scope.user_questions.splice(removedQuestion, 1)
						$scope.lifelines.extra = true

						//Add it back to the array so that it gets sent to the server and marked as skipped.
						//This way we can prevent it from showing up in the displayed results
						$scope.user_questions.push(q)
					}

					$scope.requestOptions = q => {
						sendRequest
							.postRequest('/user/question-remove-options', q.question.id)
							.then(function(rsp) {
								q.question = rsp.data
							})

						$scope.lifelines.options = true
					}

					$scope.displayResults = () => {
						sendRequest.storeData('prevent', true)
						sendRequest
							.postRequest('/user/end-exam', $scope.user_questions)
							.then(function(rsp) {
								delete $localStorage.user_questions
								delete $localStorage.extra
								delete $localStorage.options

								if (rsp.status == 422) {
									Notification.error({
										message: 'No active game in progress',
										positionX: 'center'
									})
									$location.path('/dashboard')
								} else if (rsp.status == 200) {
									if (rsp.data.status) {
										sendRequest.storeData('user_score', rsp.data.user_score)
										$localStorage.user_score = rsp.data.user_score
										$location.path('/dashboard/display-results')
									}
								}
							})
					}
				}
			]
		}
	}
])
