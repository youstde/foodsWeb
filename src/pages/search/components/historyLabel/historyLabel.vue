<template>
  <div class='history_label_bx'>
    <div class="title">
      历史搜索
      <div class='clear_history_label' @click='clearHistory'>
        <span class='icon_bx'><svg-icon iconClass='garbage'></svg-icon></span>
        清除历史记录
      </div>
    </div>
    <div class="history_label_list">
      <a herf='javascript:void(0)' @click='handleJump(item.label)' class="history_label_item" v-for='(item, i) in historyList' :key='i'>
        {{item.label}}
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'history-label',
    props: [
      'historyList',
      'clearHistoryLabel'
    ],
    data () {
      return {

      }
    },
    methods: {
      clearHistory() {
        // 调用接口清除历史搜索
        this.clearHistoryLabel()
      },
      handleJump(label) {
        this.$router.push(`/search?key=${label}`)
        window.location.reload()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  .history_label_bx {
    padding-top: 1.1rem;
    .title {
      color: #333;
      font-size: 16px;
      font-weight: 700;
      text-align: left;
      padding-bottom: 0.75rem;
      position: relative;
      .clear_history_label {
        font-size: 0.6rem;
        color: $inputPlaceHolderColor;
        padding-left: 0.7rem;
        position: absolute;
        top: 0;
        right: 0;
        .icon_bx {
          color: #333;
          width: 0.6rem;
          height: 0.6rem;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
    .history_label_list {
      text-align: left;
      .history_label_item {
        display: block;
        text-align: center;
        font-size: 0.6rem;
        display: inline-block;
        background-color: #f5f5f5;
        padding: 0.3rem 0.6rem;
        margin-right: 0.35rem;
        margin-bottom: 0.4rem;
        @include borderRadius(14px);
      }
    }
  }
</style>
