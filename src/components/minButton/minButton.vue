<template>
  <div :style="'background:'+colorList[options.type||'default']" class='st_button_bx'>
    <div class='label'>{{options.label}}</div>
  </div>
</template>

<script>

  export default {
    name: 'min-button',
    props: [
      'options'
    ],
    data () {
      return {
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

    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .st_button_bx {
    height: 100%;
    position: relative;
    .label {
      color: #fff;
      font-size: 0.75rem;
      text-align: center;
      @include positionCenter;
    }
  }
</style>
