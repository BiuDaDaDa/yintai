<template>
  <div class="shangchang-tk-wrap" v-if="thisdata != null">
    <div class="shangchang-tk">
      <div class="shangchang-tk-top">
        <img src="../../common/img/shangchangtk/arrow-left.png" alt="" class="shangchang-tk-top1">
        <div class="shangchang-tk-top2">{{thisdata.data.pagetitle}}</div>
        <img src="../../common/img/shangchangtk/shenglue.png" alt="" class="shangchang-tk-top3">
      </div>

      <div class="shangchang-tk-header">
        <div class="shangchang-tk-header-A" v-for="val in thisdata2">
          <img :src="val['imgurl']" alt="">
          <div>{{val['imgname']}}</div>
        </div>
      </div>

      <div class="shangchang-tk-content">
        <div class="shangchang-tk-content-header" v-for="(img,index) in thisdata1" v-if="index >0 && index<=10">
          <img :src="item['imgurl']" alt="" v-for="item in img['items']">
        </div>
      </div>

      <div class="shangchang-tk-footer">
        <div class="shangchang-tk-footer-left-top" v-for="(img1,index) in thisdata1" v-if="index>10">
          <div class="shangchang-tk-footer-left" v-for="item in img1['items']">
            <img :src="item['imgurl']" alt="">
            <div class="shangchang-tk-footer-left-div">
              <img src="../../assets/img/shangchangtk/cat.png" alt="" class="shangchang-tk-footer-left-div-img">
              <div>{{item['extra']['productdetail']['name']}}</div>
            </div>
            <p class="shangchang-tk-footer-left-p">
              <span class="sc-tk-left-p1">￥</span>
              <span class="sc-tk-left-p2">{{item['extra']['productdetail']['price']}}.00</span>
              <span class="sc-tk-left-p3">￥</span>
              <span class="sc-tk-left-p4">{{item['extra']['productdetail']['marketprice']}}.00</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        thisdata: null,
        thisdata1: '',
        thisdata2: ''
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'api?r=201711171747&os=HTML5&client_v=1.0.0&pageid=30000365&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1',
        header: {},
        params: {},
        success: function (res) {
          this.thisdata = res.data
          this.thisdata1 = res.data.data.templatelist
          this.thisdata2 = this.thisdata1[0]['items']
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";

  .shangchang-tk-wrap {
    background-color: rgb(237, 237, 237);
  }

  .shangchang-tk-top {
    background-color: white;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    padding: 10px 15px 8px 15px;
    box-sizing: border-box;
    border-bottom: @border-color-more;
    position: fixed;
    margin-top: 70px;
  }

  .shangchang-tk-top1 {
    width: 15px;
    height: 15px;
  }

  .shangchang-tk-top2 {
    font-size: @font-size-medium;
    font-weight: 500;
  }

  .shangchang-tk-top3 {
    width: 20px;
    height: 20px;
  }

  .shangchang-tk-header {
    width: 100%;
    margin-top: 106px;
    background-color: white;
    display: inline-flex;
    justify-content: space-around;
    padding-bottom: 10px;
  }

  .shangchang-tk-header-A {
    text-align: center;
    width: 25%;
  }

  .shangchang-tk-header-A img {
    width: 100%;
    margin-bottom: 10px;
  }

  .shangchang-tk-header-A div {
    font-size: @font-size;
    color: @index-boom-introduce-color;
  }

  .shangchang-tk-content-header {
    width: 100%;
  }

  .shangchang-tk-content-header img {
    width: 100%;
  }

  .shangchang-tk-footer {
    width: 100%;
  }

  .shangchang-tk-footer-left-top {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    overflow: hidden;
    height: 100%;
  }

  .shangchang-tk-footer-left {
    width: 49.5%;
    float: left;
    background-color: #fff;
    margin-bottom: 5px;
  }

  .shangchang-tk-footer-left > img {
    width: 100%;
  }

  .shangchang-tk-footer-left-div {
    width: 100%;
    padding: 10px;
    overflow: hidden;
    height: 50px;
    line-height: 22px;
    box-sizing: border-box;
    position: relative;
    text-indent:2em;
    color: @more-product-introduce-color;
    font-size:@font-size;
  }

  .shangchang-tk-footer-left-div img {
    width: 11%;
    position: absolute;
    left: 11px;
    top: 13px;
  }
  .shangchang-tk-footer-left-p{
    width: 100%;
    padding:8px;
    margin-top: 3px;
  }
  .sc-tk-left-p1{
    font-size:@font-size-small;
    color:@color-sale-red;
  }
  .sc-tk-left-p2{
    font-size:@font-size-medium;
    color:@color-sale-red;
    font-weight: bolder;
    margin-left: -5px;
  }
  .sc-tk-left-p3{
    font-size:@font-size-small;
    color:@index-boom-introduce-color;
  }
  .sc-tk-left-p4{
    font-size:@font-size-small;
    color:@index-boom-introduce-color;
    margin-left: -5px;
    text-decoration: line-through;
    padding-bottom: 3px;
  }
</style>
