<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {onBeforeUpdate, provide, ref, watch} from 'vue'
  import {router} from "./router";
  // @ts-ignore
  import NProgress from 'nprogress'
  import 'nprogress/nprogress.css'

export default {

  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width > 500)

    // 路由切换完成前触发
    router.beforeEach((to,from,next) => {
      // 显示进度条
      NProgress.start()
      next()
    })
    // 路由切换完成后触发
    router.afterEach(() => {
      if(width <= 500){
        asideVisible.value = false
      }
      NProgress.done()
      window.scrollTo(0,0)
    })

    provide('asideVisible', asideVisible);
  }
}
</script>

<style lang="scss">
#nprogress {
  .bar {
    background: #6b9ab8 !important; //自定义颜色
  }

  .spinner-icon {
    border-color: #e5f2fa transparent transparent #e5f2fa;
  }
}
</style>
