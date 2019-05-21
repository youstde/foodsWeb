<template>
  <div :class="{home_goods_item_bx:true, goods_item_mormal:type==='1'}">
    <img :src="goodsItem.img" alt="">
    <div class='goods_title'>{{goodsItem.title}}</div>
    <flexbox class='goods_detail_bx'>
      <flexbox-item class='goods_price' :span='8'>
        <!-- 有打折价 -->
        <div v-if='goodsItem.cheapPrice'>
          <p class='fresh_price'>￥{{goodsItem.cheapPrice}}</p>
          <p class='past_price'>￥{{goodsItem.odderPrice}}</p>
        </div>
        <!-- 无打折价 -->
        <div v-else>
          <p class='normal_price'>￥{{goodsItem.price}}</p>
        </div>
      </flexbox-item>
      <flexbox-item class='add_to_car' :span='4'>
        <div class='icon_border'>
           <span class='icon_bx'><svg-icon iconClass='cart-xuanzhong' /></span>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'home-goods-item',
    components: {
      Flexbox,
      FlexboxItem
    },
    props: [
      'goodsItem',
      'type'
    ],
    data () {
      return {

      }
    },
    mounted() {
      console.log(this.type)
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
