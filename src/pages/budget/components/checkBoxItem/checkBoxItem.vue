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
    name: 'check-box-item',
    props: [
      'defaultId',
      'checkedId',
      'checkBc'
    ],
    data () {
      return {
        checked: false
      }
    },
    watch: {
      checkedId(newId) {
        if(newId === this.defaultId) {
          this.checked = true
        } else {
          this.checked = false
        }
      },
      checked(value) {
        if(value) {
          this.checkBc(this.defaultId)
        }
      }
    },
    mounted() {
      if(this.checkedId === this.defaultId) this.checked = true
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .check_box_bx {
    width: 1.2rem;
    height: 1.2rem;
    background-color: #eeeeee;
    @include borderRadius(50%);
    overflow: hidden;
    position: relative;
    &.active_bx {
      background-color: $themeColor;
    }
    .icon_bx {
      width: 0.7rem;
      height: 0.7rem;
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
