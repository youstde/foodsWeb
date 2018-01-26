<template>
  <div class="loading-box">
    <vue-loading type="bubbles" color="#d9544e" :size="{ width: '100px', height: '100px' }"></vue-loading>
  </div>
</template>

<script>
  import vueLoading from 'vue-loading-template';
  export default {
    name: 'base-loading',
    components: {
      vueLoading
    },
  }
</script>

<style lang="less" scoped>
  .loading-box {
    position: fixed;
    top:0;
    left:0;
    z-index: 9999;
    width: 100%;
    height:100%;
    background-color: rgba(0,0,0,0.7);
    .vue-loading {
      margin-top: 200px;
    }
  }
</style>
