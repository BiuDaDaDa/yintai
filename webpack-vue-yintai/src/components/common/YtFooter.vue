<template>
<div id="footer">
  <i class="iconfont icon-up" @click="returnTop"></i>
  <div class="nav-ul">
    <div @click="indexs" class="nav-list">
      <div><i class="icon-home iconfont" ></i></div>
      <div>首页</div>
    </div>

    <div @click="limitBuy" class="nav-list">
      <div><i class="icon-icon-buy iconfont" ></i></div>
      <div>抢先</div>
    </div>

    <div @click="categorys" class="nav-list">
      <div><i class="icon-categorynormal iconfont" ></i></div>
      <div>分类 </div>
    </div>

    <div @click="shoppingcart" class="nav-list">
      <div><i class="icon-cart iconfont" ></i></div>
      <div>购物车</div>
    </div>

    <div @click="userinfo" class="nav-list" >
      <div><i class="icon-user iconfont" ></i></div>
      <div>我的银泰</div>
    </div>
  </div>
</div>
</template>

<script>
  import Vue from 'vue'
  import Router from 'vue-router'
  import { Tabbar, TabItem } from 'mint-ui'
  Vue.use(Router)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabItem.name, TabItem)
  export default {
    name: '',
    methods: {
      indexs () {
        this.$router.push('/')
      },
      limitBuy () {
        this.$router.push('/limitbuy')
      },
      categorys () {
        this.$router.push('/category')
      },
      shoppingcart () {
        this.$router.push('/shoppingcar')
      },
      userinfo () {
        this.$router.push('/userinfo')
      },
      returnTop () {
        document.documentElement.scrollTop = 0
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index.less";
  #footer{
    position: fixed;
    bottom: 0;
    width:100%;
    .icon-up{
      position: fixed;
      right:10px;
      bottom:60px;
      font-size: 40px;
      color: rgba(0,0,0,.3);
    }
    .nav-ul{
      box-shadow:-19px 6px 20px 0px #444;
      background-color: #fff;
      justify-content:space-around;
      display: flex;
      align-content: center;
      padding:5px 0;
      .nav-list{
        width: 100%;
        font-size: 15px;
        color: #666;
        height:100%;
        cursor: pointer;
        text-align: center;
        border-radius: 0;
        border: none;
        .iconfont{
          font-size: 26px;
        }
        button{
          background-color: green;
        }
        button:focus{
          color:@color-sale-red;
          border-style: none;
        }
        div:nth-child(1){
          padding-bottom: 5px;
        }
      }
    }
  }
</style>
