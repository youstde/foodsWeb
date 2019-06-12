<template>
  <div>
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
    <!-- S=发票 -->
    <div class='invoice_bx' @click='writeInvoice'>
      <span>发票</span>
      <div class='right_bx'>
        <span class='tip'>不需要</span>
        <span class='icon_bx'><svg-icon iconClass='arrowright'></svg-icon></span>
      </div>
    </div>
    <!-- E=发票 -->
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import GoodsSwiper from './components/goodsSwiper/goodsSwiper'
  import AdressItem from '@/components/adressItem/adressItem'
  import PaymentCheckBox from './components/paymentCheckBox/paymentCheckBox'

  export default {
    name: 'get-by-self',
    components: {
      Flexbox,
      FlexboxItem,
      PaymentCheckBox,
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
      },
      writeInvoice() {
        this.$router.push('/writeinvoice')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
