<template>
  <el-header>
    <i
      class="icon-collapse" 
      :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
      @click="toggleCollapse"
    />
    <h1>Vue3 后台管理</h1>
  </el-header>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { TOGGLE_MENU_COLLAPSE } from 'store/mutation-types'
export default {
  setup() {
    const store = useStore()
    return {
      isCollapse: computed(() => store.getters.isCollapse),
      toggleCollapse: () => store.commit(TOGGLE_MENU_COLLAPSE),
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-header
  .icon-collapse
    cursor: pointer
    margin-right: 20px
    font-size: 24px
  color: #fff
  height: 68px!important
  background: #46a2f2
  display: flex
  align-items: center
  .fold-btn
    margin-right: 20px
</style>