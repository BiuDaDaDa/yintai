<template>
  <div class="wrap">
    <div v-if="clickedThree" @click="wrapBlank" class="wrap-blank">
    </div>
    <div class="header">
      <div class="header-left">
        <img class="login-header-left" src="../../assets/luhanran/loginleft.png" alt="">
      </div>
      <div class="header-center">
        <span class="login-header-center">登录</span>
      </div>
      <div @click="hr_more" class="header-right">
        <img class="login-header-right" src="../../assets/luhanran/loginRig.png" alt="">
        <img v-if="threeDot" class="login-header-pink" src="../../assets/luhanran/loginPink.png" alt="">
      </div>
      <div class="clear"></div>

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
        <div @click="refresh">
          <img src="../../assets/luhanran/login-myself.png" alt="">
          <span>我的银泰</span>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="content-top">
        <div ref="changeColorGray" class="yintai-password" @click="click1">
          银泰护照
        </div>
        <div ref="abc" @click="click2" class="yintai-username">
          银泰网账号
        </div>
        <div class="clear-two">

        </div>
      </div>

      <div class="content-password">
        <div class="cp-phone">
          <img src="../../assets/luhanran/loginusername.png" alt="">
          <input ref="phoneDis" type="text" placeholder="请输入银泰护照号(手机号)">
        </div>
        <div class="cp-pas">
          <img src="../../assets/luhanran/loginPassword.png" alt="">
          <input ref="loginPass" type="text" placeholder="请输入密码">
        </div>
      </div>

      <div class="content-login">
        <div class="content-button-login">
          <input @click="login" type="button" value="登录">
        </div>


        <div class="registration">
          <div class="cr-forget"><router-link to="/ForgetPassword">忘记密码</router-link></div>
          <div class="cr-regi"><router-link to="/Registration">注册</router-link></div>
        </div>
      </div>

      <div ref="changeDis" class="content-article">
        <p class="ca-first">银泰护照即银泰门店会员账号，一般为手机号，如未设置过密码或忘记密码可点击“忘记密码”进行找回。</p>
        <p class="ca-second">
          <span>推荐您使用银泰护照进行登录。</span>
          使用银泰护照登录，将可在线享受银泰会员的一些权益，并与您线上账号进行关联，确保您的会员权益最大化。
        </p>
      </div>
    </div>

    <div class="footer">
      <p>
        客服电话：
        <a href="##">400-119-1111</a>
        （8:00-24:00）
      </p>
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
        threeDot: false
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
      },
      refresh: function () {
        location.reload()
      },
      click1: function () {
        this.$refs.abc.style.borderBottom = 1 + 'px solid #999'
        this.$refs.changeColorGray.style.borderBottom = 3 + 'px solid #e5004f'
        this.$refs.changeDis.style.display = 'block'
        this.$refs.phoneDis.placeholder = '请输入银泰护照号'
      },
      click2: function () {
        this.$refs.abc.style.borderBottom = 3 + 'px solid #e5004f'
        this.$refs.changeColorGray.style.borderBottom = 1 + 'px solid #999'
        this.$refs.changeDis.style.display = 'none'
        this.$refs.phoneDis.placeholder = '请输入手机/邮箱'
      },
      login: function () {
        var userLogin = this.$refs.phoneDis.value
        var userPassword = this.$refs.loginPass.value
        if (!(/^1[34578]\d{9}$/.test(userLogin))) {
          alert('请输入正确的手机号')
        } else if (userPassword) {
        }
      }
    }
  }
</script>

<style scoped lang="less">

  .content-login{
    width: 100%;

  }

  .content-button-login{
    width: 100%;
    text-align: center;
  }



  .clear-two{
    clear: both;
  }
  #hm-neither .neither{
    width: 18px;
  }

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

  .clear-two{
    clear: both;
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
    width: 26.57%;
    box-sizing: border-box;
    position: absolute;
    left: 75%;
    top:40px;
    z-index: 501;
    background-color: #fff;

  }

  .footer p{
    color: #999;
    font-size: 14px;
  }

  .footer p a{
    color: black;
  }

  .footer{
    text-align: center;
    margin-top: 80px;
  }

  .ca-first{
    padding: 30px 10px 0;
    line-height: 16px;
    font-size: 12px;
    color: #666;
  }

  .ca-second{
    padding: 30px 10px 0;
    line-height: 16px;
    font-size: 12px;
    color: #666;
  }

  .cr-forget{
    float: left;
    font-size: 16px;
    color: #999;
    padding-left: 10px;
  }

  .cr-regi{
    float: right;
    height: 30px;
    font-size: 14px;
    line-height: 20px;
    padding-right: 2px;
    cursor: pointer;
  }

  .cr-regi a{
    color: #e5004f;
  }

  .registration{
    padding: 10px;
    overflow: hidden;
  }

  .content-login input{
    margin: 10px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    background-color: #e5004f;
    color: #fff;
    cursor: pointer;
    width: 92%;

  }

  .cp-phone{
    position: relative;
  }

  .cp-pas{
    position: relative;
  }

  .cp-phone img{
    width: 25px;
    position: absolute;
    top: 18px;
    left: 22px;
  }

  .cp-pas img{
    width: 25px;
    position: absolute;
    top: 18px;
    left: 22px;
  }

  body{
    background-color: #f1f1f1;
  }

  .content-password{
    margin-top: 25px;
  }

  .content-password input{
    width: 100%;
    height: 61px;
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    font-size: 16px;
    color: #666;
    outline: none;
    padding-left: 70px;
  }

  .yintai-password{
    width: 50%;
    height: 40px;
    float: left;
    line-height: 39px;
    text-align: center;
    border-bottom: 3px solid #e5004f;
    color: #333;
    font-size: 14px;
  }

  .yintai-username{
    width: 50%;
    height: 40px;
    float: left;
    line-height: 39px;
    text-align: center;
    font-size: 14px;
    color: #999;
    border-bottom: 1px solid rgb(204, 204, 204);
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
    width: 86%;
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
