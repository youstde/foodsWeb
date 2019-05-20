<template>
  <div class='bottom_bx'>
       <flexbox>
        <flexbox-item class='bottom_nav_item' v-for='(item, i) in navList' :key='i'>
          <router-link :to='item.link'>
            <span class='icon_bx'><svg-icon :iconClass='item.icon_class'></svg-icon></span>
            <p class='item_label'>{{item.label}}</p>
          </router-link>
        </flexbox-item>
      </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'bottom-nav',
    components: {
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        navList: [
          {
            label: '今日食材',
            icon_class: 'home-moren',
            link: 'msite'
          },
          {
            label: '购物车',
            icon_class: 'cart-moren',
            link: 'msite'
          },
          {
            label: '我的',
            icon_class: 'my-moren',
            link: 'msite'
          }
        ]
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
