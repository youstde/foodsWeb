<template>
  <div class='order_detail_bx'>
    <div class="local_top_back_bx">
      <flexbox>
        <flexbox-item class='top_back_item' :span='2'>
          <span class='icon_bx' @click='goBack'><svg-icon iconClass='back'></svg-icon></span>
        </flexbox-item>
        <flexbox-item class='top_back_item title' :span='10'>
          <span>订单详情</span>
          <div class='status_label'>完成</div>
        </flexbox-item>
      </flexbox>
    </div>
    <div class="container_out_bx">
       <!-- S=商品列表 -->
      <div class='goods_list_out_bx'>
        <goods-item v-for='(item, i) in goodsList' :key='i' :goodsItem='item' />
      </div>
      <!-- E=商品列表 -->
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Toast } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import GoodsItem from './components/goodsItem/index'

  export default {
    name: 'order-detail',
    components: {
      TopBack,
      Flexbox,
      FlexboxItem,
      GoodsItem
    },
    data () {
      return {
        goodsList: [
          {
            id: 1,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%951.jpg',
            title: '特级鲜冻虾仁冷冻新鲜包邮500g*2青虾仁新鲜虾仁野生海鲜虾仁生鲜sads',
            price: '3.90',
            num: 1,
            allPrice: '3.90'
          },
          {
            id: 2,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%952.jpg',
            title: '正宗海南文昌鸡1年阉鸡4斤新鲜生鲜农家散养土鸡白切煲汤顺丰发货',
            price: '228.00',
            num: 2,
            allPrice: '456.00'
          },
          {
            id: 3,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%953.jpg',
            title: 'KingOscar泰国原装进口生鲜熟冻拉直海鲜对虾解冻即食白虾类1250g',
            price: '299.00',
            num: 1,
            allPrice: '299.00'
          },
          {
            id: 4,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%951.jpg',
            title: '特级鲜冻虾仁冷冻新鲜包邮500g*2青虾仁新鲜虾仁野生海鲜虾仁生鲜',
            price: '3.90',
            num: 1,
            allPrice: '3.90'
          },
          {
            id: 5,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%952.jpg',
            title: '正宗海南文昌鸡1年阉鸡4斤新鲜生鲜农家散养土鸡白切煲汤顺丰发货',
            price: '228.00',
            num: 2,
            allPrice: '456.00'
          },
          {
            id: 6,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%953.jpg',
            title: 'KingOscar泰国原装进口生鲜熟冻拉直海鲜对虾解冻即食白虾类1250g',
            price: '299.00',
            num: 1,
            allPrice: '299.00'
          }
        ]
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
  @import './index.scss';
</style>
