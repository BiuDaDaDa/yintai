<template>
  <div id="ActivitiesTemplate">
    <div class="AT-header">
      <div class="AT-header-left"><i class="iconfont icon-back"></i></div>
      <div class="AT-header-middle">{{title}}</div>
      <div class="AT-header-right">. . .</div>
    </div>
    <div class="AT-top" v-for="(tl,index) in this.data.templatelist"  v-if="this.data != null">
      <div v-if="tl.templatetype=='FuncAreaFourImg'" class="FAFI-box">
        <img :src="tlimg.imgurl" v-for="(tlimg,key) in tl.items" alt="" class="FAFI">
      </div>
      <img :src="tl.items[0].imgurl" v-if="tl.templatetype=='OneImg'" alt="" class="OneImg">
      <div v-if="tl.templatetype=='ProductDoubleColumn'" v-for="(tlimg, key) in tl.items" class="PDC-box">
        <img :src="tlimg.imgurl" alt="" class="pdc">
        <div>
          <p><img src="https://r.ytrss.com/mobile/img/miao-card-small.png" alt="">{{tlimg.extra.productdetail.name}}</p>
          <p><span class="newprice">￥{{tlimg.extra.productdetail.price}}</span><span class="oldprice">￥{{tlimg.extra.productdetail.marketprice}}</span></p>
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
        data: null,
        pageid: this.$route.query.pageid,
        title: this.$route.query.title
      }
    },
    methods: {
      requestAPI (pageid) {
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
          url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=${pageid}&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`,
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
  .AT-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .vip-top {
    background-color: white;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
    border-bottom: @border-color-more;
    position: fixed;
    line-height: 40px;
  }

  .vip-top1 {
    width: 15px;
    height: 15px;
    margin-top: 13px;
  }

  .vip-top2 {
    font-size: @font-size-medium;
    font-weight: 500;
  }

  .vip-top3 {
    width: 20px;
    height: 20px;
    margin-top: 12px;
  }

  .vip-header1 {
    width: 100%;
  }

  .vip-header1 img {
    width: 100%;
    margin-top: -3px;
  }

  .vip-header2 {
    width: 100%;
    overflow: hidden;
    margin-top: -3px;
  }

  .vip-header2 img {
    width: 50%;
    float: left;
  }
  .vip-content-top{
    width: 100%;
  }
  .vip-content-top img{
    width: 100%;
  }
  .vip-content-bottom img{
    width: 50%;
  }
</style>

