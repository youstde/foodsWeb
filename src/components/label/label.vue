<template>
  <div class="label-bx">
    <div class="label-item" v-for="(item,index) in labels" @click="filterArticle" v-show="index < labelShowNum" :data-id="index">
      <img :src="item.postimg" alt="">
      <div class="label-title">{{item.title}}</div>
    </div>
    <div class="more-label" @click="showAllLabel">
      {{moreLabel}}
      <span class="arrow-icon">
          <svg-icon :iconClass="arrowIcon"></svg-icon>
      </span>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  import {getLabel, getArticleByLabel} from '@/service/getData';
  export default {
    name: 'label-com',
    data () {
      return {
        labels: [],
        isChange: false,
        labelShowNum: 10,
        moreLabel: '更多热门标题',
        arrowIcon: 'arrowRight'
      }
    },
    mounted() {
      let _this = this;
      getLabel().then((res)=>{
        console.log(res);
        if(res.success) {
          _this.labels = res.data;
          _this.$store.commit('SET_LABELS', res.data);
        }
      });
    },
    methods: {
      showAllLabel() {
        if(!this.isChange) {
          this.labelShowNum = 100;
          this.moreLabel = '收起更多热门标题';
          this.arrowIcon = 'arrowTop';
        }else {
          this.labelShowNum = 10;
          this.moreLabel = '更多热门标题';
          this.arrowIcon = 'arrowRight';
        }
        this.isChange = !this.isChange;
      },
      filterArticle(e) {
        let labelIndex = e.currentTarget.getAttribute('data-id'),
            labelId = this.labels[labelIndex].id;
        getArticleByLabel({
          id: labelId
        }).then((res)=>{
          console.log(res);
          if(res.success){
            sendMessage('setArticle', res.data);
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .label-bx {
    .label-item {
      float: left;
      width:auto;
      height:34px;
      background-color: #f7f7f7;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      overflow: hidden;
      margin-left: 25px;
      margin-bottom: 20px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      img {
        width: 32px;
        height: 32px;
        float: left;
      }
      .label-title {
        float: left;
        line-height:34px;
        padding: 0 15px;
      }
    }
    .more-label {
      height:34px;
      line-height:34px;
      color: #787878;
      float: left;
      margin-left: 25px;
      padding-right: 25px;
      cursor: pointer;
      position: relative;
      .arrow-icon {
        width: 14px;
        height: 25px;
        position: absolute;
        top: 3px;
        right: 5px;
      }
    }
  }
</style>
