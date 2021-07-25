<template>
  <el-dialog
    v-model="visible"
    :title="title"
    :close-on-click-modal="false"
    destroy-on-close
    custom-class="simple-dialog"
    @close="close"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">{{ cancelText }}</el-button>
        <el-button type="primary" :loading="loading" @click="confirm">{{ confirmText }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
import { ref } from 'vue'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['confirm', 'close'],
  setup(props, { emit }) {
    const visible = ref(false)
    const show = () => visible.value = true
    const hide = () => visible.value = false
    const cancel = () => {
      visible.value = false
      emit('close')
    }
    const confirm = () => emit('confirm')
    const close = () => emit('close')
    return { visible, confirm, show, cancel, close, hide }
  }
}
</script>
<style lang="stylus">
@import '../common/stylus/variable.styl'
  .simple-dialog
    .el-dialog__body
      padding-bottom: 0
    .el-form-item__label
      font-size: $font-size-small
    .el-form-item__content
      .el-date-editor
        width: 100%
</style>