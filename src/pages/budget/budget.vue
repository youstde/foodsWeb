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
  var pingpp = require('pingpp-js');
  // import { pingpp } from 'pingpp-js'

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
        const { query: { serials, paytype } } = this.$route
        const invoiceDataStr = localStorage.getItem('invoice_data')
        const localAdress = getLocalStorage('main_address')
        const localMerchant = getLocalStorage('merchant')
        const params = {
          t: 'create',
          serials,
          mch_id: localMerchant.id,
          deliver_type: this.deliveryType,
          paytype
        }
        if(localAdress) params.address_id = localAdress.id
        if(invoiceDataStr) params.invoice_info = invoiceDataStr
        console.log('params:', params)
        let isLegel = true
        Object.keys(params). forEach(key => {
          if(key === 'paytype' && !params[key]) {
            const toast = this.$createToast({
              txt: '请选择支付方式!',
              type: 'txt'
            })
            toast.show()
          }
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
              // 这个地方调用支付的接口
              this.handlePay()
              // setTimeout(() => {
              //   this.$router.push(`/orderList`)
              // }, 1000)
            }
          })
        }
      },
      handlePay() {
        const { query: { serials, paytype } } = this.$route
        getOrderBase({
          t: 'test.charge',
          paytype,
          amount: 2
        }).then(res => {
          if(res && res.errcode === 0) {
            const { charge } = res.data
            this.handlePing(charge)
          }
        })
      },
      handlePing(charge) {
        pingpp.createPayment(charge, function(result, err) {
          if (result == "success") {
            // 只有微信公众账号 (wx_pub)、微信小程序 (wx_lite)、QQ 公众号 (qpay_pub)、支付宝口碑 (alipay_qr)
            // 支付成功的结果会在这里返回，其他的支付结果都会跳转到 extra 中对应的 URL。

          } else if (result == "fail") {
            // data 不正确或者微信公众账号/微信小程序/QQ 公众号/支付宝口碑支付失败时会在此处返回
          } else if (result == "cancel") {
            // 微信公众账号、微信小程序、QQ 公众号、支付宝口碑支付取消支付
          }
        })
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
