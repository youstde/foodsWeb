<template>
  <div class='home_goods_list_bx'>
    <HomeGoodsList />
    <div class="swiper-container" id='fast_news_swiper'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item, i) in goodslist' :key='i'>

        </div>
     </div>
    </div>
  </div>
</template>

<script>
  import HomeGoodsList from '@/pages/home/components/homeGoodsList/homeGoodsList'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'time-discount',
    components: {
      HomeGoodsList
    },
    data () {
      return {
        goodslist: [
          {
            id: 1,
            img: '@/assets/test/time-discount-1.png',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 2,
            img: '@/assets/test/time-discount-2.png',
            title: '精选优质黄瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 3,
            img: '@/assets/test/time-discount-3.png',
            title: '精选优质香菇',
            odderPrice: '18.6/斤',
            cheapPrice: '12.99/斤'
          },
          {
            id: 4,
            img: '@/assets/test/time-discount-1.png',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 5,
            img: '@/assets/test/time-discount-2.png',
            title: '精选优质黄瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 6,
            img: '@/assets/test/time-discount-2.png',
            title: '精选优质黄瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 7,
            img: '@/assets/test/time-discount-4.png',
            title: '精选优质香菇',
            odderPrice: '18.6/斤',
            cheapPrice: '12.99/斤'
          },
        ]
      }
    },
    mounted() {
      var mySwiper = new Swiper('#fast_news_swiper', {
        autoplay:{
            delay: 5000,
            disableOnInteraction: false,
        },//可选选项，自动滑动
        loop : true,
      })
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
