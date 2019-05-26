<template>
  <div class='home_nav_bx'>
    <div class="swiper-container" id='home_nav_swiper'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item, index) in navList' :key='index'>
            <div class='home_nav_item'>
              <router-link :to='item.link'>
                <span class='icon_bx'><img src="@/assets/home-nav.jpeg" alt=""></span>
                <p class='item_label'>{{item.label}}</p>
              </router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'home-nav',
    components: {

    },
    data () {
      return {
        navList: [
          {
            label: '超市便利',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '水果',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '蔬菜生鲜',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '卤味',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '休闲零食',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '蔬菜生鲜',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '卤味',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '休闲零食',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          }
        ]
      }
    },
    mounted() {
      var mySwiper = new Swiper('#home_nav_swiper', {
        slidesPerView: 5,
        freeMode : true
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
