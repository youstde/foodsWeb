<template>
  <div class='goods_inventory_bx'>
    <div class='top_out_color_bx'>
        <top-back type='radis' heightNum='2rem' paddingBtm='1rem'>
        <div class='goods_inventory_back_bx'>
          商品清单
        </div>
        </top-back>
    </div>
    <div class='goods_inventory_detail'>
      <div class="top_title">
        <flexbox>
          <flexbox-item>商品</flexbox-item>
          <flexbox-item :style="{'text-align':'right'}">共6件</flexbox-item>
        </flexbox>
      </div>
      <div class='goods_inventory_detail_out_bx'>
        <cube-scroll
        ref='scroll'
        :data='dataSource'
        :options='scrollOptions'
        @pulling-up='onPullingUp'>
          <inventory-item v-for='(item, i) in dataSource' :key='i' :dataItem='item' />
        </cube-scroll>
      </div>
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import InventoryItem from './components/inventoryItem/inventoryItem'

  export default {
    name: 'goods-inventory',
    components: {
      TopBack,
      Flexbox,
      FlexboxItem,
      InventoryItem
    },
    data () {
      return {
        pullUpLoadIndex: 1,
        scrollOptions: {
          pullDownRefresh: false,
          pullUpLoad: true,
          scrollbar: true
        },
        dataSource: [
          {
            id: 1,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%951.jpg',
            title: '特级鲜冻虾仁冷冻新鲜包邮500g*2青虾仁新鲜虾仁野生海鲜虾仁生鲜',
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
      const { query: { id } } = this.$route
      if(id) {
        this.id = id
      }
    },
    methods: {
      onPullingUp() {
        const { pullUpLoadIndex } = this;
        this.pullUpLoadIndex = pullUpLoadIndex + 1;
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .goods_inventory_bx {
    background-color: #fff;
    height: 100%;
    .top_out_color_bx {
      background-color: #f4f4f4;
    }
    .goods_inventory_back_bx {
      font-size: 0.9rem;
      width: 15rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    .goods_inventory_detail {
      .top_title {
        font-size: 0.6rem;
        padding: 0.7rem 0.7rem 0.5rem;
        border-bottom: 1px solid $morenColor;
      }
    }
    .goods_inventory_detail_out_bx {
      height: 90vh;
    }
  }
</style>
