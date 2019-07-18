<template>
  <div :class='{check_box_bx:true, active_bx:checkNames.indexOf(data.serial_no) > -1}'>
    <div class="binggou_bx">
      <span class='icon_bx'><svg-icon iconClass='bingou'></svg-icon></span>
      <input class='check_input' :id='data.serial_no'  :value='data.serial_no' type='checkbox' v-model='checkNames' />
    </div>
  </div>
</template>

<script>
  import { getLocalStorage } from '@/util/tools'

  export default {
    name: 'goods-car-check-box',
    props: [
      'data',
      'checkList'
    ],
    data () {
      return {
        localArr: []
      }
    },
    watch: {
      checkList(value) {
        console.log('value:', value)
        this.updateActiveGoods(value)
        this.localArr = []
      }
    },
    computed: {
      checkNames: {
        get: function() {
          const { localArr, checkList } = this
          return this.localArr.length? localArr:checkList
        },
        set: function(newValue) {
          window.sendMessage('update:checkList', newValue)
          this.localArr = newValue
        }
      }
    },
    mounted() {

    },
    methods: {
      updateActiveGoods(value) {
        localStorage.setItem('active_serial_no', JSON.stringify(value))
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .check_box_bx {
    width: 0.85rem;
    height: 0.85rem;
    background-color: #eeeeee;
    @include borderRadius(50%);
    overflow: hidden;
    position: relative;
    &.active_bx {
      background-color: $themeColor;
    }
    .icon_bx {
      width: 0.5rem;
      height: 0.5rem;
      @include positionCenter;
    }
    .check_input {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }
  }
</style>
