<template>
  <div class="wrap" v-if="thisdata != null">
    <!-- 品质箱包 -- 精选好货 -->
    <div class="pinzhi-xb">
      <div class="pinzhi-xb-header">
        <div class="pinzhi-xb-header-A">
          <div class="pinzhi-xb-hA-top">
            <div class="pinzhi-xb-hA-top-left">
              <img :src="thisdata0[0]['imgurl']" alt="">
              <img :src="thisdata0[1]['imgurl']" alt="">
            </div>
            <div class="pinzhi-xb-hA-top-right">
              <img :src="thisdata0[2]['imgurl']" alt="">
            </div>
          </div>
          <div class="pinzhi-xb-hA-content">
            <img v-for="val in thisdata1" :src="val['imgurl']" alt="">
          </div>
          <div class="pinzhi-xb-hA-footer">
            <img :src="thisdata3[0]['imgurl']" alt="">
          </div>
        </div>
      </div>

      <div class="pinzhi-xb-content">
        <div class="pinzhi-xb-content-A">
          <div class="pinzhi-xb-cA-top">
            <div class="pinzhi-xb-cA-top-left">
              <img :src="thisdata4[0]['imgurl']" alt="">
            </div>
            <div class="pinzhi-xb-cA-top-right">
              <img :src="thisdata4[1]['imgurl']" alt="">
              <img :src="thisdata4[2]['imgurl']" alt="">
            </div>
          </div>
          <div class="pinzhi-xb-cA-content">
            <img v-for="val5 in thisdata5" :src="val5['imgurl']" alt="">
          </div>
          <div class="pinzhi-xb-cA-footer">
            <img :src="thisdata7[0]['imgurl']" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- 精选好货 -->
    <div class="jingxuan-hh">
      <div class="jingxuan-hh-content">
        <div class="jingxuan-hh-content-A" v-for="(aa, index) in thisdata" v-if="index>7">
          <div class="jingxuan-hh-content-A-left" v-for="bb in aa.items">
            <img :src="bb['imgurl']" alt="">
            <div class="jingxuan-hh-content-A-left-a">{{bb['extra']['productdetail']['name']}}</div>
            <div class="jingxuan-hh-content-A-left-b">
              <span class="jx-c-left-b1">￥</span>
              <span class="jx-c-left-b2">{{bb['extra']['productdetail']['price']}}.00</span>
              <span class="jx-c-left-b3">￥</span>
              <span class="jx-c-left-b4">{{bb['extra']['productdetail']['marketprice']}}.00</span>
            </div>
            <div class="pink" v-for="cc in bb['extra']['productdetail']['prmotionlist']">{{cc['plabel']}}</div>
          </div>
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
        url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2`,
        headers: {},
        params: {},
        success: function (res) {
          this.thisdata = res.data.data.templatelist
          this.thisdata0 = this.thisdata[0].items
          this.thisdata1 = this.thisdata[1].items
          this.thisdata3 = this.thisdata[3].items
          this.thisdata4 = this.thisdata[4].items
          this.thisdata5 = this.thisdata[5].items
          this.thisdata7 = this.thisdata[7].items
          this.thisdata8 = this.thisdata[8].items
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

  .wrap {
    background-color: rgb(237, 237, 237);
  }

  .pinzhi-xb-header-A {
    width: 100%;
  }

  .pinzhi-xb-hA-top {
    width: 100%;
    overflow: hidden;
  }

  .pinzhi-xb-hA-top-left {
    width: 50%;
    float: left;
  }

  .pinzhi-xb-hA-top-left img {
    width: 100%;
    border-bottom: 2px solid rgb(237, 237, 237);
    vertical-align: middle;
  }

  .pinzhi-xb-hA-top-right {
    width: 50%;
    float: left;
  }

  .pinzhi-xb-hA-top-right img {
    width: 100%;
    line-height: 0;
    border-left: 2px solid rgb(237, 237, 237);
  }

  .pinzhi-xb-hA-content {
    width: 100%;
    display: inline-flex;
  }

  .pinzhi-xb-hA-content img {
    width: 33%;
    height: 100%;
    object-fit: cover;
    border-right: 2px solid rgb(237, 237, 237);
  }

  .pinzhi-xb-hA-footer {
    width: 100%;
    background-color: white;
    margin-top: 5px;
  }

  .pinzhi-xb-hA-footer img {
    width: 100%;
  }

  .pinzhi-xb-content-A {
    width: 100%;
    margin-top: 2px;
  }

  .pinzhi-xb-cA-top-top {
    width: 100%;
  }

  .pinzhi-xb-cA-top-top img {
    width: 100%;
    border-top: 3px solid rgb(237, 237, 237);
    border-bottom: 2px solid rgb(237, 237, 237);
  }

  .pinzhi-xb-cA-top {
    overflow: hidden;
    width: 100%;
  }

  .pinzhi-xb-cA-top-left {
    width: 50%;
    float: left;
  }

  .pinzhi-xb-cA-top-left img {
    width: 100%;
  }

  .pinzhi-xb-cA-top-right {
    width: 50%;
    float: left;
    /*border-bottom: 1px solid rgb(237, 237, 237);*/
  }

  .pinzhi-xb-cA-top-right img {
    width: 100%;
    vertical-align: middle;
  }

  .pinzhi-xb-cA-content {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
  }

  .pinzhi-xb-cA-content img {
    width: 33%;
    height: 100%;
    object-fit: cover;
    vertical-align: middle;
  }

  .pinzhi-xb-cA-footer {
    width: 100%;
    margin-top: 3px;
    margin-bottom: 3px;
  }

  .pinzhi-xb-cA-footer img {
    width: 100%;
  }

  .jingxuan-hh {
    background-color: rgb(237, 237, 237);
  }

  .jingxuan-hh-header {
    width: 100%;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .jingxuan-hh-header img {
    width: 100%;
  }

  .jingxuan-hh-content-A {
    width: 100%;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: space-between;
  }

  .jingxuan-hh-content-A-left {
    width: 49.5%;
    float: left;
    background-color: #fff;
    margin-bottom: 5px;
    position: relative;
    .pink{
      position: absolute;
      top: -2px;
      left: 0;
      background-color: @index-StraightDown-bgcolor;
      color: white;
      font-size: @font-size-small;
      padding:8px;
    }
  }

  .jingxuan-hh-content-A-left img {
    width: 100%;
  }

  .jingxuan-hh-content-A-left-a {
    width: 100%;
    height: 44px;
    overflow: hidden;
    padding: 8px;
    color: @more-product-introduce-color;
    font-size: @font-size;
    box-sizing: border-box;
    line-height: 20px;
  }

  .jingxuan-hh-content-A-left-b {
    padding: 8px;
  }

  .jx-c-left-b1 {
    font-size: @font-size-small;
    color: @color-sale-red;
  }

  .jx-c-left-b2 {
    font-size: @font-size-medium;
    color: @color-sale-red;
    font-weight: bolder;
    margin-left: -5px;
  }

  .jx-c-left-b3 {
    font-size: @font-size-small;
    color: @index-boom-introduce-color;
  }

  .jx-c-left-b4 {
    font-size: @font-size-small;
    color: @index-boom-introduce-color;
    margin-left: -5px;
    text-decoration: line-through;
  }
</style>
