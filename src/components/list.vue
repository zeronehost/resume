<template>
  <div class="list">
    <div class="list-title">
      <span class="title" :class="classes">{{isString?info:info.title}}</span>
      <span class="date" v-if="info.date">{{info.date|dateFilter}}</span>
    </div>
    <div class="list-content" v-if="!isString">
      <div class="list-desc" v-if="info.desc">{{info.desc}}</div>
      <template v-if="info.projects">
        <div class="sub-list" v-for="(item, index) in info.projects" :key="index">
          <div class="sub-list-title">
            <span class="title" :class="[subClass(item.icon)]">{{item.title}}</span>
            <span class="date">{{item.date|dateFilter}}</span>
          </div>
          <div class="sub-list-content">
            <div class="list-desc" v-if="item.desc">{{item.desc}}</div>
            <template v-if="item.contents">
              <p class="icon-3" v-for="(content, index) in item.contents" :key="index">{{content}}</p>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
function isString(obj) {
  return Object.prototype.toString.call(obj) === "[object String]";
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
export default {
  name: "x-list",
  props: {
    info: [Object, String]
  },
  computed: {
    classes() {
      if(isString(this.info)) return "icon-1";
      if(this.info.icon) {
        return `iconfont ${this.info.icon}`;
      } 
      return "icon-1";
    },
    subClass() {
      return icon => {
        if(icon) return `iconfont ${icon}`;
        return "icon-2";
      }
    },
    isString() {
      return isString(this.info)
    }
  },
  filters: {
    dateFilter(input) {
      if(isObject(input)) {
        return `${input.start}~${input.end||"至今"}`
      }
      return input;
    }
  }
}
</script>
<style lang="stylus">
.list
  .list-title
    display flex
    line-height 2rem
    margin-bottom .5rem
    // color #666
    span 
      flex 1
    .title
      text-align left 
      font-size 1rem
      font-weight 900
    .date
      text-align right 
  .sub-list
    padding-left 1rem
    &:not(:last-child)
      margin-bottom 1rem
    .sub-list-title
      display flex
      span
        flex 1
    .title
      font-size 1rem
    .date
      text-align right 
  .iconfont::before
    margin-right 5px
  .sub-list-content
    padding-left 1rem
    // color #666
    p:not(:last-child)::after
      content "；"
    p:last-child::after
      content "。"
  .list-desc::after
    content "。"
</style>