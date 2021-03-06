import Vue from 'vue'
import VueRouter from 'vue-router';

import App from '../components/AppComponent';

Vue.use(VueRouter)

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */
function view(name) {
    return function(resolve) {
        require(['../components/' + name], resolve);
    };
}



export function createRouter () {
  return new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { x: 0, y: 0 };
      }
    },
    routes: [
        {
            path: '/agent/dashboard',
            name: 'agent.dashboard',
            component: App,
            meta: {
              title: 'Agent Dashboard'
            }
        },
        {
          path: '*',
          redirect: '/agent/dashboard'
        }
    ],

  });
}
