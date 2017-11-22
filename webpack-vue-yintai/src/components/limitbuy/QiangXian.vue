<template>
  <div class="qiangxian-wrap" v-if="thisdata != null && arr != null">
    <div class="qiangxian">
      <div class="qiangxian-top">
        <img src="../../common/img/shangchangtk/arrow-left.png" alt="" class="qiangxian-top1">
        <div class="qiangxian-top2">抢先</div>
        <img src="../../common/img/shangchangtk/shenglue.png" alt="" class="qiangxian-top3">
      </div>

      <div class="qiangxian-header">
        <div class="qiangxian-header-left" v-for="(dat,index) in arr['data']" ref="thisTitle" @click="thistitle(index)">
          <span>{{dat['bargaintagname']}}</span>
        </div>
      </div>

      <div class="qiangxian-content" v-for="(act,index) in thisdata1">
        <img :src="act['imgurl']" alt="">
        <div class="qiangxian-content-bottom">
          <div class="qiangxian-content-bottom-left">{{act['title']}}</div>
          <div class="qiangxian-content-bottom-right">{{timeZong(index)}}</div>
        </div>
        <div class="qiangxian-content-position">{{act['discount']}}</div>
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
        arr: null,
        timestamp: ''
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
      this.timestamp = Date.parse(new Date())
      this.$request({
        type: 'get',
        url: `api?r=${date2}&type=5&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1`,
        header: {},
        params: {},
        success: function (res, index) {
          this.thisdata = res.data
          this.thisdata1 = this.thisdata.data.activityinfo[0].activitylist
        },
        failed: function (err) {
          console.log(err)
        }
      })
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
      timeZong (index) {
        this.time1 = this.thisdata.data.activityinfo[0].activitylist[index].endtime
        var array = this.time1.substring(0, 10)
        array += ' '
        var array1 = this.time1.substring(11, 19)
        var arrA = array.concat(array1)
        var timestamp2 = Date.parse(new Date(arrA))
        var timeArr = timestamp2 - this.timestamp
        var timeSee = timeArr / 1000 / 60 / 60
        if (timeSee > 24) {
          timeSee = Math.floor(timeSee / 24)
          return '剩' + timeSee + '天'
        } else {
          timeSee = Math.floor(timeSee)
          return '剩' + timeSee + '小时'
        }
      },
      thistitle (index) {
        this.$refs.thisTitle[index].style.color = 'black'
        this.$refs.thisTitle[index].style.borderBottom = 1 + 'px solid red'
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";

  img {
    margin-top: -3px;
  }

  .qiangxian-top {
    background-color: white;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
    border-bottom: @border-color-more;
    line-height: 40px;
  }

  .qiangxian-top1 {
    width: 15px;
    height: 15px;
    margin-top: 13px;
  }

  .qiangxian-top2 {
    font-size: @font-size-medium;
    font-weight: 500;
  }

  .qiangxian-top3 {
    width: 20px;
    height: 20px;
    margin-top: 12px;
  }

  .qiangxian-header {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(163, 163, 163);
    .qiangxian-header-left {
      color: @index-boom-introduce-color;
      font-size: @font-size-medium;
      text-align: center;
      box-sizing: border-box;
      padding: 10px;
      span {
        padding-right: 20px;
        border-right: 1px solid rgb(232, 233, 232);
      }
    }
  }

  .qiangxian-content {
    width: 100%;
    margin-top: 15px;
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
    }
  }
</style>
