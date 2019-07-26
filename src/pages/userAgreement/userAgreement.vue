<template>
  <div class='user_agreement'>
    <top-back type='radis' heightNum='2rem' paddingBtm='1rem'>
      <div class='write_invoice_back_bx'>
        退换货政策
      </div>
    </top-back>
    <div class='goods_inventory_detail_out_bx'>
      <cube-scroll
      ref='scroll'
      :options='scrollOptions'>
        <div class='agreement_detail'>
          <div class='item_title'>一.退换货政策</div>
          1、自客户签收商品算起的48小时内，商品在未经拆封和食用的情况下，如您对我们的商品不满意，我们将提供退换货 的服务。(如果您收的商品有质量问题，您可以通过退换货通道/App退换货通道/电话联系门店客服处理。)<br/>
          2、如果您通过退换货通道做申请，请您上传退换货商品的整体照，并提供签收单或标签的图片且保留商品。（以便于门店客服人员及时处理您的问题）。<br/>
          3、如果您申请了退换货,请在申请成功后手机保持通畅,以便于我们手机或短信通知您。<br/>
          4、通常情况下,我们退款会退到您的支付帐户。<br/>
          <div class='item_title'>2.特别声明</div>
          1、新鲜蔬菜和部分特殊商品（商品说明中会提示）我们只受理当场投诉，一旦签收，我们将不再接受退换要求。<br/>
          2、如因客户个人原因造成质量问题的商品，恕不退换。<br/>
          3、订单中如有特惠品，退货时，如不满足特惠品赠送条件，需将特惠品一同退回。如特惠品一经拆封或食用，则订单商品只换不退。如有不便，敬请谅解。<br/>
          4、退货需要退回发票及配送单（客户联），请于购买商品后妥善保管购物发票及配送单，如因客户原因无法退回发票或配送单（客户联）的，将可能导致无法进行退货，因此而产生的不利后果，将会由您承担。<br/>
          5、对于货物数量缺失的情况，我们只受理当场投诉，即货物配送到家后，客户当面清点货物数量并及时向配送员提出的投诉。一旦签收，我们将不受理此退换要求。<br/>
          6、通常情况下，一张订单只能进行一次退换货操作，所以为了确保您的权益，请您考虑周全后与我们联系。<br/>
          7、图片及信息仅供参照，商品将以实物为准。因拍摄灯光及不同显示器色差等问题可能造成商品图片与实物有一定色差，不属质量问题。<br/>
          <div class='item_title'>*温馨提示：</div>
          为了您的利益，请收到货物后仔细清点检查您订购的商品。如商品配送有误、包装破损、产品腐烂、数量不对等问题，请当面及时向配送人员提出，以便我们能尽快的为您处理。<br/>
          <div class='item_title'>*退款说明：</div>
          1、已支付的订单商品若发生退货，在退货商品送达我司仓库后，款项将默认以原支付方式退回。<br/>
          2、对于信用卡支付的订单，退款周期可能较长，但通常不会超过30天，实际退款日期以银行为准。<br/>
          3、为保护账户安全，网上支付及货到刷卡的退款，均会按照原支付卡原路返回。<br/>
          <div class='item_title'>*退换货流程：</div>
          1、如果您收的商品有质量问题，在48小时内,您可以通过官网退换货通道/App退换货通道/电话联系客服处理。(客服电话：17301747954)。<br/>
          2、门店“客服专员”会根据您反映的情况，结合公司其他相关部门给于初步鉴定，然后再与您电话确定退换货时间和方式。<br/>
          3、退货发生时，由于客户原因造成的退货，我们只退回商品的货款金额，原订单如有相应运费恕不退还，如果是上门安排退货，还需加收送货费；如因平台原因或商品质量问题而造成的退货，平台将退还您商品的货款金额及相应运费，并提供上门服务。<br/>
          4、退货需要退回发票及配送单（客户联），请于购买商品后妥善保管购物发票及配送单，如因客户原因无法退回发票或配送单（客户联）的，将可能导致无法进行退货，因此而产生的不利后果，将会由您承担。<br/>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
  import TopBack from '@/components/topBack/topBack'

  export default {
    name: 'user-agreement',
    components: {
      TopBack
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
  .user_agreement {
    .write_invoice_back_bx {
      font-size: 0.9rem;
      width: 15rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    .goods_inventory_detail_out_bx {
      font-size: 0.65rem;
      color: #666666;
      height: 90vh;
      text-align: left;
      background-color: #fff;
      .agreement_detail {
        padding: 0.9rem 2.1rem 1.3rem;
        line-height: 1.8;
        .item_title {
          font-size: 0.8rem;
          font-weight: 700;
        }
      }
    }
  }
</style>
