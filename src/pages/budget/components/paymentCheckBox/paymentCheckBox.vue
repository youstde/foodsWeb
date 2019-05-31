<template>
  <div :class='{check_box_bx:true, active_bx:checked}'>
    <div class="binggou_bx">
      <span class='icon_bx'><svg-icon iconClass='bingou'></svg-icon></span>
      <input class='check_input' type='checkbox' v-model="checked"  />
    </div>
  </div>
</template>

<script>

  export default {
    name: 'payment-check-box',
    props: [
      'data',
      'paymentCheckId',
      'checkBc'
    ],
    data () {
      return {
        checked: false
      }
    },
    watch: {
      paymentCheckId(newId) {
        const { data: { id } } = this
        if(id === newId) {
          this.checked = true
        } else {
          this.checked = false
        }
      },
      checked(value) {
        console.log(value)
        const { data: { id }, paymentCheckId } = this
        if(value) {
          this.checkBc(id)
        }
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
