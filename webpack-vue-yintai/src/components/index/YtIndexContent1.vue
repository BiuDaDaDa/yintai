<template>
  <div class="index-content" v-if="isloading">
    <div :class="'contentlist'+index" v-for="(arrs, index) in arr['templatelist']" v-if="index<9&&arrs.items&&(arrs.bottommargin!=10)">
      <!-- title图-->
      <img v-if="arrs.templatetype=='FloorHead'" v-for="(arritems, key) in arrs.items" class="listone" :src="arritems.imgurl" alt="">

      <div id="outer" v-if="arrs.templatetype=='ProductSingleRow'" >
        <div v-for="(arritems, key) in arrs.items" class="listimg" >
          <img :src="arritems.imgurl" alt="">
          <div class="ct-text">{{arritems.extra.productdetail.name}}
            <div class="ct-tag" v-for="tag in arritems.extra.productdetail.prmotionlist" >{{tag.plabel}}</div>
          </div>
          <div class="ct-price">￥{{arritems.extra.productdetail.price}}</div>
        </div>
      </div>

      <div v-if="arrs.templatetype=='TwoImgAverage'" class="listimg22"  >
        <img v-for="(arritems, key) in arrs.items" :src="arritems.imgurl" alt="" :class="'lefttwo'+key">
      </div>
      <!--轮播图-->
      <div v-if="arrs.templatetype=='CarouselFigure'" class="listimgrow">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(arritems, key) in arrs.items" :class="'cf'+key">
            <img :src="arritems.imgurl" alt="" >
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
  </div>
</template>

<script>
  import { InfiniteScroll, Swipe, SwipeItem } from 'mint-ui'
  import Vue from 'vue'
  Vue.use(InfiniteScroll)

  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  export default {
    name: 'YtIndexContentOne',
    data () {
      return {
        arr: [],
        isloading: false
      }
    },
    mounted () {
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
        url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`,
        headers: {},
        params: {},
        success: function (res) {
          this.arr = res.data.data
          console.log(res.data.data)
          this.isloading = true
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index.less";
  .index-content {
    background-color: @index-bgcolor;
    width: 100%;
    margin: auto;
    div {
      white-space: nowrap;
      width: 100%;
      margin: auto;
      /*max-width: 640px;*/
      text-align: center;
    }
    .contentlist3 {
      overflow: hidden;
    }
    #outer {
      width: 100%;
      overflow-x: scroll;
      ::-webkit-scrollbar {
        opacity: 0;
      }
    }
    .listone{
      width: 100%;
    }
    .funcfive {
      .ff{
        text-align: center;
      }
      img{
        width:100%;
        margin-bottom: 5px;
      }
      display: flex;
      background-color: #fff;
      justify-content: center;
      align-items: center;
    }
    .listimg {
      width: 22%;
      background-color: #fff;
      display: inline-block;
      position: relative;
      padding-left: 5px;
      text-align: left;
      img {
        width: 95%;
        display: block;
        margin: 5px 0 auto;
        border: 1px solid @color-bgc-footer;
      }
      .ct-price {
        color: @color-sale-red;
        font-size: @font-size;
        padding: 4px;
        text-align: left;
      }
      .ct-text {
        width: 90%;
        height: 30px;
        line-height: 17px;
        white-space: normal;
        display: inline-block;
        padding: 4px 0;
        color: @color-light-gray;
        font-size: @font-size;
        overflow: hidden;
        text-align: left;
      }
      .ct-tag {
        text-align: left;
        width: 30px;
        display: inline;
        position: absolute;
        top: 5px;
        left: 5px;
        padding: 4px;
        color: @index-StraightDown-color;
        background-color: @color-sale-red;
      }
    }
    .listimg22{
      width: 100%;
      img{
        width: 50%;
      }
    }
  }
</style>
