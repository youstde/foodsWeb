<template>
  <div class='goods_list_bx clear'>
    <div class='goods_item' v-for='(item,i) in goodslist' :key='i'>
      <div class='goods_item_inner'><HomeGoodsItem :goodsItem='item' type='2' /></div>
    </div>
    <p class='no_more_data' v-if='nomoreData'>----没有更多数据了----</p>
  </div>
</template>

<script>
  import HomeGoodsItem from '@/pages/home/components/homeGoodsItem/homeGoodsItem'
  import { setTimeout } from 'timers';
  import { getGoodsBase, getStoreData } from '@/service/getData'
  import { getLocalStorage } from '@/util/tools'

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
          console.log('data:', this.nomoreData)
          if(!data.length) {
            this.nomoreData = true
            this.closeUpdate()
          } else {
            this.nomoreData = false
            this.goodslist = goodslist.concat(data)
            this.closeUpdate()
          }
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
        nomoreData: false,
        goodslist: [],
        merchantId: ''
      }
    },
    mounted() {

    },
    methods: {
      fetchGoodsData(index, mchId, cb) {
        const localMerchant = getLocalStorage('merchant')
        getGoodsBase({
          t: 'list',
          // mch_id: mchId,
          mch_id: localMerchant.id,
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
