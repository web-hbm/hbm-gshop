<template>
  <header class="header">
    <slot name="search"></slot>
    <a class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </a>
    <slot name="login"></slot>
  </header>
</template>
<script>
export default {
  name: "HeaderTop",
  props:{
      title:String
  }
};
</script>
<style lang="scss" scoped>
@import "../../common/style/mixins";
  .header {
    background-color: #02a774;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 45px;
    .header_search {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      width: 10%;
      height: 50%;
    }
    .icon-sousuo {
      font-size: 25px;
      color: #fff;
    }
    .header_title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      text-align: center;
      .header_title_text {
        font-size: 20px;
        color: #fff;
        display: block;
      }
    }
    .header_login {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      font-size: 14px;
      .header_login_text {
        color: #fff;
      }
    }
  }
</style>