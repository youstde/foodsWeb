<template>
  <div class='budget_bx'>
    <top-back type='radis' heightNum='2rem' paddingBtm='1rem'>
      <div class='budget_back_bx'>
        <toggle-bar :toggleBc='toggleType' />
      </div>
    </top-back>
    <!-- 自提 -->
    <get-by-self v-if="deliveryType==='pickup'" :returnBc='returnBc' />
    <!-- 送货上门 -->
    <home-delivery v-else :returnBc='returnBc' />
    <!-- 底部确认下单区 -->
    <bottom-confirm :allMoney='allMoney' :submitBc='handleSubmit' />
  </div>
</template>

<script>
  import TopBack from '@/components/topBack/topBack'
  import ToggleBar from './components/toggleBar/toggleBar'
  import GetBySelf from './getBySelf'
  import HomeDelivery from './ homeDelivery'
  import BottomConfirm from './components/bottomConfirm/bottomConfirm'

  import { getOrderBase } from '@/service/getData'
  import { getLocalStorage } from '@/util/tools'

  export default {
    name: 'budget',
    components: {
      TopBack,
      ToggleBar,
      GetBySelf,
      HomeDelivery,
      BottomConfirm
    },
    data () {
      return {
        deliveryType: 'pickup', // pickup自提express配送（mock）
        mark: '',  // 备注
        paymentType: '', // 支付方式
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
        ],
        allMoney: 0,
        serials: ''
      }
    },
    mounted() {
      const { query: { invoiceType, serials, allmoney, deliverytype } } = this.$route
      this.allMoney = allmoney
      this.serials = serials
      if(deliverytype) this.deliveryType = deliverytype
      console.log(invoiceType)
    },
    methods: {
      handleSubmit() {
        // 提交订单
        const { query: { serials } } = this.$route
        const invoiceDataStr = localStorage.getItem('invoice_data')
        const localAdress = getLocalStorage('main_address')
        const localMerchant = getLocalStorage('merchant')
        const params = {
          t: 'create',
          serials,
          mch_id: localMerchant.id,
          deliver_type: this.deliveryType,
          paytype: this.paymentType,
          invoice_info: invoiceDataStr,
          address_id: localAdress.id
        }
        console.log('params:', params)
        let isLegel = true
        Object.keys(params). forEach(key => {
          if(!params[key]) isLegel = false
        })
        if(isLegel) {
          getOrderBase(params).then(res => {
            if(res && res.errcode === 0) {
              const toast = this.$createToast({
                txt: '下单成功!',
                type: 'txt'
              })
              toast.show()
              localStorage.removeItem('invoice_data')
              localStorage.removeItem('goods_arr')
            }
          })
        }
      },
      returnBc(data) {
        console.log(data)
        if(data) {
          Object.keys(data).forEach(key => {
            switch(key) {
              case 'mark':
                this.mark =  data.mark
                break
              case 'paymentType':
                this.paymentType = data.paymentType
                break
              default:
                break
            }
          })
        }
      },
      updateCheckId(newId) {
        console.log(newId)
        this.paymentCheckId = newId
      },
      toggleType(type) {
        const { query } = this.$route
        this.deliveryType = type;
        this.$router.replace({
          path: '/budget',
          query: {
            ...query,
            deliverytype: type
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
