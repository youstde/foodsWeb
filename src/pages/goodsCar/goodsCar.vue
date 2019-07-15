<template>
  <div class='goods_car'>
    <div class="go_back_out_bx" ref='carGoBackOutBx' :style="'background:rgba(255,255,255,'+pullDownY+')'">
        <top-back type='radis' heightNum='1.5rem'>
          <div class='car_back_right_bx'>
            <div class="car_title">购物车</div>
            <div class='delete_goods' @click='deleteGoods'>删除</div>
          </div>
        </top-back>
    </div>
     <cube-scroll
        ref='scroll'
        :scroll-events="['scroll']"
         @scroll='onScrollHandle'
        :data='lists'
        :options='scrollOptions'
        @pulling-up='onPullingUp'>
        <div class='goods_car_inner'>
          <div class="car_scroll_out_bx">
              <car-item
                :checkList='checkList'
                :itemObj='item'
                v-for='(item,i) in lists'
                :key='i'
                :disableScoll='disableScoll'
                :blurFun='enableScroll'
                :changeCb='appendChooseGoods' />
          </div>
          <div class="clear_out_time_goods" @click='clearOutGoods'>
            <span class='label_bx'>
              清除失效商品
              <span class='icon_bx'><svg-icon iconClass='garbage' /></span>
            </span>
          </div>
        </div>
     </cube-scroll>
     <div class='total_account_bx'>
       <statistic-account :allMoney='allMoney' :checkList='checkList' :lists='lists' />
     </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import TopBack from '@/components/topBack/topBack'
  import BottomNav from '@/components/bottomNav/bottomNav'
  import CarItem from './components/carItem/carItem'
  import StatisticAccount from './components/statisticAccount/statisticAccount'
  import { multiplyNum, addNum } from '@/util/tools'
  import { getGoodsBase } from '@/service/getData'
  import { getLocalStorage } from '@/util/tools'

  export default {
    name: 'goods-car',
    components: {
      TopBack,
      BottomNav,
      CarItem,
      StatisticAccount
    },
    data () {
      return {
        pullDownY: 0,
        scrollOptions: {
          pullDownRefresh: false,
          pullUpLoad: true,
          scrollbar: true
        },
        allMoney: 0,  // 选择的商品总计金额
        choosedGoods:{},
        checkList: [],
        lists: []
      }
    },
    watch: {
      checkList(value) {
        console.log('value:', value)
        const newArr = this.lists.map(item => {
          if(item.saleable === 1) return item
        })
        // if(newArr.length === value.length) {
        //   window.sendMessage('toggle:localcheckstatus', true)
        // } else {
        //   window.sendMessage('toggle:localcheckstatus', false)
        // }
      },
      choosedGoods(value) {
        this.calculateMoney()
      }
    },
    mounted() {
      this.fetchCarData()
      window.onMessage('update:checkList', arr => {
        this.updateCheckList(arr)
      })
      window.onMessage('full-goods', bool => {
        if(bool) {
          const newCheckList = this.getFullGoodsId()
          this.checkList = newCheckList.concat()
        } else {
          this.checkList = []
        }
      })
      window.onMessage('update:goodsCarNum', () => {
        console.log(111)
        this.fetchCarData()

      })
      this.initCheckedList()
    },
    methods: {
      initCheckedList() {
        const serialNo = localStorage.getItem('active_serial_no')
        if(serialNo) {
          this.checkList.push(serialNo)
        }
      },
      calculateMoney() {
        const { lists, checkList } = this
        console.log('checkList:', this.checkList)

        let newMoney = 0
        // 商品金额计算
        checkList.forEach(item => {
          lists.some(one => {
            if(item === one.serial_no) {
              const multiplycurrentNum = multiplyNum(Number(one.price_sale), Number(one.quantity))
              newMoney = addNum(newMoney, multiplycurrentNum)
            }
          })
        })
        this.allMoney = newMoney
      },
      fetchCarData() {
        const localMerchant = getLocalStorage('merchant')
        getGoodsBase({
          t: 'cart.list',
          mch_id: localMerchant.id
        }).then(res => {
          if(res && res.errcode === 0) {
            const { list, quantity_total } = res.data
            this.lists = list
            window.sendMessage('update:BottomGoodsCarNum', quantity_total)
            localStorage.setItem('car_nums', quantity_total)
            this.calculateMoney()
          }
        })
      },
      getFullGoodsId() {
        const { lists } = this
        const idArr = []
        lists.some((item) => {
          if(item.saleable === 1) idArr.push(item.serial_no)
        })
        return idArr
      },
      onScrollHandle(pos) {
        const pullDownY = pos.y
        if(pullDownY <= 0) {
          this.pullDownY = Math.abs(pullDownY/20)
        } else {
          this.pullDownY = 0
        }
      },
      disableScoll() {
        this.$refs.scroll.disable()
      },
      enableScroll() {
        this.$refs.scroll.enable()
      },
      onPullingUp() {
        // 更新数据
        // this.lists = this.lists.concat([
        //   {
        //     id: Date.now(),
        //     type: 1,
        //     img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
        //     title: '鲁花家香味浓压榨籽油',
        //     price: '39.9',
        //     unit: '瓶'
        //   },
        //   {
        //     id: Date.now(),
        //     type: 2,
        //     img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
        //     title: '鲁花家香味浓压榨籽油',
        //     price: '39.9',
        //     unit: '瓶'
        //   },
        //   {
        //     id: Date.now(),
        //     type: 2,
        //     img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
        //     title: '鲁花家香味浓压榨籽油',
        //     price: '39.9',
        //     unit: '瓶'
        //   }
        // ])
        const { pullUpLoadIndex } = this;
        this.pullUpLoadIndex = pullUpLoadIndex + 1;
        this.$refs.scroll.refresh()
      },
      appendChooseGoods(obj) {
        console.log('obj:', obj)
        const { choosedGoods } = this
        this.choosedGoods = {...choosedGoods, ...obj}
      },
      updateCheckList(arr) {
        this.checkList = arr.concat()
      },
      // 清除失效商品
      clearOutGoods() {
        window.sendMessage('toggle:loading', true)
        const localMerchant = getLocalStorage('merchant')
        getGoodsBase({
          t: 'cart.clear',
          mch_id: localMerchant.id
        }).then(res => {
          if(res && res.errcode === 0) {
            window.sendMessage('toggle:loading', false)
            this.showToast('失效商品已清空', 'txt')
            this.fetchCarData()
          }
        })
      },
      // 删除指定商品
      deleteGoods() {
        console.log(this.checkList)
        const localMerchant = getLocalStorage('merchant')
        const { checkList } = this
        if(checkList.length) {
          this.showAlert({
            title: '提示',
            content: `确定要删除这${checkList.length}种商品吗`,
            confirmCb: () => {
              // 发送删除商品的请求
              console.log('删除商品')
              getGoodsBase({
                t: 'cart.remove',
                serials: this.checkList.join(','),
                mch_id: localMerchant.id
              }).then(res => {
                if(res && res.errcode === 0) {
                  this.showToast('删除成功!', 'txt')
                  this.fetchCarData()
                }
              })
            }
          })
        } else {
          this.showToast('请选择需要删除的商品', 'txt')
        }
      },
      showToast(txt, type) {
        this.toast = this.$createToast({
          txt,
          type,
          time: 2000
        })
        this.toast.show()
      },
       showAlert({title, content, confirmText='确定', cancelText='取消', confirmCb}) {
        this.$createDialog({
          type: 'confirm',
          title,
          content,
          confirmBtn: {
            text: confirmText,
            active: true,
            disabled: false,
            href: 'javascript:;'
          },
          cancelBtn: {
            text: cancelText,
            active: false,
            disabled: false,
            href: 'javascript:;'
          },
          onConfirm: () => {
            confirmCb && confirmCb()
          }
        }).show()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
