<template>
  <div class='order_detail_bx'>
    <div class="local_top_back_bx">
      <flexbox>
        <flexbox-item class='top_back_item' :span='2'>
          <span class='icon_bx' @click='goBack'><svg-icon iconClass='back'></svg-icon></span>
        </flexbox-item>
        <flexbox-item class='top_back_item title' :span='10'>
          <span>订单详情</span>
          <div class='status_label'>{{detial.status_desc}}</div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="container_out_bx">
       <!-- S=商品列表 -->
      <div class='goods_list_out_bx'>
        <goods-item v-for='(item, i) in goodsList' :key='i' :goodsItem='item' />
      </div>
      <div class="goods_introvice">
        <div class="goods_introvice_title">发票类型</div>
        <div class="goods_introvice_text">{{detial.invoice.title}}</div>
      </div>
      <!-- 商品信息 -->
      <div class="goods_detail">
        <goods-detial :data='detial' />
      </div>
      <!-- 商品价格 -->
      <div class="goods_price">
        <div class="goods_price_item">
          <div class="goods_price_item_label">商品总额</div>
          <div class="goods_price_item_value">￥{{detial.amount}}</div>
        </div>
        <div class="goods_price_item">
          <div class="goods_price_item_label">商品总价</div>
          <div class="goods_price_item_value">￥{{detial.amount_total}}</div>
        </div>
         <div class="goods_price_item">
          <div class="goods_price_item_label">配送方式</div>
          <div class="goods_price_item_value">{{detial.deliver_desc}}</div>
        </div>
        <div class="goods_price_item">
          <div class="goods_price_item_label">运费</div>
          <div class="goods_price_item_value">￥{{detial.fee_delivery}}</div>
        </div>
        <div class="goods_price_item">
          <div class="goods_price_item_label">配送地址</div>
          <div class="goods_price_item_value">{{detial.address}}</div>
        </div>
        <div class="goods_price_item">
          <div class="goods_price_item_label">配送费用</div>
          <div class="goods_price_item_value">￥{{detial.fee_delivery}}</div>
        </div>
        <div class="goods_price_all">
          <div>实付款：<span class="goods_price_price">￥{{detial.amount_actually}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Toast } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import GoodsItem from './components/goodsItem/index'
  import GoodsDetial from './components/goodsDetial/index'

  import { getOrderBase } from '@/service/getData'

  export default {
    name: 'order-detail',
    components: {
      TopBack,
      Flexbox,
      FlexboxItem,
      GoodsItem,
      GoodsDetial,
    },
    data () {
      return {
        goodsList: [],
        detial: {},
      }
    },
    mounted() {
      const { serialNo } = this.$route.query
      getOrderBase({
        t: 'info',
        serial_no: serialNo
      }).then(res => {
        if (res && res.errcode === 0) {
          this.goodsList = res.data.goods
          this.detial = res.data.order
        }
      })

    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';

  .goods_list_out_bx {
    margin: .5rem 0;
    padding: 0 .7rem;
    background: #fff;
  }

  .goods_introvice {
    height: 2.25rem;
    line-height: 2.25rem;
    background: #fff;
    display: flex;
    text-align: left;
    padding: 0 .7rem;

    .goods_introvice_title {
      font-size: 0.75rem;
      flex: 1;
    }

    .goods_introvice_text {
      font-size: .6rem;
    }
  }

  .goods_detail {
    margin: .5rem 0;
    background: #fff;
  }

  .goods_price {
    background: #fff;
    padding: 0 .7rem;
    font-size: 0.75rem;

    .goods_price_item {
      display: flex;
      height: 2rem;
      line-height: 2rem;

      .goods_price_item_label {
        flex: 1;
        text-align: left;
      }
      .goods_price_item_value {

      }
    }
    .goods_price_all {
      text-align: right;
      height: 2rem;
      line-height: 2rem;

      .goods_price_price {
        color: $priceActiveColor;
      }
    }
  }
</style>
