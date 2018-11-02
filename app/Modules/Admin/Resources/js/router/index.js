import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from '../config/endpoints';

import App from '../components/AppComponent';
import ManageAgents from '../components/AdminManageAgentsComponent'

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
            path: routes.adminDashboard,
            name: 'admin.manage-agents',
            component: App,
            meta: {
              title: 'Admin Manage Agents | Fastplay24'
            },
            children: [
                {
                  // ManageAgents will be rendered inside App's <router-view>
                  // when /tcom01/agents is matched
                  path: 'agents',
                  component: ManageAgents,
                  name: 'admin.view-agents',
                  meta: {
                    title: 'Admin View Agents | Fastplay24'
                  }
                },
            ],

        },
        {
          path: '*',
          redirect: routes.adminDashboard
        }
    ],

  });
}
