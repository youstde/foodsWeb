<template>
  <div>
    <div class='append_car'>
        <flexbox>
          <flexbox-item class='append_car_left' :span='2'>
            <span class='icon_bx'>
              <svg-icon iconClass='cart-moren'></svg-icon>
              <p class='num_charact'>0</p>
            </span>
          </flexbox-item>
          <flexbox-item class='append_car_right' :span='10'>
            <flexbox>
              <flexbox-item span='{showAddNum?8:12}'>
                <div class='append_car_right_left' @click='addToCar'>加入购物车</div>
              </flexbox-item>
              <flexbox-item v-show='showAddNum' class='append_car_right_right clear' :span='4'>
                <div class='opera_icon_bx'>
                  <span class='icon_bx'><svg-icon iconClass='jian'></svg-icon></span>
                </div>
                <input type="number" disabled class='num_input'>
                <div class='opera_icon_bx'>
                  <span class='icon_bx'><svg-icon iconClass='add'></svg-icon></span>
                </div>
              </flexbox-item>
            </flexbox>
          </flexbox-item>
        </flexbox>
        <div class="key_borad" v-show='showAddNum'>

        </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'append-car',
    components: {
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        showAddNum: false,
      }
    },
    watch: {
      isShowCover(value) {
        if(!value) {
          // 重置状态，清空输入框中数量
          this.showAddNum = false
        }
      }
    },
    mounted() {

    },
    computed: {
      ...mapGetters([
        'isShowCover'
      ])
    },
    methods: {
      addToCar() {
        if(this.showAddNum) return
        this.showAddNum = true
        this.$store.commit('SET_IS_SHOW_COVER', true)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
