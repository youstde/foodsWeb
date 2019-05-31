<template>
  <div class='budget_bx'>
    <top-back type='radis' heightNum='2rem' paddingBtm='1rem'>
      <div class='budget_back_bx'>
        <toggle-bar />
      </div>
    </top-back>
    <div class='goods_swiper_layer_bx'>
      <goods-swiper />
    </div>
    <div class='adress_layer_out_bx'>
      <adress-item></adress-item>
    </div>
    <!-- S=备注 -->
    <div class='mark_bx'>
      <flexbox>
        <flexbox-item :span='3/24' class='mark_label'>备注</flexbox-item>
        <flexbox-item :span='21/24'>
          <input type="text" class='mark_input' />
        </flexbox-item>
      </flexbox>
    </div>
    <!-- E=备注 -->
    <!-- S=支付方式 -->
    <div class='payment_way'>
      <div class="title">支付方式</div>
      <div class="payment_way_item" v-for='(item, i) in paymentList' :key='i'>
        {{item.label}}
        <span class='payment_way_check_bx'>
          <payment-check-box
          :paymentCheckId='paymentCheckId'
          :data='item'
          :checkBc='updateCheckId' />
        </span>
      </div>
    </div>
    <!-- E=支付方式 -->
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import ToggleBar from './components/toggleBar/toggleBar'
  import GoodsSwiper from './components/goodsSwiper/goodsSwiper'
  import AdressItem from '@/components/adressItem/adressItem'
  import PaymentCheckBox from './components/paymentCheckBox/paymentCheckBox'

  export default {
    name: 'budget',
    components: {
      Flexbox,
      FlexboxItem,
      PaymentCheckBox,
      TopBack,
      ToggleBar,
      GoodsSwiper,
      AdressItem
    },
    data () {
      return {
        paymentCheckId: null,
        paymentList: [
          {
            id: 1,
            label: '支付宝支付'
          },
          {
            id: 2,
            label: '微信支付'
          },
          {
            id: 3,
            label: '现金支付'
          }
        ]
      }
    },
    mounted() {

    },
    methods: {
      updateCheckId(newId) {
        console.log(newId)
        this.paymentCheckId = newId
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
