<template>
  <transition name="move">
    <div v-show="showFlag" class="dealdetails" ref="dealsitems">
    <div class="dealscontent">
      <div class="headtitle">
        <i v-on:click="hidedetail()" class="returnicon iconfont icon-fanhui"></i>
        订单详情
      </div>
      <div class="payResult">未付款</div>
      <div class="addressdiv">
        <i class="addressicon iconfont icon-location"></i>
        <div class="addressinfos">
          <span class="addresstext">收货地址: 北京市北京市东城区  我就是测试路详细地址的街道马上的吧小区18好楼三单元门牌号222室</span>
          <span class="userinfo">联系人姓名    15345632123</span>
        </div>
      </div>
      <div class="dealtotaldiv border-1px dealstate">
        <span class="dealstext">订单状态</span>
        <span v-on:click="showToast()" class="dealsnum payDeal">去支付</span>
      </div>
      <div class="dealtotaldiv">
        <span class="dealstext">订单信息</span>
        <span class="dealsnum">共2件</span>
      </div>
      <ul class="dealsitemsdiv">
        <li v-for="(item, index) in items" class="good-item border-1px">
          <div class="contentitem">
            <img class="imghead" src="http://imgtu.5011.net/uploads/content/20170414/6256421492148399.jpg"/>
            <div class="contentinfo">
              <span class="goodName">久爱 越碟 牛奶 套装什么的的东西反正挺妮妲山东师大代售点刺激</span>
              <span class="goodmode">[规格]：套餐一 紫罗兰均码 (衣服＋帽子＋内衣＋白色丝袜)</span>
              <div class="pricenumdiv">
                <span>$59.00</span>
                <span class="goodsnum">X1</span>
              </div>
            </div>
          </div>
          <span  v-show="index !== (items.length -1)" class="divider_line"></span>
        </li>
      </ul>
      <div class="giftdiv">
        <div class="divider border-1px"></div>
        <div class="gift">赠品赠送</div>
        <ul class="giftitems">
          <li v-for="(item, index) in items">
            <span>大编织袋   X1</span>
          </li>
        </ul>
      </div>
      <div class="fulldivider"></div>
      <div class="dealpricesdiv border-1px">
        <span>订单总额</span>
        <span class="prices">$122.00</span>
      </div>
      <div class="dealpriceinfos">
        <span>商品总价：</span>
        <span class="pricediscount"> $132.00</span>
      </div>
      <div class="dealpriceinfos">
        <span>运费：</span>
        <span class="pricediscount"> ＋$8.00</span>
      </div>
      <div class="dealpriceinfos">
        <span>运费减免：</span>
        <span class="pricediscount"> －8.00</span>
      </div>
      <div class="dealpriceinfos">
        <span>优惠减免：</span>
        <span class="pricediscount"> －$10.00</span>
      </div>
      <div class="fulldivider"></div>
      <div class="dealpricesdiv border-1px">
        <span>订单信息</span>
      </div>
      <div class="dealpriceinfos">
        <span>下单日期：</span>
        <span class="pricediscount"> 2017-10-18 10:33</span>
      </div>
      <div class="dealpriceinfos">
        <span>订单编号：</span>
        <span class="pricediscount"> 1293921fj2934d343</span>
      </div>
      <div class="dealpriceinfos">
        <span>付款方式：</span>
        <span class="pricediscount">支付宝</span>
      </div>
      <div class="dealpriceinfos messagediv">
        <span>留言：</span>
        <span class="message">打扫打扫打扫打扫打扫打扫打扫速度速度速度速度谁都颠三倒四的无</span>
      </div>
    </div>
  </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import * as api from '../../common/js/android/androidjs';
  export default {
    props: {
      items: {
        default: function () {
          return [ {}, {} ];
        }
      }
    },
    data () {
      return {
        showFlag: false
      };
    },
    created: function () {
      this.$nextTick(function () {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.dealsitems, {
            click: true,
            startX: 0,
            startY: 0
          });
        }
        window.hideDealDetails = this.hidedetail;
      });
    },
    methods: {
      show () {
        this.showFlag = true;
        api.showDetail();
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.dealsitems, {
              click: true,
              startX: 0,
              startY: 0
            });
          }
          this.scroll.refresh();
        });
      },
      showToast () {
          api.androidToString('sdd');
      },
      hidedetail () {
        this.showFlag = false;
        api.closeDetails();
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../static/fonticon/iconfont.css"
  @import "../../common/stylus/index.styl"
  .dealdetails
    overflow: hidden
    position: fixed
    left: 0px
    top: 0px
    bottom: 0px
    background-color: white
    width: 100%
    padding-top: 14px
    .dealscontent
      width: 100%;
      min-height: 100%
      .headtitle
        font-size: 18px
        font-weight: bold
        text-align: center
        line-height: 44px
        position: relative
        .returnicon
          position: absolute
          padding-left: 14px
          left: 0px
      .payResult
        line-height: 26px
        background-color: black
        padding: 10px 14px
        color: white
        font-weight: bold
        font-size: 18px
      .addressdiv
        width: 100%
        display: flex
        align-items: center
        background-color: #ffa500
        padding: 10px 14px
        .addressicon
          display: inline-block
          width: auto
          color: black
          font-size: 20px
        .addressinfos
          flex: 1
          width: 100%
          padding: 0px 20px 0px 14px
          color: black
          .addresstext
            line-height: 16px
            display: block
            font-size: 12px
          .userinfo
            display: block
            margin-top: 14px
            font-weight: bold
            font-size: 12px
      .dealstate
        border-1px(rgba(7, 17, 27, 0.1))
      .dealtotaldiv
        padding: 0px 14px
        font-size: 16px
        font-weight: bold
        line-height: 40px
        .dealsnum
          float: right
        .payDeal
          color: white
          padding: 0px 10px
          margin-top: 7px
          line-height: 26px
          font-weight: normal
          background-color: #b22222
          border-radius: 4px
      .dealsitemsdiv
        font-size: 0px
        padding: 0px 14px
        .good-item
          border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border-none()
        .contentitem
          display: flex
          padding: 10px 0px
          align-items: center
          .imghead
            height: 100px
            width: 100px;
          .contentinfo
            flex: 1
            padding-left: 10px
            .goodName
              display: block
              color: black
              font-size: 12px
            .goodmode
              margin-top: 10px
              display: block
              color: #666
              font-size: 12px
            .pricenumdiv
              margin-top: 10px
              font-size: 12px
              font-weight: bold
              line-height: 20px
              .goodsnum
                float: right

      .giftdiv
        padding: 0px 14px 14px 14px
        color: black
        font-size: 12px
        .divider
          display: block
          width: 100%
          border-1px(rgba(7, 17, 27, 0.1))
        .gift
          padding-top: 14px
        .giftitems
          line-height: 14px
          padding-top: 6px

      .fulldivider
          width: 100%
          background-color: rgba(7,17,27, 0.1)
          height: 6px
      .dealpricesdiv
        font-size: 16px
        font-weight: bold
        line-height: 40px
        padding: 0px 14px
        border-1px(rgba(7, 17, 27, 0.1))
        .prices
          float: right
          color: #ffa500
      .dealpriceinfos
        font-size: 12px
        line-height: 24px
        padding: 0px 14px
        .pricediscount
          font-weight: bold
          float: right
      .messagediv
        padding-bottom: 30px

  .move-enter, .move-leave-to
    opacity: 0.5
    transition: all 0.5s linear
    transform: translate3D(100%, 0, 0)
  .move-enter-to, .move-leave
    opacity: 1
    transition: all 0.5s linear
    transform: translate3D(0, 0, 0)
</style>
