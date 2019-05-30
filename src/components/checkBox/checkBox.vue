<template>
  <div :class='{check_box_bx:true, active_bx:checkNames.indexOf(data.id) > -1}'>
    <div class="binggou_bx">
      <span class='icon_bx'><svg-icon iconClass='bingou'></svg-icon></span>
      <input class='check_input' :id='data.id'  :value='data.id' type='checkbox' v-model='checkNames' />
    </div>
  </div>
</template>

<script>

  export default {
    name: 'check-box',
    props: [
      'data',
      'checkList'
    ],
    data () {
      return {

      }
    },
    computed: {
      checkNames: {
        get: function() {
          return this.checkList
        },
        set: function(newValue) {
          this.checkList = newValue.concat()
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
