<template>
  <div class='goods_list_bx clear'>
    <div class='goods_item' v-for='(item,i) in goodslist' :key='i'>
      <div class='goods_item_inner'><HomeGoodsItem :goodsItem='item' type='2' /></div>
    </div>
  </div>
</template>

<script>
  import HomeGoodsItem from '@/pages/home/components/homeGoodsItem/homeGoodsItem'
  import { setTimeout } from 'timers';
  import { getGoodsBase, getStoreData } from '@/service/getData'

  export default {
    name: 'goods-list',
    components: {
      HomeGoodsItem
    },
    props: [
      'pullUpLoadIndex',
      'closeUpdate'
    ],
    watch: {
      pullUpLoadIndex (index) {
        const { goodslist } = this;
         const newList = [{
            id: 5,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          },
          {
            id: 6,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 7,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 8,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          }]
        this.goodslist = goodslist.concat(newList)
        this.closeUpdate();
      }
    },
    data () {
      return {
        goodslist: []
      }
    },
    mounted() {
      this.fetchMerchantData()
    },
    methods: {
      fetchMerchantData() {
        getStoreData({
          t:'list'
        }).then(res => {
          if(res && res.errcode === 0) {
            const { merchant: { id } } = res.data
            this.fetchGoodsData(1, id)
          }
        })
      },
      fetchGoodsData(index, mchId) {
        getGoodsBase({
          t: 'list',
          // mch_id: mchId,
          mch_id: 107,
          index,
          size: 20
        }).then(res => {
          if(res && res.errcode === 0) {
            console.log('rest:', res)
            this.goodslist = res.data
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
