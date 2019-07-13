<template>
  <div class='scroll_nav'>
    <div class="swiper-container" id='scroll_top_nav_swiper'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item, i) in tabLabels' :key='i'>
          <div :class='{label_item:true,active_item:activeLabel===item.id}' @click='setActiveIndex(item.id)'>{{item.name}}</div>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
import { setTimeout } from 'timers';

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
    watch: {
      tabLabels(val) {
        console.log('val:', val)
        if(typeof val === 'object' && val.length) {
          setTimeout(() => {
            var mySwiper = new Swiper('#scroll_top_nav_swiper', {
              freeMode : true,
              slidesPerView: 4
            })
          }, 1)
        }
      }
    },
    mounted() {
      console.log('111:',this.tabLabels)
      console.log(this.activeLabel)
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
