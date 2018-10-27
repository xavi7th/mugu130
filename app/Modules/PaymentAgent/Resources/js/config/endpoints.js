// Base Url

// development server endpoint

// export const apiDomain = process.env.NODE_ENV === 'production' ? 'https://devapi.mypadi.ng/api/v1/' : 'http://localhost:8000/api/v1/'
// live server
// export const apiDomain = 'https://api.mypadi.ng/api/v1/'

// production server
// export const apiDomain = 'https://fastplay24.com/agent/api/'

// development server
export const apiDomain = 'http://localhost:8000/agent/api/'

// End Points

/**
 *
 * @param {string} url
 */
export const apiRootUrl = (url) => (apiDomain + url)

export const rootUrl = (url) => '/' + url

export const loginUrl = apiRootUrl('user/login');
export const registerUrl = apiRootUrl('user/register');
