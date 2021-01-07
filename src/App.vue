<template>
  <div id="app">
    <x-title :title="name" :info="info" />
    <x-card v-for="(item, index) in lists" :key="index" :info="item" />
  </div>
</template>

<script>
import XTitle from "./components/title";
import XCard from "./components/card";
import infos from "./default.json";
export default {
  name: 'App',
  components: {
    XTitle,XCard
  },
  data(){
    return infos
  }
}
</script>

<style lang="stylus">
:root
  font-size 14px
  color #333
*
  padding 0
  margin 0
  box-sizing border-box
#app
  width 900px
  margin 0 auto
  // box-shadow 0 0 10px #ccc
  padding 10px

.icon-1::before
  content "➤"
  margin-right 5px
.icon-2::before
  content "☞"
  margin-right 5px
.icon-3::before
  content "➣"
  margin-right 5px
.iconfont::before
  margin-right 5px
</style>
