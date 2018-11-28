@extends('layouts.dashboard')

@section('title')
  Dashboard
@endsection

@section('customJS')
  @javascript([
		'PAYSTACK_PUBLIC_KEY' => env('PAYSTACK_PUBLIC_KEY'),
		'ADS_IMAGE_DESKTOP' => env('ADS_IMAGE_DESKTOP'),
		'ADS_IMAGE_MOBILE' => env('ADS_IMAGE_MOBILE'),
		'ADS_LINK' => env('ADS_LINK'),
		'ADS_TEXT_DESKTOP' => env('ADS_TEXT_DESKTOP'),
		'ADS_TEXT_MOBILE' => env('ADS_TEXT_MOBILE'),
		'IS_DESKTOP' => Agent::isDesktop(),
	])

	<script>
		inter = setInterval(() => {
			if ($('#ads').length) {
				clearInterval(inter);
				$adElem = $('#ads');
				$adLink = $adElem.find('#ad-link');
				$adContents = $adElem.find('#ads-contents');
				if (IS_DESKTOP) {
					$adElem.css('backgroundImage', 'url("' + ADS_IMAGE_DESKTOP + '")');
					$adLink.attr({'href': ADS_LINK});
					$adContents.html(ADS_TEXT_DESKTOP);
					$adElem.slideDown(600);
				}
				else{
					$adElem.css('backgroundImage', 'url("' + ADS_IMAGE_MOBILE + '")');
					$adLink.attr({'href': ADS_LINK});
					$adContents.html(ADS_TEXT_MOBILE);
					$adElem.slideDown(600);
				}
			}
		}, 1000);
		
	</script>
@endsection

@section('contents')


  <div ng-view class="animate translate-in"></div>

@endsection
