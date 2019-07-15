<template>
   <div class="goods_item">
      <div class='goods_item_left'>
        <img class="goods_img" :src="goodsItem.picture" :alt="goodsItem.category_name">
      </div>
      <div class='goods_item_center'>{{goodsItem.category_name}}</div>
      <div class='goods_item_right'>
        <div class="goods_item_price">
          ￥{{goodsItem.price_sale}}
        </div>
        <div class="goods_item_number">
          x{{ goodsItem.quantity }}
        </div>
      </div>
   </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'order-detail-goods-item',
    props: [
      'goodsItem'
    ],
    data () {
      return {

      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';

  .goods_item {
    display: flex;
    height: 5.5rem;
    padding: 0.9rem 0;
    border-bottom: 1px solid $bgColor;
  }
  .goods_item_left {
    width: 3.5rem;
    height: 100%;
    overflow: hidden;
    margin-right: 0.5rem;
    // background: $bgColor;

    img {
      width: 100%;
      font-size: 0.6rem;
      background: $bgColor;
    }
  }
  .goods_item_center {
    flex: 1;
    font-size: 0.6rem;
    text-align: left;
  }
  .goods_item_right {
    margin-left: 0.5rem;
    text-align: right;

    .goods_item_price {
      font-size: 0.75rem;
      color: $priceActiveColor;
    }
    .goods_item_number {
      margin-top: 0.2rem;
      font-size: 0.45rem;
      color: $morenColor;
    }
  }
</style>
