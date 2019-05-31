<template>
  <div class='hot_label_bx'>
    <div class="title">热门搜索</div>
    <div class="hot_label_list">
      <router-link to='/searchList' class="hot_label_item" v-for='(item, i) in hotList' :key='i'>
        {{item.label}}
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'hot-label',
    props: [
      'hotList'
    ],
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  .hot_label_bx {
    padding-top: 1.55rem;
    .title {
      color: #333;
      font-size: 16px;
      font-weight: 700;
      text-align: left;
      padding-bottom: 0.75rem;
    }
    .hot_label_list {
      text-align: left;
      .hot_label_item {
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
