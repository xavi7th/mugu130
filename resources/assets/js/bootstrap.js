window._ = require('lodash');

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.$ = window.jQuery = require('jquery');

    // require('bootstrap-sass');
} catch (e) {}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

import Echo from 'laravel-echo';

window.Pusher = require('pusher-js');

window.Echo = new Echo({
    broadcaster: 'pusher',
    key: '723675ea9558b26289f4',
    cluster: 'eu',
});

 // Pusher.logToConsole = true;


/**
 *
 * Angular and it's related stuffs are loaded here
 *
 */



require('angular');
require('angular-route');
require('angular-animate');
require('textangular/dist/textAngular-sanitize.min');
require('ngStorage');

require('angular-ui-notification');
require('angular-timeago');
