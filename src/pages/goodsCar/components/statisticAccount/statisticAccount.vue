<template>
  <div class='statistic_account_bx'>
    <flexbox>
      <flexbox-item class='sattis_item' :span='8'>1</flexbox-item>
      <flexbox-item class='sattis_item' :span='4'>
        <min-button :options='buttonOptions' />
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import CheckBox from '@/components/checkBox/checkBox'
  import MinButton from '@/components/minButton/minButton'

  export default {
    name: 'statisic-account',
    components: {
      Flexbox,
      FlexboxItem,
      CheckBox,
      MinButton
    },
    props: [

    ],
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

    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
