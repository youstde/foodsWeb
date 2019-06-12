<template>
  <div :class="{base_button_bx:true, active:isActive}" @click='setActive'>
    {{label}}
  </div>
</template>

<script>
import { setTimeout } from 'timers';

  export default {
    name: 'base-button',
    props: [
      'label'
    ],
    data () {
      return {
        isActive: false
      }
    },
    mounted() {

    },
    methods: {
      setActive() {
        this.isActive = true
        setTimeout(() => {
          this.isActive = false
        }, 100)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .base_button_bx {
    font-size: 0.75rem;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    color: #fff;
    background-color: $themeColor;
    @include borderRadius(1rem);
    &.active {
      opacity: 0.8;
    }
  }
</style>
