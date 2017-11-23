<template>
  <div class="life-wrap" v-if="thisdata != null">
    <div class="mask" v-if="ShowMask" @click="clickContent"></div>
    <div class="mask2" v-if="ShowMask2" @click="closeChange"></div>
    <div class="life">

      <div class="life-top">
        <img src="../../common/img/shangchangtk/arrow-left.png" alt="" class="life-top1">
        <div class="life-top2">{{thisdata.data.pagetitle}}</div>
        <img src="../../common/img/shangchangtk/shenglue.png" alt="" class="life-top3" @click="clickList">
        <img src="../../common/img/shangchangtk/pink-shenglue.png" alt="" class="life-top4" @click="closeList" v-if="isShow">
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

      <div class="life-footer-a-clone" v-if="isClone">
        <div class="life-footer-a-div-clone">
          <div v-for="ite in thisdata8" class="life-footer-a-div1-clone">{{ite['extra']['navigationname']}}</div>
          <img src="../../common/img/life/arrow-down.png" alt="" class="life-footer-a-arrow-clone" @click="openChange">
        </div>
      </div>

      <div class="life-change" v-if="isChange">
        <div class="life-change-top">
          <div class="life-change-top-left">切换楼层</div>
          <div class="life-change-top-right">
            <img src="../../common/img/shangchangtk/arrow-top.png" alt="" @click="closeChange">
          </div>
        </div>
        <div class="life-change-bottom">
          <div v-for="ite in thisdata8" class="life-change-bottom-div">{{ite['extra']['navigationname']}}</div>
        </div>
      </div>

      <div class="desk"></div>

      <div class="life-header" v-for="(img,index) in thisdata1" v-if="index<3">
        <img :src="img['items'][0]['imgurl']" alt="">
      </div>

      <div class="life-content">
        <div class="life-content1">
          <img :src="thisdata1[3]['items'][0]['imgurl']" alt="" class="life-content1-a">
          <div class="big">
            <div class="life-content-bb">
              <div class="life-content-b" v-for="item in thisdata4">
                <img :src="item['imgurl']" alt="" class="life-content-b1">
                <div class="life-content-b2">{{item['extra']['productdetail']['name']}}</div>
                <div class="life-content-b3">
                  <span>￥ {{item['extra']['productdetail']['price']}}.00</span>
                </div>
                <div class="life-content1-manjian" v-for="aa in item.extra.productdetail.prmotionlist">{{aa.plabel}}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="life-content1">
          <img :src="thisdata1[5]['items'][0]['imgurl']" alt="" class="life-content1-a">
          <div class="big">
            <div class="life-content-bb">
              <div class="life-content-b" v-for="item in thisdata6">
                <img :src="item['imgurl']" alt="" class="life-content-b1">
                <div class="life-content-b2">{{item['extra']['productdetail']['name']}}</div>
                <div class="life-content-b3">
                  <span>￥ {{item['extra']['productdetail']['price']}}.00</span>
                </div>
                <div class="life-content1-manjian" v-for="aa in item.extra.productdetail.prmotionlist">{{aa.plabel}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="life-footer">
        <div class="life-footer-a">
          <img :src="thisdata1[7]['items'][0]['imgurl']" alt="" class="life-footer-a-img">
          <div v-if="isSee">
            <div class="life-footer-a-div">
              <a href="#arr[ind].id" v-for="(ite, ind) in thisdata8" name="arr[ind].id">
                <div class="life-footer-a-div1" name="ind">{{ite['extra']['navigationname']}}</div>
                <img src="../../common/img/life/arrow-down.png" alt="" class="life-footer-a-arrow">
              </a>
            </div>
          </div>
          <div class="hui" v-if="isHui"></div>
        </div>

        <div class="life-footer-b" v-for="(imgs,index) in thisdata1" v-if="index>8">
          <div class="lf-footer-b-left" v-for="img in imgs['items']" name="arr[ind].id">
            <img :src="img['imgurl']" alt="">
            <div class="lf-footer-b-left2">
              <div class="lf-fb-left2">{{img['extra']['productdetail']['name']}}</div>
              <div class="lf-fb-left3">
                <span class="lf-fb-left3-p1">￥</span>
                <span class="lf-fb-left3-p2">{{img['extra']['productdetail']['price']}}.00</span>
                <span class="lf-fb-left3-p3">￥</span>
                <span class="lf-fb-left3-p4">{{img['extra']['productdetail']['marketprice']}}.00</span>
              </div>
            </div>
            <div class="lf-footer-b-left-manjian" v-for="aa in img.extra.productdetail.prmotionlist">{{aa.plabel}}</div>
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
        thisdata: null,
        thisdata1: '',
        thisdata8: '',
        thisdata4: '',
        Showlist: false,
        ShowMask: false,
        ShowMask2: false,
        arr: [
          {'id': '21-473-6689'},
          {'id': '20-791-7073'},
          {'id': '21-191-1547'},
          {'id': '21-473-3042'}
        ],
        scroll: '',
        isClone: true,
        isHui: false,
        isSee: true,
        isShow: false,
        isChange: false
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
      var date2 = `${date1.getFullYear()}${date1.getMonth() + 1}${date1.getDate()}${datehour}${dateminute}`
      this.$request({
        type: 'get',
        url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=30002069&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1`,
        header: {},
        params: {},
        success: function (res) {
          this.thisdata = res.data
          this.thisdata1 = res.data.data.templatelist
          this.thisdata4 = this.thisdata1[4]['items']
          this.thisdata6 = this.thisdata1[6]['items']
          this.thisdata8 = this.thisdata1[8]['items']
        },
        failed: function (err) {
          console.log(err)
        }
      })
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 500) {
          this.isSee = false
          this.isHui = true
          this.isClone = true
        } else if (scrollTop <= 500) {
          this.isSee = true
          this.isHui = false
          this.isClone = false
        }
      },
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
      },
      openChange () {
        this.isChange = true
        this.isClone = false
        this.ShowMask2 = true
      },
      closeChange () {
        this.isChange = false
        this.isClone = true
        this.ShowMask2 = false
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";

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
  .mask2{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(39, 44, 47, 0.5);
    z-index: 30;
  }

  .life-wrap {
    background-color: rgb(237, 237, 237);
  }

  img {
    margin-top: -3px;
  }

  .life-top {
    background-color: white;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    padding: 10px 15px 8px 15px;
    box-sizing: border-box;
    border-bottom: @border-color-more;
    position: fixed;
    z-index: 100;
    ul {
      position: absolute;
      top: 36px;
      right: 0;
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

  .life-footer-a-clone {
    width: 100%;
    margin-bottom: 3px;
    background-color: white;
    position: fixed;
    top: 35px;
    z-index: 500;
    border-top: 1px solid rgb(193, 193, 193);
    .life-footer-a-div-clone {
      width: 90%;
      position: relative;
      display: inline-flex;
      justify-content: space-around;
      .life-footer-a-div1-clone {
        color: @product-price-title-price-color;
        font-size: @font-size;
        padding: 10px;
      }
      .life-footer-a-arrow-clone {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -22px;
        top: 6px;
      }
    }
  }

  .life-change{
    width: 100%;
    position: fixed;
    top: 35px;
    background-color: white;
    z-index: 500;
    .life-change-top{
      overflow: hidden;
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
      padding: 5px 10px;
      box-sizing: border-box;
      .life-change-top-left{
        float: left;
        margin-top: 5px;
        color:@index-boom-introduce-color;
        font-size:@font-size;
        font-weight: bolder;
      }
      .life-change-top-right{
        float: right;
        img{
          width: 25px;
          height: 25px;
        }
      }
    }
    .life-change-bottom{
      display: inline-flex;
      justify-content: space-between;
      width: 90%;
      padding: 5px 10px 10px 20px;
      box-sizing: border-box;
      .life-change-bottom-div{
        color:@product-price-title-price-color;
        font-size:15px;
      }
    }
  }

  .life-top1 {
    width: 15px;
    height: 15px;
  }

  .life-top2 {
    font-size: @font-size-medium;
    font-weight: 500;
  }

  .life-top3 {
    width: 20px;
    height: 20px;
  }

  .life-top4 {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
    right: 15px;
  }

  .desk {
    height: 38px;
  }

  .life-header {
    width: 100%;
  }

  .life-header img {
    width: 100%;
  }

  .life-content {
    background-color: white;
  }

  .life-content1 {
    width: 100%;
  }

  .life-content1-a {
    width: 100%;
  }

  .big{
    overflow-x:scroll;
  }

  .life-content-bb {
    display: inline-flex;
    padding-left: 2px;
  }

  .life-content-b {
    width: 90px;
    position: relative;
    margin-right: 4px;
    .life-content-b1 {
      width: 100%;
      border: 1px solid rgb(217, 217, 217);
    }
    .life-content-b2 {
      height: 36px;
      line-height: 18px;
      font-size: @font-size;
      color: @index-boom-introduce-color;
      width: 100%;
      padding-top: 4px;
      padding-bottom: 2px;
      overflow: hidden;
    }
    .life-content-b3 {
      width: 100%;
      margin-top: 4px;
      padding-bottom: 4px;
      span {
        font-size: @font-size-small;
        color: @color-sale-red;
        font-weight: bold;
      }
    }
    .life-content1-manjian {
      position: absolute;
      top: -2px;
      left: 0;
      background-color: @index-StraightDown-bgcolor;
      color: white;
      font-size: @font-size-small;
      padding: 4px 8px;
    }
  }

  .life-footer-a {
    width: 100%;
    margin-bottom: 3px;
    background-color: white;
    position: relative;
    .hui {
      height: 34px;
      width: 100%;
      background-color: rgb(237, 237, 237);
      position: absolute;
      top: 44px;
      left: 0;
    }
    .life-footer-a-img {
      width: 100%;
    }
    .life-footer-a-div {
      width: 90%;
      position: relative;
      display: inline-flex;
      justify-content: space-around;
      .life-footer-a-div1 {
        color: @product-price-title-price-color;
        font-size: @font-size;
        padding: 10px;
      }
      .life-footer-a-arrow {
        width: 28px;
        height: 28px;
        position: absolute;
        right: -22px;
        top: 6px;
      }
    }
  }

  .life-footer-b {
    width: 100%;
    margin-top: 5px;
    display: inline-flex;
    justify-content: space-between;
    .lf-footer-b-left {
      width: 49.5%;
      background-color: white;
      box-sizing: border-box;
      margin-bottom: 3px;
      position: relative;
      img {
        width: 100%;
      }
      .lf-footer-b-left-manjian {
        position: absolute;
        top: -2px;
        left: 0;
        background-color: @index-StraightDown-bgcolor;
        color: white;
        font-size: @font-size-small;
        padding: 4px 8px;
      }
      .lf-footer-b-left2 {
        padding: 0 8px;
        .lf-fb-left2 {
          color: @more-product-introduce-color;
          font-size: @font-size;
          line-height: 22px;
          height: 44px;
          overflow: hidden;
        }
        .lf-fb-left3 {
          width: 100%;
          margin-top: 3px;
          .lf-fb-left3-p1 {
            font-size: @font-size-small;
            color: @color-sale-red;
          }
          .lf-fb-left3-p2 {
            font-size: @font-size-medium;
            color: @color-sale-red;
            font-weight: bolder;
            margin-left: -5px;
          }
          .lf-fb-left3-p3 {
            font-size: @font-size-small;
            color: @index-boom-introduce-color;
          }
          .lf-fb-left3-p4 {
            font-size: @font-size-small;
            color: @index-boom-introduce-color;
            margin-left: -5px;
            text-decoration: line-through;
            padding-bottom: 3px;
          }
        }
      }
    }
  }
</style>
