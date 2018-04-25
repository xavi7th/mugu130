@extends('layout.app')

@section('contents')
  <div id="main-controller" style="min-height: 100vh; position: relative; background: #03A9F4;">
    @include('layout.menu')
    <section id="dashboard">
      <div class="grid-container">
        kyjtghy
        <div class="grid-50 push-25">
          <game-load></game-load>
          <game-active></game-active>
          <game-resume></game-resume>
          <game-waiting></game-waiting>
        </div>
      </div>
    </section>
    <footer >
      @include('layout.footer-content')
    </footer>
  </div>
@endsection
