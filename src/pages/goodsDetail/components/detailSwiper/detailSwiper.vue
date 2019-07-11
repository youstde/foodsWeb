<template>
    <div class='detail_swiper_bx'>
      <div class="swiper-container" id='goods_detail_swiper'>
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for='(item, i) in detailData.pictures' :key='i'>
            <router-link to='/goodsdetail'>
              <img :src='item.url' />
            </router-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class='detail_swiper_detail'>
        <div class='title'>{{detailData.alias}}</div>
        <div class='botttom_bx'>
          <div class='left_price'>￥{{detailData.price_sale}}/{{detailData.specification_name}}</div>
          <div class='right_warehouse'>库存: {{detailData.stock_now}}{{detailData.specification_name}}</div>
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
              <flexbox-item :span='8' class='item_info'>{{detailData.region_name}}</flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item :span='6' class='after_flex_bx'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>等级</flexbox-item>
              <flexbox-item :span='8' class='item_info'>{{detailData.levels}}</flexbox-item>
              </flexbox>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="size_item">
          <flexbox>
            <flexbox-item :span='6'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>品牌</flexbox-item>
              <flexbox-item :span='8' class='item_info'>{{detailData.brand_name}}</flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item :span='6' class='after_flex_bx'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>存储情况</flexbox-item>
              <flexbox-item :span='8' class='item_info'>{{detailData.storage_name}}</flexbox-item>
              </flexbox>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="size_item">
          <flexbox>
            <flexbox-item :span='6'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>外包装</flexbox-item>
              <flexbox-item :span='8' class='item_info'>{{detailData.packing_name_a}}</flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item :span='6' class='after_flex_bx'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>内包装</flexbox-item>
              <flexbox-item :span='8' class='item_info'>{{detailData.packing_name_b}}</flexbox-item>
              </flexbox>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="size_item">
          <flexbox>
            <flexbox-item :span='6'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>品类</flexbox-item>
              <flexbox-item :span='8' class='item_info'>{{detailData.category_name}}</flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item :span='6' class='after_flex_bx'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>加工情况</flexbox-item>
              <flexbox-item :span='8' class='item_info'>{{detailData.process_name}}</flexbox-item>
              </flexbox>
            </flexbox-item>
          </flexbox>
        </div>
        <div class="size_item">
          <flexbox>
            <flexbox-item :span='6'>
              <flexbox>
              <flexbox-item :span='4' class='item_label'>品种</flexbox-item>
              <flexbox-item :span='8' class='item_info'>{{detailData.variety_name}}</flexbox-item>
              </flexbox>
            </flexbox-item>
            <flexbox-item :span='6' class='after_flex_bx'></flexbox-item>
          </flexbox>
        </div>
      </div>
      <!-- E=产品规格 -->
      <!-- S=详情富文本 -->
      <div class='detail_rich_txt' v-html='detailData.describe'></div>
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
    props: ['detailData'],
    watch: {
      detailData (val) {
        console.log('detailData:', val)
        if(typeof val === 'object' && val.id) {
          setTimeout(() => {
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
          }, 1)
        }
      }
    },
    data () {
      return {

      }
    },
    mounted() {

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
