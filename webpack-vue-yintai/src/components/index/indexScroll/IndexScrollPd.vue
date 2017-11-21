<template>
  <div class="Nav_pd">
    <!--会场展示大图-->
    <div class="pd_top">
      <div class="pd_nav">
        <i class="iconfont icon-houtui"></i>
        <span>{{title}}</span>
        <i class="iconfont icon-more"></i>
      </div>
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in pdArr" v-if="goods.templatename === '头图'">
    </div>
    <div class="pd_content">
      <!--珍珠-->
      <div class="pd_goodsShow">
        <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in pdArr" v-if="goods.templatename === '珍珠'">
        <div class="goods_wrap">
          <div class="pd_goods" v-for="goods in pdArr" :key="goods.templateid" v-if="goods.templatename === '楼层-珍珠'">
            <div class="good_details" v-for="aaa in goods.items">
              <a>
                <div class="goods_img">
                  <img :src="aaa.imgurl" alt="" :key="aaa.itemid">
                </div>
                <div class="goods_name">
                  {{aaa.extra.productdetail.name}}
                </div>
                <div class="goods_price">
                  <span class="pd_price">￥<span>{{aaa.extra.productdetail.price}}.00</span></span>
                  <span class="price">￥<span>{{aaa.extra.productdetail.marketprice}}.00</span></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--几何-->
      <div class="pd_goodsShow">
        <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in pdArr" v-if="goods.templatename === '几何'">
        <div class="goods_wrap">
          <div class="pd_goods" v-for="goods in pdArr" :key="goods.templateid" v-if="goods.templatename === '楼层-几何'">
            <div class="good_details" v-for="aaa in goods.items">
              <a>
                <div class="goods_img">
                  <img :src="aaa.imgurl" alt="" :key="aaa.itemid">
                </div>
                <div class="goods_name">
                  {{aaa.extra.productdetail.name}}
                </div>
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
    name: 'IndexScrollPd',
    data () {
      return {
        title: null,
        pdArr: null
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'api?r=201711201122&os=HTML5&client_v=1.0.0&pageid=30002286&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1',
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
  .Nav_pd{
    width: 100%;
    .dct_top{
      width: 100%;
      .dct_nav{
        width: 100%;
        background-color: #fff;
        height: 40px;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        box-sizing: border-box;
        span{
          font-weight: 500;
        }
        .icon-houtui{
          font-size: 20px;
        }
        .icon-more{
          font-size: 23px;
          color: #999999;
        }
      }
      img{
        width: 100%;
      }
    }
  }
  .pd_content{
    width: 100%;
    .pd_pearl{
      width: 100%;
      .tagimg{
        width: 100%;
      }
    }
  }
  .goods_wrap{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 1%;
    box-sizing: border-box;
    .pd_goods{
      width: 100%;
      margin-bottom: 3px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .good_details{
        width:49.5%;
        background-color: #fff;
        a{
          width: 100%;
          img{
            width: 100%;
          }
          .goods_name{
            width: 100%;
            height: 44px;
            line-height: 22px;
            padding: 3px 0;
            overflow: hidden;
          }
          .goods_price{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: @font-size-small;
            padding: 8px;
            .pd_price{
              color: @login-button-color;
              margin-right: 8px;
              span{
                font-size: @font-size-medium;
              }
            }
            .price{
              color: @index-boom-introduce-color;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
  .tagimg{
    width: 100%;
  }

</style>
