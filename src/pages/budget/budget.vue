<template>
  <div class='budget_bx'>
    <top-back type='radis' heightNum='2rem' paddingBtm='1rem'>
      <div class='budget_back_bx'>
        <toggle-bar :toggleBc='toggleType' />
      </div>
    </top-back>
    <!-- 自提 -->
    <get-by-self v-if='deliveryType===0' />
    <home-delivery v-else />
  </div>
</template>

<script>
  import TopBack from '@/components/topBack/topBack'
  import ToggleBar from './components/toggleBar/toggleBar'
  import GetBySelf from './getBySelf'
  import HomeDelivery from './ homeDelivery'

  export default {
    name: 'budget',
    components: {
      TopBack,
      ToggleBar,
      GetBySelf,
      HomeDelivery
    },
    data () {
      return {
        deliveryType: 0, // 0自提1配送（mock）
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
      const { query: { invoiceType } } = this.$route
      console.log(invoiceType)
    },
    methods: {
      updateCheckId(newId) {
        console.log(newId)
        this.paymentCheckId = newId
      },
      toggleType(type) {
        this.deliveryType = type;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
