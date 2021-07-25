import { ElMessage } from 'element-plus'

export const Message = {
  success(message = '操作成功', duration = 2000) {
    ElMessage({
      type: 'success',
      message,
      duration
    })
  },
  error(message = '操作失败', duration = 3000) {
    ElMessage({
      type: 'error',
      message,
      duration
    })
  }
}