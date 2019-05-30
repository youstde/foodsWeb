<template>
  <div class='goods_detail'>
    <div class="go_back_out_bx">
        <top-back type='radis' heightNum='1.95rem'>
          <div class="go_home_bx">
            <div class="go_back_icon_bx">
              <router-link to='/'>
                <span class='icon_bx'><svg-icon iconClass='gohome'></svg-icon></span>
              </router-link>
            </div>
          </div>
        </top-back>
    </div>
    <cube-scroll
        ref='scroll'
        :options='scrollOptions'>
      <detail-swiper></detail-swiper>
      </cube-scroll>
      <append-car></append-car>
  </div>
</template>

<script>
  import TopBack from '@/components/topBack/topBack'
  import AppendCar from '@/components/appendCar/appendCar'
  import DetailSwiper from './components/detailSwiper/detailSwiper'

  export default {
    name: 'goods-detail',
    components: {
      TopBack,
      AppendCar,
      DetailSwiper
    },
    data () {
      return {
         scrollOptions: {
          pullDownRefresh: false,
          pullUpLoad: false,
          scrollbar: true
        },
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
