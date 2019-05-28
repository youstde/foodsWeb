<template>
  <div class='scroll_nav'>
    <div class="swiper-container" id='scroll_top_nav_swiper'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item, i) in tabLabels' :key='i'>
          <div :class='{label_item:true,active_item:activeLabel===item.id}' @click='setActiveIndex(item.id)'>{{item.label}}</div>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'scroll-nav',
    props: [
      'tabLabels',
      'activeLabel',
      'setActiveCb'
    ],
    data () {
      return {

      }
    },
    mounted() {
      var mySwiper = new Swiper('#scroll_top_nav_swiper', {
        freeMode : true,
        slidesPerView: 4
      })
    },
    methods: {
      setActiveIndex(id) {
        this.setActiveCb(id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
