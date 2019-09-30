<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="this.$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide  from "@/components/FooterGuide/FooterGuide"
export default {
  name: 'App',
  components:{
    FooterGuide,
  },
}
</script>

<style>

</style>
