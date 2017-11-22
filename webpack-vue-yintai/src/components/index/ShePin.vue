<template>
  <div id="SCL">
    <div class="ad"></div>
    <she-pin-content></she-pin-content>
    <router-view></router-view>
  </div>
</template>

<script>
  import ShePinContent from './ShePinContent'
  export default {
    name: 'ShePin',
    components: {
      ShePinContent
    }
  }
</script>

<style scoped lang="less">
.ad{
  /*height:150px;*/
}
</style>
