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
		<link rel="stylesheet" href="{{ mix('/css/app.css') }}" as="style" onload="this.onload=null;this.rel='stylesheet'">
		<noscript><link  rel="stylesheet" href="{{ mix('/css/app.css') }}"></noscript>
		@yield('customCSS')
		<style media="screen">
			/*! CSS Used from: http://localhost:3002/css/app.css?id=ef0adb105ed37f9aebf9 */
			/*! @import https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css */
			/*! end @import */
			body,div,img,footer,header{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;}
			body{line-height:1;}
			footer,header{display:block;}
			a{margin:0;padding:0;font-size:100%;vertical-align:baseline;background:transparent;}
			*,*:before,*:after{-webkit-box-sizing:inherit;box-sizing:inherit;}
			body{margin:0;}
			footer,header{display:block;}
			a{background-color:transparent;-webkit-text-decoration-skip:objects;}
			img{border-style:none;}
			body{height:100%;}
			body{font-size:14px;}
			body{margin:0px;padding:0px;overflow-x:hidden;min-width:320px;background:#FFFFFF;line-height:1.4285em;color:rgba(0, 0, 0, 0.87);font-smoothing:antialiased;}
			body{font-family:'Lato', 'Helvetica Neue', Arial, Helvetica, sans-serif;}
			a{color:#4183C4;}
			a,a:hover{text-decoration:none;}
			a:hover{color:#1e70bf;}
			::-webkit-selection{background-color:#CCE2FF;color:rgba(0, 0, 0, 0.87);}
			::-moz-selection{background-color:#CCE2FF;color:rgba(0, 0, 0, 0.87);}
			::selection{background-color:#CCE2FF;color:rgba(0, 0, 0, 0.87);}
			.ui.list{list-style-type:none;margin:1em 0em;padding:0em 0em;}
			.ui.list:first-child{margin-top:0em;padding-top:0em;}
			.ui.list:last-child{margin-bottom:0em;padding-bottom:0em;}
			.ui.list > .item{display:list-item;table-layout:fixed;list-style-type:none;list-style-position:outside;padding:0.21428571em 0em;line-height:1.14285714em;}
			.ui.list > .item:after{content:'';display:block;height:0;clear:both;visibility:hidden;}
			.ui.list > .item:first-child{padding-top:0em;}
			.ui.list > .item:last-child{padding-bottom:0em;}
			.ui.list > a.item{cursor:pointer;color:#4183C4;}
			.ui.list > a.item:hover{color:#1e70bf;}
			.ui[class*="right floated"].list{float:right;}
			.ui.horizontal.list{display:inline-block;font-size:0em;}
			.ui.horizontal.list > .item{display:inline-block;margin-left:1em;font-size:14px;font-size:1rem;}
			.ui.horizontal.list > .item:first-child,.ui.horizontal.list > .item:last-child{padding-top:0.21428571em;padding-bottom:0.21428571em;}
			.ui.celled.list > .item{border-top:1px solid rgba(34, 36, 38, 0.15);padding-left:0.5em;padding-right:0.5em;}
			.ui.celled.list > .item:last-child{border-bottom:1px solid rgba(34, 36, 38, 0.15);}
			.ui.celled.list > .item:first-child,.ui.celled.list > .item:last-child{padding-top:0.21428571em;padding-bottom:0.21428571em;}
			.ui.horizontal.celled.list{margin-left:0em;}
			.ui.horizontal.celled.list > .item{border-top:none;border-left:1px solid rgba(34, 36, 38, 0.15);margin:0em;padding-left:0.5em;padding-right:0.5em;line-height:0.6;}
			.ui.horizontal.celled.list > .item:last-child{border-bottom:none;border-right:1px solid rgba(34, 36, 38, 0.15);}
			.ui.list{font-size:1em;}
			.ui.horizontal.list > .item{font-size:14px;font-size:1rem;}
			.grid-container:before,.mobile-grid-30:before,.mobile-grid-70:before,.tablet-grid-50:before,.grid-50:before,.grid-100:before,.grid-container:after,.mobile-grid-30:after,.mobile-grid-70:after,.tablet-grid-50:after,.grid-50:after,.grid-100:after{content:".";display:block;overflow:hidden;visibility:hidden;font-size:0;line-height:0;width:0;height:0;}
			.grid-container:after,.mobile-grid-30:after,.mobile-grid-70:after,.tablet-grid-50:after,.grid-50:after,.grid-100:after{clear:both;}
			.grid-container,.mobile-grid-30,.mobile-grid-70,.tablet-grid-50,.grid-50,.grid-100{*zoom:1;}
			.grid-container{margin-left:auto;margin-right:auto;max-width:1200px;padding-left:10px;padding-right:10px;}
			.mobile-grid-30,.mobile-grid-70,.tablet-grid-50,.grid-50,.grid-100{-webkit-box-sizing:border-box;box-sizing:border-box;padding-left:10px;padding-right:10px;*padding-left:0;*padding-right:0;}
			.mobile-grid-30 > *,.tablet-grid-50 > *,.grid-50 > *,.grid-100 > *{*margin-left:expression((!this.className.match(/grid-[1-9]/) && this.currentStyle.display === 'block' && this.currentStyle.width === 'auto') && '10px');*margin-right:expression((!this.className.match(/grid-[1-9]/) && this.currentStyle.display === 'block' && this.currentStyle.width === 'auto') && '10px');}
			@media (max-width: 767px){
			.mobile-grid-30{float:left;width:30%;*width:expression(Math.floor(0.3 * (this.parentNode.offsetWidth - parseFloat(this.parentNode.currentStyle.paddingLeft) - parseFloat(this.parentNode.currentStyle.paddingRight))) + 'px');}
			.mobile-grid-70{float:left;width:70%;*width:expression(Math.floor(0.7 * (this.parentNode.offsetWidth - parseFloat(this.parentNode.currentStyle.paddingLeft) - parseFloat(this.parentNode.currentStyle.paddingRight))) + 'px');}
			}
			@media (min-width: 768px) and (max-width: 1024px){
			.tablet-grid-50{float:left;width:50%;*width:expression(Math.floor(0.5 * (this.parentNode.offsetWidth - parseFloat(this.parentNode.currentStyle.paddingLeft) - parseFloat(this.parentNode.currentStyle.paddingRight))) + 'px');}
			}
			@media (min-width: 1025px){
			.grid-50{float:left;width:50%;*width:expression(Math.floor(0.5 * (this.parentNode.offsetWidth - parseFloat(this.parentNode.currentStyle.paddingLeft) - parseFloat(this.parentNode.currentStyle.paddingRight))) + 'px');}
			.grid-100{clear:both;width:100%;}
			}
			div#main-controller header#alpha{background-color:#0a314c;padding:4px 0px;}
			div#main-controller header#alpha img{height:50px;}
			div#main-controller footer{padding:20px 0px;background-color:#03A9F4;}
			div#main-controller footer a{color:#fff;}
			div#main-controller footer a:hover{text-decoration:underline;}
			div#main-controller footer .ui.horizontal.celled.list > .item{border-left:1px solid #fff;border-right:1px solid #fff;}
			div#main-controller footer{width:100%;background:#03A9F4;}
			div[ng-view]{min-height: 90vh}

			/*! CSS Used from: Embedded */
			div{margin:0;padding:0;border:0;outline:0;font-size:100%;vertical-align:baseline;background:transparent;}
			*,*:before,*:after{-webkit-box-sizing:inherit;box-sizing:inherit;}
			::-webkit-selection{background-color:#CCE2FF;color:rgba(0, 0, 0, 0.87);}
			::-moz-selection{background-color:#CCE2FF;color:rgba(0, 0, 0, 0.87);}
			::selection{background-color:#CCE2FF;color:rgba(0, 0, 0, 0.87);}
			/*! CSS Used fontfaces */
			@font-face{font-family:'Lato';font-style:italic;font-weight:400;src:local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/S6u8w4BMUTPHjxsAUi-qNiXg7eU0.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
			@font-face{font-family:'Lato';font-style:italic;font-weight:400;src:local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v14/S6u8w4BMUTPHjxsAXC-qNiXg7Q.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
			@font-face{font-family:'Lato';font-style:italic;font-weight:700;src:local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/S6u_w4BMUTPHjxsI5wq_FQftx9897sxZ.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
			@font-face{font-family:'Lato';font-style:italic;font-weight:700;src:local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v14/S6u_w4BMUTPHjxsI5wq_Gwftx9897g.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
			@font-face{font-family:'Lato';font-style:normal;font-weight:400;src:local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
			@font-face{font-family:'Lato';font-style:normal;font-weight:400;src:local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v14/S6uyw4BMUTPHjx4wXiWtFCc.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
			@font-face{font-family:'Lato';font-style:normal;font-weight:700;src:local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2) format('woff2');unicode-range:U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;}
			@font-face{font-family:'Lato';font-style:normal;font-weight:700;src:local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v14/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}
		</style>

    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->


	</head>

	<body ng-app="dashboard" ng-strict-di>
    <base href="/" target="_self">

		{{-- <div id="main-controller" >
	    <header id="alpha">
	      <div class="grid-container">
	        <div class="grid-50">
	          <img src="/img/logo.png" alt="">
	        </div>
	        <div class="grid-50">
	        </div>
	      </div>
	    </header> --}}

			@yield('contents')


	    {{-- <footer style="position: absolute; width: 100%; bottom: 0;">
	      @include('partials.footer-content')
	    </footer> --}}
	  </div>


		<!-- Scripts -->

    <script src="{{ asset(mix('/js/manifest.js')) }}" charset="utf-8"></script>
    <script src="{{ asset(mix('/js/vendor.js')) }}" charset="utf-8"></script>
    <script src="{{ asset(mix('/js/app.js')) }}" charset="utf-8"></script>
		<script src="{{ asset(mix('/js/libraries.js')) }}" charset="utf-8"></script>
		<script src="{{ asset(mix('/js/dashboard-app.js')) }}" charset="utf-8"></script>
		{{-- <script src="https://js.paystack.co/v1/inline.js"></script> --}}


		@yield('customJS')

	</body>
</html>
