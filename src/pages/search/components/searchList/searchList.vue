<template>
  <div class='search_list'>
    <list-item />
  </div>
</template>

<script>
  import ListItem from '@/components/listItem/listItem'

  export default {
    name: 'search-list',
    components: {
      ListItem
    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
