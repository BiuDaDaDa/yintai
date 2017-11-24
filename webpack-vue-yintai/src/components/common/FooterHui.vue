<template>
  <div class="footer-hui">
    <div class="footer-hui-wrap">
      <div class="footer-hui-header">
        <div class="footer-hui-header-top">
          <div @click="indexs"><span>首页</span></div>
          <div @click="categorys"><span>分类</span></div>
          <div @click="shoppingcart"><span>购物车</span></div>
          <div @click="userinfo"><span>我的</span></div>
        </div>
        <div class="footer-hui-header-bottom">
          <div class="footer-hui-header-bottom-left">
            <a href="###">登录 |</a>
            <a href="###"> 注册</a>
          </div>
          <div class="footer-hui-header-bottom-right"><a href="###">客户端下载</a></div>
        </div>
      </div>
      <div class="footer-hui-footer">
        <p class="p1">客服电话：<a href="###">400-119-1111</a>（8:00-24:00）</p>
        <p class="p2">浙ICP备10200233号</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterHui',
//    computed: {
//      shouye () {
//        return
//      }
//    },
//    data () {
//      return
//    }
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
  @import "../../common/css/index";
  .footer-hui-wrap{
    background-color: rgb(237,237,237);
    padding-top: 15px;
    margin-bottom:50px;
  }
  .footer-hui-header{
    width: 100%;
  }
  .footer-hui-header-top{
    width: 100%;
    overflow: hidden;
  }
  .footer-hui-header-top div{
    width: 25%;
    float: left;
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
  }
  .footer-hui-header-top span{
    color:@color-light-gray;
    font-size:@font-size;
  }
  .footer-hui-header-bottom{
    width: 100%;
    overflow: hidden;
    padding: 5px 15px 10px;
    box-sizing: border-box;
  }
  .footer-hui-header-bottom a{
    color:@index-boom-introduce-color;
    font-size:@font-size;
  }
  .footer-hui-header-bottom-left{
    float: left;
  }
  .footer-hui-header-bottom-right{
    float: right;
  }
  .footer-hui-footer{
    border-top: 1px solid #ddd;
    padding: 12px;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
  }
  .footer-hui-footer p,a {
    color:@color-light-gray;
    font-size:@font-size;
  }
</style>
