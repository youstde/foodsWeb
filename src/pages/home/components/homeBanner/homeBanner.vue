<template>
  <div class="swiper-container" id='home_banner_swiper'>
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='item in lunboData' :key='item.ssid' @click='test'>
        <a :href='item.link'>
        <img :data-src="item.pictures" src='@/assets/logo_.pic_hd.png' class="swiper-lazy">
        <div class="swiper-lazy-preloader"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
import { setTimeout } from 'timers';

  export default {
    name: 'home-banner',
    components: {

    },
    data () {
      return {
        bannerList: [
          {
            id: 1,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/home-banner.png'
          },
          {
            id: 2,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/home-banner.png'
          },
          {
            id: 3,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/home-banner.png'
          },
        ]
      }
    },
    props: [
      'lunboData'
    ],
    watch: {
      lunboData (val) {
        if(typeof val === 'object' && val.length) {
          setTimeout(() => {
            var mySwiper = new Swiper('#home_banner_swiper', {
              autoplay:{
                  delay: 5000,
                  disableOnInteraction: false,
              },//可选选项，自动滑动
              loop : true,
              lazy: {
                loadPrevNext: true,
              },
            })
          }, 1)
        }
      }
    },
    mounted() {

    },
    methods: {
      test(e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
