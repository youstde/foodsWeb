<template>
  <div class='bottom_confirm_bx'>
    <flexbox>
      <flexbox-item :span='8'>
        <div class='total_count'>
          <div class='price'>合计：￥324.00</div>
          <div class='tip'>不含运费</div>
        </div>
      </flexbox-item>
      <flexbox-item :span='4'>
        <base-button height='2.25rem' label='下单' :disabled='isDisabeldBuy' />
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import BaseButton from '@/components/baseButton/baseButton'

  export default {
    name: 'bottom-confirm',
    components: {
      Flexbox,
      FlexboxItem,
      BaseButton
    },
    props: [

    ],
    data () {
      return {
        isDisabeldBuy: false
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .bottom_confirm_bx {
    width: 100%;
    height: 2.25rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    .total_count {
      height: 2.25rem;
      text-align: right;
      padding-right: 0.4rem;
      .price {
        height: 60%;
        font-size: 0.75rem;
        color: $priceActiveColor;
        padding-top: 0.4rem;
      }
      .tip {
        font-size: 0.6rem;
        color: $inputPlaceHolderColor;
      }
    }
  }
</style>
