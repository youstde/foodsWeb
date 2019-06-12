<template>
  <div class='inventroy_item_bx'>
    <flexbox>
      <flexbox-item :span='7/24'>
        <img class='goods_img' :src="dataItem.img" alt="">
      </flexbox-item>
      <flexbox-item class='goods_item' :span='13/24'>
        <div class="goods_title">{{dataItem.title}}</div>
        <div class='goods_info'>
          <span>单价：￥{{dataItem.price}}</span>
          <span>数量：{{dataItem.num}}</span>
        </div>
      </flexbox-item>
      <flexbox-item class='goods_item' :span='4/24'>
        <span class='goods_price'>￥{{dataItem.allPrice}}</span>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'inventroy-item',
    components: {
      Flexbox,
      FlexboxItem
    },
    props: [
      'dataItem'
    ],
    data () {
      return {

      }
    },
    mounted() {

    },
    methods: {
      // goToDetail() {
      //   const { id } = this.dataItem
      //   this.$router.push({
      //     path: '/goodsdetail',
      //     query: {
      //       id
      //     }
      //   })
      // }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .inventroy_item_bx {
    padding: 1rem 0.7rem;
    position: relative;
    @include halfUnderLine;
    .goods_img {
      width: 4rem;
      height: 4rem;
      display: block;
    }
    .goods_item {
      height: 4rem;
      .goods_title {
        font-size: 0.6rem;
        line-height: 1.5;
        @include txtLineShow(2);
      }
      .goods_info {
        font-size: 0.6rem;
        color: $inputPlaceHolderColor;
        padding-top: 0.9rem;
      }
      .goods_price {
        display: block;
        font-size: 0.6rem;
        text-align: right;
        padding-top: 0.1rem;
      }
    }
  }
</style>
