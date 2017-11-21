<template>
  <div class="wrap">
    <!--会场标题-->
    <div class="my_nav">
      <i class="iconfont icon-houtui"></i>
      <span>{{title}}</span>
      <i class="iconfont icon-more"></i>
    </div>
    <div class="tagImg">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '头图'" :key="goods.templateid">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '头图1'" :key="goods.templateid">
      <div class="tagimg" v-for="aaa in myArr" v-if="aaa.templatename === '导航'">
        <img class="navimg" :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
    </div>
    <!--女装-->
    <div class="activity1">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '女装'" :key="goods.templateid">
      <div class="act_goods" v-for="(aaa,index) in myArr" v-if="aaa.templatename === `'女装品牌${index+1}'`">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '女装品牌'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '女装品牌1'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '女装品牌2'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '女装品牌3'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '女装品牌4'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '女装品牌5'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
    </div>
    <!--男装-->
    <div class="activity1">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '导语男装'" :key="goods.templateid">
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '男装'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '男装品牌2'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '男装品牌3'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
    </div>
    <!--配饰-->
    <div class="activity1">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '配饰导语'" :key="goods.templateid">
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '配饰'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '配饰1'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
    </div>
    <!--箱包-->
    <div class="activity1">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '箱包导语'" :key="goods.templateid">
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '箱包'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '箱包1'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexScrollMoneyOff',
    data () {
      return {
        title: null,
        myArr: null
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'api?r=201711201910&os=HTML5&client_v=1.0.0&pageid=30002275&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1',
        headers: {},
        params: {},
        success: function (res) {
          this.title = res.data.data.pagetitle
          this.myArr = res.data.data.templatelist
          console.log(this.myArr)
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
  img
  {
    outline-width:0;
    vertical-align:top;
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
      width: 50%;
    }
  }
  .navimg{
    width: 25%;
  }
</style>
