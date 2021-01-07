<template>
  <header class="header">
    <div class="title">{{title}}</div>
    <div class="info">
      <template v-for="(item, index) in info">
        <a :key="index" class="info-item" :class="[infoClass(item.icon)]" :href="infoHref(item)" >{{item.label}}</a>
      </template>
    </div>
  </header>
</template>
<script>
const TYPE = {
  email: "mailto",
  tel: "tel"
}
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
    },
    infoHref() {
      return info => {
        let type = info.type;
        return type && TYPE[info.type] ? `${TYPE[info.type]}:${info.label}` : false;
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
      color #888
      text-decoration none
      &:link,&:visited,&:hover,&:actived
        color #888
      font-size .95rem
      &:not(:last-child)
        padding-right 5px
        border-right 1px solid #aaa
      &:not(:first-child)
        padding-left 5px

</style>