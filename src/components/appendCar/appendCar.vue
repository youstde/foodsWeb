<template>
  <div>
    <div class='append_car'>
        <flexbox>
          <flexbox-item class='append_car_left' :span='2'>
            <span class='icon_bx' @click='goToCar'>
              <svg-icon iconClass='cart-moren'></svg-icon>
              <p class='num_charact'>{{goodsCarNum}}</p>
            </span>
          </flexbox-item>
          <flexbox-item class='append_car_right' :span='10'>
            <flexbox>
              <flexbox-item span='{showAddNum?8:12}'>
                <div class='append_car_right_left' @click='addToCar'>加入购物车</div>
              </flexbox-item>
              <flexbox-item v-show='showAddNum' class='append_car_right_right clear' :span='4'>
                <div class='opera_icon_bx' @click='subtractNum'>
                  <span class='icon_bx'><svg-icon iconClass='jian'></svg-icon></span>
                </div>
                <input type="number" v-model='goodsNum' disabled class='num_input'>
                <div class='opera_icon_bx' @click='addNum'>
                  <span class='icon_bx'><svg-icon iconClass='add'></svg-icon></span>
                </div>
              </flexbox-item>
            </flexbox>
          </flexbox-item>
        </flexbox>
        <div class="key_borad" v-show='showAddNum'>
          <div class="title">{{keyNum || '请输入所需数量'}}</div>
            <div class='keys_out_bx' @click='getKey'>
              <flexbox v-for='(itemLine, i) in keyboradKeys' :key='i'>
                <flexbox-item :span='4' class='borad_item'><div class='have_right_line'>{{itemLine[0]}}</div></flexbox-item>
                <flexbox-item :span='4' class='borad_item'><div class='have_right_line'>{{itemLine[1]}}</div></flexbox-item>
                <flexbox-item :span='4' class='borad_item'><div>{{itemLine[2]}}</div></flexbox-item>
              </flexbox>
            </div>

           <flexbox>
             <flexbox-item :span='4' class='borad_item'><div class='have_right_line' @click='cancelNum'>取消</div></flexbox-item>
             <flexbox-item :span='4' class='borad_item'><div class='have_right_line' @click='getKey'>0</div></flexbox-item>
             <flexbox-item :span='4' class='borad_item'><div @click='confirmNum'>确定</div></flexbox-item>
           </flexbox>
        </div>
    </div>
    <base-toast ref='baseToast' />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Flexbox, FlexboxItem } from 'vux'
  import BaseToast from '@/components/baseToast/baseToast'
  import { setTimeout } from 'timers';

  import { getGoodsBase } from '@/service/getData'
  import { getLocalStorage } from '@/util/tools'

  export default {
    name: 'append-car',
    components: {
      Flexbox,
      FlexboxItem,
      BaseToast
    },
    props: ['dataSource'],
    data () {
      return {
        goodsCarNum: 0,
        showAddNum: false,
        goodsNum: 1,
        keyNum: '',
        keyboradKeys: [
          [1,2,3],
          [4,5,6],
          [7,8,9]
        ]
      }
    },
    watch: {
      isShowCover(value) {
        if(!value) {
          // 重置状态，清空输入框中数量
          this.showAddNum = false
          this.goodsNum = 1
          this.keyNum = ''
        }
      }
    },
    mounted() {
      const num = getLocalStorage('car_nums')
      this.goodsCarNum = num
    },
    computed: {
      ...mapGetters([
        'isShowCover'
      ])
    },
    methods: {
      goToCar() {
        this.$router.push({
          path: '/goodscar'
        })
      },
      cancelNum() {
        this.showAddNum = false
        this.goodsNum = 1
        this.keyNum = ''
        this.$store.commit('SET_IS_SHOW_COVER', false)
      },
      confirmNum(e) {
        const { keyNum } = this
        const odderClass = e.target.getAttribute('class')
        e.target.setAttribute('class', `active ${odderClass}`)
        setTimeout(() => {
           e.target.setAttribute('class', odderClass)
        }, 100)
        if(keyNum.length) {
          console.log(keyNum)
          if(keyNum === '0') {
            this.cancelNum()
            return
          }
          this.goodsNum = keyNum.replace(/^0+/, '')
          this.keyNum = ''
        }
      },
      getKey(e) {
        const {innerText:stringKey} = e.target
        const key = Number(stringKey)
        const odderClass = e.target.getAttribute('class')
        e.target.setAttribute('class', `active ${odderClass}`)
        setTimeout(() => {
           e.target.setAttribute('class', odderClass)
        }, 100)
        if(key !== NaN) {
          this.keyNum += stringKey
          this.goodsNum = this.keyNum
        }
      },
      addToCar() {
        if(this.showAddNum) {
          this.handleToCar()
          return
        }
        this.showAddNum = true
        this.$store.commit('SET_IS_SHOW_COVER', true)
      },
      handleToCar() {
        console.log(this.dataSource)
        const localMerchant = getLocalStorage('merchant')
        const { serial_no } = this.dataSource
        getGoodsBase({
          t: 'cart.add',
          serial_no,
          mch_id: localMerchant.id,
          increment: this.goodsNum
        }).then(res => {
          if(res && res.errcode === 0) {
            const activeSerialNoStr = localStorage.getItem('active_serial_no')
            let activeSerialNoArr = []
            if(activeSerialNoStr) {
              activeSerialNoArr = JSON.parse(activeSerialNoStr)
            }
            activeSerialNoArr.push(serial_no)
            const middleArr = [...new Set(activeSerialNoArr)]
            localStorage.setItem('active_serial_no', JSON.stringify(middleArr))
            this.$refs.baseToast.onShowToast('success', '添加购物车成功!')
            this.cancelNum()
          }
        })
      },
      subtractNum() {
        const { goodsNum } = this
        if(goodsNum === 0) return
        this.goodsNum = Number(goodsNum) - 1
        if((Number(goodsNum) - 1) === 0) {
          this.showAddNum = false
          this.goodsNum = 1
          this.$store.commit('SET_IS_SHOW_COVER', false)
        }
      },
      addNum() {
        const { goodsNum } = this
        this.goodsNum = Number(goodsNum) + 1
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
