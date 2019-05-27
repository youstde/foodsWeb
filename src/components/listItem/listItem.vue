<template>
  <div class='landscape_list_item clear'>
    <div class='item_left'>
      <img :src="itemObj.img" alt="">
    </div>
    <div class='item_right'>
      <div class='title'>{{itemObj.title}}</div>
      <div class='price'>{{itemObj.price}}</div>
    </div>
    <div v-if='isShowCar' class='goods_car_bx' :data-id='itemObj.id' @click='addCar'>
      <goods-car></goods-car>
    </div>
    <div v-else class='input_num_bx'>
      <input-num :changeBack='changeBack' :blurBack='blurBack'></input-num>
    </div>
  </div>
</template>

<script>
  import GoodsCar from '../goodsCar/goodsCar'
  import InputNum from '../inputNum/inputNum'

  export default {
    name: 'list-item',
    components: {
      GoodsCar,
      InputNum
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
