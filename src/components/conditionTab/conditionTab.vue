<template>
  <div class='condition_tab_bx clear'>
    <div class="condition_left" @click='toggleSlideState'>
      <span class='label'>综合</span>
      <span class='icon_bx'><svg-icon iconClass='xiala'/></span>
    </div>
    <div class="condition_price">
      <span class='label'>价格</span>
      <span class='icon_bx'><svg-icon iconClass='updown' /></span>
    </div>
    <!-- 下拉列表 -->
    <div class="slide_list" v-show='showSlide'>
      <div class="list_item">优惠产品</div>
      <div class="list_item">优选产品</div>
      <div class="list_item">优惠产品</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'condition-tab',
    props: [

    ],
    data () {
      return {
        showSlide: false,
      }
    },
    watch: {
      isShowCover(value) {
        if(!value) {
          this.showSlide = false
        }
      }
    },
    methods: {

    },
    computed: {
      ...mapGetters([
        'isShowCover'
      ])
    },
    methods: {
      toggleSlideState() {
        const { showSlide } = this
        this.showSlide = !showSlide
        this.$store.commit('SET_IS_SHOW_COVER', !showSlide)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
