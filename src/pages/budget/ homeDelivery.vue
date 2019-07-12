<template>
  <div>
    <div class='goods_swiper_layer_bx'>
      <goods-swiper />
    </div>
    <div class='adress_layer_out_bx'>
      <adress-item v-if='mainAddress' :dataItem='mainAddress'></adress-item>
      <div class='invoice_bx'  v-else @click='selectAdress'>
        <span>地址</span>
        <div class='right_bx'>
          <span class='tip'>请选择地址</span>
          <span class='icon_bx'><svg-icon iconClass='arrowright'></svg-icon></span>
        </div>
      </div>
    </div>
    <!-- S=备注 -->
    <div class='mark_bx'>
      <flexbox>
        <flexbox-item :span='3/24' class='mark_label'>备注</flexbox-item>
        <flexbox-item :span='21/24'>
          <input type="text" class='mark_input' v-model='mark' />
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
        <span class='tip'>{{invoiceData.title || '不需要'}}</span>
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

  import { payType } from './config'

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
        mark: '',
        mainAddress: null,
        paymentCheckId: null,
        paymentList: payType,
        invoiceData: {}
      }
    },
    props: ['returnBc'],
    watch: {
      mark(val) {
        this.returnBc({
          mark: val
        })
      },
      paymentCheckId(val) {
        this.returnBc({
          paymentType: val
        })
      }
    },
    mounted() {
      console.log('mainAdress:', localStorage.getItem('main_address'))
      const mainAddressStr = localStorage.getItem('main_address')
      if(mainAddressStr) {
        this.mainAddress = JSON.parse(mainAddressStr)
      }
      const invoiceDataStr = localStorage.getItem('invoice_data')
      if(invoiceDataStr) {
        this.invoiceData = JSON.parse(invoiceDataStr)
      }
    },
    methods: {
      selectAdress() {
        console.log('this.$route:', this.$route)
        const { fullPath } = this.$route
        this.$router.push({
          path: '/adressmanagement',
          query: {
            from: fullPath
          }
        })
      },
      updateCheckId(newId) {
        console.log(newId)
        this.paymentCheckId = newId
      },
      writeInvoice() {
        const { fullPath } = this.$route
        console.log(fullPath)
        this.$router.push({
          path: '/writeinvoice',
          query: {
            from: fullPath
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
