<template>
  <div class="wrap" v-if="myArr!= null">
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
            <mt-swipe-item v-for="prdImg in myArr.largeimgurls" :key="myArr.itemcode ">
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
        <!--活动-->
        <div class="active">
          <span>活动</span>
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
          <span @click="mycolor" v-model="color">{{color}}</span>
        </div>
      </div>
      <!--尺码-->
      <div class="move_size">
        <div class="sizetop">
          <div class="xuanxiang">尺码：</div>
          <span class="xuanxiang">尺码说明</span>
        </div>
        <div class="myPrdChoose">
          <span @click="mysize" v-model="size">{{size}}</span>
        </div>
      </div>
      <!--数量-->
      <div class="move_count">
        <div class="xuanxiang">数量：</div>
        <div id="my_count">
          <span class="add btn" @click="sub">-</span>
          <span class="mycount">{{count}}</span>
          <span class="sub btn" @click="add">+</span>
        </div>
      </div>
    </div>
    <!--品牌-->
    <div class="brand">
      <div class="brandLeft">
        品牌：{{}}
      </div>
      <div class="brandright">
        <img src="" alt="">
        <i></i>
        >
      </div>
    </div>
    <!--图文介绍-->
    <div class="prd_introduction">
      <div class="title">图文介绍</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonPrd',
    data () {
      return {
        myArr: null,
        isShow: true,
        color: '黑/红色',
        size: '37',
        count: 0
      }
    },
    mounted () {
      this.$request(
        {
          type: 'get',
          url: 'api?data=%7B%22itemcode%22%3A%2221-478-9896%22%2C%22userid%22%3A%22D11TQyXIrOHYEnjbyvGGS%2BBydLcgfIaq7Ellu%2FRbwcReyDX1e4Juf3FNGMalejrT6a7klAdP1iIADQ8vtvpHwg%3D%3D%22%7D&userid=D11TQyXIrOHYEnjbyvGGS%2BBydLcgfIaq7Ellu%2FRbwcReyDX1e4Juf3FNGMalejrT6a7klAdP1iIADQ8vtvpHwg%3D%3D&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0&r=201711221711',
          headers: {},
          params: {},
          success: function (res) {
            this.myArr = res.data.data.products[0]
            console.log(this.myArr)
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
      },
//    选择商品颜色
      mycolor () {

      },
      mysize () {

      },
      add () {
        this.count += 1
      },
      sub () {
        if (this.count > 0) {
          this.count--
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";

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
        line-height: 20px;
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
  }

  .xuanxiang {
    color: @index-boom-introduce-color;
  }

  .brand {
    padding: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .prd_introduction {
    height: 45px;;
    background-color: #fff;
    text-align: center;
    color: @index-boom-introduce-color;
    .title {
      line-height: 40px;
    }
  }
</style>
