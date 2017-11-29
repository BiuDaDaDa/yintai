<template>
  <ul id="rightNav">
    <li>
      <router-link to="/">
        <img src="../../assets/luhanran/loginIndex.png" alt="">
        <span>银泰首页</span>
      </router-link>
    </li>
    <li id="hm-neither">
      <router-link to="/category">
        <img class="neither" src="../../assets/luhanran/loginfenlei.png" alt="">
        <span>分类</span>
      </router-link>
    </li>
    <li>
      <router-link to="/shoppingcar">
        <img src="../../assets/luhanran/loginCar.png" alt="">
        <span>购物车</span>
      </router-link>
    </li>
    <li>
      <router-link to="/userinfo">
        <img src="../../assets/luhanran/login-myself.png" alt="">
        <span>我的银泰</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'YtRightNav'
  }
</script>

<style scoped lang="less">
#rightNav{
  width: 110px;
  box-sizing: border-box;
  position: absolute;
  z-index: 501;
  background-color: #fff;
  left: -356.6%;
  top: 30px;
  ul{
    li{
      list-style: none;
    }
  }
}
</style>
