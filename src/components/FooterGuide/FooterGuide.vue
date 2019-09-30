<template>
  <div class="footer_guide" >
    <div class="guide_item " @click="goto('/msite')" :class="{active: isCurrpath('/msite')}">
      <span class="item_icon">
        <i class="icon-waimai"></i>
      </span>
      <span>首页</span>
    </div>
    <div class="guide_item" @click="goto('/search')" :class="{active: isCurrpath('/search')}">
      <span class="item_icon">
        <i class="icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </div>
    <div class="guide_item" @click="goto('/order')" :class="{active: isCurrpath('/order')}">
      <span class="item_icon">
        <i class="icon-dingdan"></i>
      </span>
      <span>订单</span>
    </div>
    <div class="guide_item" @click="goto('/profile')" :class="{active: isCurrpath('/profile')}">
      <span class="item_icon">
        <i class=" icon-wode"></i>
      </span>
      <span>我的</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterGuide",
   methods:{
     goto(path){
       this.$router.replace(path);
     },
     isCurrpath(path){
     return this.$route.path===path;
     },
   }
};
</script>
<style lang="scss">
@import "../../common/style/mixins";
.footer_guide {
  @include top-border-1px(#e4e4e4);
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  .guide_item{
    display: flex;
    flex: 1;  
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999;
    &.active{
      color:#02a774;
    }
  }
  span{
    font-size:12px;
    margin-top :2px;
    margin-bottom :2px;
  }
  i{
    font-size: 22px;
  }
}
</style>
