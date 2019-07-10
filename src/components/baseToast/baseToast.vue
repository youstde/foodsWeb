<template>
  <div>
    <toast-type :type='showToastType' :message='toastTypeValue' :showToast='showWarningToast' :onHide="onHide"></toast-type>
  </div>
</template>

<script>
  import ToastType from '@/components/toastType/toastType'
import { setTimeout } from 'timers';
  export default {
    name: 'base-toast',
    components: {
      ToastType
    },
    data () {
      return {
        showWarningToast: false,
        showToastType: '',
        toastTypeValue: '',
      }
    },
    mounted() {

    },
    methods: {
      onShowToast(type, value, cb) {
        this.showToastType = type
        this.toastTypeValue = value
        this.showWarningToast = true
        setTimeout(() => {
          cb && cb()
        }, 1e3)
      },
      onHide() {
        this.showWarningToast = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
</style>
