<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

  <head>
    <title>{{ env('APP_NAME') }} Internet Banking</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
      <meta name="csrf-token" content="{{ csrf_token() }}">

      @section('customCSS') @show

  </head>

  <body>
      <div id="app">
          @yield('contents')
      </div>

      <script src="{{ asset(mix('/js/manifest.js')) }}" charset="utf-8"></script>
      <script src="{{ asset(mix('/js/vendor.js')) }}" charset="utf-8"></script>
      <script src="{{ asset(mix('js/paymentagent.js'))}}" charset="utf-8"></script>

      @section('customJS') @show

  </body>

</html>
