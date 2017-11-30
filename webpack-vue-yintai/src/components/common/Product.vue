<template>
  <div class="wrap" v-if="myArr != null && newArr != null">
    <div class="prd_title">
      <!--<i class="iconfont icon-houtui"></i>-->
      <!--<span>商品详情</span>-->
      <!--<i class="iconfont icon-more"></i>-->
    </div>
    <div class="box">
      <div class="content">
        <!-- 商品轮播图 -->
        <div class="scrollimg">
          <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(prdImg,index) in newArr[chooseIndex].middleimgurls" :key="index">
              <div class="imgBox">
                <img :src="prdImg" alt="">
              </div>
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <!--商品名称-->
        <div class="name_box">
          <div class="prd_name">
            <div class="title">{{myArr.name}}</div>
            <div class="like" @click="Prdlike">
              <i class="iconfont icon-heart" v-show="isShow"></i>
              <i class="iconfont icon-heart1" v-show="!isShow"></i>
            </div>
          </div>
          <div class="prd_price">
            <p class="p1">
              ￥<span>{{myArr.ytprice }}</span>
            </p>
            <p class="p2">
              <s>￥{{myArr.marketprice }}</s>
            </p>
            <p class="p3">
              商品编号<span>{{myArr.itemcode }}</span>
            </p>
          </div>
        </div>
        <!-- 活动-->
        <div class="myactive">
          <div class="actlist" v-for="act in myArr.promotions" v-if="act.promotions!==[]">
            <span class="span1">{{act.name}}</span>
            <span>{{act.desc[0]}}</span>
          </div>
        </div>
        <!--已选绑定-->
        <div class="prd_choose">
          <div class="aaa">
            <span class="span1">已选：</span>
            <span class="color">"{{color}}"</span>
            <span class="size">"{{size}}"</span>
            <p class="choose_cont">
              <span class="cont">{{count}}</span>
              <span>件</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--选项-->
    <div class="prd_move">
      <!--颜色分类-->
      <div class="move_color">
        <div class="xuanxiang">颜色分类：</div>
        <div class="myPrdChoose">
          <span :class="{active:index == num}" v-for="(value,index) in newArr"
                @click="chooseColor(index,value)" :key="index">{{value.value}}</span>
        </div>
      </div>
      <!--尺码-->
      <div class="move_size">
        <div class="sizetop">
          <div class="xuanxiang">尺码：</div>
          <span class="xuanxiang">尺码说明</span>
        </div>
        <div class="myPrdChooseSize">
          <span :class="{activeSize:index == num1}" v-for="(value,index) in newArr[chooseIndex].size"
                @click="chooseSize(value,index)" :key="index">{{value.newValue}}</span>
        </div>
      </div>
      <!--数量-->
      <div class="move_count">
        <div class="xuanxiang">数量：</div>
        <div id="my_count">
          <span class="add btn" @click="sub">-</span>
          <span id="mycount">{{count}}</span>
          <span class="sub btn" @click="add">+</span>
        </div>
      </div>
    </div>
    <!--品牌-->
    <div class="brand">
      <div class="brandLeft">
        品牌：{{myArrAll.brandname}}
      </div>
      <div class="brandright">
        <img :src="myArrAll.brandurl" alt="">
        <span>></span>
      </div>
    </div>
    <!--图文介绍-->
    <div class="prd_introduction">
      <div class="title">图文介绍</div>
      <div class="xiangqing">
      </div>
    </div>
    <div class="prd_module">
      <div class="go_car">
        <a href="">
          <i class="iconfont icon-shoppingcart"></i>
          <p>购物车</p>
        </a>
      </div>
      <div class="prd_other">
        <div class="add_car">加入购物车</div>
        <div class="now_buy">立即购买</div>
      </div>
    </div>
    <!--收藏成功蒙版-->
    <div class="successLike" v-show="likeShow">
      <div class="likecontent">
        <div class="div1"><span>温馨提示</span></div>
        <div class="div2">
          <span v-show="likeor">收藏成功!</span>
          <span v-show="!likeor">取消收藏成功!</span>
        </div>
        <div class="div3" @click="sure"><span>确定</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonPrd',
    data: function () {
      return {
        myArr: null,
        myArrAll: null,
        isShow: true,
        color: null,
        size: null,
        count: 0,
        brands: null,
        newArr: null,
        chooseIndex: 0,
        num: null,
        num1: null,
        likeShow: false,
        likeor: true,
        changeUrl: this.$route.query.title

      }
    },
    mounted: function () {
      this.$request(
        {
          type: 'get',
          url: `api?data=%7B%22itemcode%22%3A%22${this.changeUrl}%22%2C%22userid%22%3A%22%22%7D&userid=&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0`,
          headers: {},
          params: {},
          success: function (res) {
            this.myArr = res.data.data.products[0]
            this.brands = res.data.data.products
            this.myArrAll = res.data.data
            // 存放新的数组
            let allGoods = {}
            let array = []
            for (let i = 0; i < this.brands.length; i++) {
              let mybrand = this.brands[i]
              let mode = mybrand.imageitemcode
              let value = mybrand['skuproperty'][0]['value']
              let newValue = mybrand['skuproperty'][1]['value']
              let middleimgurls = mybrand.middleimgurls
              if (typeof allGoods[mode] === 'undefined') {
                let newBrand = {
                  value,
                  middleimgurls,
                  size: [{newValue}]
                }
                allGoods[mode] = [mybrand]
//              console.log(allGoods[mode])
                array.push(newBrand)
              } else {
//              allGoods[mode].push(brand)
                array[array.length - 1].size.push({newValue})
              }
            }
//          console.log(allGoods)
//          console.log(array)
            this.newArr = array
            console.log(this.newArr)
          },
          failed: function (err) {
            console.log(err)
          }
        }
      )
    },
    methods: {
      Prdlike: function () {
        this.isShow = !this.isShow
        this.likeShow = true
        if (this.isShow) {
          this.likeor = false
        } else {
          this.likeor = true
        }
      },
      sure: function () {
        this.likeShow = false
      },
//    选择商品颜色
      chooseColor: function (index, value) {
        this.chooseIndex = index
        this.color = value.value
        this.num = index
      },
      chooseSize: function (value, index) {
        this.size = value.newValue
        this.num1 = index
      },
      add: function () {
        this.count += 1
      },
      sub: function () {
        if (this.count > 0) {
          this.count--
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";

  .myactive{
    background-color: #fff;
    margin-bottom: 8px;
    .actlist {
      color: #999999;
      padding: 10px;
      .span1{
        color: white;
        background-color: #FF3C7E;
        padding: 0 8px;
        border-radius: 3px;
        margin-right: 5px;
      }
    }
  }
  .wrap {
    background-color: #f1f1f1;
  }
  .prd_title {
    margin-bottom: 10px;
    background-color: #fff;
  }
  .scrollimg {
    background-color: #fff;
    width: 100%;
    height: 320px;
    .imgBox {
      width: 240px;
      margin: 0 auto;
    }
    img {
      width: 240px;
    }
  }
  .name_box {
    background-color: #fff;
    padding: 10px 10px 0;
    margin-bottom: 10px;
    .prd_name {
      width: 100%;
      height: 45px;
      display: flex;
      justify-content: space-around;
      .title {
        height: 100%;
        line-height: 25px;
        padding: 3px 10px 3px 0;
        border-right: 1px solid #d5d5d5;
        font-size: 16px;
        color: #333;
        overflow: hidden;
      }
      .like {
        color: #b2b2b2;
        padding: 10px;
        i {
          font-size: 30px;
          font-weight: bolder;
        }
        .icon-heart1 {
          font-size: 30px;
          color: #ffaad4;
        }
      }
    }
    .prd_price {
      height: 42px;
      padding: 8px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      color: @color-light-gray;
      font-size: @font-size;
      .p1 {
        color: @login-button-color;
        margin-right: 11px;
        span {
          font-size: @font-size-large;
        }
      }
      .p3 {
        position: absolute;
        right: 0;
      }
    }
  }
  .prd_choose {
    background-color: #fff;
    width: 100%;
    padding: 0 10px;
    height: 40px;
    box-sizing: border-box;
    .aaa {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px dashed #dbdbdb;
      span {
        margin-right: 5px;
      }
      .span1 {
        color: @index-boom-introduce-color;
      }
    }
  }
  .prd_move {
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    .move_color {
      width: 100%;
      .xuanxiang {
        padding: 10px 0;
      }
    }
  }
  .move_size {
    width: 100%;
    .sizetop {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
    }
  }
  .move_count {
    padding: 10px 10px 0 10px;
    align-items: center;
    #my_count {
      width: 100%;
      padding-top: 10px;
      .btn {
        display: inline-block;
        border: 1px solid #666;
        border-radius: 3px;
        margin: 0 5px 5px 0;
        min-width: 30px;
        height: 30px;
        background-color: #fff;
        color: #666;
        font-size: 25px;
        font-weight: 500;
        -moz-box-align: center;
        text-align: center;
        box-sizing: border-box;
      }
      #mycount {
        width: 30px;
        height: 30px;
      }
    }
  }
  .myPrdChoose {
    color: #ff6d9d;
    border-bottom: 1px dashed #dbdbdb;
    padding: 0 0 6px 15px;
    span {
      display: inline-block;
      padding: 7px 7px;
      border: 1px solid #666;
      border-radius: 3px;
      margin: 0 5px 5px 0;
      min-width: 30px;
      background-color: #fff;
      color: #666;
      font-size: 14px;
      text-align: center;
    }
    .active {
      display: inline-block;
      padding: 7px 7px;
      border: 1px solid #e5004f;
      color: #ff6d9d;
      border-radius: 3px;
      margin: 0 5px 5px 0;
      min-width: 30px;
      background-color: #fff;
      font-size: 14px;
      text-align: center;
    }
  }
  .myPrdChooseSize {
    color: #ff6d9d;
    border-bottom: 1px dashed #dbdbdb;
    padding: 0 0 6px 15px;
    span {
      display: inline-block;
      padding: 7px 7px;
      border: 1px solid #666;
      border-radius: 3px;
      margin: 0 5px 5px 0;
      min-width: 30px;
      background-color: #fff;
      color: #666;
      font-size: 14px;
      text-align: center;
    }
    .activeSize {
      display: inline-block;
      padding: 7px 7px;
      border: 1px solid #e5004f;
      color: #ff6d9d;
      border-radius: 3px;
      margin: 0 5px 5px 0;
      min-width: 30px;
      background-color: #fff;
      font-size: 14px;
      text-align: center;
    }
  }
  .xuanxiang {
    color: @index-boom-introduce-color;
  }
  .brand {
    padding: 0 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    color: #666;
    height: 45px;
    box-sizing: border-box;
  }
  .brandright {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 100%;
    }
  }
  .prd_introduction {
    background-color: #fff;
    text-align: center;
    color: @index-boom-introduce-color;
    .title {
      line-height: 40px;
    }
    .xiangqing {
      width: 100%;
      .product-tuwen {
        width: 100%;
      }
    }
  }
  .prd_module {
    width: 100%;
    position: fixed;
    display: flex;
    bottom: 0;
    height: 45px;
    background-color: #fff;
    z-index: 999;
    .go_car {
      border-top: 1px solid #d2d2d2;
      padding: 3px 5px;
      text-align: center;
      width: 15%;
      box-sizing: border-box;
      .icon-shoppingcart {
        color: #e5004f;
        font-size: 24px;
      }
      p {
        margin-top: 3px;
        font-size: 12px;
      }
    }
    .prd_other {
      width: 85%;
      display: flex;
      align-items: center;
      text-align: center;
      line-height: 40px;
      .add_car {
        width: 50%;
        height: 100%;
        background-color: #e5004f;
        color: #fff;
      }
      .now_buy {
        width: 50%;
        height: 100%;
        background-color: #FF7039;
        color: #fff;
      }
    }
  }
  .successLike {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }
  .likecontent {
    width: 80%;
    max-width: 360px;
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    .div1 {
      text-align: center;
      padding: 15px 15px 0;
      font-size: 20px;
      color: rgb(51, 51, 51);
    }
    .div2 {
      text-align: center;
      padding: 30px 15px;
      font-size: 15px;
      color: rgb(102, 102, 102);
      word-wrap: break-word;
      word-break: break-all;
    }
    .div3 {
      overflow: hidden;
      border-top: 1px solid rgb(230, 230, 230);
      font-size: 17px;
      text-align: center;
      line-height: 38px;
      float: left;
      box-sizing: border-box;
      background-color: transparent;
      padding: 0 15px;
      color: rgb(255, 59, 127);
      width: 100%;
      border-bottom-left-radius: 6px;
    }
  }
</style>
