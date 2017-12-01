<template>
  <div class="qiangxian-wrap" v-if="thisdata != null && arr != null">
    <div class="mask" v-if="ShowMask" @click="clickContent"></div>
    <!-- 抢先专区 -->
    <div class="qiangxian">
      <!--抢先：固定定位-->
      <div class="qiangxian-top">
        <router-link to="/"><img class="qiangxian-top1" src="../../../src/assets/luhanran/loginleft.png" alt=""></router-link>
        <div class="qiangxian-top2">抢先</div>
        <img src="../../common/img/shangchangtk/shenglue.png" alt="" class="qiangxian-top3" @click="clickList">
        <img src="../../common/img/shangchangtk/pink-shenglue.png" alt="" class="qiangxian-top4" @click="closeList"
             v-if="isShow">
        <ul v-if="Showlist">
          <li>
            <i class="iconfont icon-home"></i>
            <span>银泰首页</span>
          </li>
          <li>
            <i class="iconfont icon-categorynormal"></i>
            <span>分类</span>
          </li>
          <li>
            <i class="iconfont icon-cart"></i>
            <span>购物车</span>
          </li>
          <li>
            <i class="iconfont icon-user"></i>
            <span>我的银泰</span>
          </li>
        </ul>
      </div>
      <!--导航栏-->
      <div class="qiangxian-header">
        <div class="qiangxian-header-left" v-for="(dat,index) in arr['data']" ref="thisTitle" @click="thistitle(index)">{{dat['bargaintagname']}}</div>
      </div>
      <!--导航栏下内容区-->
      <div class="qiangxian-content" v-for="(info, index) in thisdata.data.activityinfo">
        <div  class="typeOne" v-for="(act,key) in info['activitylist']" >
          <img :src="act['imgurl']" alt="" @click="jump(index,key)" >
          <div class="qiangxian-content-bottom">
            <div class="qiangxian-content-bottom-left">{{act['title']}}</div>
            <div class="qiangxian-content-bottom-right" v-if="time">{{timeZong(key)}}</div>
            <div class="qiangxian-content-bottom-right-clone" v-if="day">{{dayZong(key)}}</div>
          </div>
          <div class="qiangxian-content-position">{{act['discount']}}</div>
        </div>
      </div>
      <te-mai v-if="typeTwo"></te-mai>
    </div>
    <yt-footer></yt-footer>
    <router-view></router-view>
  </div>
</template>

