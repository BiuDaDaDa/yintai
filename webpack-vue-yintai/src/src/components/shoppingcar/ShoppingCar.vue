<template>
  <div id="shoppingcar">
    <mt-header title="购物车">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="sc-clear-bg" v-if="true">
      <!--购物车为空时的背景图片-->
      <div class="sc-clear-kong"></div>
      <p>购物车空空哒！</p>
      <p>快去随便逛逛吧~</p>
    </div>
    <div class="sc-clear-kong1">
      <router-link to="/" class="routerto">随便逛逛</router-link>
    </div>
    <sa-sa></sa-sa>
  </div>
</template>

<script>
  import SaSa from '../index/YtActivitiesTemplate'
  import Vue from 'vue'
  import { Header, Button } from 'mint-ui'
  Vue.component(Header.name, Header)
  Vue.component(Button.name, Button)
  export default {
    name: 'ShoppingCar',
    components: {
      SaSa
    },
    mounted () {
      var date1 = new Date()
      var datehour = date1.getHours()
      var dateminute = date1.getMinutes()
      if (datehour < 10) {
        datehour = `0${datehour}`
      }
      if (dateminute < 10) {
        dateminute = `0${dateminute}`
      }
      var date2 = `${date1.getFullYear()}${date1.getMonth() + 1}${date1.getDate()}${datehour}${dateminute}`
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
  @import '../../common/css/index';
  #shoppingcar{
    text-align: center;
    .sc-clear-bg{
      background: url("../../assets/img/shepin/clearcart2.png")  no-repeat  center 100px;
      background-size: 110px;
      height:250px;
      .sc-clear-kong{
        height:100px;
      }
     }
    .routerto{
      padding: 10px 100px;
      border: 1px solid @login-button-color;
      color: @login-button-color;
      border-radius: 5px;
    }
    .sc-clear-kong, .sc-clear-kong1{
      padding-top: 120px;
      height:100px;
    }
    .sc-clear-kong1{
      padding-top: 20px;
      margin-bottom: 20px;
    }

  }
</style>
