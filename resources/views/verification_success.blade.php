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
    <style>
		html, body {
				background-color: #fff;
				color: #636b6f;
				font-family: 'Raleway', sans-serif;
				font-weight: 100;
				height: 100vh;
				margin: 0;
		}

		.full-height {
				min-height: 600px;
				min-height: 80vh;
				min-height: calc(100vh - 160px);
		}

		.flex-center {
				align-items: center;
				display: flex;
				justify-content: center;
				flex-direction: column;
		}

		.position-ref {
				position: relative;
		}

		.content {
				text-align: center;
		}

		.title {
				font-size: 36px;
				padding: 20px;
		}

		.message {
				font-size: 26px;
				padding: 5px;
		}

		.m0{
			margin: 0 !important;
		}


		.tal{
			text-align: left !important;
		}

		.al{
			align-self: left;
		}

		img.image{
			margin-top: 45px;
		}

    </style>


    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->


	</head>

	<body ng-app="home" ng-strict-di>
    <base href="/" target="_self">

		<div id="main-controller">
	    <header id="alpha">
	      <div class="grid-container">
	        <div class="grid-50 mobile-grid-30">
	          <img src="/img/logo.png" alt="">
	        </div>
	        <div class="grid-50 mobile-grid-70">

	        </div>
	      </div>
	    </header>

      <div class="grid-container">
        <div class="grid-80 push-10">
          <div class="position-ref full-height">

            <div class="ui basic segment flex-center ">
              <img class="ui centered small image" src="/img/tick-512.png">
              <h1 class="content title">Account Verified   </h1>
							<p class="message">{{ $user->firstname }}, your account has been verified.</p>
							<p class="message">Start your engines.</p>

              <a href="{{ route('login') }}" class="huge ui blue button" target="_self">
                SIGN IN
              </a>
              {{-- <p class="message m0 al">
                Cheers, <br>
								Your buddies at FastPlay24

              </p> --}}
            </div>

          </div>
        </div>
      </div>

	    <footer>
      <div class="grid-container">
        <div class="grid-100">
          <div class="ui right floated celled horizontal list">
            <a class="item" target="_blank" href="#">© 2017 FastPlay24 | Tcom </a>
            <a class="item" target="_blank" href="{{ route('terms') }}">Terms</a>
            <a class="item" target="_blank" href="{{ route('privacy') }}">Privacy</a>
            <a class="item" target="_blank" href="{{ route('faq') }}">Help & FAQs</a>
            <a class="item" target="_blank" href="{{ route('support') }}">Support</a>
            <a class="item" target="_blank" href="{{ route('calculator') }}">Calculator</a>
          </div>
          <div class="ui celled horizontal list">
            <a class="item" href="#">Facebook</a>
            <a class="item" href="#">Twitter</a>
            <a class="item" href="#">Instagram</a>
          </div>
        </div>
      </div>

	    </footer>
	  </div>


		<!-- Scripts -->

    <script src="{{ asset(mix('/js/manifest.js')) }}" charset="utf-8"></script>
    <script src="{{ asset(mix('/js/vendor.js')) }}" charset="utf-8"></script>
    <script src="{{ asset(mix('/js/app.js')) }}" charset="utf-8"></script>
		<script src="{{ asset(mix('/js/libraries.js')) }}" charset="utf-8"></script>
		<script src="{{ asset(mix('/js/home-app.js')) }}" charset="utf-8"></script>


	</body>
</html>
