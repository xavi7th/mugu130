// import { mix } from 'laravel-mix';
//
// if (mix.inProduction()) {
//     const domain = 'https://playground.fastplay24.com/admin/api/';
// }
// else{
//   // const domain = 'http://localhost:3000/tcom01/agents/api/';
//   const domain = 'https://playground.fastplay24.com/admin/api/';
// }

export const apiDomain = 'https://playground.fastplay24.com/admin/api/';
export const httpAdminDomain = '/tcom01/';
export const httpUsersDomain = '/user/';

// End Points

/**
 *
 * @param {string} url
 */
export const rootUrl = (url) => '/' + (url || '');
export const apiRootUrl = (url) => (apiDomain + url);
export const httpAdminRootUrl = (url) => (httpAdminDomain + (url || ''));
export const httpUserRootUrl = (url) => (httpUsersDomain + (url || ''));
export const httpAdminApiRootUrl = (url) => (httpAdminDomain + 'agents/api/' + (url || ''));

const getAdminDetails = httpUserRootUrl('get-user-details');

const getTotalEarnings = httpUserRootUrl('get-total-earnings');
const getAllAgents = httpAdminApiRootUrl('get-all-agents');
const editAgentsDetails = httpAdminApiRootUrl('edit-agent-details');
const deleteAgent = httpAdminApiRootUrl('delete-agent');
const restoreAgent = httpAdminApiRootUrl('restore-agent');
const adminFindUser = httpAdminApiRootUrl('get-user-details');
const adminCreateAgent = httpAdminApiRootUrl('create-agent');

/****** Angular App Routes  ********/
const adminViewAgents = httpAdminRootUrl('agents');
const adminDashboard = httpAdminRootUrl();
const adminViewQuestions = httpAdminRootUrl('questions');
const adminViewAdmins = httpAdminRootUrl('admins');
const adminViewUsers = httpAdminRootUrl('users');
const adminViewEarnings = httpAdminRootUrl('earnings');
const adminViewGames = httpAdminRootUrl('games');
const adminViewTransactions = httpAdminRootUrl('transactions');
const adminViewMessages = httpAdminRootUrl('messages');

const logoutAdmin = (msg = null) => {
  if (!msg) {
    msg = "Logging you out....";
  }
  swal(msg, {
    buttons: false,
  });
  axios.post(rootUrl('logout')).then( rsp => {
    location.reload();
  });
};

export default {
  adminViewAgents,
  adminDashboard,
  getAdminDetails,
  getTotalEarnings,
  getAllAgents,
  editAgentsDetails,
  deleteAgent,
  restoreAgent,
  adminFindUser,
  adminCreateAgent,
  adminViewQuestions,
  adminViewAdmins,
  adminViewUsers,
  adminViewEarnings,
  adminViewGames,
  adminViewTransactions,
  adminViewMessages,
  logoutAdmin
};
