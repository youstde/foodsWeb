<template>
  <div class='adress_list_item' @click='goToEditAdress'>
    <flexbox>
      <flexbox-item class='flex_item_bx' :span='2/24'>
        <div class='adress_icon_bx'>
          <span class='icon_bx'><svg-icon iconClass='position' /></span>
        </div>
      </flexbox-item>
      <flexbox-item class='flex_item_bx' :span='19/24'>
        <div class='top_info_bx'>
          <span class='user_name'>{{dataItem.contacter}}</span>
          <span class='user_phone'>{{dataItem.mobile}}</span>
        </div>
        <div class="user_adress_detail">{{`${dataItem.region_lv1}${dataItem.region_lv2}${dataItem.region_lv3}${dataItem.region_lv3}${dataItem.address}`}}</div>
      </flexbox-item>
      <flexbox-item class='flex_item_bx' :span='3/24'>
        <div class='arrow_right_bx'>
          <span class='icon_bx'><svg-icon iconClass='arrowright' /></span>
        </div>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'adress-item',
    components: {
      Flexbox,
      FlexboxItem
    },
    props: [
      'dataItem'
    ],
    data () {
      return {

      }
    },
    mounted() {

    },
    methods: {
      goToEditAdress() {
        this.$router.push({
          path: '/editadress',
          query: {
            label: '编辑收货地址',
            dataItem: JSON.stringify(this.dataItem)
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .adress_list_item {
    height: 4rem;
    width: 100%;
    background-color: #fff;
    padding-left: 0.65rem;
    .flex_item_bx {
      height: 4rem;
      .top_info_bx {
        padding-top: 0.7rem;
        .user_name {
          font-size: 0.75rem;
        }
        .user_phone {
          color: $inputPlaceHolderColor;
          font-size: 0.6rem;
        }
      }
      .user_adress_detail{
        padding-top: 0.15rem;
        padding-right: 0.6rem;
        font-size: 0.6rem;
        line-height: 1.4;
        @include txtLineShow(2);
      }
      .arrow_right_bx {
        width: 100%;
        height: 100%;
        position: relative;
        .icon_bx {
          width: 0.75rem;
          height: 0.75rem;
          @include positionMiddle;
          left: 0;
        }
      }
    }
    .adress_icon_bx {
      position: relative;
      height: 100%;
      .icon_bx {
        width: 1rem;
        height: 1rem;
        @include positionMiddle;
        left: 0;
      }
    }
  }
</style>
