<template>
  <div class="wrap">
    <div v-if="clickedThree" @click="wrapBlank" class="wrap-blank">
    </div>
    <div class="header">
      <div class="header-left">
        <router-link to="/"><img class="login-header-left" src="../../../src/assets/luhanran/loginleft.png" alt=""></router-link>
      </div>
      <div class="header-center">
        <span class="login-header-center">分类</span>
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

    <div class="center">
      <div class="search">
        <div class="sea-min">
          <div class="sea-txt">
            <input type="text" ref="keyWordSearch" placeholder="搜索商品or品牌" id="txtKeyword">
            <span @click="KSearch" id="btnSearch"><img src="../../assets/luhanran/FlSearch.png" alt=""></span>
          </div>
        </div>
      </div>
    </div>

    <!--时尚名品那一排-->
    <div class="category">
      <div class="float-left-category-left">
        <ul>
          <li @click="tab_toggle(indexOne)" ref="tabt" v-for="(i,indexOne) in thisdata">
            {{i.name}}
          </li>
        </ul>
      </div>
      <!--推荐类目-->
      <div class="float-left-category-right">
        <div class="recommand-category-right-padding">
          <div class="area-title">
            <span>推荐类目</span>
          </div>
          <div @click="SecondPage(index)" class="category-item" v-for="(j,index) in thisdataCate">
              <img :src="j.imageurl">
              <div>
                <span>{{j.name}}</span>
              </div>
          </div>
        </div>
        <!--推荐品牌-->
        <div class="recommand-brand-right-padding">
          <div class="area-title">
            <span>推荐品牌</span>
          </div>

          <div @click="brands(two)" class="brand-item" v-for="(x,two) in thisdataBrands">
            <img :src="x.imageurl">
          </div>
        </div>
        <!--更多类目-->
        <div class="more-category-right-padding">
          <div class="area-title"><span>更多类目</span></div>
          <div @click="more(three)" class="category-item-more" v-for="(y,three) in thisdataCategory">
            <span>{{y.name}}</span>
          </div>
        </div>
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
        thisdata: '',
        thisdataCate: '',
        thisdataBrands: '',
        thisdataCategory: '',
        loadid: 88,
        jump: '',
        undf: '',
        foodsName: '',
        brandsUrl: '',
        brandsName: '',
        moreUrl: '',
        moreName: ''
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
      // 时尚名品
      tab_toggle: function (indexOne) {
        for (let x in this.thisdata) {
          this.$refs.tabt[x].style.color = ''
          this.$refs.tabt[x].style.borderRight = 1 + 'px solid #d2d2d2'
        }
        this.$refs.tabt[indexOne].style.color = '#e5004f'
        this.$refs.tabt[indexOne].style.borderRight = 'none'
        this.loadid = this.thisdata[indexOne].id
        this.$request({
          type: 'get',
          url: `api?r=0.1610714925740102&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=${this.loadid}`,
          header: {},
          params: {},
          success: function (res) {
            this.thisdataCate = res.data.data.recommend.categoryrecommend
            this.thisdataBrands = res.data.data.brand.brandrecommend
            this.thisdataCategory = res.data.data.more.morerecommend
          },
          failed: function (err) {
            console.log(err)
          }
        })
      },
      // 推荐类目
      SecondPage: function (index) {
        this.jump = this.thisdataCate[index].jumpurl
        this.undf = this.jump.split('N')[1].split('%')[1].split('D')[1].split('&')[0]
        this.foodsName = this.thisdataCate[index].name
        this.$router.push({
          path: `/Sales`,
          query: {
            title: this.foodsName,
            urlName: this.undf
          }
        })
      },
      brands: function (two) {
        this.brandsUrl = this.thisdataBrands[two].jumpurl.split('N')[1].split('d')[1]
        this.brandsName = this.thisdataBrands[two].name
        this.$router.push({
          path: '/Sales',
          query: {
            title: this.brandsName,
            urlName: this.brandsUrl
          }
        })
      },
      more: function (three) {
        this.moreUrl = this.thisdataCategory[three].jumpurl.split('N')[1].split('D')[1].split('%')[0]
        this.moreName = this.thisdataCategory[three].name
        this.$router.push({
          path: '/Sales',
          query: {
            title: this.moreName,
            urlName: this.moreUrl
          }
        })
      },
      KSearch: function () {
        let urlAdress = this.$refs.keyWordSearch.value
        let urlCoding = encodeURI(urlAdress)
        this.$router.push({
          path: '/Sales',
          query: {
            title: urlCoding,
            urlName: urlAdress
          }
        })
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'api?r=0.5901912278546246&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0',
        header: {},
        params: {},
        success: function (res) {
          this.thisdata = res.data.data.data
        },
        failed: function (err) {
          console.log(err)
        }
      })
      this.$request({
        type: 'get',
        url: `api?r=0.1610714925740102&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=${this.loadid}`,
        header: {},
        params: {},
        success: function (res) {
          this.thisdataCate = res.data.data.recommend.categoryrecommend
          this.thisdataBrands = res.data.data.brand.brandrecommend
          this.thisdataCategory = res.data.data.more.morerecommend
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang="less">
  #active {
    border-right: 1px solid #fff;
    background-color: #fff;
    color: #e5004f;
  }

  .category-item-more{
    width: 33%;
    text-align: center;
    display: inline-block;
    height: 45px;
    line-height: 45px;
    margin-top: 10px;
    color: #666;
  }

  .brand-item{
    width: 33%;
    float: left;
    text-align: center;
  }

  .brand-item img{
    width: 80%;
    border: 2px solid #f6f6f6;
    margin: 10px 0;
  }

  .recommand-brand-right-padding{
    padding: 0 10px;
    overflow: hidden;
  }

  .category-item{
    width: 33%;
    float: left;
    text-align: center;
    padding: 15px 0;
  }

  .category-item img{
    width: 100%;
  }

  .category-item div{
    text-align: center;
    margin-top: 15px;
  }

  .category{
    overflow: hidden;
  }

  .recommand-category-right-padding{
    padding: 0 10px;
    overflow: hidden;
  }

  .area-title{
    text-align: center;
    margin-top: 15px;
    height: 35px;
    line-height: 35px;
    width: 100%;
    background-size: 100%;
    background-position: 50%;
    color: #666;
    background: url(http://yrs.yintai.com//mobile/img/category-area-title@3x.png) no-repeat;
    background-size: 100%;
    background-position-y: 5px;
  }

  .area-title span{
    padding: 0 8px;
    background-color: #fff
  }

  .float-left-category-right{
    width: 75%;
    background-color: #fff;
    height: 100%;
    overflow-y: auto;
    float: right;
    font-size: 14px;
  }

  .float-left-category-left{
    width: 25%;
    height: 100%;
    overflow-y: auto;
    float: left;
  }

  .float-left-category-left ul li {
    text-align: center;
    height: 55px;
    line-height: 55px;
    border-right: 1px solid #d2d2d2;
    font-size: 14px;
  }
  .center{
    position: relative;
    padding: 10px;
  }

  .search{
    height: 42.5px;
    padding: 0;
  }

  .sea-min{
    height: 42.5px;
    border: 1px solid #d2d2d2;
    border-radius: 5px;
  }

  .center .search span {
    position: absolute;
    right: 5px;
    top: 6px;
    width: 36px;
    height: 30px;
    padding-left: 5px;
    border-left: 1px solid #ddd;
  }

  #btnSearch img{
    width: 30px;
  }

  .center .search input {
    width: 100%;
    display: block;
    height: 30px;
    font-size: 14px;
    border: 0 none;
    outline: none;

  }

  .sea-txt{
    position: relative;
    padding: 6px;
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
