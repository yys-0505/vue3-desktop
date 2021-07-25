<template>
  <el-popconfirm
    :confirm-button-text="confirmBtnText"
    :cancel-button-text="cancelBtnText"
    :icon="icon"
    :icon-color="iconColor"
    :title="title"
    @confirm="confirm"
    @cancel="cancel"
  >
    <template #reference>
      <span><slot /></span>
    </template>
  </el-popconfirm>
</template>
<script>
export default {
  props: {
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    title: {
      type: String,
      default: '确定要删除吗?'
    },
    icon: {
      type: String,
      default: 'el-icon-question'
    },
    iconColor: {
      type: String,
      default: '#ff9900'
    }
  },
  emits: ['confirm', 'cancel'],
  setup(props, { emit }) {
    const confirm = () => emit('confirm')
    const cancel = () => emit('cancel')
    return { confirm, cancel }
  }
}
</script>
<style lang="stylus">
.el-popconfirm
  .el-popconfirm__main
    padding-top: 10px
    padding-bottom: 10px
    color: #606266
</style>