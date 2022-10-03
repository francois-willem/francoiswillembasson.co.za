/**
 * ROUTER PART
 */
// Used for the routes title
export const SiteName = 'Printr'
export const TitleSeparator = ' - '

// Vue Router Mode config
export const RouterMode = 'history' // 'hash' or 'history';

let baseURL
let overrideUrl // set this to either urls if you want to override for testing
const envBaseUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000'
// const envBaseUrl = process.env.NODE_ENV === 'production' ? 'https://api.petify.co.za:443' : 'http://localhost:3000'
// const envBaseUrl = process.env.NODE_ENV === 'production' ? 'http://13.244.72.31:443' : 'http://localhost:3000'

if (overrideUrl) {
  baseURL = overrideUrl
} else {
  baseURL = envBaseUrl
}

/**
 * API PART
 */
export const APIConfig = {
  baseURL,
  withCredentials: true,
  crossDomain: true,
  contentType: false,
  responseType: 'json',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

export function setHeaderAuthToken(authToken) {
  APIConfig.headers.authToken = authToken
}

export function isHeaderAuthToken() {
  return APIConfig.headers.authToken
}

/**
 * GOOGLE TAG MANAGER PART
 */
export const enableGTM = false
export const gtmKey = {
   // SETUP OWN GTM
   // SETUP OWN GTM
   // SETUP OWN GTM
   // SETUP OWN GTM
   // SETUP OWN GTM
   // SETUP OWN GTM
  production: 'GTM-NH44HDR',
  staging: 'GTM-MZ2ZZ2J',
}
export const disableAnalyticsInDebug = true
