<template>
    <div class='detail_swiper_bx'>
      <div class="swiper-container" id='goods_detail_swiper'>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='(item, i) in goods.imgList' :key='i'>
            <router-link to='/goodsdetail'>
            <img :data-src="item" src='https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/home-banner.png' class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
            </router-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class='detail_swiper_detail'>
        <div class='title'>{{goods.title}}</div>
        <div class='botttom_bx'>
          <div class='left_price'>￥{{goods.price}}</div>
          <div class='right_warehouse'>库存: {{goods.warehouse}}件</div>
        </div>
      </div>
      <!-- S=产品规格 -->
      <div class="goods_size">
        <div class="title">产品规格</div>
        <div class="size_item">
          <flexbox>
            <flexbox-item :span='6'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>产地</flexbox-item>
              <flexbox-item :span='8' class='item_info'>内蒙古</flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item :span='6' class='after_flex_bx'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>等级</flexbox-item>
              <flexbox-item :span='8' class='item_info'>一级</flexbox-item>
              </flexbox>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="size_item">
          <flexbox>
            <flexbox-item :span='6'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>品牌</flexbox-item>
              <flexbox-item :span='8' class='item_info'>小露珠圣女果</flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item :span='6' class='after_flex_bx'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>型号</flexbox-item>
              <flexbox-item :span='8' class='item_info'>MD68GHDSO8D68GDSP</flexbox-item>
              </flexbox>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
      <!-- E=产品规格 -->
      <!-- S=详情富文本 -->
      <div class='detail_rich_txt' v-html='goods.richTxt'></div>
      <!-- E=详情富文本 -->
    </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    name: 'detail-swiper',
    components: {
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        goods: {
          warehouse: '10',
          price: '14.9/斤',
          richTxt: "<h1 style='height:200px'>this is rich text</h1><h1>this is rich text</h1><h1>this is rich text</h1><h1>this is rich text</h1><h1>this is rich text</h1><h1>this is rich text</h1><h1>this is rich text</h1><h1>this is rich text</h1>",
          title: '【满199减120】 三只松鼠夏威夷果160g 小零食坚果炒货孕妇坚果每日坚果干果休闲零食送开口器 160g',
          imgList: [
            'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/home-banner.png',
            'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/home-banner.png',
            'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/home-banner.png',
            'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/home-banner.png'
          ]
        }
      }
    },
    mounted() {
      var mySwiper = new Swiper('#goods_detail_swiper', {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        },
        autoplay:{
            delay: 5000,
            disableOnInteraction: false,
        },//可选选项，自动滑动
        loop : true,
        lazy: {
          loadPrevNext: true,
        },
      })
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
