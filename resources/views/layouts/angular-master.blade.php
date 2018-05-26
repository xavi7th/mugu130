<!DOCTYPE html>
<html lang="en">
<head>
  <title>{{ config('app.name') }}</title>

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="csrf-token" content="{{ csrf_token() }}">


  <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
  <link href="{{ asset(mix('/css/app.css')) }}" rel="stylesheet" />
  @javascript('version_number', env('APP_VERSION_NUMBER'))
  

  @yield('customCSS')

</head>
<body>



  <div class="" ng-app="home" ng-strict-di>
    @yield('contents')
  </div>


  <script src="{{ asset(mix('/js/manifest.js')) }}" charset="utf-8"></script>
  <script src="{{ asset(mix('/js/vendor.js')) }}" charset="utf-8"></script>
  <script src="{{ asset(mix('/js/app.js')) }}" charset="utf-8"></script>
  <script src="{{ asset(mix('/js/angular-app.js')) }}" charset="utf-8"></script>

  @yield('customJS')

</body>
</html>
