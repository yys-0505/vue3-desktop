import request from './http'
import { USER_BASE } from './config'
export const getLoginUrl = () => {
  return request({
    url: `${USER_BASE}/auth/getLoginUrl`,
    method: 'get'
  })
}

export const getUser = (state, code) => {
  return request({
    url: `${USER_BASE}/auth/getUser`,
    method: 'get',
    params: { state, code }
  })
}

export const refreshToken = (refreshToken) => {
  return request({
    url: `${USER_BASE}/auth/getRefreshToken`,
    method: 'get',
    params: { refreshToken }
  })
}