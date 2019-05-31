<template>
  <div class='toggle_bar_bx'>
    <div :class='{toggle_left:true, toggle_item:true, active:type===0}' @click='toggleType(0)'>自提</div>
    <div :class='{toggle_right:true, toggle_item:true, active:type===1}' @click='toggleType(1)'>送货上门</div>
  </div>
</template>

<script>

  export default {
    name: 'toggle-bar',
    data () {
      return {
        type: 0
      }
    },
    mounted() {

    },
    methods: {
      toggleType(type) {
        this.type = type
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
