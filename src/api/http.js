import axios from 'axios'
import store from 'store'
import { TOGGLE_REQUEST_STATUS } from 'store/mutation-types'
import { Message } from 'common/js/popup'
import { BASE_URL, reqUrlWhiteList, CODE_OK } from './config'
import { getToken, setToken, getRefreshToken, saveUserInfo, userStatus } from '../common/js/cache'
import { getLoginUrl, getUser, refreshToken } from 'api/login'

const { VITE_API_URL } = import.meta.env

const instance = axios.create({
  baseURL: VITE_API_URL + BASE_URL,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 60000,
  headers: {
    post: {
      'Content-Type': 'application/json; charset=UTF-8',
    }
  }
})

instance.interceptors.request.use(async (config) => {
  const { url } = config
  if (reqUrlWhiteList.includes(url)) {
    return config
  } else {
    const { status, state, code } = userStatus()
    if (status === 'needLogin') {
      const url = await getLoginUrl()
      window.location.href = url
      throw new axios.Cancel('登录中, 请稍后...')
    } if (status === 'getUser') {
      const res = await getUser(state, code)
      if (res) {
        const { code, data } = res
        if (code === CODE_OK) {
          const { access_token, refresh_token } = data
          saveUserInfo(access_token, refresh_token, data)
        } else if(code === 401) {
          const url = await getLoginUrl()
          window.location.href = url
          throw new axios.Cancel('登录中, 请稍后...')
        }
      }
    }
    const token = getToken()
    const rToken = getRefreshToken()
    if (token) {
      config.headers.Authorization = 'Bearer ' + token
      store.commit(TOGGLE_REQUEST_STATUS, true)
    } else if (rToken) {
      try {
        const { data: { access_token } } = await refreshToken(rToken)
        setToken(access_token)
        config.headers.Authorization = 'Bearer ' + access_token
        store.commit(TOGGLE_REQUEST_STATUS, true)
      } catch (error) {
        throw new axios.Cancel('获取认证信息失败!')
      }
    }
    return config
  }
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  store.commit(TOGGLE_REQUEST_STATUS, false)
  if (response.status === 200) {
    const res = response.data
    const { code, message } = res
    if (!res || (code && code !== 1 && code !== 401)) {
      Message.error(message || 'Error')
    }
    return res
  } else {
    return response
  }
}, error => {
  // codes outside 2xx
  store.commit(TOGGLE_REQUEST_STATUS, false)
  Message.error(error.message)
  return Promise.reject(error.message)
})

export default instance