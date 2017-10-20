<template>
  <div class="alldeals">
    <ul id="ulinfos">
      <div class="headtitle border-1px">
        <i v-on:click="closeAlldeals()" class="returnicon iconfont icon-fanhui"></i>
        订单列表
      </div>
      <li v-for="(item, index) in items">
        <div class="dealname border-1px">
          <p class="numberText">订单编号:</p>
          <p class="dealNumber">{{dealNumber}}</p>
          <p class="payMode">{{payResultText}}</p>
        </div>
        <div v-on:click="selectDeal(index, $event)" class="content">
          <img class="imghead" src="http://imgtu.5011.net/uploads/content/20170414/6256421492148399.jpg"/>
          <div class="contentinfo">
            <span class="dealtimetext">下单时间:</span>
            <span class="dealtimetext">{{dealNumber}}</span>
            <span class="dealtimetext"> 数量: {{payNum}}</span>
            <span> 订单总额: <p class="moneycolor">{{totalNumber}}</p> ({{payModeText}})</span>
          </div>
        </div>
        <div class="dealmanager clearfix">
          <p class="dealbtn">去支付</p>
          <p class="dealbtn">取消订单</p>
        </div>
        <span  v-show="index !== (items.length -1)" class="divider_line"></span>
      </li>
    </ul>
    <v-dealdetail ref="dealinforef"></v-dealdetail>
  </div>
</template>

<script type="text/ecmascript-6">
  import dealdetail from './dealdetails.vue';
  import * as androidjs from '../../common/js/android/androidjs';
  import * as api from '../../api/apihelp';
  export default {
    props: {
      dealNumber: {
        type: String,
        default: 'a14s6ds21wg2ssd3348hdkalhf'
      },
      payResult: {
          default: 0
      },
      payNum: {
          default: 0
      },
      totalNumber: {
          default: '0.00'
      },
      payMode: {
          default: 0
      },
      items: {
          default: function () {
            return [ {}, {}, {}, {}, {}, {}, {}, {}, {} ];
          }
      }
    },
    data () {
      return ({
      });
    },
    created: function () {
      console.log('created all');
//      window.getAllDetails = this.getAllDetails;
    },
    beforeMount: function () {
      console.log('beforeMount all');
    },
    mounted: function () {
      console.log('mounted all');
//      this.$nextTick(() => {
//        var id = window.seller.getStringId();
//        this.getAllDetails(id, 'nihao');
//      });
    },
    beforeDestory: function () {
      console.log('beforeDestory all');
    },
    destoryed: function () {
      console.log('destoryed all');
    },
    beforeUpdate: function () {
      console.log('beforeUpdate all');
    },
    updated: function () {
      console.log('updated all');
    },
    methods: {
      getAllDetails (type, userId) {
        api.getAllDeals(type + userId).then(res => {
          console.log(res);
          window.seller.showDetail();
        }).catch(err => {
          console.log(err);
        });
      },
      selectDeal (index, event) {
        this.$refs.dealinforef.show(index);
      },
      closeAlldeals () {
        androidjs.closeAllDetails();
      }
    },
    computed: {
      payResultText () {
            return this.payResult === 0 ? '未付款' : this.payResult === 1 ? '已付款' : this.payResult === 2 ? '订单过期' : '';
      },
      payModeText () {
        return this.payMode === 0 ? '支付宝' : '微信';
      }
    },
    components: {
      'v-dealdetail': dealdetail
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/fonticon/iconfont.css"
  @import "../../common/stylus/index.styl"
  .alldeals
    padding: 14px
    .headtitle
      font-size: 18px
      font-weight: bold
      text-align: center
      line-height: 44px
      position: relative
      .returnicon
        position: absolute
        left: 0px
    .ulinfos
      overflow: hidden
    .divider_line
      display: block
      height: 4px
      margin-bottom: 14px
      margin-top: 10px
      background-color: rgba(7, 17, 27, 0.1)
      width: 100%
    .dealname
      position: relative
      padding-bottom: 6px
      border-1px(rgba(7, 17, 27, 0.1))
      .numberText
        display: block
        text-align: left
        font-size: 20px
        color: black
      .dealNumber
        padding-top: 5px
        line-height: 18px
        font-size: 14px
        color: #7e8c8d
      .payMode
        position: absolute
        right: 14px
        top: 50%
        color: #ff33aa
        transform: translateY(-70%)
    .content
      padding-bottom: 6px
      padding-top: 6px
      .imghead
        float: left
        display: inline-block
        height: 100px
        width: 100px;
      .contentinfo
        display: flex
        height: 100px
        padding-left: 6px
        flex-direction: column
        justify-content center
        color: #7e8c8d
        .dealtimetext
          padding-bottom: 5px
        .moneycolor
          color: #ff33aa
    .dealmanager
      line-height: 20px
      font-size: 0px
      width: 100%
      .dealbtn
        margin-left: 10px
        float: right
        font-size: 16px
        padding: 4px 10px
        border:1px solid red
        border-radius: 5px


</style>
