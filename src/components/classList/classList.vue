<template>
  <div class='class_list'>
    <condition-tab />
    <div class="scroll_bx">
      <cube-scroll
        ref='scroll'
        :data='lists'
        :options='scrollOptions'
        @pulling-up='onPullingUp'>
        <list-item
         :itemObj='item'
         v-for='(item,i) in lists'
         :key='i'
         :disableScoll='disableScoll'
         :blurFun='enableScroll'  />
      </cube-scroll>
    </div>
  </div>
</template>

<script>
  import ConditionTab from '@/components/conditionTab/conditionTab'
  import ListItem from '@/components/listItem/listItem'

  export default {
    name: 'class-list',
    components: {
      ListItem,
      ConditionTab
    },
    data () {
      return {
        pullUpLoadIndex: 1,
        scrollOptions: {
          pullDownRefresh: false,
          pullUpLoad: true,
          scrollbar: true
        },
        lists: [
          {
            id: 1,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 2,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 3,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 4,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 5,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 6,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: 7,
            img: 'https://bwblog.oss-cn-hangzhou.aliyuncs.com/test/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          }
        ]
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
        console.log(111)
        this.lists = this.lists.concat([
          {
            id: Date.now(),
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: Date.now(),
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          },
          {
            id: Date.now(),
            img: 'http://ww1.sinaimg.cn/large/005QDhBjly1g3fu937fwxj305a05a74x.jpg',
            title: '鲁花家香味浓压榨籽油',
            price: '39.9/瓶'
          }
        ])
        const { pullUpLoadIndex } = this;
        this.pullUpLoadIndex = pullUpLoadIndex + 1;
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
