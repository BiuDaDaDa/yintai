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
  </div>
  <!--活动分区-->
  <!--本期主推-->
  <div class="activity1">
    <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '品牌'">
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '棉花 爱帝'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '缔五季 缘份'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '花花公子 蒙地纳斯'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
  </div>
  <div class="activity2">
    <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '凑单'">
    <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '打底 家居服'">
      <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
    </div>
    <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '文胸 底裤'">
      <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
    </div>
  </div>
  <!--底部图-->
  <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '满减top单品'" :key="goods.templateid">
  <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '全部满减单品'" :key="goods.templateid">
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
        url: 'api?r=20171127159&os=HTML5&client_v=1.0.0&pageid=30002292&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1',
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
     width: 50%;
   }
 }
</style>
