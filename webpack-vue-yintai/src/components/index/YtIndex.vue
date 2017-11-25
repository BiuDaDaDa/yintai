<template>
  <div>
    <yt-index-content-one></yt-index-content-one>
    <yt-index-content-two></yt-index-content-two>
    <yt-index-content-three></yt-index-content-three>
<<<<<<< HEAD
    <!--<router-view></router-view>-->
=======
    <yt-index-content-four></yt-index-content-four>
    <router-view></router-view>
>>>>>>> 8cc864ca81cfd74b75370e17aa0bab8b3920886d
  </div>
</template>

<script>
  import YtIndexContentOne from './YtIndexContent0.vue'
  import YtIndexContentTwo from './YtIndexContent1.vue'
  import YtIndexContentThree from './YtIndexContent2.vue'
  import YtIndexContentFour from './YtIndexContent3.vue'
  export default {
    name: 'Index',
    components: {
      YtIndexContentOne,
      YtIndexContentTwo,
      YtIndexContentThree,
      YtIndexContentFour
    }
  }
</script>

<style scoped lang="less">

</style>
