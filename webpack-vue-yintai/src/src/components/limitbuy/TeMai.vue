<template>
  <div class="temai-wrap" v-if="thisdata != null">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="100">
      <li v-for="pro in thisdata1">
        <div class="temai">
          <div class="temai-top">
            <div class="temai-top-left">
              <img :src="pro.image" alt="">
            </div>
            <div class="temai-top-right">
              <p class="temai-top-right1">{{pro['name']}}</p>
              <div class="temai-top-right2" v-for="promo in pro['promotionlist']">{{promo['plabel']}}</div>
              <div class="temai-top-right3">￥{{pro['price']}}.00</div>
              <div class="temai-top-right4">￥{{pro['yt_price']}}.00</div>
              <div class="temai-top-right5"></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        thisdata: null,
        thisdata1: '',
        loading: false,
        last: 1
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
      this.timestamp = Date.parse(new Date())
      this.$request({
        type: 'get',
        url: `api?r=${date2}&type=3&pageindex=${this.last}&pagesize=30&methodName=products.getrecommendedproductlist_1.2.0&method=products.getrecommendedproductlist&ver=2.1`,
        header: {},
        params: {},
        success: function (res) {
          this.thisdata = res.data
          this.thisdata1 = this.thisdata.data.productlist
        },
        failed: function (err) {
          console.log(err)
        }
      })
    },
    methods: {
      // 自动加载
      loadMore () {
        this.loading = true
        this.last += 1
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
          url: `api?r=${date2}&type=3&pageindex=${this.last}&pagesize=30&methodName=products.getrecommendedproductlist_1.2.0&method=products.getrecommendedproductlist&ver=2.1`,
          header: {},
          params: {},
          success: function (res) {
            this.thisdata = res.data
            this.thisdata0 = this.thisdata.data.productlist
            this.thisdata1 = this.thisdata1.concat(this.thisdata0)
          },
          failed: function (err) {
            console.log(err)
          }
        })
        this.loading = false
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";

  .temai {
    width: 100%;
  }

  .temai-top {
    padding: 10px;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    .temai-top-left {
      float: left;
      width: 24%;
      border: 1px solid rgb(193, 193, 193);
      img {
        width: 100%;
      }
    }
    .temai-top-right {
      margin-left: 7px;
      padding: 3px;
      float: left;
      width: 71%;
      .temai-top-right1 {
        color: @more-product-introduce-color;
        font-size:15.5px;
        height: 44px;
        line-height: 22px;
      }
      .temai-top-right2{
        background-color:@more-product-straightDown-bgcolor;
        color: white;
        padding: 6px;
        text-align: center;
        font-size:@font-size-small;
        border-radius: 5px;
        width: 32px;
        margin-top: 5px;
        display: inline-block;
        margin-right: 8px;
      }
      .temai-top-right3{
        color: @index-boom-introduce-color;
        font-size:@font-size;
        text-decoration: line-through;
        margin-top:7px;
      }
      .temai-top-right4{
        color:@login-button-color;
        font-size:@font-size-medium;
        margin-top: 7px;
        font-weight: 500;
      }
    }
  }
</style>
