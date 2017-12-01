<template>
  <div>
    <yt-index-content-one></yt-index-content-one>
    <yt-index-content-two></yt-index-content-two>
    <yt-index-content-three></yt-index-content-three>
    <yt-index-content-four></yt-index-content-four>
    <yt-footer></yt-footer>
    <router-view></router-view>
  </div>
</template>

<script>
  import YtIndexContentOne from './YtIndexContent0.vue'
  import YtIndexContentTwo from './YtIndexContent1.vue'
  import YtIndexContentThree from './YtIndexContent2.vue'
  import YtIndexContentFour from './YtIndexContent4.vue'
  import YtFooter from '../common/YtFooter'
  export default {
    name: 'Index',
    components: {
      YtIndexContentOne,
      YtIndexContentTwo,
      YtIndexContentThree,
      YtIndexContentFour,
      YtFooter
    }
  }
</script>

<style scoped lang="less">

</style>
