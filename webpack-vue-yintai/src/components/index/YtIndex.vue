<template>
  <div>
    <yt-index-content-one></yt-index-content-one>
    <yt-index-content-two></yt-index-content-two>
    <yt-index-content-three></yt-index-content-three>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import YtIndexContentOne from './YtIndexContent0.vue'
  import YtIndexContentTwo from './YtIndexContent1.vue'
  import YtIndexContentThree from './YtIndexContent2.vue'
  export default {
    name: 'Index',
    components: {
      YtIndexContentOne,
      YtIndexContentTwo,
      YtIndexContentThree
    }
  }
</script>

<style scoped lang="less">

</style>
