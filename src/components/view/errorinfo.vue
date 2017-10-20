<template>
  <div class="errorDiv">
    <span class="errortext">{{title}}</span>
    <i v-on:click="reload()" class="iconchongshi iconfont icon-iconziti38"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        title: '信息异常请稍后重试'
      };
    },
    methods: {
        reload () {
            this.$emit('reloadData', 'nihao');
        }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/fonticon/iconfont.css"
  .errorDiv
    width: 100%
    height: 100%
    position: absolute;
    left: 0px
    top: 0px
    bottom: 0px
    background-color: white
    .errortext
      display: block
      margin-top: 45%
      text-align: center
      font-size: 18px
    .iconchongshi
      margin-top: 30px
      display: block
      text-align: center
      color: #7e8c8d
      font-size: 40px
</style>
