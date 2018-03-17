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
		<link rel="stylesheet" href="{{ mix('/css/app.css') }}">
		@yield('customCSS')

		<!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
		<!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->

		{{-- <script type="text/javascript">crypt_multi_num_cur = "3";crypt_base_cur_0 = "Bitcoin (BTC)";crypt_target_cur_0 = "US Dollar (USD)";crypt_base_cur_1 = "Litecoin (LTC)";crypt_target_cur_1 = "US Dollar (USD)";crypt_base_cur_2 = "Dogecoin (DOGE)";crypt_target_cur_2 = "US Dollar (USD)";</script><script type="text/javascript" src="https://www.cryptonator.com/ui/js/widget/multi_widget.js"></script> --}}


	</head>

	<body ng-strict-di>
		<div class="top-line ng-scope" ng-include="" src="'angular/views/partials/blackbar.html'"><div class="top-header ng-scope">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<ul class="info">
							<li>
								<i class="fa fa-envelope-o" aria-hidden="true"></i>support@bitensured.com
							</li>

						</ul>
					</div>
					<div class="col-md-4">
						<ul class="social-icons">
							<li>
								<a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
							</li>
							<li>
								<a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
							</li>
							<li>
								<a href=""><i class="fa fa-dribbble" aria-hidden="true"></i></a>
							</li>
							<li>
								<a href=""><i class="fa fa-linkedin" aria-hidden="true"></i></a>
							</li>
							<li>
								<a href=""><i class="fa fa-vimeo" aria-hidden="true"></i></a>
							</li>
							<li><span>|</span</li>
							<li>

								@guest
									<a href="/login" target="_self"><i class="fa fa-lock" aria-hidden="true"></i> Login</a>
								@endguest

								@auth
										<a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Logout</a>

										<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
												{{ csrf_field() }}
										</form>

								@endauth
							</li>
						</ul>
					</div>
				</div>
			</div>
			</div>
		</div>

		<nav id="main-navigation-wrapper" class="navbar navbar-default finance-navbar ng-scope affix-top" ng-include="" src="'angular/views/partials/navbar.html'"><div class="container ng-scope">
			<div class="logo pull-left">
				<a href="{{ route('home') }}" class="logo-desktop">
					<img src="{{asset('img/logo.png')}}" alt="Awesome logo" class="img-responsive">
				</a>
				<a href="{{ route('home') }}" class="logo-mobile">
					<img src="{{asset('img/logo.png')}}" alt="Awesome logo" class="img-responsive">
				</a>
			</div>
			<div class="navbar-header">
				<button type="button" data-toggle="collapse" data-target="#main-navigation" aria-expanded="false" class="navbar-toggle collapsed">
					<span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
				</button>
			</div>


			<div id="main-navigation" class="collapse navbar-collapse">
				<ul class="nav navbar-nav pull-right">
					<li class="dropdown">
						<a href="/">Home</a>
					</li>
					<li class="dropdown"><a href="about">about</a></li>
					<li class="dropdown"><a href="faq">faq</a></li>
					<li class="dropdown"><a href="start-guide">start-guide</a></li>
					<li class="dropdown"><a href="buy-sell-crypto">buy &amp; sell-crypto</a></li>
					<li class="dropdown"><a href="security">security</a></li>
					<li class="dropdown"><a href="support">support</a></li>

				</ul>
			</div>
			</div>
		</nav>

		<section class="contact_header top ng-scope" ng-include="" src="'angular/views/partials/titlebar.html'"><div class="container ng-scope">
			<div class="row">
				<div class="col-md-12">
					<h2 class="ng-binding">@yield('title')</h2>
				</div>
			</div>
			</div>
		</section>

		@yield('contents')

		<footer class="main-footer ng-scope" ng-include="" src="'angular/views/partials/main-footer.html'"><div class="container ng-scope">
			<div class="row">
				<div class="col-md-5 social-icons">
					<h3>BITENSURED</h3>
					<p>
						Established in 2018, offering a vast range of opportunities to help investors for making the best investment portfolio
					</p>
					<ul>
						<li>
							<a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href=""><i class="fa fa-dribbble" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href=""><i class="fa fa-linkedin" aria-hidden="true"></i></a>
						</li>
						<li>
							<a href=""><i class="fa fa-vimeo" aria-hidden="true"></i></a>
						</li>
					</ul>
				</div>
				<div class="col-md-4 news">
					<!-- <h3>Latest News</h3> -->
					<!-- <ul>
<li>
<a href="">Seminar to improve your business profit &amp; loss </a>
<br>
<span>December 3, 2017</span>
</li>
<li>
<a href="">Experts Opinion on saving money</a>
<br>
<span>January 15, 2017</a></span>
</li>
</ul> -->
				</div>
				<div class="col-md-3 get-in-touch">
					<h3>Get in Touch</h3>
					<ul>
						<li>
							<i class="fa fa-map-marker" aria-hidden="true"></i>3798 Hughes Gasque rd Aynor sc 295114220
						</li>
						<li>
							<i class="fa fa-clock-o" aria-hidden="true"></i>Mon to Sat - 08:00 to 16:30
						</li>
						<li>
							<i class="fa fa-phone" aria-hidden="true"></i> +1 (530) 230-0071
						</li>
						<li>
							<i class="fa fa-envelope-o" aria-hidden="true"></i>support@bitensured.com
						</li>
					</ul>
				</div>
			</div>
			</div>
		</footer>

		<section class="footer-bottom ng-scope" ng-include="" src="'angular/views/partials/footer-bottom.html'"><div class="container ng-scope">
			<div class="row">
				<div class="pull-left">
					<p>
						Copyright © Bitensured 2018. All rights reserved.
					</p>
				</div>
				<div class="pull-right">
					<p>
						Created by: Bitensured
					</p>
				</div>
			</div>
			</div>
		</section>

		<a class="scroll-top ng-scope" href="#" style=""><i class="fa fa-angle-up"></i> </a>

		<!-- Scripts -->

		<script src="{{ asset(mix('/js/manifest.js')) }}" charset="utf-8"></script>
		<script src="{{ asset(mix('/js/vendor.js')) }}" charset="utf-8"></script>
		<script src="{{ asset(mix('/js/app.js')) }}" charset="utf-8"></script>
		{{-- <script src="{{ asset(mix('/js/home-app.js')) }}" charset="utf-8"></script> --}}
		<script src="{{ asset(mix('/js/libraries.js')) }}" charset="utf-8"></script>

		@yield('customJS')

	</body>
</html>
