import request from './http'
import { CMS_BASE } from './config'

// 项目-查询
export const getProject = (params) => {
  return request({
    url: `${CMS_BASE}/project/list`,
    method: 'get',
    params
  })
}