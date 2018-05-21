@extends('layouts.admin-master')


@section('title')
  Administering
@endsection

@section('contents')
  @javascript('route_root', '/'.env('ADMIN_ROUTE_PREFIX'))

  <div ng-view></div>

@endsection
