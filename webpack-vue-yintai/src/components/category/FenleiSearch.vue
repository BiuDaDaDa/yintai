<template>
  <div class="wrap">
    <div v-if="clickedThree" @click="wrapBlank" class="wrap-blank">
    </div>
    <div class="header">
      <div class="header-left">
        <router-link to="/"><img class="login-header-left" src="../../../src/assets/luhanran/loginleft.png" alt=""></router-link>
      </div>
      <div class="header-center">
        <span class="login-header-center"></span>
      </div>
      <div @click="hr_more" class="header-right">
        <img class="login-header-right" src="../../assets/luhanran/loginRig.png" alt="">
        <img v-if="threeDot" class="login-header-pink" src="../../assets/luhanran/loginPink.png" alt="">
        <div v-if="clickedThreeDot" class="header-more">
          <div>
            <img src="../../assets/luhanran/loginIndex.png" alt="">
            <span>银泰首页</span>
          </div>
          <div id="hm-neither">
            <img class="neither" src="../../assets/luhanran/loginfenlei.png" alt="">
            <span>分类</span>
          </div>
          <div>
            <img src="../../assets/luhanran/loginCar.png" alt="">
            <span>购物车</span>
          </div>
          <div>
            <router-link to="/Login">
              <img src="../../assets/luhanran/login-myself.png" alt="">
              <span>我的银泰</span>
            </router-link>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        clickedThree: false,
        clickedThreeDot: false,
        threeDot: false,
        thisdata: '',
        thisdataCate: '',
        thisdataBrands: '',
        thisdataCategory: '',
        loadid: 88,
        jump: '',
        undf: ''
      }
    },
    methods: {
      hr_more: function () {
        this.clickedThree = true
        this.clickedThreeDot = true
        this.threeDot = true
      },
      wrapBlank: function () {
        this.clickedThree = false
        this.clickedThreeDot = false
        this.threeDot = false
      }
      // 时尚名品
    },
    mounted () {
    }
  }
</script>

<style scoped lang="less">

  .login-header-pink{
    position: absolute;
    top: 0;
    left: 0;
  }

  .header-more div{
    padding: 5px;
    text-align: center;
    text-decoration: none;
    color: #666;
    border-bottom: 1px solid #ccc;
  }

  .header-more div span{
    display: inline-block;
    width: 60px;
    height: 20px;
    margin: 7px 0 3px;
    line-height: 20px;
    font-size: 14px;
  }

  .clear{
    clear: both;
  }

  .wrap-blank{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    background-color: #333;
    opacity: .6;
  }


  .header-more{
    width: 110px;
    box-sizing: border-box;
    position: absolute;
    z-index: 501;
    background-color: #fff;
    left: -356.6%;
    top: 30px;
  }

  body{
    background-color: #f1f1f1;
  }

  .header{
    width: 100%;
    height: 40px;
    padding-top: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
    position: relative;
    z-index: 501;
    background-color: #fff;
  }

  .wrap{
    width: 100%;
    height: 100%;
  }

  .header img{
    width: 22px;
  }

  .header-left{
    float: left;
  }

  .header-center{
    width: 84%;
    text-align: center;
    float: left;
    font-size: 16px;
    line-height: 25px;
    font-weight: 600;
  }

  .header-right{
    float: right;
    position: relative;
    right: 10px;
  }

  .login-header-center{
    text-align: center;
  }

  .login-header-right{
    text-align: right;
  }
</style>
