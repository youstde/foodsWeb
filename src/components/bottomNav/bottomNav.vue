<template>
  <div>
    <grid>
      <grid-item label="Grid" v-for="i in 3" :key='i' link='msite'>
        <img slot="icon" src="../../assets/logo.png">
      </grid-item>
    </grid>
  </div>
</template>

<script>
  import { Grid, GridItem } from 'vux'
  export default {
    name: 'bottom-nav',
    components: {
      Grid,
      GridItem
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
  @import './index.scss';
</style>
