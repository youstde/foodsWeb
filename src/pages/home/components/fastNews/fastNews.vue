<template>
  <div class='fast_news_bx'>
    <flexbox>
      <flexbox-item class='fast_news_left' :span="3">
        <img class='fast_news_img' src="@/assets/fast-news.png" alt="">
      </flexbox-item>
      <flexbox-item :span="9">
        <div class="swiper-container swiper-no-swiping" id='fast_news_swiper'>
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for='item in fastNewsData' :key='item.ssid'>
              <div class='news_title'>{{item.content}}</div>
              <div class='news_footer'>
                活动时间:
                {{item.date}}
                <!-- <span>{{item.startTime | baseDateFormat}}</span> -
                <span>{{item.endTime | baseDateFormat}}</span> -->
              </div>
            </div>
          </div>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, dateFormat } from 'vux'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
import { setTimeout } from 'timers';

  export default {
    name: 'fast-news',
    data () {
      return {
        mySwiper: ''
      }
    },
    components: {
      Flexbox,
      FlexboxItem
    },
    props: [
      'fastNewsData'
    ],
    watch: {
      fastNewsData(val) {
        if(typeof val === 'object' && val.length) {
          setTimeout(() => {
            const mySwiper = new Swiper('#fast_news_swiper', {
              direction : 'vertical',
              autoplay:{
                  delay: 4000,
                  disableOnInteraction: false,
              },//可选选项，自动滑动
              loop : true,
            })
          }, 1)
        }
      }
    },
    filters: {
      // 注册过滤器
      baseDateFormat: (value) => {
        return dateFormat(value, 'YYYY/MM/DD')
      }
    },
    data () {
      return {
        fastNews: [
          {
            title: '新鲜时蔬，全场五折降价销售',
            startTime: 1558340714456,
            endTime: 1558340723776
          },
          {
            title: '全场牛奶满100减50，上不封顶，还不赶快抢购',
            startTime: 1558340714456,
            endTime: 1558340723776
          },
          {
            title: '全场粮油8折起，快点行动吧!',
            startTime: 1558340714456,
            endTime: 1558340723776
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
