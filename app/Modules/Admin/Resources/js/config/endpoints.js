// production server
// export const apiDomain = 'https://playground.fastplay24.com/admin/api/';

// development server
export const apiDomain = 'http://localhost:3000/tcom01/agents/api/';
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

const getAdminDetails = httpUserRootUrl('get-user-details');
const getTotalEarnings = httpUserRootUrl('get-total-earnings');
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
  adminViewQuestions,
  adminViewAdmins,
  adminViewUsers,
  adminViewEarnings,
  adminViewGames,
  adminViewTransactions,
  adminViewMessages,
  logoutAdmin
};
