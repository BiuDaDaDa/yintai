<template>
  <div class="wrap" v-if="thisdata != null && thisdata1 != '' && thisdata6 != '' && myImg != '' && myNav != '' && tagArr != '' && arr != ''">
    <!-- 首页固定标题 -- 大图滚动 -->
    <div class="box">
      <!-- 首页搜索框 -->
      <div class="search_box">
        <img src="../../assets/img/shangchangtk/logo.png">
        <div class="search_txt">
          <input type="text" placeholder="搜索商品or品牌">
          <span>
          <i class="iconfont icon-search3"></i>
        </span>
        </div>
        <div class="user">
          <i class="iconfont icon-weibiaoti1"></i>
        </div>
      </div>
      <div class="index_content">
        <!-- 首页轮播图 -->
        <div class="index_scrollimg">
          <mt-swipe :auto="1000">
            <!--绑定唯一的key值-->
            <mt-swipe-item v-for="myScrollImg in myImg" :key="myImg.id">
              <a href="" class="scroll">
                <img :src="myScrollImg.imgurl" alt="">
              </a>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!-- 首页导航图 -->
        <div class="index_nav">
          <div class="nav_box">
            <div class="nav_img" v-for="myNavImg in myNav" :key="myNav.itemid">
              <router-link :to="'/' + myNavImg.itemid" class="nav_btn">
                <img :src="myNavImg.imgurl" alt="">
                <p>{{myNavImg.imgname}}</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- 品质箱包 -- 精选好货 -->
    <div class="pinzhi-xb">
      <div class="pinzhi-xb-header">
        <div class="pinzhi-xb-header-A">
          <div class="pinzhi-xb-hA-top">
            <div class="pinzhi-xb-hA-top-left">
              <img :src="thisdata[0]['items'][0]['imgurl']" alt="">
              <img :src="thisdata[0]['items'][1]['imgurl']" alt="">
            </div>
            <div class="pinzhi-xb-hA-top-right">
              <img :src="thisdata[0]['items'][2]['imgurl']" alt="">
            </div>
          </div>
          <div class="pinzhi-xb-hA-content">
            <img v-for="val in thisdata1" :src="val['imgurl']" alt="">
          </div>
          <div class="pinzhi-xb-hA-footer">
            <mt-swipe :auto="4000">
              <mt-swipe-item><img :src="thisdata[2]['items'][0]['imgurl']" alt=""></mt-swipe-item>
              <mt-swipe-item><img :src="thisdata[2]['items'][1]['imgurl']" alt=""></mt-swipe-item>
            </mt-swipe>
          </div>
        </div>
      </div>
      <div class="pinzhi-xb-content">
        <div class="pinzhi-xb-content-A">
          <div class="pinzhi-xb-cA-top-top">
            <img :src="thisdata[4]['items'][0]['imgurl']" alt="">
          </div>
          <div class="pinzhi-xb-cA-top">
            <div class="pinzhi-xb-cA-top-left">
              <img :src="thisdata[5]['items'][0]['imgurl']" alt="">
            </div>
            <div class="pinzhi-xb-cA-top-right">
              <img :src="thisdata[5]['items'][1]['imgurl']" alt="">
              <img :src="thisdata[5]['items'][2]['imgurl']" alt="">
            </div>
          </div>
          <div class="pinzhi-xb-cA-content">
            <img v-for="val6 in thisdata6" :src="val6['imgurl']" alt="">
          </div>
          <div class="pinzhi-xb-cA-footer">
            <img :src="thisdata[7]['items'][0]['imgurl']" alt="">
          </div>
        </div>
      </div>
    </div>

    <!-- 精选好货 -->
    <div class="jingxuan-hh">
      <div class="jingxuan-hh-header">
        <img :src="thisdata[9]['items'][0]['imgurl']" alt="">
      </div>

      <div class="jingxuan-hh-content">
        <div class="jingxuan-hh-content-A" v-for="(aa,index) in thisdata" v-if="index>9">
          <div class="jingxuan-hh-content-A-left" v-for="bb in aa.items">
            <img :src="bb.imgurl" alt="">
            <div class="jingxuan-hh-content-A-left-a">{{bb['extra']['productdetail']['name']}}</div>
            <div class="jingxuan-hh-content-A-left-b">
              <span class="jx-c-left-b1">￥</span>
              <span class="jx-c-left-b2">{{bb['extra']['productdetail']['price']}}.00</span>
              <span class="jx-c-left-b3">￥</span>
              <span class="jx-c-left-b4">{{bb['extra']['productdetail']['marketprice']}}.00</span>
            </div>
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
        thisdata6: '',
        tagArr: null,
        myImg: '',
        myNav: '',
        arr: []
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'api?r=201711171029&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2',
        headers: {},
        params: {},
        success: function (res) {
          this.thisdata = res.data.data.templatelist
          this.thisdata1 = this.thisdata[1].items
          this.thisdata6 = this.thisdata[6].items
        },
        failed: function (err) {
          console.log(err)
        }
      })
      this.$request({
        type: 'get',
        url: 'api?r=201711161814&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1',
        headers: {},
        params: {},
        success: function (res) {
          this.tagArr = res.data.data.templatelist
          this.myImg = res.data.data.bannerlist
          this.myNav = res.data.data.templatelist[0].items
        },
        failed: function (err) {
          console.log(err)
        }
      })
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
      date2 = `${date1.getFullYear()}${date1.getMonth()}${date1.getDate()}${date1.getMinutes()}`
      this.$request({
        type: 'get',
        url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`,
        headers: {},
        params: {},
        success: function (res) {
          this.arr = res.data.data
          console.log(res.data.data)
          this.isloading = true
        },
        failed: function (err) {
          console.log(err)
        }
      })
    },
    methods: {
      redirectMoreBK () {
        console.log('toredirect')
        this.$router.push('/SalesCustomList')
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";

  .wrap {
    background-color: rgb(237, 237, 237);
  }

  .search_box {
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    font-size: 24px;
    padding: 5px;
    position: fixed;
    top: 71px;
    z-index: 1;
    box-sizing: border-box;
  }

  .search_box .search_txt {
    width: 80%;
    height: 90%;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .search_box .search_txt input {
    border: 1px solid #d2d2d2;
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
  }

  .search_box .search_txt span {
    border-left: 1px solid #d2d2d2;
    position: absolute;
    right: 3%;
    font-size: 24px;
    padding-left: 15px;
    color: #d2d2d2;
  }

  .search_box .user {
    height: 100%;
    padding-right: 10px;
  }

  .search_box .user .icon-weibiaoti1 {
    font-size: 32px;
    color: #d2d2d2;
    font-weight: lighter;
  }

  .index_content {
    padding-top: 118px;
  }

  .index_scrollimg {
    width: 100%;
    height: 168px;
  }

  .index_scrollimg a img {
    width: 100%;
    height: 100%;
  }

  .index_nav {
    width: 100%;
  }

  .index_nav .nav_box {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
  }

  .index_nav .nav_box .nav_img {
    width: 20%;
    text-align: center;
  }

  .index_nav .nav_box .nav_btn {
    width: 100%;
    text-decoration: none;
    color: #666;
  }

  .index_nav .nav_box .nav_btn img {
    width: 100%;
  }

  .index_nav .nav_box .nav_btn p {
    margin: 8px 0;
  }

  .index_tag {
    width: 100%;
  }

  .index-content {
    background-color: @index-bgcolor;
    width: 100%;
    .listImg1,
    .listImg2,
    .listImg3,
    .listImg4,
    .listImg5 {
      overflow: hidden;
      width: 100%;
    }

    .listImg1 {
      img {
        margin-top: 2px;
        width: 100%;
      }
    }
    .listImg2 {
      background-color: #fff;
      overflow: hidden;
      white-space: nowrap;
      padding-top: 5px;
      .LI2_imgbox {
        position: relative;
        .LI2-tag {
          float: left;
          background-color: @index-StraightDown-bgcolor;
          padding: 7px;
          position: absolute;
          top: 0;
          left: 0;
          font-size: @font-size-small;
          color: @index-StraightDown-color;
        }
      }
      a {
        margin-left: 2px;
        width: 94px;
        display: inline-block;
        text-decoration: none;
        color: @color-light-gray;
        img {
          display: block;
          width: 92px;
          border: @border-color-more;
          margin-right: 1px;
        }
        .LI2-intro {
          padding: 5px 0;
          overflow: hidden;
          line-height: 20px;
          white-space: pre-line;
          font-size: @font-size;
          width: 100%;
          height: 36px;
          display: inline-block;
        }
        .LI2-price {
          color: red;
          font-size: @font-size;
          padding: 5px;
        }
      }

    }
    .listImg3 {
      img {
        width: 50%;
        float: left;
      }
    }
    .listImg4 {
      img {
        width: 33%;
        float: left;
        margin-left: 0.3%;
      }
    }
    .listImg5 {
      width: 100%;
      position: relative;
      div {
        width: 50%;
        float: left;
        img {
          width: 100%;
        }
      }
    }
  }

  .index_tag .tag_women, .tag_men, .tag_shoe, .tag_package, .tag_sport {
    width: 100%;
  }
  .tag_women .women_top {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .tag_women .women_content {
    width: 100%;
    .women_content1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .women_left {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .women_right {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
    .women_content2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .women_content2_box {
        width: 33.3%;
        img {
          width: 100%;
        }
      }
    }
  }
  .tag_women .women_bottom {
    width: 100%;
    .women_bottom_box {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .tag_sport .sport_top {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .tag_sport .sport_content {
    width: 100%;
    .sport_content1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .sport_left {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .sport_right {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
    .sport_content2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .sport_content2_box {
        width: 33.3%;
        img {
          width: 100%;
        }
      }
    }
  }
  .tag_sport .sport_bottom {
    width: 100%;
    .sport_bottom_box {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .tag_package .package_top {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .tag_package .package_content {
    width: 100%;
    .package_content1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .package_left {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .package_right {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
    .package_content2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .package_content2_box {
        width: 33.3%;
        img {
          width: 100%;
        }
      }
    }
  }
  .tag_shoe .shoe_top {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .tag_shoe .shoe_content {
    width: 100%;
    .shoe_content1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .shoe_left {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .shoe_right {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
    .shoe_content2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .shoe_content2_box {
        width: 33.3%;
        img {
          width: 100%;
        }
      }
    }
  }
  .tag_men .men_top {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .tag_men .men_content {
    width: 100%;
    .men_content1 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .men_left {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .men_right {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
    .men_content2 {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .men_content2_box {
        width: 33.3%;
        img {
          width: 100%;
        }
      }
    }
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
    height: 100px;
    background-color: white;
  }

  .pinzhi-xb-hA-footer img {
    width: 100%;
  }

  .pinzhi-xb-content-A {
    width: 100%;
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
    border-bottom: 2px solid rgb(237, 237, 237);
  }

  .pinzhi-xb-cA-top-right img {
    width: 100%;
    vertical-align: middle;
  }

  .pinzhi-xb-cA-content {
    width: 100%;
    display: inline-flex;
  }

  .pinzhi-xb-cA-content img {
    width: 33%;
    height: 100%;
    object-fit: cover;
  }

  .pinzhi-xb-cA-footer {
    width: 100%;
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
