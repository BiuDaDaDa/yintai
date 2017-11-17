<template>
  <div id="app">
    <pin-zhi-xb></pin-zhi-xb>
    <router-view/>
  </div>
</template>

<script>
  import PinZhiXb from './components/index/PinZhiXB'
  export default {
    name: 'app',
    components: {
      PinZhiXb
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
</style>
