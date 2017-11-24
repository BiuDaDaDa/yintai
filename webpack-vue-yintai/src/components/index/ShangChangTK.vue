<template>
  <div class="shangchang-tk-wrap" v-if="thisdata != null">
    <div class="mask" v-if="ShowMask" @click="clickContent"></div>
    <div class="shangchang-tk">
      <div class="shangchang-tk-top">
        <img src="../../common/img/shangchangtk/arrow-left.png" alt="" class="shangchang-tk-top1">
        <div class="shangchang-tk-top2">{{thisdata.data.pagetitle}}</div>
        <img src="../../common/img/shangchangtk/shenglue.png" alt="" class="shangchang-tk-top3" @click="clickList">
        <img src="../../common/img/shangchangtk/pink-shenglue.png" alt="" class="shangchang-tk-top4" @click="closeList" v-if="isShow">
        <ul v-if="Showlist">
          <li>
            <i class="iconfont icon-home"></i>
            <span>银泰首页</span>
          </li>
          <li>
            <i class="iconfont icon-categorynormal"></i>
            <span>分类</span>
          </li>
          <li>
            <i class="iconfont icon-cart"></i>
            <span>购物车</span>
          </li>
          <li>
            <i class="iconfont icon-user"></i>
            <span>我的银泰</span>
          </li>
        </ul>
      </div>

      <div class="desk"></div>

      <div class="shangchang-tk-header">
        <div class="shangchang-tk-header-A" v-for="val in thisdata2">
          <img :src="val['imgurl']" alt="">
          <div>{{val['imgname']}}</div>
        </div>
      </div>

      <div class="shangchang-tk-content">
        <div class="shangchang-tk-content-header" v-for="(img,index) in thisdata1" v-if="index >0 && index<=10">
          <img :src="item['imgurl']" alt="" v-for="item in img['items']">
        </div>
      </div>

      <div class="shangchang-tk-footer">
        <div class="shangchang-tk-footer-left-top" v-for="(img1,index) in thisdata1" v-if="index>10">
          <div class="shangchang-tk-footer-left" v-for="item in img1['items']">
            <img :src="item['imgurl']" alt="">
            <div class="shangchang-tk-footer-left-div">
              <img src="../../assets/img/shangchangtk/cat.png" alt="" class="shangchang-tk-footer-left-div-img">
              <div>{{item['extra']['productdetail']['name']}}</div>
            </div>
            <p class="shangchang-tk-footer-left-p">
              <span class="sc-tk-left-p1">￥</span>
              <span class="sc-tk-left-p2">{{item['extra']['productdetail']['price']}}.00</span>
              <span class="sc-tk-left-p3">￥</span>
              <span class="sc-tk-left-p4">{{item['extra']['productdetail']['marketprice']}}.00</span>
            </p>
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
        thisdata: null,
        thisdata1: '',
        thisdata2: '',
        Showlist: false,
        ShowMask: false,
        isShow: false
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
        url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=30000365&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`,
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
    },
    methods: {
      clickContent () {
        this.Showlist = false
        this.ShowMask = false
      },
      clickList () {
        this.Showlist = true
        this.ShowMask = true
        this.isShow = true
      },
      closeList () {
        this.Showlist = false
        this.ShowMask = false
        this.isShow = false
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  @-webkit-keyframes move1 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(39, 44, 47, 0.7);
    z-index: 30;
    animation: move1 0.1s linear;
  }
  .shangchang-tk-wrap {
    background-color: rgb(237, 237, 237);
  }

  .shangchang-tk-top {
    background-color: white;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    padding: 10px 15px 8px 15px;
    box-sizing: border-box;
    border-bottom: @border-color-more;
    position: fixed;
    z-index: 100;
    ul {
      position: absolute;
      top: 38px;
      right: 0;
      background-color: white;
      list-style: none;
      padding: 0 5px 5px 5px;
      animation: move1 0.1s linear;
      li {
        border-top: 1px solid rgb(193, 193, 193);
        padding: 8px;
        i {
          color: @index-boom-introduce-color;
          font-size: 25px;
        }
        .icon-user {
          font-size: 18px;
          margin-left: -5px;
        }
        .icon-home {
          color: rgb(83, 83, 83);
        }
        span {
          color: @index-boom-introduce-color;
          font-size: @font-size-medium;
        }
      }
    }
  }

  .shangchang-tk-top1 {
    width: 15px;
    height: 15px;
  }

  .shangchang-tk-top2 {
    font-size: @font-size-medium;
    font-weight: 500;
  }

  .shangchang-tk-top3 {
    width: 20px;
    height: 20px;
  }
  .shangchang-tk-top4 {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 15px;
  }

  .desk{
    height: 38px;
  }

  .shangchang-tk-header {
    width: 100%;
    background-color: white;
    display: inline-flex;
    justify-content: space-around;
    padding-bottom: 10px;
  }

  .shangchang-tk-header-A {
    text-align: center;
    width: 25%;
  }

  .shangchang-tk-header-A img {
    width: 100%;
    margin-bottom: 10px;
  }

  .shangchang-tk-header-A div {
    font-size: @font-size;
    color: @index-boom-introduce-color;
  }

  .shangchang-tk-content-header {
    width: 100%;
  }

  .shangchang-tk-content-header img {
    width: 100%;
  }

  .shangchang-tk-footer {
    width: 100%;
  }

  .shangchang-tk-footer-left-top {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    overflow: hidden;
    height: 100%;
  }

  .shangchang-tk-footer-left {
    width: 49.5%;
    float: left;
    background-color: #fff;
    margin-bottom: 5px;
  }

  .shangchang-tk-footer-left > img {
    width: 100%;
  }

  .shangchang-tk-footer-left-div {
    width: 100%;
    padding: 10px;
    overflow: hidden;
    height: 50px;
    line-height: 22px;
    box-sizing: border-box;
    position: relative;
    text-indent:2em;
    color: @more-product-introduce-color;
    font-size:@font-size;
  }

  .shangchang-tk-footer-left-div img {
    width: 11%;
    position: absolute;
    left: 11px;
    top: 13px;
  }
  .shangchang-tk-footer-left-p{
    width: 100%;
    padding:8px;
    margin-top: 3px;
  }
  .sc-tk-left-p1{
    font-size:@font-size-small;
    color:@color-sale-red;
  }
  .sc-tk-left-p2{
    font-size:@font-size-medium;
    color:@color-sale-red;
    font-weight: bolder;
    margin-left: -5px;
  }
  .sc-tk-left-p3{
    font-size:@font-size-small;
    color:@index-boom-introduce-color;
  }
  .sc-tk-left-p4{
    font-size:@font-size-small;
    color:@index-boom-introduce-color;
    margin-left: -5px;
    text-decoration: line-through;
    padding-bottom: 3px;
  }
</style>
