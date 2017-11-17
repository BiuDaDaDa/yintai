<template>
  <div class="pinzhi-xb" v-if="thisdata != null">
    <div class="wrap">

      <div class="header">
        <div class="header-A">
          <div class="hA-top">
            <div class="hA-top-left">
              <img :src="thisdata['data']['templatelist'][0]['items'][0]['imgurl']" alt="">
            </div>
            <div class="hA-top-right">
              <img :src="thisdata['data']['templatelist'][0]['items'][1]['imgurl']" alt="">
              <img :src="thisdata['data']['templatelist'][0]['items'][2]['imgurl']" alt="">
            </div>
          </div>

          <div class="hA-content">
            <img :src="thisdata['data']['templatelist'][1]['items'][0]['imgurl']" alt="">
            <img :src="thisdata['data']['templatelist'][1]['items'][1]['imgurl']" alt="">
            <img :src="thisdata['data']['templatelist'][1]['items'][2]['imgurl']" alt="">
          </div>

          <div class="hA-footer">
            <img :src="thisdata['data']['templatelist'][3]['items'][0]['imgurl']" alt="">
          </div>
        </div>
      </div>

      <div class="content">
        <div class="content-A">
          <div class="cA-top">
            <img :src="thisdata['data']['templatelist'][4]['items'][0]['imgurl']" alt="">
          </div>
          <div class="cA-content"></div>
          <div class="cA-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        thisdata: null
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'api?r=201711161835&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2',
        headers: {},
        params: {},
        success: function (res) {
          this.thisdata = res.data
          console.log(res.data)
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  .header-A{
    width: 100%;
  }
  .hA-top{
    width: 100%;
    overflow: hidden;
  }
  .hA-top-left{
    width: 50%;
    float: left;
  }
  .hA-top-left img{
    width: 100%;
  }
  .hA-top-right{
    width: 50%;
    float: left;
  }
  .hA-top-right img{
    width: 100%;
    border-bottom: 1px solid rgb(237,237,237);
    line-height: 0;
    vertical-align: middle
  }
  .hA-content{
    width: 100%;
    display: inline-flex;
  }
  .hA-content img{
    width: 33%;
    height: 100%;
    object-fit:cover;
    border-right: 1px solid rgb(237,237,237);
  }
  .hA-footer{
    width: 100%;
  }
  .hA-footer img{
    width: 100%;
  }
</style>
