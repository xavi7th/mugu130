@extends('layouts.others') 
@section('title') Reset Password
@endsection
 
@section('customCSS')
<style>
	div#main-controller section#mid {
		min-height: calc(100vh - 157px);
	}

	#form {
		height: auto;
		margin-top: 25%;
	}

	div#main-controller .ui.buttons button {
		margin-bottom: 0;
	}
</style>
<style media="(max-height:640px)">
	div#main-controller section#mid {
		min-height: calc(100vh);
	}

	footer {
		position: static !important;
	}
</style>
<style media="(max-height:420px)">
	div#main-controller section#mid {
		min-height: calc(150vh);
	}

	footer {
		position: static !important;
	}
</style>
@endsection
 
@section('contents')
<section id="mid" style="height: auto; padding: 10px 0;">
	<div class="grid-container">

		<div class="grid-40 push-30">
			<div id="form" class="ui segments">
				<div class="ui segment">
					<div id="session-menu" class="ui one item menu">
						<a class="active item" data-tab="register" style="color:white; cursor: default; text-transform: uppercase;">Reset Password</a>
					</div>
				</div>

				<div class="ui segment" style="padding-bottom: 30px;">
					@if (count($errors) > 0)
					<div class="ui error message">
						<div class="header">
							There were some errors with your submission
						</div>
						<ul class="list">
							@foreach ($errors->all() as $error)
							<li>{{ $error }}</li>
							@endforeach
						</ul>
					</div>
					@endif @if (session('status'))
					<div class="ui success message">
						<div class="header">
							{{ session('status') }}
						</div>
					</div>
					@endif

					<div class="ui tab active" data-tab="register">
						<form class="ui form" method="POST" action="{{ route('password.request') }}">

							<div class="ui segments">
								<div class="ui blue segment">
									{{ csrf_field() }}
									<input type="hidden" name="token" value="{{ $token }}">
									<div class="field">
										<input id="email" type="email" name="email" value="{{ $email or old('email') }}" placeholder="Enter Email" required autofocus>
									</div>
									<div class="field">
										<input id="password" type="password" name="password" placeholder="Enter Password" required>
									</div>
									<div class="field">
										<input id="password-confirm" type="password" name="password_confirmation" placeholder="Confirm Password" required>
									</div>
								</div>
								<div class="ui segment flex-center">
									<div class="ui buttons">
										<button type="submit" class="ui flud blue button action">Reset Password</button>
										<div class="or"></div>
										<a href="{{ route('home') }}" class="ui flud positive button action">Back to Home Page</a>
									</div>
								</div>
							</div>
						</form>
					</div>

				</div>
			</div>
		</div>
	</div>
</section>
<div ng-view></div>
@endsection