<script>
  import TeMai from './TeMai'
  import YtFooter from '../common/YtFooter'
  export default {
    name: '',
    components: {
      TeMai,
      YtFooter
    },
    data () {
      return {
        // 抢先
        thisdata: null,
        arr: null,
        timestamp: '',
        Showlist: false,
        ShowMask: false,
        isShow: false,
        typeOne: true,
        typeTwo: false,
        time: true,
        day: false
      }
    },
    mounted () {
      var date1 = new Date()
      var datehour = date1.getHours()
      var dateminute = date1.getMinutes()
      if (datehour < 10) {
        datehour = `0${datehour}`
      }
      if (dateminute < 10) {
        dateminute = `0${dateminute}`
      }
      var date2 = `${date1.getFullYear()}/${date1.getMonth() + 1}/${date1.getDate()} ${datehour}:${dateminute}`
      this.timestamp = Date.parse(new Date())
      console.log(date2)
//      下半部分内容
      this.$request({
        type: 'get',
        url: `api?r=${date2}&type=5&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1`,
        header: {},
        params: {},
        success: function (res) {
          this.thisdata = res.data
        },
        failed: function (err) {
          console.log(err)
        }
      })
//      上半部分导航
      this.$request({
        type: 'get',
        url: `api?r=${date2}&methodName=products.getbargaintaglist_1.0.0&method=products.getbargaintaglist&ver=2.1`,
        header: {},
        params: {},
        success: function (res) {
          this.arr = res.data
        },
        failed: function (err) {
          console.log(err)
        }
      })
    },
    methods: {
      jump (index, index1) {
        this.Qiangxianid = this.thisdata.data.activityinfo[index].activitylist[index1].id
        this.QiangxianName = this.thisdata.data.activityinfo[index].activitylist[index1].name
        console.log(this.Qiangxianid, this.QiangxianName)
        this.$router.push({
          path: '/SalesProductlist',
          query: {
            bargainid: this.Qiangxianid,
            title: this.QiangxianName
          }
        })
      },
      // 获取时间倒计时
      timeZong (index) {
        for (let i = 0; i < this.thisdata.data.activityinfo.length; i++) {
          for (let index = 0; index < this.thisdata.data.activityinfo[i].activitylist.length; index++) {
            this.time1 = this.thisdata.data.activityinfo[i].activitylist[index].endtime
          }
        }
        var array = this.time1.substring(0, 10)
        array += ' '
        var array1 = this.time1.substring(11, 19)
        var arrA = array.concat(array1)
        var timestamp2 = Date.parse(new Date(arrA))
        var timeArr = timestamp2 - this.timestamp
        var timeSee = timeArr / 1000 / 60 / 60
        if (timeSee >= 24) {
          timeSee = Math.floor(timeSee / 24)
          return '剩' + timeSee + '天'
        } else {
          timeSee = Math.floor(timeSee)
          return '剩' + timeSee + '小时'
        }
      },
      dayZong (index) {
        for (let i = 0; i < this.thisdata.data.activityinfo.length; i++) {
          this.day1 = this.thisdata.data.activityinfo[i].starttime
        }
        var array = this.day1.substring(9, 15)
        return array
      },
      thistitle (index) {
        // 点击改变颜色
        for (let i in this.arr.data) {
          this.$refs.thisTitle[i].style.color = 'rgb(83,83,83)'
          this.$refs.thisTitle[i].style.borderBottom = 'none'
        }
        this.$refs.thisTitle[index].style.borderBottom = 2 + 'px solid rgba(229,0,79,0.8)'
        this.$refs.thisTitle[index].style.color = 'black'
        // 点击改变接口
        this.thisType = this.arr.data[index].bargaintagtype
        // 如果下标不是第三个
        if (this.thisType !== 3) {
          this.typeOne = true
          this.typeTwo = false
        } else {
          this.typeOne = false
          this.typeTwo = true
        }
        if (this.thisType !== 2) {
          this.time = true
          this.day = false
        } else {
          this.time = false
          this.day = true
        }
        var date1 = new Date()
        var datehour = date1.getHours()
        var dateminute = date1.getMinutes()
        if (datehour < 10) {
          datehour = `0${datehour}`
        }
        if (dateminute < 10) {
          dateminute = `0${dateminute}`
        }
        var date2 = `${date1.getFullYear()}${date1.getMonth() + 1}${date1.getDate()}${datehour}${dateminute}`
        this.timestamp = Date.parse(new Date())
        this.$request({
          type: 'get',
          url: `api?r=${date2}&type=${this.thisType}&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1`,
          header: {},
          params: {},
          success: function (res) {
            this.thisdata = res.data
          },
          failed: function (err) {
            console.log(err)
          }
        })
      },
      // 点击事件
      clickList () {
        this.Showlist = true
        this.ShowMask = true
        this.isShow = true
      },
      closeList () {
        this.Showlist = false
        this.ShowMask = false
        this.isShow = false
      },
      clickContent () {
        this.Showlist = false
        this.ShowMask = false
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";
  /*抢先*/
  img {
    margin-top: -3px;
  }

  .mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(39, 44, 47, 0.7);
    z-index: 30;
    animation: move1 0.1s linear;
  }

  @-webkit-keyframes move1 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  .qiangxian-top {
    background-color: white;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
    border-bottom: @border-color-more;
    line-height: 30px;
    position: relative;
    z-index: 400;
    ul {
      position: absolute;
      top: 40px;
      right: 0;
      z-index: 300;
      background-color: white;
      list-style: none;
      padding: 0 5px 5px 5px;
      animation: move1 0.1s linear;
      li {
        border-top: 1px solid rgb(193, 193, 193);
        padding: 8px;
        i {
          color: @index-boom-introduce-color;
          font-size: 25px;
        }
        .icon-user {
          font-size: 18px;
          margin-left: -5px;
        }
        .icon-home {
          color: rgb(83, 83, 83);
        }
        span {
          color: @index-boom-introduce-color;
          font-size: @font-size-medium;
        }
      }
    }
  }

  .qiangxian-top1 {
    width: 20px;
    height: 20px;
    margin-top: 10px;
  }

  .qiangxian-top2 {
    font-size: @font-size-medium;
    font-weight: 500;
    margin-top: 5px;
  }

  .qiangxian-top3 {
    width: 20px;
    height: 20px;
    margin-top: 10px;
  }

  .qiangxian-top4 {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .qiangxian-header {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(163, 163, 163);
    padding-top: 3px;
    .qiangxian-header-left {
      color: @index-boom-introduce-color;
      font-size: @font-size-medium;
      text-align: center;
      width: 20%;
      box-sizing: border-box;
      padding-top: 10px;
      padding-bottom: 10px;
      border-right: 1px solid rgb(232, 233, 232);
    }
  }

  .qiangxian-content {
    width: 100%;
    margin-top: 15px;
    .typeOne {
      position: relative;
      .qiangxian-content-position {
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(229, 0, 79, 0.8);
        padding: 4px 8px;
        color: white;
        font-size: @font-size-small;
        border-radius: 0 10px 10px 0;
      }
      img {
        width: 100%;
      }
      .qiangxian-content-bottom {
        overflow: hidden;
        width: 100%;
        padding: 5px 10px 9px 5px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(200, 200, 200);
        .qiangxian-content-bottom-left {
          float: left;
          color: @more-product-introduce-color;
          font-size: @font-size;
        }
        .qiangxian-content-bottom-right {
          float: right;
          padding-left: 20px;
          color: @color-light-gray;
          font-size: @font-size;
          background-image: url(../../common/img/life/clock.png);
          -webkit-background-size: 18px;
          background-size: 18px;
          background-repeat: no-repeat;
          background-position: -1px -2px;
        }
        .qiangxian-content-bottom-right-clone{
          position: absolute;
          bottom: 10px;
          right: 13px;
          padding-left: 20px;
          color: @color-light-gray;
          font-size: @font-size;
          background-image: url(../../common/img/life/clock.png);
          -webkit-background-size: 18px;
          background-size: 18px;
          background-repeat: no-repeat;
          background-position: -1px -2px;
        }
      }
    }
  }
</style>
