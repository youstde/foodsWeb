<template>
  <div class='goods_car'>
    <div class="go_back_out_bx" ref='carGoBackOutBx' :style="'background:rgba(255,255,255,'+pullDownY+')'">
        <top-back type='radis' heightNum='1.95rem'>
          <div class='car_back_right_bx'>
            <div class="car_title">购物车</div>
            <div class='delete_goods'>删除</div>
          </div>
        </top-back>
    </div>
     <cube-scroll
        ref='scroll'
        :scroll-events="['scroll']"
         @scroll='onScrollHandle'
        :data='lists'
        :options='scrollOptions'
        @pulling-up='onPullingUp'>
        <div class='goods_car_inner'>
          <div class="car_scroll_out_bx">

              <car-item
                :checkList='checkList'
                :itemObj='item'
                v-for='(item,i) in lists'
                :key='i'
                :disableScoll='disableScoll'
                :blurFun='enableScroll' />
          </div>
        </div>
     </cube-scroll>
     <div class='total_account_bx'>
       <statistic-account />
     </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import TopBack from '@/components/topBack/topBack'
  import BottomNav from '@/components/bottomNav/bottomNav'
  import CarItem from './components/carItem/carItem'
  import StatisticAccount from './components/statisticAccount/statisticAccount'

  export default {
    name: 'goods-car',
    components: {
      TopBack,
      BottomNav,
      CarItem,
      StatisticAccount
    },
    data () {
      return {
          pullDownY: 0,
          scrollOptions: {
            pullDownRefresh: false,
            pullUpLoad: true,
            scrollbar: true
        },
        checkList: [1,2,3,4],
        lists: [
          {
            id: 1,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 2,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 3,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 4,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 5,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 6,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 7,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          }
        ]
      }
    },
    mounted() {

    },
    methods: {
      onScrollHandle(pos) {
        const pullDownY = pos.y
        if(pullDownY <= 0) {
          this.pullDownY = Math.abs(pullDownY/20)
        } else {
          this.pullDownY = 0
        }
      },
      disableScoll() {
        this.$refs.scroll.disable()
      },
      enableScroll() {
        this.$refs.scroll.enable()
      },
      onPullingUp() {
        // 更新数据
        console.log(111)
        this.lists = this.lists.concat([
          {
            id: Date.now(),
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: Date.now(),
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: Date.now(),
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          }
        ])
        const { pullUpLoadIndex } = this;
        this.pullUpLoadIndex = pullUpLoadIndex + 1;
        this.$refs.scroll.refresh()
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
