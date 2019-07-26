<template>
  <div class='base_loading_bx'>
    <span class='icon_bx'><cube-loading :size="40"></cube-loading></span>
  </div>
</template>

<script>

  export default {
    name: 'base-loading',
    data () {
      return {

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
  .base_loading_bx {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
    // background-color: rgba(0,0,0,0.2);
    .icon_bx {
      @include positionCenter;
    }
  }
</style>
