<template>
  <div class="wrap">
    <div class="tag_box" v-for="(tag,index) in newArr" v-if="newArr != null && index > 0">
      <!-- tagTitle -->
      <div class="top">
        <img :src="tag[0].items[0].imgurl" alt="" @click="redirectimg(index,1,0)">
      </div>
      <div class="content1">
        <!--大图-->
        <div :class="(tag[1].templatetype == 'ThreeImgLeftOne')?name1: name2">
          <a v-for="(aaa,key) in tag[1].items"  v-if="aaa.height === 302 && tag[1].templateid !== 20024064">
            <img :src="aaa.imgurl" alt="" @click="redirectimg(index,1,key)">
          </a>
        </div>
        <!--两个小图-->
        <div class="imgbox" >
          <a v-for="(aaa,key) in tag[1].items"  v-if="aaa.height === 150 && tag[1].templateid !== 20024064">
            <img :src="aaa.imgurl" alt="" @click="redirectimg(index,1,key)">
          </a>
        </div>
        <!--海淘馆的特殊样式-->
        <div class="imgbox" v-for="(aaa,key) in tag[1].items" v-if="tag[1].templateid === 20024064">
          <a><img :src="aaa.imgurl" alt="" @click="redirectimg(index,1,key)"></a>
        </div>
      </div>
      <div class="content2">
        <div class="tag_content2_box" v-for="(aaa,key) in tag[2].items" v-if="tag[2]!=null">
          <a>
            <img :src="aaa.imgurl" alt="" @click="redirectimg(index,2,key)">
          </a>
        </div>
      </div>
      <div class="tag_bottom" v-if="tag[3] !=null ">
        <div class="bottom_box">
          <a><img :src="tag[3].items[0].imgurl" alt=""></a>
        </div>
      </div>
      <div class="tag_double" v-for="(tag,index) in tagArr1" v-if="tagArr1[index].templatetype=='ProductDoubleColumn'">
        <div class="tag_double_box" v-for="(aaa,key) in tag.items" @click="toPro(index,key)">
          <img :src="aaa.imgurl" alt="" class="aaaimg">
          <div class="pdc-info">
            <!--商品的简介和单价，-->
            <div class="pdc-info-text"><img src="https://r.ytrss.com/mobile/img/miao-card-small.png" alt="">{{aaa.extra.productdetail.name}}</div>
            <div class="pdc-info-price"><span class="newprice">￥{{aaa.extra.productdetail.price}}.00</span><span class="oldprice">￥{{aaa.extra.productdetail.marketprice}}.00</span></div>
          </div>
        </div>
      </div>
    </div>
.
  </div>
</template>

<script>
  export default {
    name: 'YtIndexContent2',
    data () {
      return {
        tagArr: null,
        tagArr1: {},
        left: 'contentLeft',
        right: 'contentRight',
        newArr: null,
        name1: 'imgleft',
        name2: 'imgright',
        // 传递值的数组
        busNav: [],
        url: '',
        title: ''
      }
    },
    methods: {
      redirectimg (i, j, k) {
        this.url = this.newArr[i][j].items[k].jumpurl.split('Condition=')[1].split('&')[0] || this.newArr[i][j].items[k].jumpurl.split('Customlistid=')[1].split('&')[0]
        this.title = decodeURI(this.newArr[i][j].items[k].jumpurl.split('title=')[1].split('&')[0])
        this.$router.push({
          path: '/SalesProductList',
          query: {searchCondition: this.url, title: this.title}
        })
      },
      toPro (i, j) {
        this.title = this.tagArr[i].items[j].itemid
        this.$router.push({path: '/prd', query: {title: this.title}})
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
        url: `api?r=${date2}&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2`,
        header: {},
        params: {},
        success: function (res) {
          this.tagArr = res.data.data.templatelist
          this.tagArr1 = res.data.data.templatelist
          console.log(this.tagArr.length)
          // 存放新的数组
          let allGoods = []
          let goods = []
          for (let i = 0; i < this.tagArr.length; i++) {
            let type = this.tagArr[i].templatetype
            if (type === 'FloorFoot' || type === 'FloorSpace') {
              let array = goods.slice(0)
              allGoods.push(array)
              goods = []
              continue
            }
            goods.push(this.tagArr[i])
          }
          this.newArr = allGoods
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang="less">
  @import '../../common/css/index';
  .wrap{
    background-color: #f1f1f1;
  }
  .tag_box{
    width: 100%;
    margin-bottom: 10px;
    .top {
      width: 100%;
      img {
        width: 100%;
      }
    }
    .content1 {
      width: 100%;
      .imgbox{
        width: 50%;
        display: inline-block;
        img {
          width: 100%;
        }
      }
      .imgleft{
        width: 50%;
        float: left;
        img {
          width: 100%;
        }
      }
      .imgright{
        width: 50%;
        float: right;
        img {
          width: 100%;
        }
      }
    }
  }
  .content2 {
    width: 100%;
    display: flex;
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
  .tag_double{
    width:48%;
    padding:1%;
    display:inline-block;
    .tag_double_box{
      width:100%;
      .aaaimg{
        width:100%;
      }
      .pdc-info-text{
        height:50px;
        line-height:25px;
        overflow: hidden;
        img{
          height:40%;
        }
      }
      .pdc-info-price{
        padding:5px 0;
        .newprice{
          color: red;
          font-size: @font-size-medium-x;
          margin-right: 10px;
        }
        .oldprice{
          color:@product-price-title-price-color;
          text-decoration: line-through;
        }
      }
    }
  }
</style>
