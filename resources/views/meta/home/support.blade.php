<title>Support | {{ env('APP_NAME') }}</title>
<meta name="robots" content="index,follow">

<meta name="description" content="Contact your buddies at {{ env('APP_NAME') }}. We love to hear from you"/>
<meta name="author" content="{{ env('APP_AUTHOR') }}">
<meta name="abstract" content="Contact your buddies at {{ env('APP_NAME') }}. We love to hear from you"/>

<meta property="fb:admins" content="jovworie" />
<meta property="fb:app_id" content="171894576842093" />

<meta itemprop="name" content="Support">
<link itemprop="url" href="{{ route('support') }}">

<meta property="og:title" content="Support" />
<meta property="og:description" content="Contact your buddies at {{ env('APP_NAME') }}. We love to hear from you"/>
<meta property="og:type" content="games" />
<meta property="og:site_name" content="{{ env('APP_NAME') }}"/>
<meta property="og:url" content="{{ route('support') }}" />
<meta property="og:image" content="{{ asset('/img/facebook.jpg') }}" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@fastplay24" />
<meta name="twitter:url" content="{{ route('support') }}" />
<meta name="twitter:title" content="Support" />
<meta name="twitter:description" content="Contact your buddies at {{ env('APP_NAME') }}. We love to hear from you" />
<meta name="twitter:image" content="{{ asset('/img/twitter.jpg') }}" />
