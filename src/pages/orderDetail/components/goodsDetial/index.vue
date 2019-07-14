<template>
   <div class="goods_detial">
      <div class="goods_item">
        <div class="goods_item_label">订单号</div>
        <div class="goods_item_value">{{ data.serial_no }}</div>
      </div>
      <div v-if="!isHide">
        <div class="goods_item">
          <div class="goods_item_label">下单时间</div>
          <!-- <div class="goods_item_value">{{ data.serial_no }}</div> -->
        </div>
        <div class="goods_item">
          <div class="goods_item_label">支付方式</div>
          <!-- <div class="goods_item_value">{{ data.serial_no }}</div> -->
        </div>
      </div>
      <div class="button_group">
        <button v-if="isHide" @click="clickShow" class="detial_button">
          显示完整信息
          <span class="button_icon">
            <svg-icon iconClass='xiala'></svg-icon>
          </span>
        </button>
        <button v-else @click="clickHide" class="detial_button">
          收起
          <span class="button_icon resolve">
            <svg-icon iconClass='xiala'></svg-icon>
          </span>
        </button>
      </div>
   </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'order-detail-goods-detial',
    props: [
      'data'
    ],
    data () {
      return {
        isHide: true,
      }
    },
    mounted() {

    },
    methods: {
      clickShow () {
        this.isHide = false
      },
      clickHide () {
        this.isHide = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';

  .goods_detial {
    padding: 0 .7rem;
  }
  .goods_item {
    display: flex;
    text-align: left;
    height: 1.75rem;
    line-height: 1.75rem;

    .goods_item_label {
      flex: 1;
      font-size: 0.75rem;
    }
    .goods_item_value {
      font-size: 0.6rem;
    }
  }
  .detial_button {
    height: 1.5rem;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 10rem;
    padding: 0 2rem;
    color: #333;
    font-size: 0.75rem;
  }
  .button_group {
    padding: 0.7rem 0;
    text-align: center;

    .button_icon {
      display: inline-block;
      width: .7rem;
      height: .7rem;

      &.resolve {
        transform: rotate(180deg);
      }
    }
  }
</style>
