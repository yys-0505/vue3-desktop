<template>
  <el-upload :action="url" :before-remove="remove">
    <el-button icon="el-icon-upload2">{{ uploadBtnText }}</el-button>
  </el-upload>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    uploadBtnText: {
      type: String,
      default: '上传'
    }
  },
  methods: {
    remove(file, fileList) {
      console.log(file, fileList)
      return false
    }
  }
}
</script>
<style lang="stylus" scoped>
:deep()
  .el-upload-list__item-name
    margin-right: 120px
  .el-icon-close-tip
    top: 6px
</style>