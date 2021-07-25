<template>
  <el-pagination
    v-show="pageInfo.total"
    :total="pageInfo.total"
    :page-size="pageSize"
    background
    layout="total, prev, pager, next"
    :current-page="pageNumber"
    @current-change="n => pageNumber = n"
  />
</template>
<script>
import { inject, watch, ref } from 'vue'
export default {
  props: {
    pageSize: {
      type: Number,
      default: 20
    },
    initPageNumber: {
      type: Number,
      default: 1
    }
  },
  emits: ['pageNumChange'],
  setup(props, { emit }) {
    const pageInfo = inject('pageInfo')
    // eslint-disable-next-line vue/no-setup-props-destructure
    const { pageSize, initPageNumber } = props
    const pageNumber = ref(initPageNumber)
    watch(pageNumber, (newPage) => {
      emit('pageNumChange', newPage)
    })
    const getPageInfo = () => ({ pageSize, pageNumber: pageNumber.value })
    const setPageNumber = n => pageNumber.value = n
    return { pageInfo, pageNumber, getPageInfo, setPageNumber }
  }
}
</script>

<style scoped lang="stylus">
.el-pagination
  text-align: right
  padding-top: 15px
  padding-bottom: 15px
</style>