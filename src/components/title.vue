<template>
  <header class="header">
    <div class="title">{{title}}</div>
    <div class="info">
      <span v-for="(item, index) in info" :key="index" class="info-item" :class="[infoClass(item.icon)]">
        {{item.label}}
      </span>
    </div>
  </header>
</template>
<script>
export default {
  name: "x-title",
  props: {
    title: {
      type: String,
      required: true
    },
    info: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    infoClass() {
      return icon => {
        if(icon) return `iconfont ${icon}`;
        return "icon-1";
      }
    }
  }
}
</script>
<style lang="stylus">
.header
  text-align center
  .title
    font-size 2rem
  .info
    color #888
    .info-item
      font-size .8rem
      &:not(:last-child)
        padding-right 5px
        border-right 1px solid #aaa
      &:not(:first-child)
        padding-left 5px

</style>