<template>
  <div>
    <div class="title_nav">
      <i class="iconfont icon-jiantou-left"></i>
      <span>我的银泰</span>
      <i class="iconfont icon-more"></i>
    </div>
    <div class="viewport">
      <div class="user-information">
        <div class="user-img"><img src="../../assets/user-head.png"/></div>
        <p class="user-name">{{}}</p>
        <p class="user-level">{{}}</p>
      </div>
      <!--订单售后-->
      <div class="user-order cf">
        <a href="/Sales/Allorder" class="allorder">
          <i class="iconfont icon-iconfont0090"></i>
          <span>全部订单</span>
        </a>
        <a href="/Sales/Waitpay" class="wait-pay">
          <i class="iconfont icon-iconfont0090"></i>
          <span>代付款</span>
        </a>
        <a href="/Sales/Delivery" class="wait-shouhuo">
          <i class="iconfont icon-daishouhuo"></i>
          <span>待收货</span>
        </a>
        <a href="/m_order/RMAListIndex?platformid=1" class="wait-return">
          <i class="iconfont icon-tuihuanhuo"></i>
          <span>退换货</span>
        </a>
      </div>
      <!--money-->
      <div class="user-money cf">
        <a href="/m_account/MyPointIndex?platformid=1" class="jifen"><strong>0</strong><span>积分</span></a>
        <a href="/m_account/MyCoinIndex?platformid=1" class="yinyuan"><strong>0.00</strong><span>银元</span></a>
        <a href="/UserCenter/Balance?platformid=1" class="yue"><strong>0.00</strong><span>余额</span></a>
      </div>
      <!--卡券-->
      <div class="user-other cf">
        <a href="/m_account/MyCardIndex?platformid=1" class="yt-uc-card">
          <i class="iconfont icon-qiabao"></i>
          <div class="user-center-catlog"><span class="yt-center-title">银泰卡</span><span
            class="yt-center-val">已登记0张</span></div>
        </a>
        <a href="/Sales/CouponList" class="yt-uc-youhui">
          <i class="iconfont icon-youhuiquan"></i>
          <div class="user-center-catlog">
            <span class="yt-center-title">优惠券</span>
            <span class="yt-center-val">0张有效</span>
          </div>
        </a>
        <a href="#" class="yt-uc-huzhao">
          <i class="iconfont icon-huzhao"></i>
          <div class="user-center-catlog"><span class="yt-center-title">银泰护照</span><span
            class="yt-center-val">{{thisdata}}</span></div>
        </a>
        <a href="#" class="yt-uc-phone">
          <i class="iconfont icon-shouji"></i>
          <div class="user-center-catlog"><span class="yt-center-title">手机号</span><span
            class="yt-center-val">{{}}</span>
          </div>
        </a>
      </div>
      <!---->
      <div class="user-other boder-top-bottom cf">
        <a href="#" class="yt-uc-shoucang yt-uc-sign-title">
          <i class="iconfont icon-heart"></i>
          <div class="user-center-catlog"><span class="yt-center-title">收藏</span></div>
        </a>
        <a href="#liulan" class="yt-uc-lookhis yt-uc-sign-title">
          <i class="iconfont icon-gongsisvgtubiaozongji05"></i>
          <div class="user-center-catlog"><span class="yt-center-title">浏览记录</span></div>
        </a>
        <a href="/UserCenter/SetPayPassword" class="yt-uc-paypass yt-uc-sign-title">
          <i class="iconfont icon-xinghao"></i>
          <div class="user-center-catlog"><span class="yt-center-title">支付密码</span></div>
        </a>
        <a href="/Address/AddressList?returnurl=UserCenter" class="yt-uc-savadd yt-uc-sign-title">
          <i class="iconfont icon-kuaidi"></i>
          <div class="user-center-catlog"><span class="yt-center-title">收货地址</span></div>
        </a>
      </div>
      <!--帮助中心-->
      <div class="user-common user-commonhelp">
        <a class="hc-helpCenter" href="/Help/Index?type=html5">帮助中心
          <div class="infor-centernum">
            <span class="pink"></span>
            <i class="iconfont icon-jiantou"></i>
          </div>
          <em></em>
        </a>
        <div class="hr"></div>
        <a class="yintai-tel" href="tel:4001191111">客服电话
          <span class="help-tel">
          <i class="pink">400-119-1111</i>(8:00-24:00)
           <i class="iconfont icon-jiantou"></i>
          </span><em></em>
        </a>
      </div>
      <!--下载-->
      <div class="user-common dlow">
        <a class="yintai-download xiazai" href="/Event/appdown/ios_yingyongbao.html?id=H5web">下载银泰网客户端
          <span class="pink"></span><em></em>
          <i class="iconfont icon-jiantou"></i>
        </a>
      </div>
      <!--退出-->
      <div class="user-logout">
        退出账户
        <span class="pink"></span>
        <em></em>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        keyKey: this.$route.query.nameOne,
        thisdata: ''
      }
    },
    mounted () {
//      this.$request({
//      })
      this.$request({
        type: 'get',
        url: '/login/User/getProfileForMe?params=%5B%5B%22BasicInfo%22%2C%22Account%22%2C%22Asset%22%2C%22BindInfo%22%2C%22OrderCount%22%5D%2C%221090000%22%5D',
        headers: {
          Authorization: 'Bearer 03123b509ed26804ebebc9fb5d8449dce2fc2a37',
          'X-Auth-Token': `${this.keyKey}`
        },
        success: function (res) {
          console.log(res.data)
          this.thisdata = res.data
        },
        failed: function (err) {
          console.log(err)
        }
      })
    },
    methods: {
    }
  }
