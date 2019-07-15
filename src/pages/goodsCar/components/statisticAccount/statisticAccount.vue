<template>
  <div class='statistic_account_bx'>
    <flexbox>
      <flexbox-item class='sattis_item statis_item_left' :span='8'>
        <flexbox>
          <flexbox-item :span='5'>
            <flexbox>
              <flexbox-item>
                <div class='local_layer_bx'>
                  <div class="local_check_inner_bx"><local-check-box /></div>
                </div>
              </flexbox-item>
              <flexbox-item class='have_choosed_bx'>已选({{checkList.length}})</flexbox-item>
            </flexbox>
          </flexbox-item>
          <flexbox-item :span='7' class='grand_bx'>
            <div class="top_bx">合计: ￥{{allMoney}}</div>
            <div class="bottom_bx">不含运费</div>
          </flexbox-item>
        </flexbox>
      </flexbox-item>
      <flexbox-item class='sattis_item' :span='4'>
        <div class='btn_layer_bx' @click='submit'><min-button :options='buttonOptions' /></div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import LocalCheckBox from '../localCheckBox/localCheckBox'
  import MinButton from '@/components/minButton/minButton'

  import { getLocalStorage } from '@/util/tools'

  export default {
    name: 'statisic-account',
    components: {
      Flexbox,
      FlexboxItem,
      LocalCheckBox,
      MinButton
    },
    props: [
      'allMoney',
      'checkList',
      'lists'
    ],
    watch: {
      allMoney(value) {
        console.log(value)
      }
    },
    data () {
      return {
        buttonOptions: {
          label: '下单'
        }
      }
    },
    mounted() {
      window.onMessage('full-goods', data => {
        console.log('fullData:', data)
      })
    },
    methods: {
      submit() {
        const userInfo = getLocalStorage('user_info')
        if(!this.checkList.length) {
          const toast = this.$createToast({
            txt: '请选择你需要下单的商品!',
            type: 'txt'
          })
          toast.show()
          return
        }
        if(userInfo) {
          const newArr = []
          this.checkList.forEach(item => {
            this.lists.forEach(one => {
              if(one.serial_no === item) newArr.push(one)
            })
          })
          localStorage.setItem('goods_arr', JSON.stringify(newArr))
          this.$router.push({
            path: '/budget',
            query: {
              serials: this.checkList.join(','),
              allmoney: this.allMoney
            }
          })
        } else {
           const { path } = this.$route
           this.$router.push({
             path: '/sign',
             query: {
               from: path
             }
           })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
