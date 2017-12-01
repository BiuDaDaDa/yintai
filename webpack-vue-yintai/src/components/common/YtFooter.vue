<template>
<div id="footer">
  <i class="iconfont icon-up" @click="returnTop" v-if="!this.scrollWatch"></i>
  <div class="nav-ul">
    <ul>
      <li @click="toggle(index)" ref="tabt" v-for="(nav,index) in this.routerArr">
        <div><i :class="nav.logo"></i></div>
        {{nav.name}}
      </li>
    </ul>
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
    data () {
      return {
        scrollWatch: true,
        routerArr: [
          {name: '首页', to: '/', logo: 'icon-home iconfont'},
          {name: '抢先', to: '/limitbuy', logo: 'icon-icon-buy iconfont'},
          {name: '分类', to: '/category', logo: 'icon-category iconfont'},
          {name: '购物车', to: '/shoppingcar', logo: 'icon-cart iconfont'},
          {name: '我的银泰', to: '/userinfo', logo: 'icon-user iconfont'}
        ]
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      // 点击下面的导航栏，被点击的图标变成粉色，并且跳转到页面
      toggle (i) {
        for (let j in this.routerArr) {
          this.$refs.tabt[j].style.color = 'gray'
        }
        this.$refs.tabt[i].style.color = 'pink'
        this.$router.push(this.routerArr[i].to)
      },
      returnTop () {
        document.documentElement.scrollTop = 0
      },
      /* 判断当前屏幕的滑动距离 当大于800 就出现 ' 回到顶部的箭头图标' */
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 800) {
          this.scrollWatch = false
        } else {
          this.scrollWatch = true
        }
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
    #active {
      border-right: 1px solid #fff;
      background-color: #fff;
      color: #e5004f;
    }
    ul{
      box-shadow:-19px 6px 20px 0px #444;
      background-color: #fff;
      justify-content:space-around;
      display: flex;
      align-content: center;
      padding:5px 0;
      li{
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
      }
    }
  }
</style>
