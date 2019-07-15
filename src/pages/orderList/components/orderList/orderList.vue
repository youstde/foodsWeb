<template>
  <div class='order_list_content_bx'>
    <div class="item_out_container_bx" v-for='(item, i) in dataSource' :key='i'>
      <list-item :dataItem='item' />
    </div>
  </div>
</template>

<script>
  import ListItem from '../listItem/listItem'

  export default {
    name: 'order-list',
    components: {
      ListItem
    },
    props: [
      'dataSource'
    ],
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';

  .item_out_container_bx{
    margin-bottom: .5rem;
  }
</style>
