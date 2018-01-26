<template>
  <div class="article-detail-bx">
      <top-nav></top-nav>
      <div class="post-bx">
        <div class="post-title">{{article.title}}</div>
        <div class="author">
          <div class="author-avator">
            <img :src="article.avator" alt="">
          </div>
          <div class="author-right">
            <p class="author-right-name">{{article.userName}}</p>
            <div class="author-tips-bx">
              <span>{{article.moment}}</span>
              <span>评论&nbsp;{{article.discuss}}&nbsp;</span>
              <span>喜欢&nbsp;{{article.likes}}</span>
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="detail" id="article-detail" v-html='article.detail'>

        </div>
      </div>
  </div>
</template>

<script>
  import {getArticleById} from '@/service/getData';
  import tools from '@/util/tools';
  import topNav from '@/components/nav/topNav';
  export default {
    name: 'articleDetail',
    components: {
      topNav
    },
    data () {
      return {
        article: ''
      }
    },
    mounted() {
      let _this =this;
      let articleId = tools.getQueryString('id');
      getArticleById({
        id: articleId
      }).then((res)=>{
          if(res.success) {
              _this.article = res.data;
          }
      });
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .article-detail-bx {
    width: 620px;
    height:auto;
    margin: 60px auto;
    overflow-x: hidden;
    .post-bx {
      padding-top: 40px;
      font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
      .post-title {
        font-size: 34px;
        font-weight: 700;
        line-height: 1.3;
        text-align: left;
      }
      .author {
        width: 100%;
        margin: 30px 0 40px;
        .author-avator {
          width: 48px;
          height: 48px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
          overflow: hidden;
          float: left;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .author-right {
          float: left;
          text-align: left;
          padding-left: 10px;
          .author-right-name {
            margin:3px 0 0;
          }
          .author-tips-bx {
            color: #969696;
            font-size: 12px;
            font-weight: 500;
            padding-top: 6px;
          }
        }
      }
      .detail {
        text-align: left;
        p {
          img {
            width: 100% !important;
            height: auto;
          }
        }
      }
    }
  }

</style>
