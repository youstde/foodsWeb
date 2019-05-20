<template>
  <div class="home-bx">
     <nav class='home_banner'>
        <div class="home_top_container">
          <router-link class="shop_name" to='/toggleshop'>
            {{shop}}
            <span class='icon_bx'><svg-icon iconClass='arrowdown' /></span>
          </router-link>
        </div>
        <search />
        <div class='home_nav_bx'>
          <HomeNav />
        </div>
      </nav>
      <div class='center_container'>
        <!-- S=快讯 -->
        <fast-news />
        <!-- E=快讯 -->
        <!-- S=限时优惠 -->
        <div class='time_discount'>
          <div class='title'>限时优惠</div>
          <time-discount />
        </div>
        <!-- E=限时优惠 -->
      </div>
     <bottom-nav />
  </div>
</template>

<script>
  import tools from '@/util/tools'
  import { setTimeout } from 'timers'
  import BottomNav from '@/components/bottomNav/bottomNav'
  import Search from '@/components/search/search'
  import HomeNav from './components/homeNav/homeNav'
  import FastNews from './components/fastNews/fastNews'
  import TimeDiscount from './components/timeDiscount/timeDiscount'

  export default {
    name: 'home',
    components: {
      BottomNav,
      Search,
      HomeNav,
      FastNews,
      TimeDiscount
    },
    data () {
      return {
        userData: '',
        shop: '东昌路店'
      }
    },
//    computed: {
//      ...mapGetters([
//        'labels'
//      ])
//    },
    mounted() {
      this.$store.commit('SET_IS_LOADING', false)
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import "./index.scss";
</style>
