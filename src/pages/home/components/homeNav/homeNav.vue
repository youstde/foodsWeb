<template>
  <div class='home_nav_bx'>
    <div class="swiper-container" id='home_nav_swiper'>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='(item, index) in categorysData' :key='index'>
            <div class='home_nav_item'>
              <router-link :to="{
                path: '/goodsclassify',
                query: {
                  id: item.id
                }
              }">
                <span class='icon_bx'><img :src="item.icon" alt=""></span>
                <p class='item_label'>{{item.name}}</p>
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
    props: [
      'categorysData'
    ],
    watch: {
      categorysData (val) {
        if(typeof val === 'object' && val.length) {
          setTimeout(() => {
            var mySwiper = new Swiper('#home_nav_swiper', {
              slidesPerView: 5,
              freeMode : true
            })
          }, 1)
        }
      }
    },
    data () {
      return {
        navList: [
          {
            label: '超市便利',
            img: '@/assets/home-nav.jpeg',
            link: '/goodsclassify'
          },
          {
            label: '水果',
            img: '@/assets/home-nav.jpeg',
            link: '/goodsclassify'
          },
          {
            label: '蔬菜生鲜',
            img: '@/assets/home-nav.jpeg',
            link: '/goodsclassify'
          },
          {
            label: '卤味',
            img: '@/assets/home-nav.jpeg',
            link: '/goodsclassify'
          },
          {
            label: '休闲零食',
            img: '@/assets/home-nav.jpeg',
            link: '/goodsclassify'
          },
          {
            label: '蔬菜生鲜',
            img: '@/assets/home-nav.jpeg',
            link: '/goodsclassify'
          },
          {
            label: '卤味',
            img: '@/assets/home-nav.jpeg',
            link: '/goodsclassify'
          },
          {
            label: '休闲零食',
            img: '@/assets/home-nav.jpeg',
            link: '/goodsclassify'
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
