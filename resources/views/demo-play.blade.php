@extends('layouts.app')

@section('title')
  Demo Game
@endsection

@section('contents')

    @javascript('game_timer', env('DEMO_GAME_TIME'))


  <div ng-view></div>

@endsection
