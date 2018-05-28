<title>Demo | {{ env('APP_NAME') }}</title>
<meta name="robots" content="index,follow">

<meta name="description" content="Play the Demo to see how {{ env('APP_NAME') }} works"/>
<meta name="author" content="{{ env('APP_AUTHOR') }}">
<meta name="abstract" content="Play the Demo to see how {{ env('APP_NAME') }} works"/>

<meta property="fb:admins" content="jovworie" />
<meta property="fb:app_id" content="171894576842093" />

<meta itemprop="name" content="Demo">
<link itemprop="url" href="{{ route('demo.play') }}">

<meta property="og:title" content="{{ env('APP_NAME') }} | Demo" />
<meta property="og:description" content="Play the Demo to see how {{ env('APP_NAME') }} works"/>
<meta property="og:type" content="games" />
<meta property="og:site_name" content="{{ env('APP_NAME') }}"/>
<meta property="og:url" content="{{ route('demo.play') }}" />
<meta property="og:image" content="{{ asset('/img/facebook.jpg') }}" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@fastplay24" />
<meta name="twitter:url" content="{{ route('demo.play') }}" />
<meta name="twitter:title" content="{{ env('APP_NAME') }} | Demo" />
<meta name="twitter:description" content="Play the Demo to see how {{ env('APP_NAME') }} works" />
<meta name="twitter:image" content="{{ asset('/img/twitter.jpg') }}" />
