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
          <div class='home_banner_swiper_bx'><home-banner :lunboData='lunboData' /></div>
          <flexbox :style="{'padding-top':'0.5rem'}">
            <flexbox-item :span='5/24'>
              <!-- S=门店切换 -->
              <div class='home_top_container'>
                <router-link class='shop_name' to='/toggleshop'>
                  <span class='shop_name_span'>{{shop}}</span>
                  <span class='icon_bx'><svg-icon iconClass='arrowdown' /></span>
                </router-link>
              </div>
               <!-- E=门店切换 -->
            </flexbox-item>
            <flexbox-item :span='19/24'>
              <!-- S=搜索 -->
              <div class='search_out_bx'><search /></div>
              <!-- E=搜索 -->
            </flexbox-item>
          </flexbox>

          <!-- S=顶部导航 -->
          <div class='home_nav_bx'>
            <HomeNav :categorysData='categorysData' />
          </div>
          <!-- E=顶部导航 -->
        </div>
        <div class='center_container'>
          <!-- S=快讯 -->
          <fast-news :fastNewsData='fastNewsData' />
          <!-- E=快讯 -->
        </div>
        <!-- S=限时优惠 -->
        <div class='time_discount' v-show='rushGoodsData.length >= 2'>
          <div class='title'>
            <span>限时优惠</span>
            <span class='get_more'><router-link to='/goodsclassify?id=1'>查看更多 ></router-link></span>
          </div>
          <time-discount :rushGoodsData='rushGoodsData' />
        </div>
        <!-- E=限时优惠 -->
        <div class='goods_list'>
          <div class='title'>商品列表</div>
          <div class='goods_list_inner'><goods-list :merchant='merchant' :pullUpLoadIndex='pullUpLoadIndex' :closeUpdate='clearUpdateIcon' /></div>
        </div>
      </cube-scroll>
     </div>
     <bottom-nav />
     <home-append-car  />
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import tools from '@/util/tools'
  import { Flexbox, FlexboxItem } from 'vux'
  import BottomNav from '@/components/bottomNav/bottomNav'
  import Search from './components/search/search'
  import HomeBanner from './components/homeBanner/homeBanner'
  import HomeNav from './components/homeNav/homeNav'
  import FastNews from './components/fastNews/fastNews'
  import TimeDiscount from './components/timeDiscount/timeDiscount'
  import GoodsList from './components/goodsList/goodsList'
  import HomeAppendCar from './components/homeAppendCar/homeAppendCar'

  import { getHomeData } from './service'
  import { getLocalStorage } from '@/util/tools'

  import { setTimeout } from 'timers';

  export default {
    name: 'home',
    components: {
      Flexbox,
      FlexboxItem,
      HomeBanner,
      BottomNav,
      Search,
      HomeNav,
      FastNews,
      TimeDiscount,
      GoodsList,
      HomeAppendCar
    },
    data () {
      return {
        showAppendCar: false,
        merchant: {},
        userData: '',
        shop: '',
        pullUpLoadIndex: 1, // 商品列表下拉的页数
        scrollOptions: {
          pullDownRefresh: true,
          pullUpLoad: true,
          scrollbar: true
        },
        fastNewsData: [],
        rushGoodsData: [],  // 限时优惠
        lunboData: [],
        categorysData: [], // 商品分类
        goodslist: [
          {
            id: 1,
            img: '@/assets/test/time-discount-2.jpg',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 2,
            img: '@/assets/test/time-discount-1.jpg',
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
    mounted() {
      // const { query: { merchant } } = this.$route
      const localMerchant = getLocalStorage('merchant')
      if(localMerchant) {
        this.merchant = localMerchant
        this.shop  = localMerchant.name
      } else {
        this.$router.replace({
          path: '/'
        })
        return
      }
      this.fetchGetHomeData()
    },
    methods: {
      fetchGetHomeData() {
        getHomeData({
          t: 'infos',
          mch_id: this.merchant.id
        }).then(res => {
          if(res && res.errcode === 0) {
            const { notice, lunbo, categorys, rush } = res.data
            localStorage.setItem('categorys_data', JSON.stringify(categorys))
            localStorage.setItem('rush_goods_data', JSON.stringify(rush))
            this.fastNewsData = notice
            this.lunboData = lunbo
            this.categorysData = categorys
            this.rushGoodsData = rush
          }
        })
      },
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
