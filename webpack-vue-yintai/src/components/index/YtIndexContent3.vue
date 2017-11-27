<template>
  <div class="wrap" v-if="thisdata != null && newArr != null">
    <!-- 品质箱包 -- 精选好货 -->
    <div class="pinzhi-xb" v-for="(tag,index) in newArr" v-if="index >0">
      <!--表头-->
      <div class="top" v-if="tag[0].items!=null">
        <img :src="tag[0].items[0].imgurl" alt="" @click="redirectimg(0,0)">
      </div>
      <!--大图-->
      <div :class="(tag[1].templatetype === 'ThreeImgLeftTwo')?name1: name2" v-if="tag[1].items!=null">
        <a v-for="(val,key) in tag[1].items" v-if="val.height === 302">
          <img :src="val.imgurl" alt="" @click="redirectimg(1,key)">
        </a>
      </div>
      <!--两个小图-->
      <div class="imgbox">
        <a v-for="(val,key) in tag[1].items" v-if="val.height === 150 && tag[1].items!=null">
          <img :src="val.imgurl" alt="" @click="redirectimg(1,key)">
        </a>
      </div>
      <!--三个小图-->
      <div class="content2">
        <div class="tag_content2_box" v-for="(val,key) in tag[2].items" v-if="tag[2].items!=null">
          <a @click="redirectimg(2,key)">
            <img :src="val.imgurl" alt="" >
          </a>
        </div>
      </div>
    </div>

    <!-- 精选好货 -->
    <div class="title">
      <img :src="thisdata9[0]['imgurl']" alt="">
    </div>
    <div class="jingxuan-hh">
      <div class="jingxuan-hh-content">
        <div class="jingxuan-hh-content-A" v-for="(aa, index) in thisdata" v-if="index>9">
          <div class="jingxuan-hh-content-A-left" v-for="(bb,key) in aa.items">
            <img :src="bb['imgurl']" alt="" @click="redirectimg(index,key)">
            <div class="jingxuan-hh-content-A-left-a">{{bb['extra']['productdetail']['name']}}</div>
            <div class="jingxuan-hh-content-A-left-b">
              <span class="jx-c-left-b1">￥</span>
              <span class="jx-c-left-b2">{{bb['extra']['productdetail']['price']}}.00</span>
              <span class="jx-c-left-b3">￥</span>
              <span class="jx-c-left-b4">{{bb['extra']['productdetail']['marketprice']}}.00</span>
            </div>
            <div class="pink" v-for="(cc,num) in bb['extra']['productdetail']['prmotionlist']">{{cc['plabel']}}</div>
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
        newArr: null,
        name1: 'imgleft',
        name2: 'imgright',
        url: '',
        title: ''
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
        url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2`,
        headers: {},
        params: {},
        success: function (res) {
          this.thisdata = res.data.data.templatelist
          console.log(this.thisdata)
          // 存放分割大数组
          let allArr = []
          // 存放分割小数组
          let arr = []
          for (let i = 0; i < this.thisdata.length; i++) {
            let type = this.thisdata[i].templatetype
            if (type === 'FloorFoot') {
              let array = arr.slice(0)
              allArr.push(array)
              arr = []
              continue
            }
            arr.push(this.thisdata[i])
          }
          this.newArr = allArr
          console.dir(this.newArr)
          this.thisdata9 = this.thisdata[9].items
        },
        failed: function (err) {
          console.log(err)
        }
      })
    },
    methods: {
      redirectimg (i, j) {
        this.url = this.newArr[i][i].items[j].jumpurl.split('Condition=')[1].split('&')[0] || this.newArr[i][i].items[j].jumpurl.split('Customlistid=')[1].split('&')[0]
        this.title = decodeURI(this.newArr[i][i].items[j].jumpurl.split('title=')[1].split('&')[0])
        this.$router.push({
          path: `/Sales`,
          query: {
            searchCondition: this.url,
            title: this.title
          }
        })
        console.log(this.url, this.title)
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../../common/css/index";

  .wrap {
    background-color: rgb(237, 237, 237);
  }

  .pinzhi-xb {
    width: 100%;
    margin-bottom: 3px;
    .top {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .imgbox {
      width: 50%;
      display: inline-block;
      img {
        width: 100%;
      }
    }
    .imgleft {
      width: 50%;
      float: left;
      img {
        width: 100%;
      }
    }
    .imgright {
      width: 50%;
      float: right;
      img {
        width: 100%;
      }
    }
  }

  .content2 {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    .tag_content2_box {
      width: 50%;
      img {
        width: 100%;
      }
    }
  }

  .tag_bottom {
    width: 100%;
    .bottom_box {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }

  .title {
    width: 100%;
    margin-bottom: 3px;
    img {
      width: 100%;
    }
  }

  .jingxuan-hh {
    background-color: rgb(237, 237, 237);
  }

  .jingxuan-hh-header {
    width: 100%;
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .jingxuan-hh-header img {
    width: 100%;
  }

  .jingxuan-hh-content-A {
    width: 100%;
    overflow: hidden;
    height: 100%;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: space-between;
  }

  .jingxuan-hh-content-A-left {
    width: 49.5%;
    float: left;
    background-color: #fff;
    margin-bottom: 5px;
    position: relative;
    .pink {
      position: absolute;
      top: -2px;
      left: 0;
      background-color: @index-StraightDown-bgcolor;
      color: white;
      font-size: @font-size-small;
      padding: 8px;
    }
  }

  .jingxuan-hh-content-A-left img {
    width: 100%;
  }

  .jingxuan-hh-content-A-left-a {
    width: 100%;
    height: 44px;
    overflow: hidden;
    padding: 8px;
    color: @more-product-introduce-color;
    font-size: @font-size;
    box-sizing: border-box;
    line-height: 20px;
  }

  .jingxuan-hh-content-A-left-b {
    padding: 8px;
  }

  .jx-c-left-b1 {
    font-size: @font-size-small;
    color: @color-sale-red;
  }

  .jx-c-left-b2 {
    font-size: @font-size-medium;
    color: @color-sale-red;
    font-weight: bolder;
    margin-left: -5px;
  }

  .jx-c-left-b3 {
    font-size: @font-size-small;
    color: @index-boom-introduce-color;
  }

  .jx-c-left-b4 {
    font-size: @font-size-small;
    color: @index-boom-introduce-color;
    margin-left: -5px;
    text-decoration: line-through;
  }

</style>
