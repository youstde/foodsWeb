<template>
  <div class='list_item_bx'
    :key='dataItem.serial_no'
    @click.stop.prevent="() => onGoDetial(dataItem.serial_no)"
  >
      <div class="top_bx">
        <div class="order_num_bx">订单号：{{dataItem.serial_no}}</div>
        <div class="tag">{{orderStatus[dataItem.status]}}</div>
      </div>
      <div class="goods_list_bx">
        <goods-swiper
          :swiperId='dataItem.serial_no'
          :summary='dataItem.summary'
        />
      </div>
      <div class="bottom_bx">
        <div class="to_pay_bt" v-if='dataItem.status===0'>去支付</div>
        <div class="total_price">
          <span class='label'>共{{ dataItem.quantity }}件&nbsp;合计:</span>
          <span class='price'>￥{{ dataItem.amount }}</span>
        </div>
      </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Toast } from 'vux'
  import GoodsSwiper from '../goodsSwiper/index'

  export default {
    name: 'list-item',
    components: {
      Flexbox,
      FlexboxItem,
      GoodsSwiper
    },
    props: [
      'dataItem'
    ],
    data () {
      return {
        orderStatus: {
          0: '待支付',
          1: '支付成功',
          2: '配送中'
        }
      }
    },
    mounted() {
      // console.log(this.dataItem)
    },
    methods: {
      onGoDetial (serial_no) {
        this.$router.push(`/orderDetail?serialNo=${serial_no}`)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  .list_item_bx {
    padding: 0 0.6rem;
    background-color: #fff;
    .top_bx {
      font-size: 12px;
      height: 2.1rem;
      position: relative;
      @include halfUnderLine;
      .order_num_bx {
        line-height: 2.1rem;
        text-align: left;
        padding-left: 0.65rem;
      }
      .tag {
        color: #fff;
        height: 0.95rem;
        line-height: 0.95rem;
        padding: 0 0.35rem 0 0.55rem;
        position: absolute;
        right: 0;
        top: 0;
        background-color: $priceActiveColor;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
        -webkit-border-top-left-radius: 1rem;
         -webkit-border-bottom-left-radius: 1rem;
         @include positionMiddle;
      }
    }
    .goods_list_bx {
      width: 100%;
      padding: 0.75rem 0;
      position: relative;
      @include halfUnderLine;
    }
    .bottom_bx {
      height: 1.95rem;
      .total_price {
        height: 1.95rem;
        line-height: 1.95rem;
        float: right;
        .label {
          color: $inputPlaceHolderColor;
          font-size: 0.6rem;
        }
        .price {
          color: $priceActiveColor;
          font-size: 0.85rem;
          font-weight: 700;
        }
      }
      .to_pay_bt {
        float: right;
        font-size: 0.65rem;
        height: 1.45rem;
        line-height: 1.45rem;
        width: 3.1rem;
        margin-top: 0.25rem;
        margin-left: 0.45rem;
        border: 1px solid #f1f1f1;
        @include borderRadius(0.7rem);
      }
    }
  }
</style>
