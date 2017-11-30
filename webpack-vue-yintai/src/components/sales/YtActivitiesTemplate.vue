<template>
  <div id="ActivitiesTemplate">
    <div class="AT-header">
      <div class="AT-header-left"><i class="iconfont icon-back" @click="returnLastPage"></i></div>
      <div class="AT-header-middle" v-if="data!=''">{{data.pagetitle}}</div>
      <div class="AT-header-right">. . .</div>
    </div>
    <!--加载时出现的GIF-->
    <div class="unload" v-if="this.data==null"><img src="../../assets/h5-loading.gif" alt=""></div>
    <!--加载后出现的数据-->
    <div class="AT-top" v-for="(tl,index) in data.templatelist"  v-if="data != null">
      <!--图片宽度占屏幕的25%-->
      <div v-if="tl.templatetype=='FuncAreaFourImg'" class="FAFI-box" v-for="(tlimg,key) in tl.items" >
        <img :src="tlimg.imgurl"  alt="" class="FAFI" @click="toSales(index,key)">
        <p>{{tlimg.imgname}}</p>
      </div>
      <!--图片宽度占屏幕的100%-->
      <img :src="tl.items[0].imgurl" v-if="tl.templatetype=='OneImg'" alt="" class="OneImg" @click="toSales(index,0)">
      <!--图片宽度占屏幕的50%  点击跳转对应的三级页面 商品详情-->
      <div class="pdc-index">
        <div v-if="tl.templatetype=='ProductDoubleColumn'" v-for="(tlimg, key) in tl.items" class="PDC-box" @click="toPro(index,key)">
          <div class="pdc-img">
            <img :src="tlimg.imgurl" alt="" class="pdc">
          </div>

          <div class="pdc-info">
            <!--商品的简介和单价，-->
            <div class="pdc-info-text"><img src="https://r.ytrss.com/mobile/img/miao-card-small.png" alt="">{{tlimg.extra.productdetail.name}}</div>
            <div class="pdc-info-price"><span class="newprice">￥{{tlimg.extra.productdetail.price}}.00</span><span class="oldprice">￥{{tlimg.extra.productdetail.marketprice}}.00</span></div>
          </div>
        </div>
      </div>
      <div class="dpc-index2">
        <div v-if="tl.templatetype=='TwoImgAverage'" v-for="(tlimg,key) in tl.items" class="FAFI-box2">
          <img :src="tlimg.imgurl" alt="" class="FAFI" @click="toPro(index,key)">
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ActivitiesTemplate',
    data () {
      return {
        data: {},
        pageid: this.$route.query.pageid,
        title: this.$route.query.title,
        newtitle: '',
        newsearchCondition: ''
      }
    },
    methods: {
      returnLastPage () {
        this.$router.go(-1)
      },
      toPro (i, j) {
        this.newtitle = this.data.templatelist[i].items[j].itemid
        this.$router.push({
          path: '/prd',
          query: {
            title: this.newtitle
          }
        })
      },
      toSales (i, j) {
        this.newtitle = decodeURI(this.data.templatelist[i].items[j].jumpurl.split('title=')[1].split('&')[0])
        this.newsearchCondition = this.data.templatelist[i].items[j].jumpurl.split('Condition=')[1].split('&')[0]
        this.$router.push({
          path: '/SalesProductList',
          query: {
            searchCondition: this.newsearchCondition,
            title: this.newtitle
          }
        })
      },
      requestAPI () {
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
        this.$request({
          type: 'get',
          url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=${this.pageid}&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`,
          header: {},
          params: {},
          success: function (res) {
            this.data = res.data.data
            console.log(this.data)
          },
          failed: function (err) {
            console.log(err)
          }
        })
      }
    },
    mounted () {
      this.requestAPI()
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  #ActivitiesTemplate{
    width: 100%;
    max-width: 640px;
    margin: auto;
    margin-top: 40px;
    .AT-header{
      position: fixed;
      top:0;
      width:100%;
      max-width:640px;
      height:40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: @border-color-type;
      background-color: #fff;
      font-weight: 800;
      font-size: @font-size-medium;
    }
    .AT-top{
      width: 100%;
      .FAFI-box{
        width:25%;
        float: left;
        text-align: center;
        background-color: #fff;
        .FAFI{
          width: 100%;
        }
        p{
         padding-bottom:10px;
        }
      }
      .FAFI-box2{
        width:50%;
        float: left;
        text-align: center;
        background-color: #fff;
        .FAFI{
          width: 100%;
        }
        p{
          padding-bottom:10px;
        }
      }
    }

    .unload{
      position: fixed;
      width: 100%;
      height:100%;
      background-color:rgba(255,255,255,0.6);
      img{
        position: fixed;
        margin: auto;
        top:0;
        left:0;
        right:0;
        bottom:0;
      }
    }
    .OneImg{
      float: left;
      width:100%;
    }
    .pdc-index{
      background-color: @color-bgc-footer;
      .PDC-box{
        width: 50%;
        box-sizing: border-box;
        margin-bottom: 12px;
        padding:4px;
        display: inline-block;
        .pdc-img{
          width: 100%;
          img{
            width:100%
          }
        }
        .pdc{  width: 100%;  }
        .pdc-info{
          position: relative;
          top:-4px;
          background-color: #fff;
          padding: 0px;
          /*align-items: center;*/
          font-size: @font-size;
          .pdc-info-text{
            width:100%;
            height:50px;
            line-height:25px;
            overflow: hidden;
          }
          img{
            width:16px;
            margin-right: 5px;
          }
          .pdc-info-price{
            padding:2px 0;
            .newprice{
              color: @color-sale-red;
              font-size: @font-size-medium-x;
              margin-right: 10px;
            }
            .oldprice{
              color:@product-price-title-price-color;
              text-decoration: line-through;
            }
          }
        }
      }
    }

  }
</style>

