<template>
  <el-menu
    :router="true"
    :default-active="$route.path"
    :collapse="isCollapse"
  >
    <li class="logo-wrapper">
      <img src="../../../common/image/logo.png">
    </li>
    <template v-for="(firstMenu, firstIndex) in menuList" :key="firstIndex">
      <!-- First level -->
      <el-submenu v-if="firstMenu.subMenus" :index="firstIndex + ''">
        <template #title><i :class="firstMenu.icon" /><span>{{ firstMenu.name }}</span></template>
        <!-- Secondary level -->
        <template v-for="(secMenu, secIndex) in firstMenu.subMenus" :key="secIndex">
          <el-submenu v-if="secMenu.subMenus" :index="'' + firstIndex + secIndex">
            <template #title><i :class="secMenu.icon" /><span>{{ secMenu.name }}</span></template>
            <!-- Third level -->
            <el-menu-item v-for="(thirdMenu, thirdIndex) in secMenu.subMenus" :key="thirdIndex" :index="firstMenu.path + thirdMenu.path">
              <i :class="thirdMenu.icon" />
              <span>{{ thirdMenu.name }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="firstMenu.path + secMenu.path">
            <i :class="secMenu.icon" />
            <span>{{ secMenu.name }}</span>
          </el-menu-item>
        </template>
      </el-submenu>
      <el-menu-item v-else :index="firstMenu.path">
        <i :class="firstMenu.icon" />
        <template #title>{{ firstMenu.name }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { menuList } from './config'
export default {
  setup() {
    const store = useStore()
    return {
      isCollapse: computed(() => store.getters.isCollapse),
      menuList
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-menu
  overflow-y: auto
  flex-shrink: 0
  &:not(.el-menu--collapse)
    width: 20%
    max-width: 290px
  .logo-wrapper
    width: 50%
    margin: 15px auto
    padding: 8% 0
    img
      width: 100%
      height: 100%
</style>