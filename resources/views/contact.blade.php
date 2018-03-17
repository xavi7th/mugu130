@extends('layouts.app')

@section('contents')

      @include('partials.pagetitle', ['pagetitle' => 'Contact Us'])

  <!--Contact Section-->
  <section class="contact-section">
      <div class="auto-container">
          <div class="row clearfix">

              <!--Contact Column-->
              <div class="contact-column col-lg-6 col-md-6 col-sm-12 col-xs-12">

                  <div class="upper-title">
                      <h2>SEND US MESSAGE</h2>
                  </div>

                  <!--Contact Form Form-->
                  <div class="contact-us-form">
                      <form method="post" action="{{ route('contact.sendmessage')}}" id="contact-form">

                        {{ csrf_field() }}

                        @if (count($errors) > 0)
                            <div class="alert alert-success">
                                <ul >
                                    @foreach ($errors->all() as $error)
                                        <li class="text-center">{{ $error }}</li>
                                    @endforeach
                                </ul>
                            </div>
                        @endif

                          <div class="form-group">
                              <input type="text" name="username" value="" placeholder="Name">
                          </div>
                          <div class="form-group">
                              <input type="email" name="email" value="" placeholder="Email">
                          </div>
                          <div class="form-group">
                              <textarea name="message" placeholder="Message"></textarea>
                          </div>
                          <div class="form-group">
                              <button type="submit" class="theme-btn btn-style-one">Submit</button>
                          </div>
                      </form>
                  </div>

              </div>

              <!--Contact Column-->
              <div class="contact-column col-lg-6 col-md-6 col-sm-12 col-xs-12">

                  <div class="upper-title">
                      <h2>CONTACT INFO</h2>
                  </div>

                  <div class="contact-info">
                    <ul>
                        <li><div class="icon"><span class="flaticon-placeholder"></span></div> {{ env('APP_ADDRESS') }} </li>
                          <li><div class="icon"><span class="flaticon-technology-1"></span></div> {{ env('APP_PHONE') }}</li>
                          <li><div class="icon"><span class="flaticon-envelope-1"></span></div> Email: {{ env('APP_EMAIL') }}</li>
                      </ul>
                  </div>

              </div>

          </div>
      </div>
  </section>


  <!--Map Section-->
  <section class="map-section">
    <!--Map Box-->
      <div class="map-box">
          <!--Map Canvas-->
          <div class="map-canvas"
              data-zoom="8"
              data-lat="-37.817085"
              data-lng="144.955631"
              data-type="roadmap"
              data-hue="#ffc400"
              data-title="Envato"
              data-content="Melbourne VIC 3000, Australia<br><a href='mailto:info@youremail.com'>info@youremail.com</a>">
          </div>
      </div>
  </section>

@endsection
