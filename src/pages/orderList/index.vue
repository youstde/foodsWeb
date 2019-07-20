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
            <cube-scroll
              ref="allData"
              :data="allData.data"
              :options="scrollOptions"
              :scroll-events="['scroll']"
              @pulling-down="() => onPullingdown(-1, 'allData')"
              @pulling-up="() => onPullingUp(-1, 'allData')"
            >
              <order-list :dataSource='allData.data' />
            </cube-scroll>
          </cube-slide-item>
          <!-- 代付款 -->
          <cube-slide-item>
            <cube-scroll
              ref="noPayData"
              :data="noPayData.data"
              :options="scrollOptions"
              @pulling-down="() => onPullingdown(0, 'noPayData')"
              @pulling-up="() => onPullingUp(0, 'noPayData')"
            >
              <order-list :dataSource='noPayData.data' />
            </cube-scroll>
          </cube-slide-item>
          <!-- 代发货 -->
          <cube-slide-item>
            <cube-scroll
              ref="waitDispatchData"
              :data="waitDispatchData.data"
              :options="scrollOptions"
              @pulling-down="() => onPullingdown(1, 'waitDispatchData')"
              @pulling-up="() => onPullingUp(1, 'waitDispatchData')"
            >
              <order-list :dataSource='waitDispatchData.data' />
            </cube-scroll>
          </cube-slide-item>
          <!-- 配送中 -->
          <!-- <cube-slide-item>
            <cube-scroll :data="tavalData" :options="scrollOptions">
              <order-list :dataSource='tavalData' />
            </cube-scroll>
          </cube-slide-item> -->
        </cube-slide>
      </div>
    </div>
    <toast-type :type='showToastType' :message='toastTypeValue' :showToast='showWarningToast' :onHide="onHide"></toast-type>
  </div>
</template>

<script>
  import ToastType from '@/components/toastType/toastType'
  import { Flexbox, FlexboxItem, Toast } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import OrderList from './components/orderList/orderList'

  import { getOrderBase } from '@/service/getData'

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
      OrderList,
      ToastType,
    },
    data () {
      return {
        showToastType: '',
        toastTypeValue: '',
        showWarningToast: false,
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
          // {
          //   label: '配送中'
          // }
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
          directionLockThreshold: 0,
          pullUpLoad: true,
          click: false, // 默认true, 然后会给里面多分配一次点击事件
        },
        allData: {
          data: [],
          index: 1,
          end: false,
        },
        noPayData: {
          data: [],
          index: 1,
          end: false,
        },
        waitDispatchData: {
          data: [],
          index: 1,
          end: false,
        },
        // tavalData: TAVAL_DATA
      }
    },
    computed: {
      initialIndex () {
        let index = 0
        index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
        return index
      },
    },
    mounted() {
      const { query: { success } } = this.$route
      if(success !== undefined) {
        if(success === 'true') {
          this.onShowToast('success', '支付成功!')
        } else {
          this.onShowToast('warn', '支付失败!')
        }
        this.$router.replace({
          path: '/orderlist'
        })
      }
      // console.log(this.allData)
      if(this.checkQuery('key')) {
        // 此时是有搜索条件的,不必调用热门搜索和历史搜索
        const key = this.$route.query.key
        this.searchKey = key
      } else {
        this.updateLabel()
      }
      this.fetchEachTabData()
    },
    methods: {
      changePage (current) {
        this.selectedLabel = this.tabLabels[current].label
        // console.log('changePage', current)
      },
      fetchEachTabData () {
        this.fetchData(-1, 'allData')
        this.fetchData(0, 'noPayData')
        this.fetchData(1, 'waitDispatchData')
      },
      fetchData (status, dataKey, index = 1) {
        console.log(index)
        getOrderBase({
          t: 'list',
          status,
          index,
          size: 10,
        }).then(res => {
          if (res && res.errcode === 0) {
            if (index <= 1) {
              this[dataKey].data = res.data
            } else {
              this[dataKey].data = this[dataKey].data.concat(res.data)
            }
            this[dataKey].index = res.pages ? res.pages.index : index
            this[dataKey].end = index >= (res.pages ? res.pages.lenght : 1)

            this.$refs[dataKey].forceUpdate()
          }
        })
      },
      onPullingUp (status, dataKey) {
        const { index, end } = this[dataKey]
        if (!end) {
          this.fetchData(status, dataKey, index + 1)
        } else {
          this.$refs[dataKey].forceUpdate()
        }
      },
      onPullingdown (index) {
        console.log(11, index)
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
      },
      onShowToast(type, value) {
        this.showToastType = type
        this.toastTypeValue = value
        this.showWarningToast = true
      },
      onHide() {
        this.showWarningToast = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
