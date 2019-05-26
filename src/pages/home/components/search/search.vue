<template>
  <div class='search_bx'>
    <router-link to='/search'>
      <span class='icon_bx'><svg-icon iconClass='search' /></span>
      <span class='search_label'>搜索</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'search-link',
    components: {

    },
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
  @import './index.scss';
</style>
