<template>
  <div @click='setActive' :class='{st_button_bx:true,active_bt:isActive}' :style="'background:'+colorList[options.type||'default']">
    <div class='label'>{{options.label}}</div>
  </div>
</template>

<script>
import { setTimeout } from 'timers';

  export default {
    name: 'min-button',
    props: [
      'options'
    ],
    data () {
      return {
        isActive: false,
        colorList: {
          default: '#51af7f',
          warn: '',
          error: ''
        }
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
  .st_button_bx {
    height: 100%;
    position: relative;
    &.active_bt {
      opacity: 0.8;
    }
    .label {
      color: #fff;
      font-size: 0.75rem;
      text-align: center;
      @include positionCenter;
    }
  }
</style>
