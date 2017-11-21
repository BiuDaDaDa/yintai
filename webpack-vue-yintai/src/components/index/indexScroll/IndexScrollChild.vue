<template>
  <div class="wrap">
    <!--会场标题-->
    <div class="my_nav">
      <i class="iconfont icon-houtui"></i>
      <span>{{title}}</span>
      <i class="iconfont icon-more"></i>
    </div>
    <div class="tagImg">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '头图1'" :key="goods.templateid">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '头图2'" :key="goods.templateid">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '头图3'" :key="goods.templateid">
    </div>
    <!--爆款商品-->
    <div class="activity1">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '爆款'">
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '商品1'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '商品2'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templateid===20024000">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
    </div>
    <!--精选满减-->
    <div class="activity1">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '品牌'">
      <div class="act_goods1" v-for="aaa in myArr" v-if="aaa.templatename === '品牌1'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods1" v-for="aaa in myArr" v-if="aaa.templatename === '品牌2'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods1" v-for="aaa in myArr" v-if="aaa.templateid===20024004">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods1" v-for="aaa in myArr" v-if="aaa.templatename === '商品4'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods1" v-for="aaa in myArr" v-if="aaa.templatename === '商品5'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods1" v-for="aaa in myArr" v-if="aaa.templatename === '商品6'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
    </div>
    <!--底部图-->
  </div>
</template>

<script>
  export default {
    name: 'IndexUnderwear',
    data () {
      return {
        title: null,
        myArr: null
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'api?r=201711201730&os=HTML5&client_v=1.0.0&pageid=30002287&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1',
        headers: {},
        params: {},
        success: function (res) {
          this.title = res.data.data.pagetitle
          this.myArr = res.data.data.templatelist
        },
        failed: function (err) {
          console.log(err)
        }
      })
    }
  }
</script>

<style scoped lang="less">
  .wrap{
    width: 100%;
  }
  .tagimg{
    width: 100%;
  }
  .act_goods{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      width: 33%;
    }
  }
  .act_goods1{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
      width: 50%;
    }
  }
</style>
