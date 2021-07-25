import { reactive, toRefs } from 'vue'
import { getProject } from 'api/project'

export default function useProjectPush(params, ctx){
  let ret = reactive({
    list: [],
    pageInfo: {}
  })
  const getPrjInfo = async () => {
    ctx.showLoading()
    try {
      // let res = await getProject(params)
      let res = {
        items: [{
          autopush: 1,
          desc: "描述信息",
          id: 12,
          name: '一个名字',
          pcode: "0",
          picUrl: 'https://www.abc.com',
          status: 0,
          title: '标题信息',
          url: '一个链接'
        }],
        pageBean: {
          total: 100
        }
      }
      ctx.hideLoading()
      ret.list = res.items
      ret.pageInfo = res.pageBean
    } catch (error) {
      ctx.hideLoading()
    }
  }
  const { list, pageInfo } = toRefs(ret)
  return {
    list,
    pageInfo,
    getPrjInfo
  }
}