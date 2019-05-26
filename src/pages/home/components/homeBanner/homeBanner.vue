<template>
  <div class="swiper-container" id='home_banner_swiper'>
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='(item, i) in bannerList' :key='i' @click='test'>
        <router-link to='/goodsdetail'>
        <img :data-src="item.img" src='http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg' class="swiper-lazy">
        <div class="swiper-lazy-preloader"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'home-banner',
    components: {

    },
    data () {
      return {
        bannerList: [
          {
            id: 1,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3dik1v7lej315g0xgk6x.jpg'
          },
          {
            id: 2,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3dik1v7lej315g0xgk6x.jpg'
          },
          {
            id: 3,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3dik1v7lej315g0xgk6x.jpg'
          },
        ]
      }
    },
    mounted() {
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
