<template>
  <div id="app">
    <!--<img src="./common/img/shangchangtgtik/title.png" alt="" class="img-title">-->
    <!--<footer-hui></footer-hui>-->
    <!--<yt-footer></yt-footer>-->
    <router-view/>
    <!--<router-view/>-->
    <!--<footer-hui v-if="fthui"></footer-hui>-->
    <!--<yt-footer></yt-footer>-->
  </div>
</template>

<script>
  import FooterHui from './components/common/FooterHui'
  import YtFooter from './components/common/YtFooter'
  export default {
    name: 'app',
    data () {
      return {
        fthui: true
      }
    },
    components: {
      FooterHui,
      YtFooter
    }
  }
</script>

<style>
  @import "common/css/reset.less";
  body{
    overflow-x: hidden;
  }
  .img-title{
    width: 100%;
    position: fixed;
    z-index: 1000;
  }
</style>
