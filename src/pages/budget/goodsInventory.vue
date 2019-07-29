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
          <flexbox-item :style="{'text-align':'right'}">共{{allQuantity}}件</flexbox-item>
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
  import { addNum } from '@/util/tools'

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
          pullUpLoad: false,
          scrollbar: true
        },
        dataSource: []
      }
    },
    computed: {
      allQuantity () {
        let num = 0
        this.dataSource.forEach(item => {
          num = addNum(num, item.quantity)
        })
        return num
      }
    },
    mounted() {
      const { query: { id } } = this.$route
      if(id) {
        this.id = id
      }

      const goodsArrStr = localStorage.getItem('goods_arr')
      if(goodsArrStr) {
        const goodsArr = JSON.parse(goodsArrStr)
        this.dataSource = goodsArr
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
