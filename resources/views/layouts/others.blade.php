<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
	@if (Route::is('password.request'))
	@include('meta.home.passwordreset') @endif
	<meta charset="utf-8">
	<meta name="theme-color" content="{{ env('APP_THEME_COLOR') }}">
	<meta name="apple-mobile-web-app-status-bar-style" content="{{ env('APP_THEME_COLOR') }}">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="description" content="">
	<meta name="author" content="">

	<link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" sizes="192x192" />
	<link rel="preload" href="{{ mix('/css/app.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
	<noscript><link  rel="stylesheet" href="{{ mix('/css/app.css') }}"></noscript> @yield('customCSS') @javascript('version_number',
	env('APP_VERSION_NUMBER'))


	<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
	<!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->


</head>

<body>

	<div id="main-controller">
		<header id="alpha">
			<div class="grid-container">
				<div class="grid-50 tablet-grid-50 mobile-grid-50">
					<a href="{{ route('home') }}"><img src="/img/logo.png" alt=""></a>
				</div>
				<div class="grid-50 tablet-grid-50 mobile-grid-50">
					<div class="ui right floated horizontal list" style="line-height:40px;">

						<a class="item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
						 style="color:white; padding-top: 15px;">
								<i class="sign out icon" style="color:#999;"></i>
								Logout
								<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
										{{ csrf_field() }}
								</form>
							</a>



					</div>
				</div>
			</div>
		</header>

		@yield('contents')


		<footer style="position: absolute; width: 100%; bottom: 0;">
	@include('partials.footer-content')
		</footer>
	</div>


	<!-- Scripts -->

	<script src="{{ asset(mix('/js/manifest.js')) }}" charset="utf-8"></script>
	<script src="{{ asset(mix('/js/vendor.js')) }}" charset="utf-8"></script>
	<script src="{{ asset(mix('/js/app.js')) }}" charset="utf-8"></script>
	<script src="{{ asset(mix('/js/libraries.js')) }}" charset="utf-8"></script>
	<script src="{{ asset(mix('/js/home-app.js')) }}" charset="utf-8"></script>

	@yield('customJS')

</body>

</html>