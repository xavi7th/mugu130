<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
	<head>
		@if (Route::is('home'))
			@include('meta.home.index')
		@elseif (Route::is('login'))
			@include('meta.home.login')
		@elseif (Route::is('register'))
			@include('meta.home.register')
		@elseif (Route::is('referral'))
			@include('meta.home.register')
		@elseif (Route::is('calculator'))
			@include('meta.home.calculator')
		@elseif (Route::is('demo.play'))
			@include('meta.home.demo')
		@elseif (Route::is('faq'))
			@include('meta.home.help')
		@elseif (Route::is('support'))
			@include('meta.home.support')
		@endif

		<meta charset="utf-8">

		<meta name="theme-color" content="{{ env('APP_THEME_COLOR') }}">
		<meta name="apple-mobile-web-app-status-bar-style" content="{{ env('APP_THEME_COLOR') }}">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
		<link rel="stylesheet" href="{{ mix('/css/app.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
		<noscript><link  rel="stylesheet" href="{{ mix('/css/app.css') }}"></noscript>

		@javascript('version_number', env('APP_VERSION_NUMBER'))
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->

		@yield('customCSS')

	</head>

	<body ng-app="home" ng-strict-di>
    <base href="/" target="_self">

		<div id="main-controller" >
	    <header id="alpha">
	      <div class="grid-container">
	        <div class="grid-50 tablet-grid-50 mobile-grid-30">
	          <a href="/" target="_self"><img src="/img/logo.png" alt="Fastplay24 Logo"></a>
	        </div>
	        <div class="grid-50 tablet-grid-50 mobile-grid-70">
						@if (!Route::is('demo.play'))
							<mini-game-state class="mini" style="float:right !important;"></mini-game-state>
						@endif
	        </div>
	      </div>
	    </header>

			@yield('contents')


	    <footer>
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
