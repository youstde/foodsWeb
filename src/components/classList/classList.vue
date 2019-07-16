<template>
  <div class='class_list'>
    <!-- <condition-tab /> -->
    <div class="scroll_bx">
      <cube-scroll
        ref='scroll'
        :data='sourceData'
        :options='scrollOptions'
        @pulling-up='onPullingUp'>
        <list-item
         :itemObj='item'
         v-for='(item,i) in sourceData'
         :key='i'
         :disableScoll='disableScoll'
         :blurFun='enableScroll'  />
      </cube-scroll>
    </div>
    <class-append-car />
  </div>
</template>

<script>
  import ConditionTab from '@/components/conditionTab/conditionTab'
  import ListItem from '@/components/listItem/listItem'
  import ClassAppendCar from './components/classAppendCar/classAppendCar'

  export default {
    name: 'class-list',
    components: {
      ListItem,
      ConditionTab,
      ClassAppendCar
    },
    props: ['sourceData', 'uploadCb'],
    data () {
      return {
        pullUpLoadIndex: 1,
        scrollOptions: {
          pullDownRefresh: false,
          pullUpLoad: true,
          scrollbar: true
        },

      }
    },
    mounted() {

    },
    methods: {
      disableScoll() {
        this.$refs.scroll.disable()
      },
      enableScroll() {
        this.$refs.scroll.enable()
      },
      onPullingUp() {
        // 更新数据
        const { pullUpLoadIndex } = this;
        this.pullUpLoadIndex = pullUpLoadIndex + 1;
        console.log(111, this.pullUpLoadIndex)
        this.uploadCb(this.pullUpLoadIndex)
        this.$refs.scroll.refresh()
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
