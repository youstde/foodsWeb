<template>
  <div class='home_goods_list_bx'>
    <flexbox>
      <flexbox-item :span='20/24' class='swiper_out_layer_bx'>
        <div class="swiper-container" id='budget_goods_swiper'>
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item, i) in goodslist' :key='i'>
              <img class='goods_img' :src="item.picture" alt="">
            </div>
          </div>
        </div>
      </flexbox-item>
      <flexbox-item :span='4/24'>
        <div class='text_bx' @click='goToGoodsList'>共{{goodslist.length}}件 ></div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'goods-swiper',
    components: {
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        goodslist: [
          {
            id: 1,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%951.jpg',
            title: '特级鲜冻虾仁冷冻新鲜包邮500g*2青虾仁新鲜虾仁野生海鲜虾仁生鲜',
            price: '3.90',
            num: 1,
            allPrice: '3.90'
          },
          {
            id: 2,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%952.jpg',
            title: '正宗海南文昌鸡1年阉鸡4斤新鲜生鲜农家散养土鸡白切煲汤顺丰发货',
            price: '228.00',
            num: 2,
            allPrice: '456.00'
          },
          {
            id: 3,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%953.jpg',
            title: 'KingOscar泰国原装进口生鲜熟冻拉直海鲜对虾解冻即食白虾类1250g',
            price: '299.00',
            num: 1,
            allPrice: '299.00'
          },
          {
            id: 4,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%951.jpg',
            title: '特级鲜冻虾仁冷冻新鲜包邮500g*2青虾仁新鲜虾仁野生海鲜虾仁生鲜',
            price: '3.90',
            num: 1,
            allPrice: '3.90'
          },
          {
            id: 5,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%952.jpg',
            title: '正宗海南文昌鸡1年阉鸡4斤新鲜生鲜农家散养土鸡白切煲汤顺丰发货',
            price: '228.00',
            num: 2,
            allPrice: '456.00'
          },
          {
            id: 6,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/%E5%95%86%E5%93%81%E6%B8%85%E5%8D%953.jpg',
            title: 'KingOscar泰国原装进口生鲜熟冻拉直海鲜对虾解冻即食白虾类1250g',
            price: '299.00',
            num: 1,
            allPrice: '299.00'
          }
        ]
      }
    },
    mounted() {
      const goodsArrStr = localStorage.getItem('goods_arr')
      if(goodsArrStr) {
        const goodsArr = JSON.parse(goodsArrStr)
        this.goodslist = goodsArr
        var mySwiper = new Swiper('#budget_goods_swiper', {
          freeMode : true,
          slidesPerView: 5
        })
      }
    },
    methods: {
      goToGoodsList() {
        // 跳转到商品清单页
        this.$router.push({
          path: '/goodsinventory',
          query: {
            id: 123
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .home_goods_list_bx {
    .swiper-container {
      .swiper-wrapper {
        .swiper-slide {
          // width: 5.75rem !important;
          background-color: #fff;
          .goods_img {
            width: 2.5rem;
            height: 2.5rem;
            display: block;
          }
        }
      }
    }
    .swiper_out_layer_bx {
      padding-left: 0.75rem;
    }
    .text_bx {
      font-size: 12px;
      text-align: center;
      color: $inputPlaceHolderColor;
      @include singleLineView;
    }
  }
</style>
