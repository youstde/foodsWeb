<template>
  <div class='home_goods_list_bx'>
    <flexbox>
      <flexbox-item :span='20/24' class='swiper_out_layer_bx'>
        <div class="swiper-container" id='budget_goods_swiper'>
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='(item, i) in goodslist' :key='i'>
              <img class='goods_img' :src="item.img" alt="">
            </div>
          </div>
        </div>
      </flexbox-item>
      <flexbox-item :span='4/24'>
        <div class='text_bx'>共300件》</div>
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
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 2,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 3,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 4,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 5,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
          {
            id: 6,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 7,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质南瓜',
            odderPrice: '2.6/斤',
            cheapPrice: '0.99/斤'
          },
          {
            id: 8,
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g381yjn24kj305k055wfj.jpg',
            title: '精选优质黄瓜',
            odderPrice: '14.6/斤',
            cheapPrice: '1.46/斤'
          },
        ]
      }
    },
    mounted() {
      var mySwiper = new Swiper('#budget_goods_swiper', {
        freeMode : true,
        slidesPerView: 5
      })
    },
    methods: {

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
