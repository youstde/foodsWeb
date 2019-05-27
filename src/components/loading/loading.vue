<template>
  <div :class='{loading_container:true, dissipate_loading:!isLoading, hidden: closeLoading}'>
    <div class='loading_bx'>
      <div class="loader"></div>
      <svg-icon iconClass='cart-moren'></svg-icon>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
  export default {
    name: 'base-loading',
    props: [
      'isLoading'
    ],
    data () {
      return {
        closeLoading: false,
      }
    },
    watch: {
      isLoading (value) {
        if(value === false) {
          setTimeout(() => {
            this.closeLoading = true;
          }, 1e3)
        }
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
