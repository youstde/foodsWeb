<template>
  <div :class='{loading_container:true, dissipate_loading:!isLoading, hidden: closeLoading}'>
    <div class='loading_bx'>
      <div class="loader"></div>
      <svg-icon iconClass='cart-moren'></svg-icon>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
import { setTimeout } from 'timers';
  export default {
    name: 'base-loading',
    data () {
      return {
        closeLoading: false
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
     computed: {
       ...mapState([
        'isLoading'
      ])
     },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
