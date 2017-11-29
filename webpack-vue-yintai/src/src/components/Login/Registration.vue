<template>
  <div class="wrap">
    <div v-if="clickedThree" @click="wrapBlank" class="wrap-blank">
    </div>
    <div class="header">
      <div class="header-left">
        <router-link to="/userinfo"><img class="login-header-left" src="../../assets/luhanran/loginleft.png" alt=""></router-link>
      </div>
      <div class="header-center">
        <span class="login-header-center">注册护照</span>
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

    <div class="regi-content">
      <div class="field">
        <input @input="changedColorTwo" ref="isPhoneNumber" id="cellPhone" type="text" value="" placeholder="请输入手机号" maxlength="11">
      </div>
      <div class="field">
        <input @input="bugtoomany" ref="isSure" id="validateCode" type="text" value="" placeholder="请输入验证码" maxlength="11">
        <button @click="isButton" id="getValidateCode" type="button" class="getValidteCode" value="获取验证码">
          <span v-if="isReally">获取验证码</span>
          <span v-if="!isReally">{{count}}  s</span>
        </button>
      </div>
      <div class="field">
        <input @input="changedColorOne" ref="isPassword" id="password" type="text" placeholder="请设置银泰护照密码" maxlength="12">
      </div>
      <div class="field">
        <input @input="changedColor" ref="isComfire" id="repassword" type="text" placeholder="请再次确认银泰护照密码" maxlength="12">
      </div>
      <p class="useExplain">请为护照设置密码（6到12位，英文+数字）</p>
      <p class="useExplain">注册关联银泰护照后您可使用护照直接登录银泰网。银泰护照即银泰百货会员，注册后，在银泰百货商场可享受会员待遇，并可共享积分等。</p>
      <div class="last-button">
        <button ref="isDisabled" id="submitButton" @click="isclick" class="forbid" type="button" disabled="disabled">创建银泰护照</button>
      </div>
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
        isReally: true,
        count: '',
        timer: null
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
      bugtoomany: function () {
        let PhoneNumber = this.$refs.isPhoneNumber.value
        let sure = this.$refs.isSure.value
        let Password = this.$refs.isPassword.value
        let Comfire = this.$refs.isComfire.value
        if ((/^1[34578]\d{9}$/.test(PhoneNumber)) && (sure !== '') && (Password !== '') && (Comfire !== '')) {
          this.$refs.isDisabled.style.backgroundColor = '#e8004c'
          this.$refs.isDisabled.disabled = false
        } else {
          this.$refs.isDisabled.style.backgroundColor = '#ccc'
          this.$refs.isDisabled.disabled = true
        }
      },
      changedColor: function () {
        let PhoneNumber = this.$refs.isPhoneNumber.value
        let sure = this.$refs.isSure.value
        let Password = this.$refs.isPassword.value
        let Comfire = this.$refs.isComfire.value
        if ((/^1[34578]\d{9}$/.test(PhoneNumber)) && (sure !== '') && (Password !== '') && (Comfire !== '')) {
          this.$refs.isDisabled.style.backgroundColor = '#e8004c'
          this.$refs.isDisabled.disabled = false
        } else {
          this.$refs.isDisabled.style.backgroundColor = '#ccc'
          this.$refs.isDisabled.disabled = true
        }
      },
      changedColorOne: function () {
        let PhoneNumber = this.$refs.isPhoneNumber.value
        let sure = this.$refs.isSure.value
        let Password = this.$refs.isPassword.value
        let Comfire = this.$refs.isComfire.value
        if ((/^1[34578]\d{9}$/.test(PhoneNumber)) && (sure !== '') && (Password !== '') && (Comfire !== '')) {
          this.$refs.isDisabled.style.backgroundColor = '#e8004c'
          this.$refs.isDisabled.disabled = false
        } else {
          this.$refs.isDisabled.style.backgroundColor = '#ccc'
          this.$refs.isDisabled.disabled = true
        }
      },
      changedColorTwo: function () {
        let PhoneNumber = this.$refs.isPhoneNumber.value
        let sure = this.$refs.isSure.value
        let Password = this.$refs.isPassword.value
        let Comfire = this.$refs.isComfire.value
        if ((/^1[34578]\d{9}$/.test(PhoneNumber)) && (sure !== '') && (Password !== '') && (Comfire !== '')) {
          this.$refs.isDisabled.style.backgroundColor = '#e8004c'
          this.$refs.isDisabled.disabled = false
        } else {
          this.$refs.isDisabled.style.backgroundColor = '#ccc'
          this.$refs.isDisabled.disabled = true
        }
      },
      isclick: function () {
        let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/
        if (this.$refs.isPassword.value !== this.$refs.isComfire.value) {
          alert('两次密码不一致')
        } else if (!(reg.test(this.$refs.isPassword.value && this.$refs.isComfire.value))) {
          alert('请设置密码（6到12位，英文+数字）')
        } else {
          window.location.href = 'http://localhost:8080/UserCenter'
        }
      },
      isButton: function () {
        if (!(/^1[34578]\d{9}$/.test(this.$refs.isPhoneNumber.value))) {
          alert('请输入正确的手机号')
        } else {
          alert('短信已发,请尽快使用')
          const TIME_COUNT = 60
          if (!this.timer) {
            this.count = TIME_COUNT
            this.isReally = false
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--
              } else {
                this.isReally = true
                clearInterval(this.timer)
              }
            }, 1000)
          }
        }
      }
    },
    mounted () {
    }
  }
</script>

<style scoped lang="less">
  .last-button{
    width: 100%;
    text-align: center;
  }

  .forbid{
    margin: 0 auto;
    width: 80%;
    height: 35px;
    line-height: 35px;
    /*margin: 0 auto 15px;*/
    font-size: 14px;
    /*text-align: center;*/
    border-radius: 6px;
    color: #fff;
    background: #ccc;
    border: 1px solid #ccc;
    outline: none;
  }

  .useExplain{
    line-height: 16px;
    padding: 10px;
    color: #666;
    font-size: 12px;
  }

  #getValidateCode{
    float: right;
    margin-right: 20px;
    margin-top: 8px;
    width: 90px;
    height: 28px;
    line-height: 26px;
    text-align: center;
    border: 1px solid #999;
    border-radius: 3px;
    font-size: 12px;
    color: #666;
    background: #fff;
    outline: none;
  }

  .field{
    position: relative;
    padding-left: 20px;
    background: #fff;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #d2d2d2;
    font-size: 14px;
  }

  .field input{
    height: 20px;
    width: 50%;
    color: #333;
    outline: none;
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
    border-bottom: 1px solid #ccc;
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
