<template>
  <div class='input_out_bx clear'>
      <div class='input_num clear'>
      <div class='minus_bt' @click='deleteNum'>
        <span class='icon_bx'><svg-icon iconClass='jian' /></span>
      </div>
      <input class='num_input' ref='numInput' v-model="goodsNum" type="number" @focus="onFocus" @blur='onBulr' @keypress="updateNum" />
      <div class='add_bt' @click='addNum'>
        <span class='icon_bx'><svg-icon iconClass='add' /></span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'input-num',
    props: [
      'changeBack',
      'blurBack'
    ],
    data () {
      return {
        changeType:1,
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
      this.changeBack(1)
      this.$refs.numInput.focus()
    },
    methods: {
       updateNum(num) {
        if(event.keyCode === 13) {
          let value = event.target.value
          event.preventDefault()
          // input失去焦点，从而点击搜索的时候隐藏键盘
          this.$refs.numInput.blur()
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
        if(num === 0) {
          this.goodsNum = 0 + ''
        } else {
          this.goodsNum = (num - 1) + ''
        }
        this.changeType = 2
      },
      addNum() {
        const { goodsNum } = this
        const num = Number(goodsNum)
        this.goodsNum = (num + 1) + ''
        this.changeType = 2
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
  .input_num {
    .minus_bt {
      float: left;
      width: 1.6rem;
      height: 1.6rem;
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
      float: left;
      width: 1.5rem;
      height: 1.6rem;
      text-align: center;
    }
    .add_bt {
      float: left;
      width: 1.6rem;
      height: 1.6rem;
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
  }
</style>
