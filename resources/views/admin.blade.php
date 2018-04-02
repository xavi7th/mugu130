@extends('layouts.admin-master')

@section('contents')
  @javascript('route_root', '/'.env('ADMIN_ROUTE_PREFIX'))

  <div ng-view></div>

@endsection
