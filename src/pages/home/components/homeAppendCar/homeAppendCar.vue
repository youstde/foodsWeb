<template>
  <div v-show='isShowAppendCar'>
    <div class='append_car'>
        <flexbox>
          <flexbox-item class='append_car_right' :span='12'>
            <flexbox>
              <flexbox-item :span='8'>
                <div class='append_car_right_left' @click='addToCar'>加入购物车</div>
              </flexbox-item>
              <flexbox-item class='append_car_right_right clear' :span='4'>
                <div class='opera_icon_bx' @click='subtractNum'>
                  <span class='icon_bx'><svg-icon iconClass='jian'></svg-icon></span>
                </div>
                <input type="text" v-model='goodsNum' disabled class='num_input'>
                <div class='opera_icon_bx' @click='addNum'>
                  <span class='icon_bx'><svg-icon iconClass='add'></svg-icon></span>
                </div>
              </flexbox-item>
            </flexbox>
          </flexbox-item>
        </flexbox>
        <div class="key_borad">
            <div class="title">
              {{keyNum || '请输入所需数量'}}
              <span class='key_borad_title_delete' @click='deleteAllNum'><svg-icon iconClass='ic_Set up_ delete'></svg-icon></span>
            </div>
            <div class='keys_out_bx' @click='getKey'>
              <flexbox v-for='(itemLine, i) in keyboradKeys' :key='i'>
                <flexbox-item :span='4' class='borad_item'><div class='have_right_line'>{{itemLine[0]}}</div></flexbox-item>
                <flexbox-item :span='4' class='borad_item'><div class='have_right_line'>{{itemLine[1]}}</div></flexbox-item>
                <flexbox-item :span='4' class='borad_item'><div>{{itemLine[2]}}</div></flexbox-item>
              </flexbox>
            </div>

           <flexbox>
             <flexbox-item :span='4' class='borad_item'><div class='have_right_line' @click='getKey'>.</div></flexbox-item>
             <flexbox-item :span='4' class='borad_item'><div class='have_right_line' @click='getKey'>0</div></flexbox-item>
             <flexbox-item :span='4' class='borad_item'><span class='delete_out_bx' @click='deleteNumber'><svg-icon iconClass='delete'></svg-icon></span></flexbox-item>
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
  import { getLocalStorage, deleteNum, addNum } from '@/util/tools'
  import { getGoodsBase } from '@/service/getData'

  export default {
    name: 'append-car',
    components: {
      Flexbox,
      FlexboxItem,
      BaseToast
    },
    data () {
      return {
        dataSource: {},
        isShowAppendCar: false,
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
    computed: {
      ...mapGetters([
        'isShowCover'
      ])
    },
    watch: {
      isShowCover(value) {
        if(!value) {
          // 重置状态，清空输入框中数量
          this.isShowAppendCar = false
          this.goodsNum = 1
          this.keyNum = ''
        }
      }
    },
    mounted() {
      window.onMessage('toggle:homeappendcar', data=> {
        this.isShowAppendCar = true
        console.log('data:', data)
        this.dataSource = data
      })
    },
    methods: {
      cancelNum() {
        this.goodsNum = 1
        this.keyNum = ''
        this.$store.commit('SET_IS_SHOW_COVER', false)
        this.isShowAppendCar = false
      },
      deleteAllNum() {
        this.goodsNum = '0';
        this.keyNum = '0';
      },
      deleteNumber() {
        console.log(this.goodsNum)
        const goodsnum = `${this.goodsNum}`
        if(goodsnum === '') return
        const length = goodsnum.length
        const subString = goodsnum.substring(0, length - 1)
        this.goodsNum = subString.replace(/\.$/, '')
        this.keyNum = subString.replace(/\.$/, '')
      },
      getKey(e) {
        const {innerText:stringKey} = e.target
        let key = ''
        if(stringKey === '.') {
          key = stringKey
        } else {
          key = Number(stringKey)
        }
        const odderClass = e.target.getAttribute('class')
        e.target.setAttribute('class', `active ${odderClass}`)
        setTimeout(() => {
           e.target.setAttribute('class', odderClass)
        }, 100)
        if(key !== NaN) {
          if(this.keyNum === '0') {
            if(key === '.') {
              this.keyNum += stringKey
            } else {
              this.keyNum = stringKey
            }
          } else {
            this.keyNum += stringKey
          }
          this.goodsNum = this.keyNum
        }
      },
      addToCar() {
        this.handleToCar()
        // if(this.showAddNum) {
        //   this.handleToCar()
        //   return
        // }
        // this.showAddNum = true
      },
      handleToCar() {
        const localMerchant = getLocalStorage('merchant')
        const { serial_no } = this.dataSource
        if(!this.goodsNum || this.goodsNum === '0') {
          const toast = this.$createToast({
            txt: '请输入正确的商品数量',
            type: 'txt'
          })
          toast.show()
          return
        }
        const goodnum = `${this.goodsNum}`.replace(/\.$/, '')
        getGoodsBase({
          t: 'cart.add',
          serial_no,
          mch_id: localMerchant.id,
          increment: goodnum
        }).then(res => {
          if(res && res.errcode === 0) {
            this.$refs.baseToast.onShowToast('success', '添加购物车成功!', () => {
              // 当有商品添加到购物车时手动通知底部导航栏
              const { quantity_total } = res.data
              localStorage.setItem('car_nums', quantity_total)
              const activeSerialNoStr = localStorage.getItem('active_serial_no')
              let activeSerialNoArr = []
              if(activeSerialNoStr) {
                activeSerialNoArr = JSON.parse(activeSerialNoStr)
              }
              activeSerialNoArr.push(serial_no)
              const middleArr = [...new Set(activeSerialNoArr)]
              localStorage.setItem('active_serial_no', JSON.stringify(middleArr))
              window.sendMessage('update:BottomGoodsCarNum', quantity_total)
              this.cancelNum()
              this.isShowAppendCar = false
            })

          }
        })
      },
      subtractNum() {
        const { goodsNum } = this
        if(goodsNum === '0') return
        this.goodsNum = `${deleteNum(Number(goodsNum), 1)}`
        this.keyNum = this.goodsNum;
        if((Number(goodsNum) - 1) <= 0) {
          this.goodsNum = '0';
          this.keyNum = '0';
          // this.goodsNum = 1
          // this.$store.commit('SET_IS_SHOW_COVER', false)
        }
      },
      addNum() {
        const { goodsNum } = this
        this.goodsNum = `${addNum(Number(goodsNum), 1)}`
        this.keyNum = this.goodsNum;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
