<template>
  <div class='write_invoice_bx'>
    <top-back type='radis' heightNum='2rem' paddingBtm='1rem'>
      <div class='write_invoice_back_bx'>
        发票信息
      </div>
    </top-back>
    <div class='write_invoice_center_bx'>
      <flexbox class='center_item'>
        <flexbox-item :span='7' class='center_item_label'>
          发票抬头
        </flexbox-item>
        <flexbox-item :span='5'>
          <flexbox>
            <flexbox-item class='check_flex_bx'>
              <div class='check_bxo_bx'>
                <check-box-item defaultId='1' :checkedId='checkedId' :checkBc='setCehckedId' />
              </div>
              <span class='personal_label'>个人</span>
            </flexbox-item>
            <flexbox-item class='check_flex_bx'>
              <div class='check_bxo_bx'>
                <check-box-item defaultId='2' :checkedId='checkedId' :checkBc='setCehckedId' />
              </div>
              <span class='personal_label'>单位</span>
            </flexbox-item>
          </flexbox>
        </flexbox-item>
      </flexbox>
      <!-- S=persional -->
      <div class='personal_detail_bx' v-if="checkedId==='1'">
        <flexbox class='center_item'>
          <flexbox-item :span='6' class='center_item_label'>
            发票内容
          </flexbox-item>
          <flexbox-item class='personal_right_bx' :span='6'>
            商品明细
          </flexbox-item>
        </flexbox>
        <flexbox class='center_item'>
          <flexbox-item :span='6' class='center_item_label'>
            收票人邮箱
          </flexbox-item>
          <flexbox-item class='personal_right_bx' :span='6'>
            1320388@qq.com
          </flexbox-item>
        </flexbox>
      </div>
      <!-- E=persional -->
      <!-- S=单位发票 -->
      <div class='personal_detail_bx' v-else>
        <flexbox class='center_item'>
          <flexbox-item :span='3' class='center_item_label'>
            抬头名称
          </flexbox-item>
          <flexbox-item class='personal_right_bx' :span='9'>
            <input class='detail_input' type="text" placeholder="请输入抬头名称">
          </flexbox-item>
        </flexbox>
        <flexbox class='center_item'>
          <flexbox-item :span='3' class='center_item_label'>
            公司税号
          </flexbox-item>
          <flexbox-item class='personal_right_bx' :span='9'>
            <input class='detail_input' type="text" placeholder="请输入公司税号">
          </flexbox-item>
        </flexbox>
        <flexbox class='center_item'>
          <flexbox-item :span='6' class='center_item_label'>
            发票内容
          </flexbox-item>
          <flexbox-item class='personal_right_bx' :span='6'>
            商品明细
          </flexbox-item>
        </flexbox>
        <flexbox class='center_item'>
          <flexbox-item :span='4' class='center_item_label'>
            更多信息
          </flexbox-item>
          <flexbox-item class='personal_right_bx' :span='8'>
            <div @click='writeMoreMsg'>
              <span class='more_msg_tip more_msg_tip_active' v-if='mark.length'>{{mark}}</span>
              <span class='more_msg_tip' v-else>备注、地址、开户行等(非必填)</span>
              <span class='icon_bx'><svg-icon iconClass='arrowright'></svg-icon></span>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <!-- E=单位发票 -->
    </div>
    <div class='button_out_bx' @click='handleSubmit'>
      <base-button height='2rem' label='确定' isRadius=true />
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import TopBack from '@/components/topBack/topBack'
  import CheckBoxItem from './components/checkBoxItem/checkBoxItem'
  import BaseButton from '@/components/baseButton/baseButton'

  export default {
    name: 'budget',
    components: {
      Flexbox,
      FlexboxItem,
      TopBack,
      CheckBoxItem,
      BaseButton
    },
    data () {
      return {
        checkedId: '1',
        mark: ''
      }
    },
    mounted() {
      console.log(this.$route)
      const { params: { markvalue, type } } = this.$route
      if(markvalue) {
        this.mark = markvalue
      }
      if(type) {
        this.checkedId = type
      }
    },
    methods: {
      setCehckedId(newId) {
        this.checkedId = newId
      },
      writeMoreMsg() {
        this.$router.push({
          path: '/writemark',
          query: {
            title: '更多信息',
            from: 'writeInvoice'
          }
        })
      },
      handleSubmit() {
        // ====todo===这个地方是想提交发票信息后把发票类型带回到配送方式页
        this.$router.replace({
          path: '/budget',
          query: {
            invoiceType: this.checkedId
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .write_invoice_bx {
    .write_invoice_back_bx {
      font-size: 0.9rem;
      width: 15rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    .write_invoice_center_bx {
      padding: 0 0.75rem;
      background-color: #fff;
      .center_item {
        padding: 0.7rem 0;
        .center_item_label {
          font-size: 0.75rem;
        }
        .check_flex_bx {
          position: relative;
          .personal_label {
            height: 1.2rem;
            line-height: 1.2rem;
            font-size: 0.75rem;
            position: absolute;
            right: 0;
            top: 0;
          }
          .check_bxo_bx {
            position: relative;
            left: 0.6rem;
            top: 0;
          }
        }
        .personal_right_bx {
          font-size: 0.75rem;
          text-align: right;
          position: relative;
          .detail_input {
            text-align: right;
            display: block;
            width: 100%;
            height: 100%;
            outline: none;
            @include placeholderStyle($inputPlaceHolderColor);
          }
          .more_msg_tip {
            font-size: 0.6rem;
            color: $inputPlaceHolderColor;
            padding-right: 0.9rem;
            &.more_msg_tip_active {
              color: #333333;
            }
          }
          .icon_bx {
            width: 0.65rem;
            height: 0.65rem;
            @include positionMiddle;
            right: 0;
          }
        }
      }
    }
    .button_out_bx {
      padding: 1.5rem;
    }
  }
</style>
