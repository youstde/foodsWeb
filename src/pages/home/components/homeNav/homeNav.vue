<template>
  <div class='home_nav_bx'>
       <flexbox>
        <flexbox-item class='home_nav_item' v-for='(item, i) in navList' :key='i'>
          <router-link :to='item.link'>
            <span class='icon_bx'><img src="@/assets/home-nav.jpeg" alt=""></span>
            <p class='item_label'>{{item.label}}</p>
          </router-link>
        </flexbox-item>
      </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'home-nav',
    components: {
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        navList: [
          {
            label: '超市便利',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '水果',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '蔬菜生鲜',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '卤味',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
          },
          {
            label: '休闲零食',
            img: '@/assets/home-nav.jpeg',
            link: '/msite'
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
