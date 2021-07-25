<template>
  <el-container class="wrapper">
    <home-menu />
    <el-main>
      <div class="main">
        <home-header />
        <div class="content">
          <router-view />
        </div>
      </div>
      <home-footer />
    </el-main>
  </el-container>
</template>
<script>
import HomeMenu from 'components/layout/menu/menu.vue'
import HomeHeader from 'components/layout/header.vue'
import HomeFooter from 'components/layout/footer.vue'
export default {
  components: {
    HomeMenu,
    HomeHeader,
    HomeFooter,
  }
}
</script>
<style lang="stylus" scoped>
.el-container
    height: 100vh
    .el-main
      padding: 0
      color: #303133
      .main
        display: inline-block
        min-width: 100%
        .content
          border-radius: 4px
          box-sizing: border-box
          margin: 15px
          padding: 10px 10px 0
          background: #fff
          min-height: calc(100vh - 68px - 60px - 30px)
</style>