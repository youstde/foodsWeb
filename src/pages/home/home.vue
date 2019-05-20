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
     <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import tools from '@/util/tools'
  import { setTimeout } from 'timers'
  import BottomNav from '@/components/bottomNav/bottomNav'
  import Search from '@/components/search/search'
  import HomeNav from './components/homeNav/homeNav'
  export default {
    name: 'home',
    components: {
      BottomNav,
      Search,
      HomeNav
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
