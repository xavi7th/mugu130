@extends('layouts.app') 
@section('customCSS')
@endsection

@section('title') Testing the mic
@endsection

@section('customJS')
@endsection

@section('contents')
<div class="grid-80 push-10">

	<style>
		.questions{
			justify-content: center;
		}
		.question__card{
			flex-basis: 80%;
		}
		.question__card__option label{
			padding-right: 15%;
			text-align: left;
			padding-left: 6rem !important;
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
	</style>
	
	<div class="ui green segment">
		<div class="ui cards questions">
			<div class="card question__card">
				<div class="content">
					<div class="header question__card__title">Question 1</div>
				</div>
				<div class="content question__card__question">
					<h4 class="ui sub header dash_header question">
							What is the next prime number after 7?
					</h4>
					
					<div class="ui small feed question__card__options">
						
						<div class="event question__card__option">
							<div class="content">
								<div class="summary">
										<div class="ui slider checkbox" >
												<input type="radio" name="question1"  ng-model="q.answered_option"  id="option20" value="11">
												<label >11</label>
											</div>
								</div>
							</div>
						</div>
						
						<div class="event question__card__option">
							<div class="content">
								<div class="summary">
										<div class="ui slider checkbox">
												<input type="radio" name="question1" id="option10" value="9">
												<label >9</label>
											</div>
								</div>
							</div>
						</div>
						
						<div class="event question__card__option">
							<div class="content">
								<div class="summary">
									<div class="ui slider checkbox">
											<input type="radio" name="question1" id="option10" value="12">
											<label >12</label>
										</div>
								</div>
							</div>
						</div>
						
						<div class="event question__card__option">
							<div class="content">
								<div class="summary">
										<div class="ui slider checkbox">
												<input type="radio" name="question1" id="option10" value="13">
												<label >13</label>
											</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div class="extra content question__actions">
					<div class="ui buttons">
							<button class="ui left labeled icon button">
									<i class="left arrow icon"></i>
									Previous
								</button>
							<div class="or"></div>
							<button class="ui button" ng-click="requestOptions(q)" ng-disabled="lifelines.options">50/50</button>
							<div class="or"></div>
							<button class="ui positive button" ng-click="requestExtra(q)" ng-disabled="lifelines.extra">CHANGE QUESTION</button>
							<div class="or"></div>
							<button class="ui right labeled icon button">
									<i class="right arrow icon"></i>
									Next
								</button>
						</div>
				</div>
			</div>
			
			
			<div class="ui card">
				<div class="content">
					<div class="header">Question 1</div>
				</div>
				<div class="content">
					<h4 class="ui sub header dash_header">
						Question goes here
					</h4>
					
					<div class="ui small feed">
						
						<div class="event">
							<div class="content">
								<div class="summary">
									<a>Elliot Fu</a> added <a>Jenny Hess</a> to the project
								</div>
							</div>
						</div>
						
						<div class="event">
							<div class="content">
								<div class="summary">
									<a>Stevie Feliciano</a> was added as an <a>Administrator</a>
								</div>
							</div>
						</div>
						
						<div class="event">
							<div class="content">
								<div class="summary">
									<a>Helen Troy</a> added two pictures
								</div>
							</div>
						</div>
						
						
						<div class="event">
							<div class="content">
								<div class="summary">
									<a>Helen Troy</a> added two pictures
								</div>
							</div>
						</div>
						
					</div>
				</div>
				<div class="extra content">
					<button class="ui button">Join Project</button>
					<button class="ui button">Join Project</button>
					<button class="ui button">Join Project</button>
					<button class="ui button">Join Project</button>
				</div>
			</div>
			
		</div>
	</div>
</div>
<div ng-view></div>
@endsection