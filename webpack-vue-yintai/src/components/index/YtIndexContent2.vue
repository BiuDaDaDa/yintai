<template>
  <div class="wrap">
    <div class="tag_box" v-for="(tag,index) in newArr" v-if="newArr != null && index > 2 && tag.length>0">
      <!-- tagTitle -->
      <div class="top">
        <img :src="tag[0].items[0].imgurl" alt="" @click="redirectimg(index,1,0)">
      </div>
      <div class="content1">
        <!--大图-->
        <div :class="(tag[1].templatetype === 'ThreeImgLeftOne')?name1: name2">
          <a v-for="(aaa,key) in tag[1].items" v-if="aaa.height === 302 && tag[1].templateid !==  20000027">
            <img :src="aaa.imgurl" alt="" @click="redirectimg(index,1,key)">
          </a>
        </div>
        <!--两个小图-->
        <div class="imgbox">
          <a v-for="(aaa,key) in tag[1].items" v-if="aaa.height === 150 && tag[1].templateid !==   20024178">
            <img :src="aaa.imgurl" alt="" @click="redirectimg(index,1,key)">
          </a>
        </div>
        <!--海淘馆的特殊样式-->
        <div class="imgbox" v-for="(aaa,key) in tag[1].items" v-if="tag[1].templateid === 20024178">
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
    </div>
  </div>
</template>

<script>
  import bus from '../common/eventBus'

  export default {
    name: 'YtIndexContent2',
    data () {
      return {
        tagArr: null,
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
          query: {
            searchCondition: this.url,
            title: this.title
          }
        })
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'api?r=201711211140&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1',
        header: {},
        params: {},
        success: function (res) {
          this.tagArr = res.data.data.templatelist
          console.log(this.tagArr.length)
          // 存放新的数组
          let allGoods = []
          let goods = []
          for (let i = 0; i < this.tagArr.length; i++) {
            let type = this.tagArr[i].templatetype
            if (type === 'FloorFoot' || type === 'FloorSpace' || type === 'CarouselFigure') {
              let array = goods.slice(0)
              allGoods.push(array)
              goods = []
              continue
            }
            goods.push(this.tagArr[i])
          }
          this.newArr = allGoods
          console.log(this.newArr)
          // 向导航组件部分传值
          this.busNav = this.newArr
          bus.$emit('chuanzhi', this.busNav)
        },
        failed: function (err) {
          console.log(err)
        }
      })
//    window.addEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style scoped lang="less">
  .wrap {
    background-color: #f1f1f1;
  }

  .tag_box {
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
</style>
