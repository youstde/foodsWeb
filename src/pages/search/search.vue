<template>
  <div class='search_bx'>
    <top-back heightNum='1.95rem'>
      <div class="search_right_lbx">
        <span class='icon_bx'><svg-icon iconClass='search'></svg-icon></span>
        <input class='search_input' placeholder="搜索"  @keypress="searchGoods" />
      </div>
    </top-back>
    <!-- S=搜索标签 -->
    <div class='label_container' v-if='showAllLabel'>
      <hot-label v-show='showHotLabel' :hotList='hotList' />
      <history-label v-show='showClearHistoryLabel' :historyList='historyList' :clearHistoryLabel='clearHistoryLabel' />
    </div>
    <!-- E=搜索标签 -->
    <!-- S=搜索列表 -->
    <div class="search_list_bx" v-else>
      <search-list />
    </div>
    <!-- E=搜索列表 -->
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import HotLabel from './components/hotLabel/hotLabel'
  import HistoryLabel from './components/historyLabel/historyLabel'
  import SearchList from './components/searchList/searchList'

  export default {
    name: 'search',
    components: {
      TopBack,
      HotLabel,
      HistoryLabel,
      SearchList,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        showAllLabel: false,
        showClearHistoryLabel: false,
        showHotLabel: false,
        hotList: [
          {
            id: 1,
            label: '酸奶'
          },
          {
            id: 2,
            label: '荔枝'
          },
          {
            id: 3,
            label: '火龙果'
          },
          {
            id: 4,
            label: '杨梅'
          },
          {
            id: 5,
            label: '山竹'
          }
        ],
        historyList: [
          {
            id: 1,
            label: '牛奶'
          },
          {
            id: 2,
            label: '苹果'
          },
          {
            id: 3,
            label: '好吃的东西'
          },
          {
            id: 4,
            label: '山竹'
          },
          {
            id: 5,
            label: '杨梅'
          },
          {
            id: 6,
            label: '好吃的东西'
          },
          {
            id: 7,
            label: '山竹'
          },
          {
            id: 8,
            label: '杨梅'
          }
        ]
      }
    },
    mounted() {
      if(this.checkQuery('key')) {
        // 此时是有搜索条件的,不必调用热门搜索和历史搜索

      } else {
        this.showAllLabel = true
        // 调用接口，获取热门关键词
        this.showHotLabel = true
        // 调用接口，获取搜索历史
        this.showClearHistoryLabel = true
      }
    },
    methods: {
      clearHistoryLabel() {
        this.showClearHistoryLabel = false
      },
      searchGoods(event) {
        let value = event.target.value
        if(event.keyCode === 13) {
          event.preventDefault()
          history.replaceState({}, '',`/search?key=${value}`)
          this.submit(value)
        }
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
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
