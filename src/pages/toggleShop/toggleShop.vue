<template>
  <div class='toggle_shop'>
    <div class="toggle_top_bx">
      <div class="active_shop">
        {{currentStore}}
        <span class='arrow_icon'><svg-icon iconClass='xiala'></svg-icon></span>
      </div>
      <div class='cancel_btn' @click='cancel'>取消</div>
    </div>
    <div class="shop_list">
      <div class='toggle_tip'>可选择其他门店</div>
      <cube-scroll
        ref="scroll"
        :data="shopList"
        :options="scrollOptions">
        <div :class="{shop_item:true, active_shop_item:item.id === currentStoreId}" v-for='(item, i) in shopList' :key='i' @click='toggleShop(item.id)'>
          <div class="item_shop_name">{{item.name}}</div>
          <div class="item_shop_adress">杭州市西湖区文一西路</div>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
  import { getStoreData } from '@/service/getData'

  export default {
    name: 'toggle-shop',
    components: {

    },
    data () {
      return {
        scrollOptions: {
          pullDownRefresh: false,
          pullUpLoad: false,
          scrollbar: true
        },
        currentStore: '',
        currentStoreId: '',
        shopList: []
      }
    },
    mounted() {
      this.fetchStoreData()
    },
    methods: {
      fetchStoreData() {
        getStoreData({
          t: 'list'
        }).then(res => {
          if(res && res.errcode === 0) {
            this.shopList = res.data.list
            const { mch_id: storeId, list: storeData } = res.data
            this.currentStoreId = storeId
            storeData.forEach(item => {
              if(storeId === item.id) {
                this.currentStore = item.name
              }
            })
          }
        })
      },
      toggleShop(id) {
        console.log(id)
        // 发送请求，成功后路由跳转到主页
        this.$router.push({path:'/'})
      },
      cancel() {
        this.$router.push({path:'/'})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
