<template>
  <ul id="rightNav">
    <router-link to="/">
      <li>
        <img src="../../assets/luhanran/loginIndex.png" alt="">
        <p>银泰首页</p>
      </li>
    </router-link>
    <router-link to="/category">
      <li>
        <img class="neither" src="../../assets/luhanran/loginfenlei.png" alt="">
        <p>分类</p>
      </li>
    </router-link>
    <router-link to="/shoppingcar">
      <li>
        <img src="../../assets/luhanran/loginCar.png" alt="">
        <p>购物车</p>
      </li>
    </router-link>
    <router-link to="/userinfo">
      <li>
        <img src="../../assets/luhanran/login-myself.png" alt="">
        <p>我的银泰</p>
      </li>
    </router-link>
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
  background-color: #fff;
  ul{
    padding:4px;
    li{
      width:100px;
      height:50px;
      border-top: 1px solid #d2d2d2;
      list-style: none;
      padding:4px;
      p{
        display: inline-block;
        width: 50%;
        text-align: center;
      }
      img{
        height:10px;
      }
    }
  }
}
</style>
