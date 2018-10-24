/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 /**
  * We'll load the axios HTTP library which allows us to easily issue requests
  * to our Laravel back-end. This library automatically handles sending the
  * CSRF token as a header based on the value of the "XSRF" token cookie.
  */

 window.axios = require('axios');

 window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

 /**
  * Next we will register the CSRF Token as a common header with Axios so that
  * all outgoing HTTP requests automatically have it attached. This is just
  * a simple convenience so we don't have to attach every token manually.
  */

 let token = document.head.querySelector('meta[name="csrf-token"]');

 if (token) {
     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
 } else {
     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
 }

window._ = require('lodash');


import Vue from 'vue'
import VueRouter from 'vue-router';
import Vue2Filters from 'vue2-filters'
import VeeValidate from 'vee-validate';


Vue.use(VueRouter);
Vue.use(Vue2Filters)
Vue.use(VeeValidate);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Master from './components/MasterComponent';
// import UserDailyAccSummary from './components/UserDailyAccSummaryComponent';
// import UserDenied from './components/UserDeniedComponent';
// import UserTransferToSelf from './components/UserTransferToSelfComponent';
// import UserFeedback from './components/UserTransferToSelfComponent';

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view(name) {
    return function(resolve) {
        require(['./components/' + name], resolve);
    };
}



const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/agent/testing',
            name: 'dashboard',
            component: Master
        },
        {
            path: '/user/acc-summary',
            name: 'accsummary',
            component: view('UserAccSummaryComponent'),
        }
    ],
});

const app = new Vue({
    el: '#app',
    components: {
      // UserDashboard
    },
    data: {
      transitionName: 'page'
    },
    methods: {
      changeTransition(e){
        console.log(e);
      }
    },
    router
});
