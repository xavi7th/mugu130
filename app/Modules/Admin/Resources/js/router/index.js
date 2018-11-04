import Vue from 'vue'
import VueRouter from 'vue-router';
import routes from '../config/endpoints';

import App from '../components/AppComponent';
import ViewAgents from '../components/AdminViewAgentsComponent'
import EditAgent from '../components/AdminEditAgentsComponent'

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
                  // ViewAgents will be rendered inside App's <router-view>
                  // when /tcom01/agents is matched
                  path: 'agents',
                  component: view('AdminViewAgentsComponent'),
                  name: 'admin.view-agents',
                  meta: {
                    title: 'View Agents | Fastplay24 Admin'
                  }
                },
                {
                  path: 'agent/:id/edit',
                  component: EditAgent,
                  name: 'admin.edit-agent',
                  meta: {
                    title: 'Edit Agent Details | Fastplay24 Admin'
                  }
                },
                {
                  path: 'agent/create',
                  component: EditAgent,
                  name: 'admin.create-agent',
                  meta: {
                    title: 'Create New Agent | Fastplay24 Admin'
                  }
                },
            ],

        },
        {
          path: '*',
          redirect:  { name: 'admin.view-agents' }
        }
    ],

  });
}
