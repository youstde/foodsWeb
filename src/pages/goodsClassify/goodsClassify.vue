<template>
  <div class='goods_classify'>
    <top-back heightNum='1.95rem'>
      <div class='scroll_out_bx'>
        <scroll-nav :tabLabels='tabLabels' :activeLabel='activeLabel' :setActiveCb='setActiveCb'></scroll-nav>
      </div>
      <div class="right_arrow_bx" @click='toggleLabelShow'>
        <span><svg-icon iconClass='xiala'></svg-icon></span>
      </div>
    </top-back>
    <div v-if='showLabelList' class="top_nav_list_bx">
      <div :class='{list_item:true,active_item:activeLabel===item.id}' @click='toggleActiveLabel(item.id)' v-for='(item, i) in tabLabels' :key='i'>{{item.label}}</div>
    </div>
    <class-list></class-list>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import TopBack from '@/components/topBack/topBack'
  import ScrollNav from './components/scrollNav/scrollNav'
  import ClassList from '@/components/classList/classList'
  import BottomNav from '@/components/bottomNav/bottomNav'

  export default {
    name: 'goods-classify',
    components: {
      TopBack,
      ScrollNav,
      ClassList,
      BottomNav
    },
    data () {
      return {
        activeLabel: 0,
        showLabelList: false,
        tabLabels: [
          {
            id: 0,
            label: '关注'
          },
          {
            id: 21,
            label: '今日特卖'
          },
         {
           id: 23,
          label: '零食小吃'
         },
         {
           id: 43,
            label: '母婴用品'
          },
          {
            id: 65,
            label: '酒水饮料'
          },
         {
           id: 76,
          label: '家居用品'
         },
         {
           id: 74,
          label: '美妆百货'
         },
         {
           id: 123,
          label: '个护清洁'
         }
        ],
      }
    },
    computed: {
      ...mapGetters([
        'isShowCover'
      ])
    },
    watch: {
      isShowCover(value) {
        if(!value) {
          this.showLabelList = false
        }
      }
    },
    mounted() {

    },
    methods: {
      toggleLabelShow() {
        const { showLabelList } = this
        this.showLabelList = !showLabelList
        this.$store.commit('SET_IS_SHOW_COVER', !showLabelList)
      },
      toggleActiveLabel(id) {
        this.activeLabel = id
        this.toggleLabelShow()
      },
      setActiveCb(id) {
        this.activeLabel = id
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
