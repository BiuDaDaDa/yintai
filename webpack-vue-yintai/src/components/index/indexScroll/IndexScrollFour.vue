<template>
  <div class="Nav_title" v-if="pdArr != null">
    <!--会场展示大图-->
    <div class="title_top">
      <div class="title_nav">
        <i class="iconfont icon-jiantou-left"></i>
        <span>{{title}}</span>
        <i class="iconfont icon-more"></i>
      </div>
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in pdArr" v-if="goods.templatename === '头图'"
           :key="goods.templateid">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in pdArr" v-if="goods.templatename === '头图1'"
           :key="goods.templateid">
    </div>


    <div class="pd_content">
      <!--活动-->
      <div class="active">
        <div class="activity1" v-for="">
          <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in pdArr"
               v-if="goods.templatename === '青春活力'">
          <div class="act_goods" v-for="aaa in pdArr" v-if="aaa.templatename === '青春品牌'">
            <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
          </div>
          <div class="act_goods" v-for="aaa in pdArr" v-if="aaa.templatename === '青春品牌1'">
            <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
          </div>
        </div>
        <div class="activity1" v-for="">
          <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in pdArr"
               v-if="goods.templatename === '轻熟内敛'">
          <div class="act_goods" v-for="aaa in pdArr" v-if="aaa.templatename === '轻熟品牌'">
            <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
          </div>
          <div class="act_goods" v-for="aaa in pdArr" v-if="aaa.templatename === '轻熟品牌1'">
            <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
          </div>
        </div>
        <div class="activity1" v-for="">
          <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in pdArr"
               v-if="goods.templatename === '沉着稳重'">
          <div class="act_goods" v-for="aaa in pdArr" v-if="aaa.templatename === '沉着品牌'">
            <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
          </div>
          <div class="act_goods" v-for="aaa in pdArr" v-if="aaa.templatename === '沉着品牌1'">
            <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
          </div>
        </div>
      </div>
      <!--单品区-->
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in pdArr" v-if="goods.templatename === '单品区'"
           :key="goods.templateid">
      <div class="pd_goodsShow">
        <div class="goods_wrap">
          <div class="pd_goods" v-for="goods in pdArr" :key="goods.templateid" v-if="goods.templatename === '列表'">
            <div class="good_details" v-for="aaa in goods.items">
              <!--满减-->
              <div class="manjian" v-for="bbb in aaa.extra.productdetail.prmotionlist">{{bbb.plabel}}</div>
              <a>
                <!--商品图-->
                <div class="goods_img">
                  <img :src="aaa.imgurl" alt="" :key="aaa.itemid">
                </div>
                <!--商品名字-->
                <div class="goods_name">
                  {{aaa.extra.productdetail.name}}
                </div>
                <!--商品价格-->
                <div class="goods_price">
                  <span class="pd_price">￥<span>{{aaa.extra.productdetail.price}}.00</span></span>
                  <span class="price">￥<span>{{aaa.extra.productdetail.marketprice}}.00</span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexScrollOne',
    data () {
      return {
        title: null,
        pdArr: null
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'api?r=201711271628&os=HTML5&client_v=1.0.0&pageid=30002288&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1',
        headers: {},
        params: {},
        success: function (res) {
          this.title = res.data.data.pagetitle
          this.pdArr = res.data.data.templatelist
          console.log(this.pdArr)
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../../common/css/index.less";

  .Nav_title {
    width: 100%;
    .title_top {
      width: 100%;
      .title_nav {
        width: 100%;
        background-color: #fff;
        height: 40px;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        padding: 0 10px;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        span {
          font-weight: 500;
        }
        .icon-houtui {
          font-size: 20px;
        }
        .icon-more {
          font-size: 23px;
          color: #999999;
        }
      }
      .pinpai {
        width: 100%;
      }
    }
  }

  .pd_content {
    width: 100%;
    .pd_pearl {
      width: 100%;
      .tagimg {
        width: 100%;
      }
    }
  }

  .goods_wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 1%;
    box-sizing: border-box;
    .pd_goods {
      width: 100%;
      margin-bottom: 3px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .good_details {
        width: 49.5%;
        background-color: #fff;
        position: relative;
        .manjian {
          position: absolute;
          top: 0;
          left: 0;
          color: white;
          background-color: @index-StraightDown-bgcolor;
          padding: 5px 8px;
          font-size: @font-size-small;
        }
        a {
          width: 100%;
          img {
            width: 100%;
          }
          .goods_name {
            width: 100%;
            height: 44px;
            line-height: 22px;
            padding: 3px 0;
            overflow: hidden;
          }
          .goods_price {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: @font-size-small;
            padding: 8px;
            .pd_price {
              color: @login-button-color;
              margin-right: 8px;
              span {
                font-size: @font-size-medium;
              }
            }
            .price {
              color: @index-boom-introduce-color;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }

  .tagimg {
    width: 100%;
    display: block;
  }

  .pinpaiimg {
    width: 100%;
    display: flex;
    img {
      width: 33%;
      height: 33%;
    }
  }

  .active {
    width: 100%;
    .activity1 {
      width: 100%;
      .act_goods {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          width: 50%;
        }
      }
    }
  }
</style>
