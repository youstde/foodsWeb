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
              <flexbox-item class='have_choosed_bx'>已选(0)</flexbox-item>
            </flexbox>
          </flexbox-item>
          <flexbox-item :span='7'>{{allMoney}}</flexbox-item>
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

  export default {
    name: 'statisic-account',
    components: {
      Flexbox,
      FlexboxItem,
      LocalCheckBox,
      MinButton
    },
    props: [
      'allMoney'
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

    },
    methods: {
      submit() {
        console.log(1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
