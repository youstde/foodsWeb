<template>
  <div class='goods_detail'>
    detail
    <append-car></append-car>
  </div>
</template>

<script>
  import AppendCar from '@/components/appendCar/appendCar'

  export default {
    name: 'goods-detail',
    components: {
      AppendCar
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
