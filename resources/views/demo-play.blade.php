@extends('layouts.app')

@section('contents')

    @javascript('game_timer', env('DEMO_GAME_TIME'))


  <div ng-view></div>

@endsection
