<template>
  <div class='goods_list_bx clear'>
    <div class='goods_item' v-for='(item,i) in goodslist' :key='i'>
      <div class='goods_item_inner'><HomeGoodsItem :goodsItem='item' type='2' /></div>
    </div>
  </div>
</template>

<script>
  import HomeGoodsItem from '@/pages/home/components/homeGoodsItem/homeGoodsItem'
import { setTimeout } from 'timers';

  export default {
    name: 'goods-list',
    components: {
      HomeGoodsItem
    },
    props: [
      'pullUpLoadIndex',
      'closeUpdate'
    ],
    watch: {
      pullUpLoadIndex (index) {
        const { goodslist } = this;
         const newList = [{
            id: 5,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          },
          {
            id: 6,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 7,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 8,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          }]
        this.goodslist = goodslist.concat(newList)
        this.closeUpdate();
      }
    },
    data () {
      return {
        goodslist: [
          {
            id: 1,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          },
          {
            id: 2,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 3,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          },
          {
            id: 4,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 5,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          },
          {
            id: 6,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 7,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 8,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          },
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
