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
      <detail-swiper :detailData='detailData' />
      </cube-scroll>
      <append-car :dataSource='detailData' ></append-car>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import TopBack from '@/components/topBack/topBack'
  import AppendCar from '@/components/appendCar/appendCar'
  import DetailSwiper from './components/detailSwiper/detailSwiper'

  import { getGoodsBase } from '@/service/getData'
  import { getLocalStorage } from '@/util/tools'

  export default {
    name: 'goods-detail',
    components: {
      TopBack,
      AppendCar,
      DetailSwiper
    },
    data () {
      return {
        detailData: {},
        scrollOptions: {
          pullDownRefresh: false,
          pullUpLoad: false,
          scrollbar: true
        },
      }
    },
    computed: {
      ...mapGetters([
        'merchant'
      ])
    },
    mounted() {
      console.log(this.merchant)
      const { query: { serialNo } } = this.$route
      this.fetchDetailData(serialNo)
    },
    methods: {
      // 暂时门店的id都是固定为107
      fetchDetailData(serialNo) {
        const localMerchant = getLocalStorage('merchant')
        getGoodsBase({
          t: 'detail',
          serial_no: serialNo,
          mch_id: localMerchant.id
        }).then(res => {
          if(res && res.errcode === 0) {
            this.detailData = res.data
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
