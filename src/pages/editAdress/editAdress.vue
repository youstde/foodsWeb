<template>
  <div class='edit_adress_bx'>
    <top-back type='radis' heightNum='2rem' paddingBtm='1rem'>
      <div class='write_invoice_back_bx'>
        {{label}}
      </div>
    </top-back>
    <div class='edit_adress_detail'>
      <flexbox>
        <flexbox-item class='label' :span='5'>
          收货人
        </flexbox-item>
        <flexbox-item :span='7'>
          <cube-validator ref='contacterValidator' :model="contacter" :rules="baseRules" :messages="baseMessages">
            <input class='item_input' type="text" placeholder="请输入收货人姓名" v-model="contacter">
          </cube-validator>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item class='label' :span='5'>
          手机号
        </flexbox-item>
        <flexbox-item :span='7'>
          <cube-validator ref='mobileValidator' :model="mobile" :rules="phoneRules" :messages="phoneMessages">
            <input class='item_input' type="number" placeholder="请输入手机号" v-model="mobile">
          </cube-validator>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item class='label' :span='5'>
          所在城市
        </flexbox-item>
        <flexbox-item :span='7'>
          <div class='item_input' @click='showPicker'>
            <p class='area_str_bx' v-if='areaStr'>{{areaStr}}</p>
            <p class='area_str_bx placeholder_bx' v-else>请选择地域</p>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item class='label' :span='5'>
          详细地址
        </flexbox-item>
        <flexbox-item :span='7'>
          <cube-validator ref='addressValidator' :model="address" :rules="baseRules" :messages="baseMessages">
            <input class='item_input' type="text" placeholder="街道，楼牌号等" v-model="address">
          </cube-validator>
        </flexbox-item>
      </flexbox>
    </div>
    <div class='add_adress_bt' @click='handleSubmit'>
      <base-button height='2rem' label='确定' isRadius=true />
    </div>
    <base-toast ref='baseToast' />
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import BaseButton from '@/components/baseButton/baseButton'
  import BaseToast from '@/components/baseToast/baseToast'
  import { getAccountBase } from '@/service/getData'

  import { getRegions } from './service'

  export default {
    name: 'edit-adress',
    components: {
      Flexbox,
      FlexboxItem,
      TopBack,
      BaseButton,
      BaseToast
    },
    data () {
      return {
        baseRules: {
          required: true
        },
        baseMessages: {
          pattern: '请输入正确手机号'
        },
        phoneRules: {
          required: true,
          type: 'number',
          pattern: /^1[34578]\d{9}$/
        },
        phoneMessages: {
          pattern: '请输入正确手机号'
        },
        dataObj: {
          0: [],
          1: [],
          2: []
        },
        areaStr: '',
        asyncPicker: '',
        selectData: [],
        selectedIndex: [0],
        dataItem: '',
        label: '新增收货地址',
        contacter: '',
        mobile: '',
        address: '',
        regionId: ''
      }
    },
    mounted() {
      const { query: { dataItem, label } } = this.$route
      console.log('dataItem:', dataItem)
      if(dataItem) {
        const newDataItem = JSON.parse(dataItem)
        this.dataItem = newDataItem
        this.areaStr = `${newDataItem.region_lv1}${newDataItem.region_lv2}${newDataItem.region_lv3}`
        this.mobile = newDataItem.mobile
        this.address = newDataItem.address
        this.regionId = newDataItem.region_id
        this.contacter = newDataItem.contacter
      }
      if(label) {
        this.label = label
      }
      this.handleInitCityData(null, null, () => {
        this.selectData = this.jointData()
        const code = this.selectData[0].value
        this.handleInitCityData(code, 1, () => {
          this.selectedIndex.push(0)
          this.selectData = this.jointData()
          const code = this.selectData[0].children[0].value
          this.handleInitCityData(code, 2, () => {
            this.selectedIndex.push(0)
            this.selectData = this.jointData()
            // 如果asyncPicker不存在
            if(!this.asyncPicker) this.initPicker()
          })
        })
      })
    },
    methods: {
        handleSubmit() {
          const vContacter = this.$refs.contacterValidator.validate()
          const vMobile = this.$refs.mobileValidator.validate()
          const vAddress = this.$refs.addressValidator.validate()
          this.$refs.baseToast.onShowToast('warn', '请输入完整的的信息')
          let isLegal = true
          Promise.all([vContacter, vMobile, vAddress]).then((validResult) => {
            validResult.some((valid) => {
              if(!valid) isLegal = false
              return !valid
            })
            if(!this.regionId) isLegal = false
            if(isLegal) {
              // 发送请求
              const params = {
                t: 'address.save',
                contacter: this.contacter,
                mobile: this.mobile,
                address: this.address,
                region_id: this.regionId
              }
              if(this.dataItem) params.id = this.dataItem.id
              getAccountBase(params).then(res => {
                if(res && res.errcode === 0) {
                  this.$refs.baseToast.onShowToast('success', '操作成功!', () => {
                    this.$router.push({path: '/adressmanagement'})
                  })
                }
              })
            } else {
              // 警告提醒
              this.$refs.baseToast.onShowToast('warn', '请输入完整的的信息')
            }
            // this.isSending = false;
          })
        },
        handleInitCityData(code, index, callback) {
          const params = {
            t: 'regions'
          }
          if(code) {
            params.code = code
          }
          getRegions(params).then(res => {
            console.log(res)
            if(res && res.errcode === 0) {
              if(!code) {
                this.dataObj[0] = this.cleanoutData(res.data)
              } else {
                this.dataObj[index] = this.cleanoutData(res.data)
              }
              callback()
            }
          })
        },
        initPicker() {
          this.asyncPicker = this.$createCascadePicker({
            title: '选择地址',
            async: true,
            data: this.selectData,
            selectedIndex: [],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle,
            onChange: this.asyncChangeHandle
          })
        },
        cleanoutData(data) {
          const newData = data.map(item => {
            return {
              id: item.id,
              value: item.code,
              text: item.name,
              children: ''
            }
          })
          return newData
        },
        jointData() {
          const { dataObj, selectedIndex } = this
          const selectedIndexLength = selectedIndex.length
          console.log(dataObj[0])
          let newArr = dataObj[0].slice()
          if(selectedIndexLength === 2) {
            newArr[selectedIndex[0]].children = dataObj[1].slice()
          }
          if(selectedIndexLength === 3) {
            let twoArr = dataObj[2].slice()
            dataObj[1][selectedIndex[1]].children = twoArr.slice()
            this.dataObj = dataObj
            newArr[selectedIndex[0]].children = dataObj[1].slice()
          }
          // console.log('selectedIndex:', selectedIndex)
          // console.log('newArr:', newArr)
          return newArr.slice()
        },
        showPicker() {
          this.asyncPicker.show()
        },
        asyncChangeHandle(i, newIndex) {
          console.log(i, newIndex, this.selectedIndex)
          this.selectedIndex[i] = newIndex
          if(i === 0) {
            this.hanleTwo()
          } else if(i === 1) {
            this.handleOne()
          }
        },
        handleOne() {
          const index = this.selectedIndex[1]
          const code = this.dataObj[1][index].value
          this.handleInitCityData(code, 2, () => {
            this.selectedIndex[2] = 0
            this.selectData = this.jointData()
            this.asyncPicker.setData(this.jointData(), this.selectedIndex)
          })
        },
        hanleTwo() {
          const index = this.selectedIndex[0]
          const code = this.dataObj[0][index].value
          this.handleInitCityData(code, 1, () => {
            this.selectedIndex[1] = 0
            this.selectData = this.jointData()
            this.handleOne()
          })
        },
        selectHandle(selectedVal, selectedIndex, selectedText) {
          this.areaStr = selectedText.join(' ')
          const index = selectedVal.length - 1
          const code = selectedVal[index]
          this.dataObj[2].forEach(item => {
            if(code === item.value) this.regionId = item.id
          })
        },
         cancelHandle() {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
            time: 1000
          }).show()
        }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .edit_adress_bx {
    .write_invoice_back_bx {
      font-size: 0.9rem;
      width: 15rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    .edit_adress_detail {
      padding: 0 0.75rem;
      background-color: #fff;
      .label {
        font-size: 0.75rem;
      }
      .item_input {
        font-size: 0.6rem;
        width: 100%;
        height: 2.1rem;
        display: block;
        text-align: right;
        @include placeholderStyle($inputPlaceHolderColor);
        .area_str_bx {
          height: 2.1rem;
          line-height: 2.1rem;
          &.placeholder_bx {
            color: $inputPlaceHolderColor;
          }
        }
      }
    }
  }
  .add_adress_bt {
      padding: 1.5rem 1.5rem 0;
    }
</style>
