<template>
  <div class='home_goods_list_bx'>
    <flexbox>
      <flexbox-item class='swiper_out_layer_bx'>
        <div class="swiper-container" :id='swiperId'>
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item, i) in summary' :key='i'>
              <img class='goods_img' :src="item.picture" :alt="item.name">
            </div>
          </div>
        </div>
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
    props: [
      'swiperId',
      'summary',
    ],
    // data () {
    //   return {
    //     goodslist: []
    //   }
    // },
    mounted() {
      const { swiperId } = this
      var mySwiper = new Swiper(`#${swiperId}`, {
        freeMode : true,
        slidesPerView: 5
      })
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
          width: 3rem;
          background-color: #fff;
          .goods_img {
            width: 2.5rem;
            height: 2.5rem;
            display: block;
            overflow: hidden;
            font-size: 12px;
          }
        }
      }
    }
    .swiper_out_layer_bx {
      padding-left: 0.45rem;
    }
    .text_bx {
      font-size: 12px;
      text-align: center;
      color: $inputPlaceHolderColor;
      @include singleLineView;
    }
  }
</style>
