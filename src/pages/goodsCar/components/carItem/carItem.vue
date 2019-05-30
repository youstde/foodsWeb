<template>
  <div class='landscape_list_item'>
    <flexbox>
      <flexbox-item class='flex_item_bx' :span='1'>
        <div class='check_in_car'>
          <check-box
          :data='itemObj'
          :checkList='checkList' />
        </div>
      </flexbox-item>
      <flexbox-item class='flex_item_bx' :span='3'>
         <img :src="itemObj.img" alt="">
      </flexbox-item>
      <flexbox-item class='flex_item_bx' :span='8'>
        <div class="title">{{itemObj.title}}</div>
        <div class="price_bx">{{itemObj.price}}</div>
        <div class="car_input_num_out_bx">
          <input-num
          type='car'
          :changeBack='changeBack'
          :blurBack='blurBack' />
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import InputNum from '@/components/inputNum/inputNum'
  import CheckBox from '@/components/checkBox/checkBox'

  export default {
    name: 'car-item',
    components: {
      Flexbox,
      FlexboxItem,
      InputNum,
      CheckBox
    },
    props: [
      'itemObj',
      'disableScoll',
      'blurFun',
      'checkList'
    ],
    data () {
      return {
        goodsNum: 0
      }
    },
    mounted() {

    },
    methods: {
      changeBack(num, type) {
        console.log(num)
        this.goodsNum = num
      },
      blurBack(num) {
        this.blurFun()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
