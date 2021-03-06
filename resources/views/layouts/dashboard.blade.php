<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
    <title>My Account | {{ env('APP_NAME') }}</title>

    <meta charset="utf-8">
		<meta name="robots" content="noindex,nofollow">
		<meta name="theme-color" content="{{ env('APP_THEME_COLOR') }}">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="">
    <meta name="author" content="">

		<link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" sizes="192x192"/>
		<link id="stylesheet" href="{{ mix('/css/app.css') }}">
		<noscript><link  rel="stylesheet" href="{{ mix('/css/app.css') }}"></noscript>
		@yield('customCSS')

		@javascript('version_number', env('APP_VERSION_NUMBER'))


    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->


	</head>

	<body ng-app="dashboard" ng-strict-di>
    <base href="/" target="_self">

			@yield('contents')

	  </div>


		<!-- Scripts -->

    <script src="{{ asset(mix('/js/manifest.js')) }}" charset="utf-8"></script>
    <script src="{{ asset(mix('/js/vendor.js')) }}" charset="utf-8"></script>
    <script src="{{ asset(mix('/js/app.js')) }}" charset="utf-8"></script>
		<script src="{{ asset(mix('/js/libraries.js')) }}" charset="utf-8"></script>
		<script src="{{ asset(mix('/js/dashboard-app.js')) }}" charset="utf-8"></script>
		<script>
		  angular.module("dashboard").constant("CSRF_TOKEN", '{{ csrf_token() }}');
			document.querySelector('#stylesheet').setAttribute('rel','stylesheet');
		</script>

		@yield('customJS')

	</body>
</html>
