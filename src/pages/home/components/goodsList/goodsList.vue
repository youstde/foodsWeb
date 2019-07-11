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
      'merchant',
      'pullUpLoadIndex',
      'closeUpdate'
    ],
    watch: {
      pullUpLoadIndex (index) {
        const { goodslist, merchantId } = this;
        this.fetchGoodsData(index, merchantId, data => {
          this.goodslist = goodslist.concat(data)
          this.closeUpdate()
        })

      },
      merchant (val) {
        if(val.id) {
          this.fetchGoodsData(1, val.id, data => {
            this.goodslist = data
          })
        }
      }
    },
    data () {
      return {
        goodslist: [],
        merchantId: ''
      }
    },
    mounted() {

    },
    methods: {
      fetchGoodsData(index, mchId, cb) {
        getGoodsBase({
          t: 'list',
          // mch_id: mchId,
          mch_id: 107,
          index,
          size: 20
        }).then(res => {
          if(res && res.errcode === 0) {
            console.log('rest:', res)
            cb && cb(res.data)
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
