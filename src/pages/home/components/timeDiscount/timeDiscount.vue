<template>
  <div class='home_goods_list_bx'>
    <div class="swiper-container" id='time_discount_swiper'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item, i) in rushGoodsData' :key='i'>
          <HomeGoodsItem isSlide=true :goodsItem='item' type='1' />
        </div>
     </div>
    </div>
  </div>
</template>

<script>
  import HomeGoodsItem from '@/pages/home/components/homeGoodsItem/homeGoodsItem'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'time-discount',
    components: {
      HomeGoodsItem
    },
    props: ['rushGoodsData'],
    watch: {
      rushGoodsData (val) {
        if(typeof val === 'object' && val.length) {
          setTimeout(() => {
            var mySwiper = new Swiper('#time_discount_swiper', {
              freeMode : true,
              slidesPerView: 2
            })
          }, 1)
        }
      }
    },
    data () {
      return {
        goodslist: [
          {
            content: "新到山东荷兰十五特价0.83/斤888",
            date: "2019/07/01 - 2019/07/31",
            name: "荷兰土豆促销",
            ssid: 133
          },
          {
            content: "新到山东荷兰十五特价0.83/斤888",
            date: "2019/07/01 - 2019/07/31",
            name: "荷兰土豆促销",
            ssid: 134
          }
        ]
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
