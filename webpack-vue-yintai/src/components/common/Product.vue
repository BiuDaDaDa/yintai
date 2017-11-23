<template>
  <div class="prd_wrap" v-if="myArr!= null">
    <div class="prd_title">
      <!--<i class="iconfont icon-houtui"></i>-->
      <!--<span>商品详情</span>-->
      <!--<i class="iconfont icon-more"></i>-->
    </div>
    <div class="box">
      <div class="index_content">
        <!-- 商品轮播图 -->
        <div class="index_scrollimg">
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
            <div class="like">
              <i class="iconfont icon-heart"></i>
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
        <!--已选绑定-->
        <div class="prd_choose">
          <div class="aaa">
          <span class="span1">已选：</span>
          <span class="color">"{{}}"</span>
          <span class="size">"{{}}"</span>
          <p class="choose_cont">
            <span class="cont">{{}}</span>
            <span>件</span>
          </p>
          </div>
        </div>

        <!---->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        myArr: null
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
    }

  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  .prd_wrap{
    background-color: #f1f1f1;
  }
  .prd_title {
    margin-bottom: 10px;
    background-color: #fff;
  }
  .index_scrollimg {
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
  .name_box{
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
      }
    }
    .prd_price{
      height: 42px;
      padding: 8px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      color: @color-light-gray;
      font-size: @font-size;
      .p1{
        color: @login-button-color;
        margin-right: 11px;
        span{
          font-size: @font-size-large;
        }
      }
      .p3{
        position: absolute;
        right: 0;
      }
    }
  }
  .prd_choose{
    background-color: #fff;
    width: 100%;
    padding: 0 10px;
    height: 40px;
    box-sizing: border-box;
    .aaa{
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px dashed @category-leftlist-unchose-color;
      span{
        margin-right: 5px;
      }
      .span1{
        color: @index-boom-introduce-color;
      }
    }
  }
</style>
