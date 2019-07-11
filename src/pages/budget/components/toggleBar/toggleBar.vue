<template>
  <div class='toggle_bar_bx'>
    <div :class="{toggle_left:true, toggle_item:true, active:type==='pickup'}" @click="toggleType('pickup')">自提</div>
    <div :class="{toggle_right:true, toggle_item:true, active:type==='express'}" @click="toggleType('express')">送货上门</div>
  </div>
</template>

<script>

  export default {
    name: 'toggle-bar',
    data () {
      return {
        type: 'pickup'
      }
    },
    props: [
      'toggleBc',
    ],
    mounted() {
      const { query: { deliverytype } } = this.$route
      if(deliverytype) this.type = deliverytype
    },
    methods: {
      toggleType(type) {
        this.type = type
        this.toggleBc(type)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
