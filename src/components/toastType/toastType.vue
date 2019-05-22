<template>
  <vux-toast v-model="showToast" :type='type' @on-hide="onHide"><span style='color:#fff'>{{message}}</span></vux-toast>
</template>

<script>
  import { Toast } from 'vux'

  export default {
    name: 'toast-type',
    components: {
      'vux-toast':Toast
    },
    props: [
      'showToast',
      'type',
      'message',
      'onHide'
    ],
    data () {
      return {

      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
