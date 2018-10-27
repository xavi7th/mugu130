<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

  <head>
    <title>Agent Dashboard | {{ env('APP_NAME') }}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <meta name="robots" content="noindex,nofollow">
      <meta name="theme-color" content="{{ env('APP_THEME_COLOR') }}">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <meta name="description" content="">
      <meta name="author" content="">

  		<link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" sizes="192x192"/>
  		<link id="stylesheet" href="{{ mix('/css/app.css') }}">
  		<noscript><link  rel="stylesheet" href="{{ mix('/css/app.css') }}"></noscript>

      @section('customCSS') @show

  </head>

  <body>
      <div id="app">
          @yield('contents')
      </div>

      <script src="{{ asset(mix('/js/manifest.js')) }}" charset="utf-8"></script>
      <script src="{{ asset(mix('/js/vendor.js')) }}" charset="utf-8"></script>
      <script src="{{ asset(mix('js/paymentagent.js'))}}" charset="utf-8"></script>
      <script>
        document.querySelector('#stylesheet').setAttribute('rel','stylesheet');
      </script>

      @section('customJS') @show

  </body>

</html>
