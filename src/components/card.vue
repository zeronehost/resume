<template>
  <div class="card">
    <div class="card-title" :class="classes">{{info.title}}</div>
    <div class="card-content">
      <div>{{info.desc}}</div>
      <x-list v-for="(item, index) in info.lists" :key="index" :info="item" />
    </div>
  </div>
</template>
<script>
import XList from "./list";
export default {
  name: "x-card",
  components: {
    XList
  },
  props: {
    info: Object
  },
  computed: {
    classes() {
      if(this.info.icon) {
        return `iconfont ${this.info.icon}`;
      } 
      return "icon-1";
    }
  }
}
</script>
<style lang="stylus">
.card
  padding 10px 10px 0 10px
  .card-title
    font-weight 900
    line-height 3rem
    border-bottom 4px solid #aaa
    font-size 1.3rem
  .card-content
    padding 10px
    &:last-child
      padding-bottom 0
</style>