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
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Header, Button } from 'mint-ui'
  Vue.component(Header.name, Header)
  Vue.component(Button.name, Button)
  export default {
    name: 'ShoppingCar',
    components: {
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
