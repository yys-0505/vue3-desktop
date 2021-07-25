import request from '@/utils/request'

export default {
  // 上传文件
  uploadFile(formData, params) {
    return request({
      url: '/file/upload',
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      data: formData,
      params: params
    })
  },

  getFileList(params) {
    return request({
      url: '/file/list',
      method: 'get',
      params: params
    })
  },
  // 删除多个附件
  deleteFile(params) {
    return request({
      url: '/file/delete',
      method: 'delete',
      params: params
    })
  },
  // 删除单个附件
  deleteFileItem(attachid) {
    return request({
      url: `/file/delete/${attachid}`,
      method: 'delete'
    })
  },
  // 生成url
  getFileUrl(attachid) {
    return request({
      url: `/file/url/${attachid}`,
      method: 'get'
    })
  },

  lookupCodeUpdate(params) {
    return request({
      url: '/cuxspmlookupvalues/lookup',
      method: 'put',
      params: {},
      data: params
    })
  },

  putjectattach(params, id) {
    return request({
      url: `cuxspmprojectattachall/projectattach/${id}`,
      method: 'put',
      params: params
    })
  },

  downloadFile(attachid) {
    return request({
      url: `/file/download/${attachid}`,
      method: 'get',
      responseType: 'blob'
    })
  },

}

let baseURL = ''
const isDev = 'xxx'
if (isDev) {
  baseURL = '/loginApi'
} else {
  baseURL = 'another'
}
export function login(data) {
  return request({
    baseURL: baseURL,
    url: '/auth/oauth/token',
    headers: {
      // isToken: false,
      // 'TENANT-ID': '1',
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'Authorization': 'Basic YXBwOmFwcA=='
    },
    method: 'post',
    params: data
  })
}

// 封装
export const get = (url, params, config) => {
  const _config = Object.assign({}, { params }, config)
  return request.get(url, _config).then(res => {
    return res
  }).catch(err => {
    // Promise.reject(err)
    console.log('get err:', err)
  })
}

export const post = (url, params, config) => {
  return request.post(url, { data: params }, config).then(res => {
    return res
  }).catch(err => {
    console.log('post err:', err)
  })
}

export const put = (url, params, config) => {
  return request.put(url, { data: params }, config).then(res => {
    return res
  }).catch(err => {
    console.log('put err:', err)
  })
}

export const patch = (url, params, config) => {
  return request.patch(url, { data: params }, config).then(res => {
    return res
  }).catch(err => {
    console.log('patch err:', err)
  })
}

export const deleteHttp = (url, params, config) => {
  const _config = Object.assign({}, { params }, config)
  return request.delete(url, _config).then(res => {
    return res
  }).catch(err => {
    console.log('delete err:', err)
  })
}