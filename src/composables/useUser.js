import { reactive, toRefs } from 'vue'
import { getUser } from 'api/user'

export default function useUser(params){
  let ret = reactive({
    list: [],
    pageInfo: {}
  })
  const getUserInfo = async () => {
    let res = await getUser(params)
    res = {
      "success": true,
      "message": "成功",
      "items": [
        {
          
        }
      ],
      "pageBean": {
      }
    }
    ret.list = res.items
    ret.pageInfo = res.pageBean
  }
  const { list, pageInfo } = toRefs(ret)
  return {
    list,
    pageInfo,
    getUserInfo
  }
}