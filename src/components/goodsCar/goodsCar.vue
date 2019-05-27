<template>
  <div class='goods_car'>
    <span class='icon_bx'>
      <svg-icon iconClass='cart-moren' />
    </span>
  </div>
</template>

<script>

  export default {
    name: 'goods-car',
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
  .goods_car {
    color: $themeColor;
    width: 1.75rem;
    height: 1.75rem;
    @include borderRadius(50%);
    border: 1px solid $themeColor;
    position: relative;
    .icon_bx {
      width: 1rem;
      height: 1rem;
      @include positionCenter;
    }
  }
</style>
