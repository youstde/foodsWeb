<template>
  <div class='landscape_list_item'>
    <flexbox>
      <flexbox-item class='flex_item_bx' :span='1'>
        <div class='check_in_car' v-if='itemObj.type===1'>
          <check-box
          :data='itemObj'
          :checkList='checkList' />
        </div>
        <div class='out_time_goods' v-else>
          <span class='icon_bx'><svg-icon iconClass='failure' /></span>
        </div>
      </flexbox-item>
      <flexbox-item class='flex_item_bx' :span='3'>
         <img :src="itemObj.img" alt="">
      </flexbox-item>
      <flexbox-item class='flex_item_bx' :span='8'>
        <div class="title">{{itemObj.title}}</div>
        <div class="price_bx">{{itemObj.price}}/{{itemObj.unit}}</div>
        <div class="car_input_num_out_bx" v-if='itemObj.type===1'>
          <input-num
          itemHeight='1.2rem'
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
      'changeCb',
      'checkList'
    ],
    watch: {
      checkList(value) {
        this.updateMoneyObj(this.goodsNum)
      }
    },
    data () {
      return {
        goodsNum: 0
      }
    },
    mounted() {

    },
    methods: {
      changeBack(num, type) {
        this.goodsNum = num
        this.updateMoneyObj(num)
      },
      updateMoneyObj(num) {
        const { itemObj:{ id }, checkList } = this
        this.changeCb({
          [id]: checkList.indexOf(id) > -1?num: 0
        })
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
