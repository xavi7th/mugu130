<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
    <title>{{ env('APP_NAME') }} - @yield('title')</title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="">
    <meta name="author" content="">

    <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
		<link rel="apple-touch-icon" href="/apple-touch-icon.png">
    {{-- <link rel="stylesheet" href="{{ asset('/css/app.css') }}"> --}}
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
		@yield('customCSS')

    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->


	</head>

	<body ng-app="home" ng-strict-di>
    <base href="/" target="_self">

		<div id="main-controller" >
	    <header id="alpha">
	      <div class="grid-container">
	        <div class="grid-50 mobile-grid-30">
	          <img src="/img/logo.png" alt="">
	        </div>
	        <div class="grid-50 mobile-grid-70">
						@if (!Route::is('demo.play'))
							<mini-game-state class="mini" style="float:right !important;">
								<b style="margin-right:1%;">STATUS:</b>
							</mini-game-state>
						@endif
	        </div>
	      </div>
	    </header>

			@yield('contents')


	    <footer style="position: fixed; width: 100%; bottom: 0; z-index:2;">
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
