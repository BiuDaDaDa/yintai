<template>
  <div class="vip-wrap" v-if="thisdata != null">
    <div class="vip-top">
      <img src="../../common/img/shangchangtk/arrow-left.png" alt="" class="vip-top1">
      <div class="vip-top2">{{thisdata.data.pagetitle}}</div>
      <img src="../../common/img/shangchangtk/shenglue.png" alt="" class="vip-top3">
    </div>
    <div class="vip">
      <div class="desk"></div>
      <div class="vip-header">
        <div class="vip-header1" v-for="(img,index) in thisdata1" v-if="index>=0 && index<5">
          <div v-for="item in img['items']">
            <img :src="item['imgurl']" alt="">
          </div>
        </div>
        <div class="vip-header2">
          <img :src="thisdata1[5]['items'][0]['imgurl']" alt="">
          <img :src="thisdata1[5]['items'][1]['imgurl']" alt="">
        </div>
      </div>

      <div class="vip-content">
        <div class="vip-content-top">
          <img :src="thisdata1[6]['items'][0]['imgurl']" alt="">
          <img :src="thisdata1[7]['items'][0]['imgurl']" alt="">
        </div>
        <div class="vip-content-bottom" v-for="(img1,index) in thisdata1" v-if="index>7">
          <!--<div v-for="ite in img1['items']">-->
            <img :src="ite['imgurl']" alt="" v-for="ite in img1['items']">
          <!--</div>-->
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
        thisdata: null,
        thisdata1: '',
        thisdata2: ''
      }
    },
    mounted () {
      var date1 = new Date()
      var datehour = date1.getHours()
      var dateminute = date1.getMinutes()
      if (datehour < 10) {
        datehour = `0${datehour}`
      }
      if (dateminute < 10) {
        dateminute = `0${dateminute}`
      }
      var date2 = `${date1.getFullYear()}${date1.getMonth() + 1}${date1.getDate()}${datehour}${dateminute}`
      this.$request({
        type: 'get',
        url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=30001970&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`,
        header: {},
        params: {},
        success: function (res) {
          this.thisdata = res.data
          this.thisdata1 = res.data.data.templatelist
          this.thisdata2 = this.thisdata1[0]['items']
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
  img{
    margin-top:-3px;
  }
  .desk {
    height: 40px;
  }

  .vip-top {
    background-color: white;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
    border-bottom: @border-color-more;
    position: fixed;
    line-height: 40px;
  }

  .vip-top1 {
    width: 15px;
    height: 15px;
    margin-top: 13px;
  }

  .vip-top2 {
    font-size: @font-size-medium;
    font-weight: 500;
  }

  .vip-top3 {
    width: 20px;
    height: 20px;
    margin-top: 12px;
  }

  .vip-header1 {
    width: 100%;
  }

  .vip-header1 img {
    width: 100%;
    margin-top: -3px;
  }

  .vip-header2 {
    width: 100%;
    overflow: hidden;
    margin-top: -3px;
  }

  .vip-header2 img {
    width: 50%;
    float: left;
  }
  .vip-content-top{
    width: 100%;
  }
  .vip-content-top img{
    width: 100%;
  }
  .vip-content-bottom img{
   width: 50%;
  }
</style>
