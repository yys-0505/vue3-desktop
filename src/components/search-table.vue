<template>
  <div class="search-table-wrapper">
    <div class="condition-wrapper">
      <slot name="condition" />
    </div>
    <el-table :data="tableList" empty-text="暂无数据">
      <slot name="table" />
    </el-table>
    <slot name="pagination" />
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  setup() {
    const tableList = inject('tableList')
    return { tableList }
  }
}
</script>

<style lang="stylus" scoped>
@import '../common/stylus/variable'
.search-table-wrapper
  .condition-wrapper
      display: flex
      flex-wrap: wrap
      :deep()
        .simple-input
          margin-right: 20px
          .el-input
            width: 155px
        .search-input
          .el-input
            width: 200px
  .el-table
    margin-top: 20px
    :deep()
      .del-btn
        margin-left: 16px
      .el-table__header, .el-table__body
        width: 100%!important
      th
        font-weight: bold
        color: #606266
        text-align: center
        background-color: #F5F7FA
      td
        text-align: center
        padding-top: 0
        padding-bottom: 0
        height: 48px
        &.operation-column
          .el-icon-delete
            color: #F56C6C
            &:hover
              color: #f78989
          .el-button
            font-size: $font-size-medium-x
        .el-link
          font-size: $font-size-small
      .cell
        line-height: 18px
        .el-image
          vertical-align: middle
          width: 100px
          height: auto
</style>