// Base Url

// development server endpoint

// export const apiDomain = process.env.NODE_ENV === 'production' ? 'https://devapi.mypadi.ng/api/v1/' : 'http://localhost:8000/api/v1/'
// live server
// export const apiDomain = 'https://api.mypadi.ng/api/v1/'

// production server
// export const apiDomain = 'https://fastplay24.com/agent/api/'

// development server
export const apiDomain = 'http://localhost:3000/agent/api/';

// End Points

/**
 *
 * @param {string} url
 */
export const apiRootUrl = (url) => (apiDomain + url);

export const rootUrl = (url) => '/' + url;

const agentDetails = apiRootUrl('get-agent-details');
const agentFindUser = apiRootUrl('find-user');
const agentCreditUser = apiRootUrl('credit-user');
const agentGetTransactions = apiRootUrl('get-transactions');
const agentLogout = rootUrl('logout');

const logoutAgent = (msg = null) => {
  if (!msg) {
    msg = "Logging you out....";
  }
  swal(msg, {
    buttons: false,
  });
  axios.post(agentLogout).then( rsp => {
    location.reload();
  });
};

export default {
  apiRootUrl, agentFindUser, agentCreditUser, agentDetails, agentGetTransactions, logoutAgent
};
