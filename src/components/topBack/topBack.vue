<template>
  <div :class="{top_back_bx:true, clear:true,radis_type:type==='radis'}" :style='{paddingBottom:paddingBtm}'>
    <div class="left_bx" :style='{height:heightNum}'>
      <div v-if="type==='radis'" class='radis_icon_bx'>
        <span class='icon_bx'><svg-icon iconClass='back'></svg-icon></span>
      </div>
      <span v-else class='icon_bx'><svg-icon iconClass='back'></svg-icon></span>
    </div>
    <div class='right_bx'><slot></slot></div>
  </div>
</template>

<script>

  export default {
    name: 'top-back',
    components: {

    },
    props: [
      'type',
      'heightNum',
      'paddingBtm'
    ],
    data () {
      return {

      }
    },
    mounted() {
      console.log(this.$children)
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
