<template>
 <div>
   <flexbox>
     <flexbox-item class='goods_item_span' :span='3'>
       <img :src="goodsItem.img" alt="">
     </flexbox-item>
     <flexbox-item class='goods_item_span' :span='6'>{{goodsItem.title}}</flexbox-item>
     <flexbox-item class='goods_item_span' :span='3'>￥{{goodsItem.price}}</flexbox-item>
   </flexbox>
 </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'order-detail-goods-item',
    components: {
      Flexbox,
      FlexboxItem,
    },
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

</style>
