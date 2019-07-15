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
      <div :class='{list_item:true,active_item:activeLabel===item.id}' @click='toggleActiveLabel(item.id)' v-for='(item, i) in tabLabels' :key='i'>{{item.name}}</div>
    </div>
    <class-list :sourceData='sourceData' :uploadCb='uploadCb'></class-list>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import TopBack from '@/components/topBack/topBack'
  import ScrollNav from './components/scrollNav/scrollNav'
  import ClassList from '@/components/classList/classList'
  import BottomNav from '@/components/bottomNav/bottomNav'

  import { getLocalStorage } from '@/util/tools'
  import { getGoodsBase } from '@/service/getData'

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
            icon: "",
            id: 1,
            name: "限时抢购"
          }
        ],
        sourceData: []
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
      const categorysData = getLocalStorage('categorys_data')
      this.tabLabels = [
        ...this.tabLabels,
        ...categorysData
      ]
      const { query: { id } } = this.$route
      console.log('id:', id)
      if(id) {
        this.activeLabel = Number(id)
        this.fetchListData(id)
      } else {
        this.activeLabel = categorysData[0].id
        this.fetchListData(categorysData[0].id)
      }
    },
    methods: {
      fetchListData(categoryId, index) {
        const merchant = getLocalStorage('merchant')
        const params = {
          t: 'list',
          category_id: categoryId || this.activeLabel,
          mch_id: merchant.id,
          index: index || 1,
          size: 10
        }
        getGoodsBase(params).then(res => {
          const { sourceData } = this
          if(res && res.errcode === 0) {
            if(categoryId) {
              this.sourceData = res.data
            } else {
              this.sourceData = [...sourceData, ...res.data]
            }
          }
        })
      },
      uploadCb(index) {
        console.log('index:', index)
        this.fetchListData(null, index)
      },
      toggleLabelShow() {
        const { showLabelList } = this
        this.showLabelList = !showLabelList
        this.$store.commit('SET_IS_SHOW_COVER', !showLabelList)
      },
      toggleActiveLabel(id) {
        this.activeLabel = id
        this.toggleLabelShow()
        this.fetchListData(id)
      },
      setActiveCb(id) {
        this.activeLabel = id
        console.log('setActiveCb:', id)
        this.fetchListData(id)
        this.$router.replace({
          path: '/goodsclassify',
          query: {
            id
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
