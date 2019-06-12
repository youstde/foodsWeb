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
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          },
          {
            id: 6,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 7,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 8,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
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
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          },
          {
            id: 2,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 3,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          },
          {
            id: 4,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 5,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质黄瓜',
            price: '1.46/斤'
          },
          {
            id: 6,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 7,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
            title: '精选优质南瓜',
            price: '0.99/斤'
          },
          {
            id: 8,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/time-discount-1.png',
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
