<template>
  <div class='write_mark_bx'>
    <top-back type='radis' heightNum='2rem' paddingBtm='1rem'>
      <div class='write_invoice_back_bx'>
        {{title}}
      </div>
    </top-back>
    <div class="detail_bx">
      <textarea v-model="markValue" class='detail_textarea' cols="25" rows="5" placeholder="请输入备注、地址、开户行等（非必填）"></textarea>
    </div>
    <div class='button_out_bx' @click='handleSubmit'>
      <base-button height='2rem' label='确定' isRadius=true />
    </div>
  </div>
</template>

<script>
  import TopBack from '@/components/topBack/topBack'
  import BaseButton from '@/components/baseButton/baseButton'

  export default {
    name: 'write-mark',
    components: {
      TopBack,
      BaseButton
    },
    data () {
      return {
        title: '',
        markValue: ''
      }
    },
    mounted() {
      const { query: { title } } = this.$route
      if(title) {
        this.title = title
      }
    },
    methods: {
      handleSubmit() {
        const { query: { from } } = this.$route
        console.log(this.markValue)
        if(!this.markValue.length) {
          const toast = this.$createToast({
            time: 2000,
            type: 'txt',
            txt: '请填写相关信息'
          })
          toast.show()
        } else {
          this.$router.replace({
            name: from,
            params: {
              markvalue: this.markValue.replace(/\s/g, ''),
              type: '2'
            }
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .write_mark_bx {
    .write_invoice_back_bx {
      font-size: 0.9rem;
      width: 15rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    .detail_textarea {
      width: 100%;
      height: 6rem;
      display: block;
      outline: none;
      padding: 0.6rem;
      resize: none;
    }
    .button_out_bx {
      padding: 1.5rem;
    }
  }
</style>
