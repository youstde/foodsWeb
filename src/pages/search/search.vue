<template>
  <div class='search_bx'>
    <top-back heightNum='1.95rem' paddingBtm='0.8rem'>
      <div class="search_right_lbx">
        <span class='icon_bx'><svg-icon iconClass='search'></svg-icon></span>
        <input :class='{search_input: true, haveCarBtn:haveCarBtn}' ref='searchInput' type='text' placeholder="搜索" v-model="searchKey" @input='searchInput'  @keypress="searchGoods" />
      </div>
      <div class="top_car_bx"></div>
    </top-back>
    <!-- S=搜索标签 -->
    <div class='label_container' v-if='showAllLabel'>
      <!-- <hot-label v-show='showHotLabel' :hotList='hotList' /> -->
      <history-label v-show='showClearHistoryLabel' :historyList='historyList' :clearHistoryLabel='clearHistoryLabel' />
    </div>
    <!-- E=搜索标签 -->
    <!-- S=搜索列表 -->
    <div class="search_list_bx" v-else>
      <class-list />
    </div>
    <!-- E=搜索列表 -->
     <toast v-model="showSearchToast" type='text' text='请输入搜索内容'></toast>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Toast } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import HotLabel from './components/hotLabel/hotLabel'
  import HistoryLabel from './components/historyLabel/historyLabel'
  import ClassList from '@/components/classList/classList'

  export default {
    name: 'search',
    components: {
      TopBack,
      HotLabel,
      HistoryLabel,
      ClassList,
      Flexbox,
      FlexboxItem,
      Toast
    },
    data () {
      return {
        haveCarBtn: true,
        searchKey: '',
        showSearchToast: false,
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
      console.log(this.$route.query)
      if(this.checkQuery('key')) {
        // 此时是有搜索条件的,不必调用热门搜索和历史搜索
        const key = this.$route.query.key
        this.searchKey = key
      } else {
        this.updateLabel()
      }
    },
    methods: {
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
