<template>
  <div id="app">
    <!--<img src="./common/img/shangchangtk/title.png" alt="" class="img-title">-->
    <!--<footer-hui></footer-hui>-->
    <!--<yt-footer></yt-footer>-->
    <router-view/>
  </div>
</template>

<script>
  import FooterHui from './components/common/FooterHui'
  import YtFooter from './components/common/YtFooter'
  export default {
    name: 'app',
    components: {
      FooterHui,
      YtFooter
    },
    mounted () {
      var date1 = new Date()
      var date2 = `${date1.getFullYear()}${date1.getMonth() + 1}${date1.getDate()}${date1.getMinutes()}`
      this.$request({
        type: 'get',
        url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`,
        headers: {},
        params: {},
        success: function (res) {
          console.log(res.data)
        },
        failed: function (err) {
          console.log(err)
        }
      })
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
