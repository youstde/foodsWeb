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

<style>
  .clear {
    clear:both;
  }
  a {
    color: #969696;
    text-decoration: none;
  }
  body {
    color: #333;
  }
  input,button {
    outline: none;
  }
  html,body {
    height:100%;
    width: 100%;
    background-color: #fff;
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
  }
</style>
