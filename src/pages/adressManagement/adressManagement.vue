<template>
  <div class='user_agreement'>
    <top-back type='radis' heightNum='2rem' paddingBtm='1rem'>
      <div class='write_invoice_back_bx'>
        地址管理
      </div>
    </top-back>
    <div class='goods_inventory_detail_out_bx'>
      <cube-scroll
      ref='scroll'
      :options='scrollOptions'>
        <div class='address_item'><adress-item /></div>
        <div class='address_item'><adress-item /></div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
  import TopBack from '@/components/topBack/topBack'
  import AdressItem from '@/components/adressItem/adressItem'

  export default {
    name: 'adress-management',
    components: {
      TopBack,
      AdressItem
    },
    data() {
      return {
        scrollOptions: {
          pullDownRefresh: false,
          pullUpLoad: false,
          scrollbar: true
        },
      }
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  .write_invoice_back_bx {
      font-size: 0.9rem;
      width: 15rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    .address_item {
      padding-bottom: 0.25rem;
    }
</style>
