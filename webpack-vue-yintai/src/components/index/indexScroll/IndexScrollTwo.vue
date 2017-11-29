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
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '导语'" :key="goods.templateid">
    </div>
    <!--女装-->
    <div class="activity1">
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '女装类目'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '女装类目1'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
    </div>
    <!--男装-->
    <div class="activity1">
      <img class="tagimg" :src="goods.items[0].imgurl" alt="" v-for="goods in myArr" v-if="goods.templatename === '男装'" :key="goods.templateid">
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '男装1'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
      <div class="act_goods" v-for="aaa in myArr" v-if="aaa.templatename === '男装2'">
        <img :src="bbb.imgurl" alt="" v-for="bbb in aaa.items">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IndexScrollCrazy',
    data () {
      return {
        title: null,
        myArr: null
      }
    },
    mounted () {
      this.$request({
        type: 'get',
        url: 'api?r=201711271510&os=HTML5&client_v=1.0.0&pageid=30002290&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1',
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
</style>
