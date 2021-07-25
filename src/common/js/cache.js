const TOKEN_KEY = '__token__'
const REFRESH_TOKEN_KEY = '__refresh_token__'
const USER_INFO_KEY = '__user_info__'
const TOKEN_EXPIRE_MINUTE = 10
const REFRESH_TOKEN_EXPIRE_MINUTE = 600

function setCookie(name, value, iMinute){
  const oDate = new Date()
  oDate.setMinutes(oDate.getMinutes() + iMinute)
  document.cookie = name + '=' + value + '; expires= ' + oDate.toUTCString()
}

function getCookie(name){
  const arr = document.cookie.split('; ')
  let arr2
  for(let i=0, len=arr.length; i<len; i++){
    arr2 = arr[i].split('=')
    if(arr2[0] === name){
      return arr2[1]
    }
  }
  return ''
}

// eslint-disable-next-line no-unused-vars
function removeCookie(name){
  setCookie(name, 1, -1)
}

// Token
export const setToken = (token) => {
  setCookie(TOKEN_KEY, token, TOKEN_EXPIRE_MINUTE)
}
export const getToken = () => {
  return getCookie(TOKEN_KEY)
}

// Refresh Token
export const setRefreshToken = (token) => {
  setCookie(REFRESH_TOKEN_KEY, token, REFRESH_TOKEN_EXPIRE_MINUTE)
}
export const getRefreshToken = () => {
  return getCookie(REFRESH_TOKEN_KEY)
}

// user
export const setUser = (user) => {
  sessionStorage.setItem(USER_INFO_KEY, JSON.stringify(user))
}

export const getUserInfo = () => {
  const user = sessionStorage.getItem(USER_INFO_KEY)
  if (user) {
    return JSON.parse(user)
  } else {
    return {}
  }
}

export const userStatus = () => {
  const token = getToken()
  const refreshToken = getRefreshToken()
  const userInfo = getUserInfo()
  const hasUserInfo = Object.keys(userInfo).length
  const searchParams = new URLSearchParams(location.search)
  let status = ''
  let state = ''
  let code = ''
  if (!hasUserInfo || (!token && !refreshToken)) {
    status = 'needLogin'
  }
  if (searchParams) {
    state = searchParams.get('state')
    code = searchParams.get('code')
    if ((status === 'needLogin') && state && code) {
      status = 'getUser'
    }
  }
  return { status, state, code }
}

export const saveUserInfo = (token, refreshToken, user) => {
  setToken(token)
  setRefreshToken(refreshToken)
  setUser(user)
}