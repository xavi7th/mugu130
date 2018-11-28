<title>Top 100 Winners | {{ env('APP_NAME') }}</title>
<meta name="robots" content="index,follow">

<meta name="description" content="Meet the Top 100 Winners on {{ env('APP_NAME') }}"/>
<meta name="author" content="{{ env('APP_AUTHOR') }}">
<meta name="abstract" content="Meet the Top 100 Winners on {{ env('APP_NAME') }}"/>

<meta property="fb:admins" content="jovworie" />
<meta property="fb:app_id" content="171894576842093" />

<meta itemprop="name" content="Top 100 Winners">
<link itemprop="url" href="{{ route('top-100') }}">

<meta property="og:title" content="{{ env('APP_NAME') }} | Top 100 Winners" />
<meta property="og:description" content="Meet the Top 100 Winners on {{ env('APP_NAME') }}"/>
<meta property="og:type" content="games" />
<meta property="og:site_name" content="{{ env('APP_NAME') }}"/>
<meta property="og:url" content="{{ route('top-100') }}" />
<meta property="og:image" content="{{ asset('/img/facebook.jpg') }}" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@fastplay24" />
<meta name="twitter:url" content="{{ route('top-100') }}" />
<meta name="twitter:title" content="{{ env('APP_NAME') }} | Top 100 Winners" />
<meta name="twitter:description" content="Meet the Top 100 Winners on {{ env('APP_NAME') }}" />
<meta name="twitter:image" content="{{ asset('/img/twitter.jpg') }}" />
