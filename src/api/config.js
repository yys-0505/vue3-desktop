export const BASE_URL = import.meta.env.PROD ? '/api' : '/dev/api'
export const CMS_PREFIX = '/cms'
export const USER_PREFIX = '/user'
export const API_VERSION = '1.0.0'

export const CMS_BASE = `${CMS_PREFIX}/${API_VERSION}`
export const USER_BASE = `${USER_PREFIX}/${API_VERSION}`

export const reqUrlWhiteList = [
  `${USER_PREFIX}/auth/getLoginUrl`,
  `${USER_PREFIX}/auth/getUser`,
  `${USER_PREFIX}/auth/getRefreshToken`
]

export const CODE_OK = 1