<template>
  <ul class="note-list">
    <li class="list-item" v-for="item in articleLists" v-show="articleLists.length">
      <div class="item-left">
        <div class="left-top-bx">
          <img :src="item.avator" alt="">
          <span class="advator-name">{{item.userName}}</span>
          <span class="write-data-icon-bx">
              <svg-icon iconClass="writeIconColor"></svg-icon>
          </span>
          <span class="write-date-bx">
              {{item.moment}}
          </span>
        </div>
        <div class="left-body">
          <router-link :to="{path:'articleDetail',query:{id:item.id}}" class="left-body-title">{{item.title}}</router-link>
          <div class="clear"></div>
          <div class="resume">
            {{item.resume}}
          </div>
          <div class="left-body-footer-bx">
            <span class="label">{{item.labelTitle}}</span>
            <span class="view-num-bx">
                <b class="view-icon-bx">
                    <svg-icon iconClass="eye"></svg-icon>
                </b>
                <div class="view-num">{{item.view}}</div>
            </span>
            <span class="view-num-bx">
                <b class="view-icon-bx">
                    <svg-icon iconClass="comment"></svg-icon>
                </b>
                <div class="view-num">{{item.discuss}}</div>
            </span>
            <span class="view-num-bx">
                <b class="view-icon-bx like">
                    <svg-icon iconClass="like"></svg-icon>
                </b>
                <div class="view-num">{{item.likes}}</div>
            </span>
          </div>
        </div>
      </div>
      <div class="item-right" v-show="item.postImg?true:false">
        <img :src="item.postImg" alt="">
      </div>
    </li>

    <li class="item-base-bx" v-show="articleLists.length === 0">
      <svg-icon iconClass="bookLogo"></svg-icon>
    </li>
  </ul>
</template>

<script>
  import {getArticle} from '@/service/getData';
  export default {
    name: 'article-lists',
    data() {
      return {
        articleLists: []
      }
    },
    mounted() {
      let _this = this;
      onMessage('setArticle',(data)=>{
        _this.articleLists = data;
      });
      getArticle().then(res => {
        console.log(res);
        if (res.success) {
          _this.articleLists = res.data;
        }
      });
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "./index.scss";
</style>
