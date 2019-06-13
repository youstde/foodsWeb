<template>
  <div :style="{height:height,'line-height':height}" :class="{radius_bx: isRadius,base_button_bx:true, active:isActive, disabeld:disabled}" @click='setActive'>
    {{label}}
  </div>
</template>

<script>
import { setTimeout } from 'timers';

  export default {
    name: 'base-button',
    props: [
      'height',
      'disabled', // bollean控制按钮的禁用状态
      'label', // 按钮的title
      'isRadius' // 按钮是否需要圆角(默认是没有)
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
        if(this.disabled) return
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
    // height: 2rem;
    // line-height: 2rem;
    color: #fff;
    text-align: center;
    background-color: $themeColor;
    &.radius_bx {
      @include borderRadius(1rem);
    }
    &.disabeld {
      background-color: #dddddd;
    }
    &.active {
      opacity: 0.8;
    }
  }
</style>