</script>

<style scoped lang="less">
  .title_nav {
        width: 100%;
        background-color: #fff;
        height: 40px;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        padding: 0 10px;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        span {
          font-weight: 500;
        }
        .icon-houtui {
          font-size: 20px;
        }
        .icon-more {
          font-size: 23px;
          color: #999999;
        }
      }
  .register-title {
    -webkit-box-flex: 1;
    flex: 1;
    position: relative;
    height: 40px;
    line-height: 39px;
    text-align: center;
    font-size: 14px;
    color: #999;
    background: #fff;
    border-bottom: 1px solid #ccc
  }
  .register-warm {
    padding: 10px 20px;
    display: none;
    text-align: right
  }
  .register-warm a {
    text-decoration: none;
    color: red
  }
  .register-title.active {
    border-bottom: 3px solid #e5004f;
    color: #333
  }
  .user-information {
    background-color: #ff7ba9;
    width: 100%;
    min-height: 120px;
    position: relative
  }
  .user-money, .user-order {
    background-color: #fff
  }
  .user-information .user-img {
    text-align: center;
    padding: 10px 0 8px
  }
  .user-information .user-img img {
    width: 70px;
    height: 70px;
    border-radius: 70px;
    border: 1px solid #fff
  }
  .user-money a, .user-order a, .user-other a {
    text-align: center;
    border-left: 1px solid #d5d5d5;
    text-decoration: none;
  }
  .user-information .user-name {
    text-align: center;
    color: #fff
  }
  .user-information .user-level {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #710028;
    font-size: 12px;
  }
  .user-order{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #d5d5d5;
  margin-bottom: 10px;
  a{
    width: 25%;
    padding: 5px;
    display: flex;
    flex-direction:column;
    box-sizing: border-box;
    color: #333333;
    font-size: 14px;
    i{
      font-size: 24px;
      margin-bottom: 5px;
      color: #999999;
    }
  }
}
  /*j积分*/
  .user-money{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #d5d5d5;
    a{
      width: 33%;
      padding: 5px;
      display: flex;
      flex-direction:column;
      box-sizing: border-box;
      color: #333333;
      font-size: 14px;
      span{
        margin-top: 5px;
        color: #999999;
        font-size: 12px;
      }
    }
  }
  /*护照 卡*/
  .user-other {
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap:wrap;
    box-sizing: border-box;
    a{
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #d5d5d5;
      padding: 15px;
      box-sizing: border-box;
      i{
        width: 50%;
        font-size: 24px;
      }
      div{
        width: 70%;
        .yt-center-title{
          font-size: 12px;
        }
        .yt-center-val{
          color: #333333;
          font-size: 14px;
          margin-top: 5px;
        }
      }
      .user-center-catlog{
        text-align: left;
        .yt-center-title{
          display: block;
        }
      }
    }
  }
  .boder-top-bottom{
    border-top: 1px solid #d5d5d5;
  }
  .user-common a, .user-logout {
    line-height: 26px;
    padding: 10px 15px
  }
  .user-common {
    background-color: #fff;
    margin: 0 0 10px
  }
  .user-common a {
    display: block;
    text-decoration: none;
    color: #666;
    font-size: 14px;
    position: relative
  }
  .user-common .pink, .user-logout {
    color: #e5004f
  }
  .user-common a em {
    display: block;
    position: absolute;
    width: 8px;
    height: 14px;
    top: 17px;
    right: 10px;
    /*background: url(images/index/bai-12-d26f311133.png) no-repeat;*/
    -webkit-background-size: 100% auto;
    -moz-background-size: 100% auto;
    -o-background-size: 100% auto;
    background-size: 100% auto
  }
  #qrCodeIco, .direct-bind, .replace-telphone, .setPassWord {
    display: none
  }
  .bg-white, .user-logout {
    background-color: #fff
  }
  /*帮助*/
  .user-common .hr {
    margin: 0 10px
  }
  .user-common .help-tel, .user-common .infor-centernum, .user-common .infor-phone, .user-common .yingyongnum {
    position: absolute;
    right: 10px;
    top: 12px
  }
  .user-common .help-tel i {
    font-style: normal;
    font-weight: 500
  }
  .user-commonhelp {
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
  }
  .user-common{
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
  }
  /*退出*/
  .user-logout{
      border-top: 1px solid #d5d5d5;
      color: red;
      padding: 10px;
      text-align: center;
    }
  .user-common .xiazai{
    display: flex;
    justify-content: space-between;
  }
  .icon-qiabao{
    color: #FF3C7E;
  }
  .icon-youhuiquan{
    color: deepskyblue;
  }
  .icon-huzhao{
    color: #ffec74;
  }
  .icon-shouji{
    color: #93f08f;
  }
</style>
