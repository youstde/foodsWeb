<template>
  <div id="app">
    <vue-tip type="tip.type" message="tip.message"></vue-tip>
    <base-loading></base-loading>
    <router-view/>
  </div>
</template>

<script>
  import vueTip from '@/components/tip/tip.vue';
  export default {
    name: 'App',
    data() {
      return {
        type: '',
        message: ''
      }
    },
    mounted() {
    },
    components: {
      vueTip
    }
  }
</script>

<style lang="scss">
  @import 'src/style/common';
  @import 'src/style/mixin';
  .clear {
    clear:both;
  }
  a {
    color: #969696;
    text-decoration: none;
  }
  body {
    color: #333333;
  }
  input,button {
    outline: none;
  }
  html,body {
    width: 100%;
    height: 100%;
    max-width: $maxWidth;
    background-color: $bgColor;
    margin: 0;
    padding:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height:100%;
    // margin-bottom: 2.5rem;
  }
  // cube-Ui样式覆盖
  .cube-btn {
    padding: 0.6rem 0 !important;
    -webkit-border-radius: 1.2rem !important;
    -moz-border-radius: 1.2rem !important;
    -ms-border-radius: 1.2rem !important;
    -o-border-radius: 1.2rem !important;
    border-radius: 1.2rem !important;
  }
</style>
