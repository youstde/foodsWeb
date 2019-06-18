<template>
  <div class='order_list_bx'>
    <top-back heightNum='1.95rem'>
      <div class="go_back_right_lbx">
        <cube-tab-bar v-model="selectedLabel"
                    show-slider
                    :use-transition="disabled"
                    ref="tabNav"
                    :data="tabLabels">
      </cube-tab-bar>
      </div>
    </top-back>
    <div class='content'>
      <div class='tab-slide-container'>
        <cube-slide
          ref="slide"
          :loop="loop"
          :initial-index="initialIndex"
          :auto-play="autoPlay"
          :show-dots="showDots"
          :options="slideOptions"
          @scroll="scroll"
          @change="changePage"
        >
           <!-- 全部 -->
          <cube-slide-item>
            <cube-scroll :data="allData" :options="scrollOptions">
              <order-list :dataSource='allData' />
            </cube-scroll>
          </cube-slide-item>
          <!-- 代付款 -->
          <cube-slide-item>
            <cube-scroll :data="noPayData" :options="scrollOptions">
              <order-list :dataSource='noPayData' />
            </cube-scroll>
          </cube-slide-item>
          <!-- 代发货 -->
          <cube-slide-item>
            <cube-scroll :data="waitDispatchData" :options="scrollOptions">
              <order-list :dataSource='waitDispatchData' />
            </cube-scroll>
          </cube-slide-item>
          <!-- 配送中 -->
           <cube-slide-item>
            <cube-scroll :data="tavalData" :options="scrollOptions">
              <order-list :dataSource='tavalData' />
            </cube-scroll>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Toast } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import { ALL_DATA, NO_PAY_DATA, WAIT_DISPATCH_DATA, TAVAL_DATA } from './mock'

  import OrderList from './components/orderList/orderList'

  function findIndex(ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn)
  }
  /* istanbul ignore next */
  let index = -1
  /* istanbul ignore next */
  ary.some(function (item, i, ary) {
    const ret = fn.call(this, item, i, ary)
    if (ret) {
      index = i
      return ret
    }
  })
  /* istanbul ignore next */
  return index
}

  export default {
    name: 'order',
    components: {
      TopBack,
      Flexbox,
      FlexboxItem,
      OrderList
    },
    data () {
      return {
        selectedLabel: '全部',
        disabled: false,
        tabLabels: [
          {
            label: '全部'
          },
          {
            label: '待支付'
          },
          {
            label: '代发货'
          },
          {
            label: '配送中'
          }
        ],
        loop: false,
        autoPlay: false,
        showDots: false,
        slideOptions: {
          listenScroll: true,
          probeType: 3,
          /* lock y-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        scrollOptions: {
          /* lock x-direction when scrolling horizontally and  vertically at the same time */
          directionLockThreshold: 0
        },
        allData: ALL_DATA,
        noPayData: NO_PAY_DATA,
        waitDispatchData: WAIT_DISPATCH_DATA,
        tavalData: TAVAL_DATA
      }
    },
    computed: {
      initialIndex () {
        let index = 0
        index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
        return index
      }
    },
    mounted() {
      // console.log(this.allData)
      if(this.checkQuery('key')) {
        // 此时是有搜索条件的,不必调用热门搜索和历史搜索
        const key = this.$route.query.key
        this.searchKey = key
      } else {
        this.updateLabel()
      }
    },
    methods: {
       changePage (current) {
        this.selectedLabel = this.tabLabels[current].label
        console.log(current)
      },
      scroll (pos) {
        const x = Math.abs(pos.x)
        const tabItemWidth = this.$refs.tabNav.$el.clientWidth
        const slideScrollerWidth = this.$refs.slide.slide.scrollerWidth
        const deltaX = x / slideScrollerWidth * tabItemWidth
        this.$refs.tabNav.setSliderTransform(deltaX)
      },
      clearHistoryLabel() {
        this.showClearHistoryLabel = false
      },
      searchGoods(event) {
        if(event.keyCode === 13) {
          const { searchKey } = this
          event.preventDefault()
          if(searchKey.length) {
            this.submit(searchKey)
          } else {
            this.showSearchToast = true
          }
          // input失去焦点，从而点击搜索的时候隐藏键盘
          this.$refs.searchInput.blur()
        }
      },
      searchInput(e) {
        const value = e.target.value
        if(!value.length) {
          this.updateLabel()
          history.replaceState({}, '','/search')
          return
        }
        history.replaceState({}, '',`/search?key=${value}`)
      },
      updateLabel() {
        this.showAllLabel = true
        // 调用接口，获取热门关键词
        this.showHotLabel = true
        // 调用接口，获取搜索历史
        this.showClearHistoryLabel = true
      },
      checkQuery(key) {
        const queryObj = this.$route.query
        console.log(Object.keys(queryObj))
        let queryArr = Object.keys(queryObj) || []
        const result = queryArr.some(item => {
          if(item === key) {
            return true
          }
        })
        if(result) return true
        return false
      },
      submit(key) {
        // 发送请求，获取列表信息
        this.showAllLabel =false
        console.log('submit', key)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
