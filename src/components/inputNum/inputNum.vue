<template>
  <div class='input_out_bx'>
    <flexbox>
      <flexbox-item :span='4'>
        <div class='minus_bt' :style='{height:itemHeight}' @click='deleteNum'>
          <span class='icon_bx'><svg-icon iconClass='jian' /></span>
        </div>
      </flexbox-item>
      <flexbox-item :span='4'>
        <input class='num_input' :style='{height:itemHeight}' ref='numInput' v-model="goodsNum" type="number" @focus="onFocus" @blur='onBulr' @keypress="updateNum" />
      </flexbox-item>
      <flexbox-item :span='4'>
        <div class='add_bt' :style='{height:itemHeight}' @click='addNum'>
          <span class='icon_bx'><svg-icon iconClass='add' /></span>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import { getGoodsBase } from '@/service/getData'

  export default {
    name: 'input-num',
    components: {
      Flexbox,
      FlexboxItem,
    },
    props: [
      'initNum',
      'dataSource',
      'itemHeight',
      'type',
      'changeBack',
      'blurBack'
    ],
    data () {
      return {
        changeType: 1,
        goodsNum: '1',
        isBlurInput: false
      }
    },
    watch: {
      goodsNum (num) {
        const { isBlurInput, changeType } = this
        this.changeBack(Number(num || 0), changeType)
      }
    },
    mounted() {
      if(this.initNum) this.goodsNum = this.initNum
      if(this.type === 'car') {
        this.changeBack(1)
      } else {
        this.changeBack(1)
        this.$refs.numInput.focus()
      }
    },
    methods: {
       fetchAddGoodsToCar() {
         const { serial_no } = this.dataSource
         getGoodsBase({
           t: 'cart.add',
           serial_no,
           mch_id: '107',
           quantity: this.goodsNum
         }).then(res => {
           if(res && res.errcode === 0) {
             window.sendMessage('update:goodsCarNum')
           }
         })
       },
       updateNum(num) {
        if(event.keyCode === 13) {
          let value = event.target.value
          event.preventDefault()
          // input失去焦点，从而点击搜索的时候隐藏键盘
          this.$refs.numInput.blur()
          this.fetchAddGoodsToCar()
        }
      },
      onBulr() {
        const { goodsNum } = this
        setTimeout(() => {
          let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
          window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 100)
        this.blurBack(Number(goodsNum || 0))
      },
      onFocus() {
        this.changeType = 1
      },
      deleteNum() {
        const { goodsNum } = this
        const num = Number(goodsNum)
        console.log('goodsNum:', goodsNum)
        if(goodsNum === '1') return
        if(num === 0) {
          this.goodsNum = 0 + ''
        } else {
          this.goodsNum = (num - 1) + ''
        }
        this.changeType = 2
        this.fetchAddGoodsToCar()
      },
      addNum() {
        const { goodsNum } = this
        const num = Number(goodsNum)
        this.goodsNum = (num + 1) + ''
        this.changeType = 2
        this.fetchAddGoodsToCar()
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
   .input_out_bx {
    position: relative;
    @include halfUnderLine;
    @include halfTopLine;
  }
  .minus_bt {
    position: relative;
    @include halfLeftLine;
    @include halfRightLine;
    .icon_bx {
        color: #9b9b9b;
        width: 0.5rem;
        height: 0.5rem;
        @include positionCenter;
    }
  }
  .num_input {
      font-size: 0.8rem;
      width: 100%;
      text-align: center;
  }
  .add_bt {
    position: relative;
    @include halfLeftLine;
    @include halfRightLine;
    .icon_bx {
        color: #9b9b9b;
        width: 0.5rem;
        height: 0.5rem;
        @include positionCenter;
    }
  }
  .vux-flexbox-item {
    margin-left: 0 !important;
  }
</style>
