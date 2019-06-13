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
        asyncPicker: '',
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
      this.handleInitCityData()
      this.asyncPicker = this.$createCascadePicker({
          title: '选择地址',
          async: true,
          data: [
            {
              value: '3000',
              text: '杭州'
            }
          ],
          selectedIndex: [0,0,0],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle,
          onChange: this.asyncChangeHandle
      })
    },
    methods: {
        handleInitCityData(code) {
          const params = {
            t: 'regions'
          }
          if(code) {
            params.code = code
          }
          getRegions(params).then(res => {
            console.log(res)
          })
        },
        showPicker() {
          this.asyncPicker.show()
        },
        asyncChangeHandle() {

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
