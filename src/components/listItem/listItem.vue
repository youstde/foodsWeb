<template>
  <div class='landscape_list_item clear'>
    <div class='item_left' @click='goTodetail'>
      <img :src="itemObj.picture" alt="">
    </div>
    <div class='item_right'>
      <div class='title' @click='goTodetail'>{{itemObj.alias}}</div>
      <div v-if='itemObj.price_rush'>
        <div class='price'>￥{{itemObj.price_rush}}/{{itemObj.specification_name}}</div>
        <div class='price_odder'>￥{{itemObj.price_sale}}/{{itemObj.specification_name}}</div>
      </div>
      <div class='price' v-else>￥{{itemObj.price_sale}}/{{itemObj.specification_name}}</div>
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
      console.log(this.itemObj)
    },
    methods: {
      addCar(e) {
        this.disableScoll(true)
        this.isShowCar = false;
        this.$store.commit('SET_IS_SHOW_COVER', true)
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
      },
      goTodetail() {
        const { serial_no } = this.itemObj
        this.$router.push({
          path: '/goodsdetail',
          query: {
            serialNo: serial_no
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
