<template>
  <div class='landscape_list_item clear'>
    <div class='item_left'>
      <img :src="itemObj.picture" alt="">
    </div>
    <div class='item_right'>
      <div class='title'>{{itemObj.alias}}</div>
      <div v-if='itemObj.price_rush'>
        <div class='price'>￥{{itemObj.price_rush}}</div>
        <div class='price_odder'>￥{{itemObj.price_sale}}</div>
      </div>
      <div class='price' v-else>￥{{itemObj.price_sale}}</div>
    </div>
    <div class='goods_car_bx' :data-id='itemObj.id' @click='addCar'>
      <div class='buy_btn'>购买</div>
    </div>
  </div>
</template>

<script>
  import GoodsCar from '../goodsCar/goodsCar'

  export default {
    name: 'list-item',
    components: {
      GoodsCar,
    },
    props: [
      'itemObj',
      'disableScoll',
      'blurFun'
    ],
    data () {
      return {
        isShowCar: true,
        goodsNum: 0
      }
    },
    mounted() {

    },
    methods: {
      addCar(e) {
        this.disableScoll(true)
        this.isShowCar = false;
        console.log(e.currentTarget.getAttribute('data-id'))
        window.sendMessage('toggle:classappendcar', this.itemObj)
      },
      changeBack(num, type) {
        console.log(num)
        this.goodsNum = num
        if(!num && type === 2) {
          this.isShowCar = true
        }
      },
      blurBack(num) {
        if(num === 0) {
          this.isShowCar = true
        }
        this.blurFun()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
