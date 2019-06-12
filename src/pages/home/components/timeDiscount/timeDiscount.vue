<template>
  <div class='home_goods_list_bx'>
    <div class="swiper-container" id='time_discount_swiper'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item, i) in goodslist' :key='i'>
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
    data () {
      return {
        goodslist: [
          {
            id: 1,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-2.png',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 2,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-2.png',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 3,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-2.png',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 4,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-2.png',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 5,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-2.png',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 6,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-2.png',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 7,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-2.png',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 8,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-2.png',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
        ]
      }
    },
    mounted() {
      var mySwiper = new Swiper('#time_discount_swiper', {
        freeMode : true,
        slidesPerView: 3.2
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
