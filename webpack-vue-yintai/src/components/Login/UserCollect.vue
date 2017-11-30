<template>
  <div class="wrap" v-if="myArr != null">
    <div class="collect_top">
      <!--<i class="iconfont icon-jiantou-left"></i>-->
      <span>oo</span>
      <span>我的收藏</span>
      <span @click="del">编辑</span>
    </div>
    <div class="collect_content">
      <div class="con_table">
        <div class="goods">商品</div>
        <div class="prand">品牌</div>
      </div>
    </div>
    <div class="collect">
      <!--收藏商品列表-->
      <div class="goodslist">
        <div class="mygoods" v-for="(a,index) in myArr">
          <div class="mybutton" v-show="isShow">
            <div class="checkbox"  @click="clear(index)" ref="checked"></div>
          </div>
          <div class="goodsbox">
            <div class="mygoodsLeft">
              <img :src="a.imgUrl" alt="">
            </div>
            <div class="mygoodsRight">
              <div class="name">{{a.name}}</div>
              <div class="price">￥{{a.price}}</div>
            </div>
          </div>
        </div>
      </div>
      <!--收藏品牌列表-->
      <div class="pranglist"></div>
    </div>

    <!--<div class="footer">-->
      <!--<div class="leftFooter">-->
        <!--<div></div>-->
        <!--<span>全选</span>-->
      <!--</div>-->
      <!--<div class="rightFooter">-->
        <!--<button>取消收藏</button>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
//  import axios from 'axios'

  export default {
    name: 'UserCollect',
    data: function () {
      return {
        myArr: null,
        isShow: false
      }
    },
    mounted: function () {
//      axios.post('verification/token').then(function (res) {
//        console.log(res)
//      })
      this.$request({
        type: 'get',
        url: 'api?userId=D11TQyXIrOHYEnjbyvGGS%2BBydLcgfIaq7Ellu%2FRbwcTTuxcMSrPT9YB5yjlW%2BBj4MdtV79xsVIVGMQTRRPK%2BDQ%3D%3D&method=customer.getfavlist&pagesize=15&pageindex=1&ver=1.0&r=1511524490695',
        header: {},
        params: {},
        success: function (res) {
          this.myArr = res.data.data.productlist.product
        },
        failed: function (err) {
          console.log(err)
        }
      })
      this.$request({
        type: 'get',
        url: 'api?userId=D11TQyXIrOHYEnjbyvGGS%2BBydLcgfIaq7Ellu%2FRbwcTTuxcMSrPT9YB5yjlW%2BBj4MdtV79xsVIVGMQTRRPK%2BDQ%3D%3D&method=customer.getfavlist&pagesize=15&pageindex=1&ver=1.0&r=1511524490695',
        header: {},
        params: {},
        success: function (res) {
          this.myArr = res.data.data.productlist.product
        },
        failed: function (err) {
          console.log(err)
        }
      })
//      this.$request({
//        type: 'post',
//        url: '/verification/token',
//        header: {},
//        params: {},
//        data: {
//          grant_type: 'client_credentials',
//          client_id: '560b5da9-a046-4f4c-ba1d-2be2cae250ba',
//          client_secret: 'yhLVp7Nbfp3D'
//        },
//        success: function (res) {
//          console.log(res.data)
//        },
//        failed: function (err) {
//          console.log(err)
//        }
//      })
    },
    methods: {
      del: function () {
        this.isShow = !this.isShow
      },
      clear: function (index) {
        this.$refs.checked.index.style.backgroundColor = 'black'
      }
    }
  }
</script>

<style scoped lang="less">
  html {
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
  }

  .collect_top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid #d2d2d2;
  }

  .collect_content {
    width: 100%;
    .con_table {
      overflow: hidden;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      .goods {
        width: 50%;
        line-height: 40px;
        border-right: 1px solid #d5d5d5;
        border-bottom: 1px solid #d5d5d5;
      }
      .prand {
        width: 50%;
        line-height: 40px;
        border-bottom: 1px solid #d5d5d5;
      }
    }
  }

  .collect {
    width: 100%;
    .goodslist {
      width: 100%;
      padding: 5px 10px;
      background-color: #fff;
      color: #666;
      box-sizing: border-box;
      div:nth-last-child(1) {
        border: none;
      }
      .mygoods {
        padding: 10px 0;;
        width: 100%;
        flex-wrap: nowrap;
        align-items: center;
        border-bottom: 1px solid #d2d2d2;
        display: flex;
        .mybutton {
          margin-right: 10px;
          .checkbox {
            background-color: pink;
            display: inline-block;
            padding: 3px;
            width: 18px;
            height: 18px;
            border: 1px solid #d2d2d2;
            border-radius: 100%;
            background-clip: content-box;
            box-sizing: border-box;
          }
        }
        .goodsbox{
          display: flex;
          width: 100%;
          .mygoodsLeft {
            margin-right: 8px;
            width: 60px;
            height: 80px;
            background-color: #eee;
            border: 1px solid #d2d2d2;
            img {
              width: 100%;
              height: 100%;
              vertical-align: top;
            }
          }
          .mygoodsRight {
            width: 80%;
            color: #333;
            overflow: hidden;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
        }

      }
    }
  }

  .price {
    color: #ff3b7f;
  }


</style>
