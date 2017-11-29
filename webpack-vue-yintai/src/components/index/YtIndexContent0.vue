<template>
<div>
  <div class="box" v-if="scrollImg != null || myArr != null">
    <!-- 首页搜索框 -->
    <div class="search_box">
      <!--<img src="../../assets/img/shangchangtk/newlogo.png">-->
      <div class="logo"></div>
      <div class="search_txt">
        <input ref="indexSearch" type="text" placeholder="搜索商品or品牌">
        <span>
          <i @click="clicked" class="iconfont icon-search3"></i>
        </span>
      </div>
      <div class="user">
        <i class="iconfont icon-user1"></i>
      </div>
    </div>
    <div class="index_content">
      <!-- 首页轮播图 -->
      <div class="index_scrollimg">
        <mt-swipe :auto="4000">
          <!--绑定唯一的key值-->
          <mt-swipe-item v-for="(myScrollImg,index) in scrollImg" :key="myScrollImg.id">
            <a @click="pageidPage(index)" class="scroll">
              <img :src="myScrollImg.imgurl" alt="">
            </a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <!-- 首页导航图 -->
        <div class="index_nav" v-for="(aaa,index) in myArr" v-if="aaa.templatename === '功能区-5图-搭'">
          <div class="nav_img" v-for="(myNav,key) in aaa.items" :key="myNav.itemid" @click="pageidPage2(index,key)">
              <img :src="myNav.imgurl" alt="" >
              <p>{{myNav.imgname}}</p>
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
          scrollImg: null,
          myArr: null,
          searchResult: '',
          pageid: '',
          title: '',
          url: ''
        }
      },
      mounted () {
        let date1 = new Date()
        let datehour = date1.getHours()
        let dateminute = date1.getMinutes()
        if (datehour < 10) {
          datehour = `0${datehour}`
        }
        if (dateminute < 10) {
          dateminute = `0${dateminute}`
        }
        let date2 = `${date1.getFullYear()}${date1.getMonth() + 1}${date1.getDate()}${datehour}${dateminute}`
        this.$request({
          type: 'get',
          url: `api?r=${date2}0&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`,
          header: {},
          params: {},
          success: function (res) {
            this.scrollImg = res.data.data.bannerlist
            this.myArr = res.data.data.templatelist
          },
          failed: function (err) {
            console.log(err)
          }
        })
      },
      methods: {
        clicked: function () {
          this.searchResult = this.$refs.indexSearch.value
          this.$router.push({
            path: '/SalesProductList',
            query: {
              SearchCondition: this.searchResult,
              keywords: this.searchResult,
              title: this.searchResult
            }
          })
        },
        pageidPage2 (i, j) {
          this.title = decodeURI(this.myArr[i].items[j].jumpurl.split('title=')[1].split('&')[0])
          if (j === 1) {
            this.url = this.myArr[i].items[j].jumpurl.split('pageid%')[1].split('&')[0]
            console.log(this.title, this.url)
            this.$router.push({
              path: '/SalesProductList',
              query: {
                pargainid: this.url,
                title: this.title
              }
            })
          } else {
            this.pageid = this.myArr[i].items[j].jumpurl.split('pageid%3D')[1].split('&')[0]
            console.log(this.title, this.pageid)
            this.$router.push({
              path: '/ActivitiesTemplate',
              query: {
                pageid: this.pageid,
                title: this.title
              }
            })
          }
        },
        pageidPage (i) {
          this.pageid = this.scrollImg[i].jumpurl.split('pageid%3D')[1].split('&')[0]
          this.title = decodeURI(this.scrollImg[i].jumpurl.split('title=')[1].split('&')[0])
          console.log(this.title, this.pageid)
          this.$router.push({
            path: '/ActivitiesTemplate',
            query: {
              pageid: this.pageid,
              title: this.title
            }
          })
        }
      }
    }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  .wrap {
    background-color: rgb(237, 237, 237);
  }
  .box{
    position: relative;
  }
  .logo{
    width: 11.7%;
    height:42.5px;
    background: url("../../assets/img/shangchangtk/newlogo.png") no-repeat ;
    background-size: 100% 42.5px;
  }
  .search_box {
    position: relative;
    top: 0;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    font-size: 24px;
    padding: 5px;
    z-index: 1;
    box-sizing: border-box;
    img{
      width: 15%;
    }
  }
  .search_box .search_txt {
    width: 80%;
    height: 90%;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .search_box .search_txt input {
    border: 1px solid #d2d2d2;
    width: 100%;
    height: 100%;
    font-size: 16px;
    padding: 3px;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
  }
  .search_box .search_txt span {
    border-left: 1px solid #d2d2d2;
    position: absolute;
    right: 3%;
    font-size: 24px;
    padding-left: 15px;
    color: #d2d2d2;
  }
  .search_box .user .icon-user1 {
    font-size: 32px;
    color: #d2d2d2;
    font-weight: lighter;
  }
  .index_content {
    position: relative;
    top: 0;
    width: 100%;
  }
  .index_scrollimg {
    width: 100%;
    height: 168px;
  }
  .index_scrollimg a img {
    width: 100%;
    height: 100%;
  }
  .index_nav {
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: white;
  }
  .index_nav .nav_img {
    width: 20%;
    text-align: center;
  }
  .index_nav .nav_img img {
    width: 100%;
  }
  .index_nav .nav_img p {
    margin: 8px 0;
  }
</style>
