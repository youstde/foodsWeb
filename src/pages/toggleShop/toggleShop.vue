<template>
  <div class='toggle_shop'>
    <div class="toggle_top_bx">
      <div class="active_shop">
        {{activeShop}}
        <span class='arrow_icon'><svg-icon iconClass='xiala'></svg-icon></span>
      </div>
      <div class='cancel_btn' @click='cancel'>取消</div>
    </div>
    <div class="shop_list">
      <div class='toggle_tip'>可选择其他门店</div>
      <div class="shop_item" v-for='(item, i) in shopList' :key='i' @click='toggleShop(item.id)'>
        <div class="item_shop_name">{{item.shopName}}</div>
        <div class="item_shop_adress">{{item.address}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'toggle-shop',
    components: {

    },
    data () {
      return {
        activeShop: '东昌路店',
        shopList: [
          {
            id: 1,
            shopName: '文一路店',
            address: '杭州市西湖区文一西路193号'
          },
          {
            id: 2,
            shopName: '古荡公交站店',
            address: '杭州市西湖区文一西路123号古荡公交站一楼'
          }
        ]
      }
    },
    mounted() {

    },
    methods: {
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
