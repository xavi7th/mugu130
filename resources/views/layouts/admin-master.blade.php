<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
    <title>TCom | {{ env('APP_NAME') }} </title>

		<meta name="robots" content="noindex,nofollow">
		<meta name="theme-color" content="{{ env('APP_THEME_COLOR') }}">

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="">
    <meta name="author" content="">
		<script type="application/x-javascript">
	    addEventListener("load", function() {
	      setTimeout(hideURLbar, 0);
	    }, false);

	    function hideURLbar() {
	      window.scrollTo(0, 1);
	    }
	  </script>

    <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
		<link rel="stylesheet" href="{{ mix('/css/app.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
		<noscript><link  rel="stylesheet" href="{{ mix('/css/app.css') }}"></noscript>
		@yield('customCSS')

    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->

    {{-- <script type="text/javascript">crypt_multi_num_cur = "3";crypt_base_cur_0 = "Bitcoin (BTC)";crypt_target_cur_0 = "US Dollar (USD)";crypt_base_cur_1 = "Litecoin (LTC)";crypt_target_cur_1 = "US Dollar (USD)";crypt_base_cur_2 = "Dogecoin (DOGE)";crypt_target_cur_2 = "US Dollar (USD)";</script><script type="text/javascript" src="https://www.cryptonator.com/ui/js/widget/multi_widget.js"></script> --}}


	</head>

	<body ng-app="admin" ng-strict-di>
    <base href="/{{ env('ADMIN_ROUTE_PREFIX') }}" >


		@yield('contents')

		<!-- Scripts -->

    <script src="{{ asset(mix('/js/manifest.js')) }}" charset="utf-8"></script>
    <script src="{{ asset(mix('/js/vendor.js')) }}" charset="utf-8"></script>
    <script src="{{ asset(mix('/js/app.js')) }}" charset="utf-8"></script>
		<script src="{{ asset(mix('/js/libraries.js')) }}" charset="utf-8"></script>
    <script src="{{ asset(mix('/js/admin-app.js')) }}" charset="utf-8"></script>

		@yield('customJS')

	</body>
