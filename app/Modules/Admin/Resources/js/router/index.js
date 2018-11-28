import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../config/endpoints';

import App from '../components/AppComponent';

Vue.use(VueRouter);

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
                  component: view('AdminEditAgentsComponent'),
                  name: 'admin.edit-agent',
                  meta: {
                    title: 'Edit Agent Details | Fastplay24 Admin'
                  }
                },
                {
                  path: 'agent/create',
                  component: view('AdminCreateAgentComponent'),
                  name: 'admin.create-agent',
                  meta: {
                    title: 'Create New Agent | Fastplay24 Admin'
                  }
                },
                {
                  path: 'agent/:id/transactions',
                  component: view('AdminViewAgentTransactionsComponent'),
                  name: 'admin.view-agent-transactions',
                  meta: {
                    title: 'Agent\'s Transactions | Fastplay24 Admin'
                  }
                },
                {
                  path: 'agent/:id/fundings',
                  component: view('AdminViewAgentFundingsComponent'),
                  name: 'admin.view-agent-fundings',
                  meta: {
                    title: 'Agent\'s Fundings | Fastplay24 Admin'
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
