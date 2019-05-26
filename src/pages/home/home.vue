<template>
  <div class="home-bx">
    <div class='scroll-list-wrap'>
      <cube-scroll
        ref='scroll'
        :data='goodslist'
        :options='scrollOptions'
        @pulling-down='onPullingDown'
        @pulling-up='onPullingUp'>
        <div class='home_banner_outbx'>
          <div class='home_banner_swiper_bx'><home-banner></home-banner></div>
          <!-- S=门店切换 -->
          <div class='home_top_container'>
            <router-link class='shop_name' to='/toggleshop'>
              {{shop}}
              <span class='icon_bx'><svg-icon iconClass='arrowdown' /></span>
            </router-link>
          </div>
          <!-- E=门店切换 -->
          <!-- S=搜索 -->
          <div class='search_out_bx'><search /></div>
          <!-- E=搜索 -->
          <!-- S=顶部导航 -->
          <div class='home_nav_bx'>
            <HomeNav />
          </div>
          <!-- E=顶部导航 -->
        </div>
        <div class='center_container'>
          <!-- S=快讯 -->
          <fast-news />
          <!-- E=快讯 -->
        </div>
        <!-- S=限时优惠 -->
        <div class='time_discount'>
          <div class='title'>
            <span>限时优惠</span>
            <span class='get_more'><router-link to='/list'>查看更多 ></router-link></span>
          </div>
          <time-discount />
        </div>
        <!-- E=限时优惠 -->
        <div class='goods_list'>
          <div class='title'>商品列表</div>
          <div class='goods_list_inner'><goods-list :pullUpLoadIndex='pullUpLoadIndex' :closeUpdate='clearUpdateIcon' /></div>
        </div>
      </cube-scroll>
     </div>
     <bottom-nav />
     <base-loading />
  </div>
</template>

<script>
  import BaseLoading from '@/components/loading/loading.vue'
  import tools from '@/util/tools'
  import BottomNav from '@/components/bottomNav/bottomNav'
  import Search from './components/search/search'
  import HomeBanner from './components/homeBanner/homeBanner'
  import HomeNav from './components/homeNav/homeNav'
  import FastNews from './components/fastNews/fastNews'
  import TimeDiscount from './components/timeDiscount/timeDiscount'
  import GoodsList from './components/goodsList/goodsList'

import { setTimeout } from 'timers';

  export default {
    name: 'home',
    components: {
      BaseLoading,
      HomeBanner,
      BottomNav,
      Search,
      HomeNav,
      FastNews,
      TimeDiscount,
      GoodsList
    },
    data () {
      return {
        userData: '',
        shop: '东昌路店',
        pullUpLoadIndex: 0, // 商品列表下拉的页数
        scrollOptions: {
          pullDownRefresh: true,
          pullUpLoad: true,
          scrollbar: true
        },
        goodslist: [
          {
            id: 1,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/test12323.jpg',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 2,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 3,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 4,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 5,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 6,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 7,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 8,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
        ]
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
      onPullingDown() {
        setTimeout(() => {
          // this.$refs.scroll.forceUpdate()
          window.location.reload()
        }, 1e3)
      },
      onPullingUp() {
        // 更新数据
        console.log(111)
        const { pullUpLoadIndex } = this;
        this.pullUpLoadIndex = pullUpLoadIndex + 1;
        this.$refs.scroll.refresh()
      },
      clearUpdateIcon() {
        this.$refs.scroll.forceUpdate()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import "./index.scss";
</style>
