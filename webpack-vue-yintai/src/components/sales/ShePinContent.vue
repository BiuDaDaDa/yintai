<template>
  <div id="saleProduct">
    <div class="listTitle">
      <div class="list" @click="returnLastPage"><i class="iconfont icon-back"></i></div>
      <div class="list">{{title}}</div>
      <div class="list"> . . . </div>
    </div>
    <div >
    </div>
    <!--<div v-if="isload && arr1.leftsecond != undefined" class="lastTime">-->
      <!--&lt;!&ndash;<span id="countCown">{{arr1.leftsecond}}</span>&ndash;&gt;-->
      <!--<i class="iconfont icon-clock"></i>剩 <span :v-model="this.lastDay"></span>天{{lastHour}}小时{{lastMinute}}分{{lastSecond}}秒-->
    <!--</div>-->
    <div id="nav" class="nav">
      <mt-button class="nav-items" @click.native.prevent="active = 'tab-container1'" @click="reloadRequest(0)">默认</mt-button>
      <mt-button class="nav-items" @click.native.prevent="active = 'tab-container2'" @click="reloadRequest(5)">销量</mt-button>
      <mt-button class="nav-items" @click.native.prevent="active = 'tab-container3'" @click="reloadRequest(a1)">折扣
        <div>
          <i class="iconfont icon-up-copy" :id="'colorup' + colorup1" ></i>
          <i class="iconfont icon-down" :id="'colordown' + colordown1"></i>
        </div>
      </mt-button>
      <mt-button class="nav-items" @click.native.prevent="active = 'tab-container4'" @click="reloadRequest(a2)">价格
        <div>
          <i class="iconfont icon-up-copy" :id="'colorup' + colorup2"></i>
          <i class="iconfont icon-down" :id="'colordown' + colordown2"></i>
        </div>
      </mt-button>
      <mt-button class="nav-items" @click.native.prevent="active = 'tab-container5'" @click="rightlistisShow">筛选</mt-button>
    </div>
    <div class="YTloading" v-show="!isload"><img src="../../assets/h5-loading.gif" alt=""></div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active"  v-if="isload">
        <mt-tab-container-item :id="'tab-container'+this.tabID" class="item" >
          <ul class="sp-ul">
            <li @click="jumpThird(index)" class="sp-li" v-for="(saleproduct,index) in this.arr1['product_list']">
              <div class="sp-li-info">
                <div class="info-img">
                  <img :src="saleproduct.midimageurl" alt="">
                </div>
                <div class="info-text">
                  <div>{{ saleproduct.name }}</div>
                  <!--<div v-if="saleproduct.promotionlabel">{{saleproduct.promotionlabel}}</div>-->
                  <p class="oldprice">￥{{saleproduct.price}}.00</p>
                  <div class="newprice"><span v-if="saleproduct.exclusivemobile"><i class="iconfont icon-phone" style="color:#b2b2b2"></i></span>￥{{saleproduct.yt_price}}.00</div>
                </div>
              </div>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container5" v-show="isload">
          <mt-popup v-model="rightlist" position="right" class="yt-sp-rightlist"  v-show="isshowlist">
            <div class="rl-list">
              <div class="rl-list-head">
                <span class="headbox1 color-pink"><i class="iconfont icon-true"></i>专柜同款</span>
                <span class="headbox1 color-gray"><i class="iconfont icon-true"></i>专柜同款</span>
              </div>
              <div class="rl-list-con1" v-for="(list, index) in arr1['filter_group']" >
                <div @click="con(index+1)">{{list.title}}<i class="iconfont icon-down1"></i></div>
                <div><p v-show=`rlcon+${index+1}` v-if="key" v-for="(listli, key) in list.items">{{arr1['filter_group'][index].name}}</p></div>
              </div>
            </div>
          </mt-popup>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Router from 'vue-router'
  import { TabContainer, TabContainerItem, Header, Button } from 'mint-ui'
  Vue.use(Router)
  Vue.component(TabContainer.name, TabContainer)
  Vue.component(TabContainerItem.name, TabContainerItem)
  Vue.component(Header.name, Header)
  Vue.component(Button.name, Button)
  export default {
    name: 'SalesProductList',
    data () {
      return {
        navArr: [ '首页', '抢先', '分类', '购物车', '我的银泰' ],
        routerArr: [ '/', '/limitbuy', '/category', '/shoppingcar', '/userinfo' ],
        imgArr: [ '<i class="icon-home iconfont" ></i>', '<i class="icon-icon-buy iconfont" ></i>', '<i class="icon-categorynormal iconfont" ></i>', '<i class="icon-cart iconfont" ></i>icon-cart iconfont', '<i class="icon-user iconfont" ></i>' ],
        active: 'tab-container1',
        arr1: '',
        isload: false,
        isshowlist: false,
        a1: 3,
        a1up: 0,
        a2: 7,
        a2up: 0,
        a: 0,
        url: '',
        rightlist: false,
        rlcon1: false,
        rlcon2: false,
        rlcon3: false,
        rlcon4: false,
        colorup1: 0,
        colorup2: 0,
        colordown1: 0,
        colordown2: 0,
        tabID: 1,
        searchCondition: this.$route.query.searchCondition,
        title: this.$route.query.title || this.$route.query.title1,
        lastDay: '',
        lastHour: '',
        lastMinute: '',
        lastSecond: '',
//        bargainid: this.$route.query.bargainid,
        keywords: this.$route.query.keywords
      }
    },
    methods: {
      jumpThird: function (index) {
        let inputUrl = this.arr1['product_list'][index].itemcode
        console.log(inputUrl)
        this.$router.push({
          path: '/prd',
          query: {
            title: inputUrl
          }
        })
      },
      rightlistisShow () {
        this.rightlist = !this.rightlist
      },
      reloadRequest (a) {
        this.isload = false
        if (a === 0) {
          this.tabID = 1
          this.a = 0
          this.colorup2 = 0
          this.colordown2 = 0
          this.colorup1 = 0
          this.colordown1 = 0
        } else if (a === 5) {
          this.tabID = 2
          this.a = 5
          this.colorup2 = 0
          this.colordown2 = 0
          this.colorup1 = 0
          this.colordown1 = 0
        }
        if (a === 3) {
          this.a = a + this.a1up
          this.tabID = 3
          if (this.a1up === 0) {
            this.a1up++
          } else {
            this.a1up--
          }
          if (this.colorup1 === this.colordown1) {
            this.colorup1 = 1
          } else {
            this.colorup1 = Math.abs(this.colorup1 - 1)
            this.colordown1 = Math.abs(this.colordown1 - 1)
          }
          this.colorup2 = 0
          this.colordown2 = 0
          console.log(this.a)
        }
        if (a === 7) {
          this.a = a + this.a2up
          this.tabID = 4
          if (this.colorup2 === this.colordown2) {
            this.colorup2 = 1
          } else {
            this.colorup2 = Math.abs(this.colorup2 - 1)
            this.colordown2 = Math.abs(this.colordown2 - 1)
          }
          this.colorup1 = 0
          this.colordown1 = 0
          if (this.a2up === 0) {
            this.a2up++
          } else {
            this.a2up--
          }
          this.colorup1 = 0
          this.colordown1 = 0
          console.log(this.a)
        }
        console.log(this.tabID)
        let date1 = new Date()
        let datehour = date1.getHours()
        let dateminute = date1.getMinutes()
        if (datehour < 10) {
          datehour = `0${datehour}`
        }
        if (dateminute < 10) {
          dateminute = `0${dateminute}`
        }
        let date2 = `${date1.getFullYear()}${date1.getMonth() + 1}${date1.getDate()}${datehour}${dateminute}`
//        if (this.bargainid !== '') {
//          this.url = `api?order_type=${this.a}&page_index=1&displaycount=30&query_string=&keyword=&bargainid=${this.bargainid}&method=products.getlimitlist&ver=2.1`
//        }
        if (this.searchCondition !== '') {
          this.url = `api?r=${date2}&&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A${this.a}%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22N%3D${this.searchCondition}%22%2C%22keyword%22%3A%22%22%7D`
        } else if (this.keywords !== '') {
          this.url = `api?r=${date2}&&method=products.getlist&ver=2.1&data=%7B%22order_type%22%3A${this.a}%2C%22page_index%22%3A1%2C%22displaycount%22%3A30%2C%22query_string%22%3A%22%22%2C%22keyword%22%3A%22${this.keywords}%22%7D`
        }
        this.$request({
          type: 'get',
          url: this.url,
          headers: {},
          params: {},
          success: function (res) {
            this.arr1 = res.data.data
            console.log(this.arr1)
            this.isload = true
          },
          failed: function (err) {
            console.log(err)
          }
        })
      },
      con (k) {
        if (k === 1) {
          this.rlcon1 = !this.rlcon1
          this.rlcon2 = false
          this.rlcon3 = false
          this.rlcon4 = false
        }
        if (k === 2) {
          this.rlcon2 = !this.rlcon2
          this.rlcon1 = false
          this.rlcon3 = false
          this.rlcon4 = false
        }
        if (k === 3) {
          this.rlcon3 = !this.rlcon3
          this.rlcon1 = false
          this.rlcon2 = false
          this.rlcon4 = false
        }
        if (k === 4) {
          this.rlcon4 = !this.rlcon4
          this.rlcon1 = false
          this.rlcon3 = false
          this.rlcon2 = false
        }
      },
      returnLastPage () {
        this.$router.go(-1)
      }
    },
    mounted () {
      this.reloadRequest(0)
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  #saleProduct{
    .barhead{
      background-color: #fff;
      color: black;
      font-weight: 800;
    }
    #nav{
      width: 100%;
      align-items: center;
      display: flex;
      justify-content: space-around;
      overflow: hidden;
      border-top:0.5px solid @product-price-title-description-color;
      border-bottom:1px solid @product-price-title-description-color;
      font-size: @font-size;
      padding: 4px;
      .nav-items:focus{
        border-bottom: 2px solid @more-product-straightDown-bgcolor;
      }
      .nav-items:last-child{
        border: none;
      }
      .nav-items{
        border-right:1px solid grey ;
        line-height: 30px;
        text-align: center;
        width: 20%;
        border-radius: 0;
        margin: 0;
        padding: 0;
        float: left;
        background-color: white;
        height:30px;
        font-size: @font-size-medium;
        color: @more-product-introduce-color;
        box-shadow: none;
        div{
          display: inline-block;
          position: relative;
          .co1, .co2{
            color: @more-product-straightDown-bgcolor;
          }
          i{
            display: block;
            position: absolute;
            font-size: @font-size-small;
            color: @product-price-title-description-color;
          }
          .icon-up-copy{
            top:-24px;
          }
          .icon-down{
            top:-16px;
          }
          #colorup0, #colordown0{
            color: @color-light-gray;
          }
          #colorup1, #colordown1{
            color: @index-StraightDown-bgcolor;
          }
        }
      }
    }
    .YTloading{
      position: fixed;
      top:0;
      left:0;
      width: 100%;
      height: 100%;
      z-index: 100;
      text-align: center;
      img{
        width: 84px;
        position: fixed;
        margin: auto;
        top:0px;
        bottom: 0;
        left:0;
        right:0;
      }
    }
    .icon-back{
      color: @color-light-gray;
    }
    .page-tabbar-tab-container{
      width: 100%;
      height:100%;
      .sp-ul{
        .sp-li{
          height: 142px;
          width: 100%;
          border-bottom :1px dashed #b2b2b2;
          .sp-li-info{
            padding: 8px;
            .info-img{
              float: left;
              display: inline-block;
              img{
                width: 90px;
                margin-right: 8px;
                border: @border-color-type;
              }
            }
            .info-text{
              padding-left: 8px;
              .oldprice{
                color: @color-light-gray;
                text-decoration: line-through;
                margin:8px;
                font-size: @font-size;
              }
              .newprice{
                color: @color-sale-red;
                font-weight: 700;
              }
            }
          }
        }
      }
      .yt-sp-rightlist{
        background-color:@color-bgc-footer ;
        width:80%;
        height:100%;
        .rl-list{
          background-color: #fff;
          padding: 10px;
          .rl-list-head{
            margin: 20px 0;
            .headbox1{
              border-radius: 5px;
              padding: 8px 20px;
              margin:10px;
            }
          }
          .rl-list-con1{
            font-size: @font-size;
            color: gray;
            border-top: 0.5px solid @color-bgc-footer;
            padding:13px;
            div{
              position: relative;
              padding: 5px;
              p{
                padding: 10px;
                border-bottom: 1px solid @color-bgc-footer ;
              }
              p:last-child{
                border: none;
                padding-bottom: 0px;
              }
              i{
                position: absolute;
                right:10px;
              }
            }
          }
        }
      }
    }
    .color-pink{
      border:1px solid @product-policy-color-color;
      color:  @product-policy-color-color;
      i{
        display:inline-block;
      }
    }
    .color-gray{
      border: 1px solid @color-light-gray;
      color: @color-light-gray;
      i{
        display: none;
      }
    }
    .listTitle{
      justify-content: space-between;
      align-items: center;
      display: flex;
      padding: 10px;
      font-size: @font-size-medium;
    }

  }
</style>
