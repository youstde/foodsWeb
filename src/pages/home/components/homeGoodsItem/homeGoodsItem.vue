<template>
  <div :class="{home_goods_item_bx:true, goods_item_mormal:type==='1'}">
    <img :src="goodsItem.img" alt="" @click='handleToDetail'>
    <div class='goods_title'>{{goodsItem.title}}</div>
    <flexbox class='goods_detail_bx'>
      <flexbox-item v-if='isSlide' class='goods_price' :span='isShowCar?7:4'>
        <!-- 有打折价 -->
        <div v-if='goodsItem.cheapPrice'>
          <p class='fresh_price'>￥{{goodsItem.cheapPrice}}</p>
          <p class='past_price'>￥{{goodsItem.odderPrice}}</p>
        </div>
        <!-- 无打折价 -->
        <div v-else>
          <p class='normal_price'>￥{{goodsItem.price}}</p>
        </div>
      </flexbox-item>
      <flexbox-item v-else class='goods_price' :span='7'>
        <!-- 有打折价 -->
        <div v-if='goodsItem.cheapPrice'>
          <p class='fresh_price'>￥{{goodsItem.cheapPrice}}</p>
          <p class='past_price'>￥{{goodsItem.odderPrice}}</p>
        </div>
        <!-- 无打折价 -->
        <div v-else>
          <p class='normal_price'>￥{{goodsItem.price}}</p>
        </div>
      </flexbox-item>
      <flexbox-item v-if='isSlide' class='add_to_car' :span='isShowCar?5:8'>
        <div v-if='isShowCar' :class="{inner:true,inner_mormal:type==='1'}" @click='addCar'>
           购买
        </div>
        <div v-else class='input_num_bx'>
          <input-num itemHeight='1.2rem' :changeBack='changeBack' :blurBack='blurBack'></input-num>
        </div>
      </flexbox-item>
      <flexbox-item v-else class='add_to_car' :span='5'>
        <div v-if='isShowCar' :class="{inner:true,inner_mormal:type==='1'}" @click='addCar'>
           购买
        </div>
        <div v-else class='input_num_bx'>
          <input-num itemHeight='1.2rem' :changeBack='changeBack' :blurBack='blurBack'></input-num>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import InputNum from '@/components/inputNum/inputNum'

  export default {
    name: 'home-goods-item',
    components: {
      Flexbox,
      FlexboxItem,
      InputNum
    },
    props: [
      'isSlide', // 当卡片比较小时，出现输入数字框的时候会左移从而提供更多的地方展示输入框
      'goodsItem',
      'type'
    ],
    data () {
      return {
        isShowCar: true
      }
    },
    mounted() {
      console.log(this.type)
    },
    methods: {
      addCar(e) {
        // this.disableScoll(true)
        this.isShowCar = false;
        console.log(e.currentTarget.getAttribute('data-id'))
      },
      changeBack(num) {
        if(num === 0) {
          this.isShowCar = true
        }
      },
      blurBack(num) {
        if(num === 0) {
          this.isShowCar = true
        }
      },
      handleToDetail() {
        const { id } = this.goodsItem
        this.$router.push(`/goodsdetail?id=${id}`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
