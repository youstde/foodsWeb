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
          <input class='item_input' type="text" placeholder="请输入收货人姓名">
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item class='label' :span='5'>
          手机号
        </flexbox-item>
        <flexbox-item :span='7'>
          <input class='item_input' type="number" placeholder="请输入手机号">
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item class='label' :span='5'>
          所在城市
        </flexbox-item>
        <flexbox-item :span='7'>
          <div class='item_input' @click='showPicker'></div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import BaseButton from '@/components/baseButton/baseButton'

  import { getRegions } from './service'

  export default {
    name: 'edit-adress',
    components: {
      Flexbox,
      FlexboxItem,
      TopBack,
      BaseButton
    },
    data () {
      return {
        dataObj: {
          0: [],
          1: [],
          2: []
        },
        asyncPicker: '',
        selectData: [],
        selectedIndex: [0],
        id: '',
        label: '新增收货地址'
      }
    },
    mounted() {
      const { query: { id, label } } = this.$route
      if(id) {
        this.id = id
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
          this.$createDialog({
            type: 'warn',
            content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
            icon: 'cubeic-alert'
          }).show()
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
      }
    }
  }
</style>
