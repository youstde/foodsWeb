<template>
  <div class="home-bx">
      <div class="post-bx">
          <div class="post-title">songtao的客栈</div>
          <div class="post-short">走一步，再走一步</div>
      </div>
      <div class="main-bx">
          <div class="nav">
              <div class="nav-logo">
                  <img src="//oss.ltcdn.cc/stblog/blogimage/blog_logo_two.png" alt="">
              </div>
              <div class="nav-search">
                  <input type="text" placeholder="搜索">
                  <div class="search-icon-bx">
                    <svg-icon iconClass="search"></svg-icon>
                  </div>
              </div>
              <div class="nav-right">
                  <div class="nav-login-bx" v-if="userData?false:true">
                      <span class="login-in">
                        <router-link :to="'sign_in'">登录</router-link>
                      </span>
                      <span class="login-up">
                        <router-link :to="'sign_up'">注册</router-link>
                      </span>
                  </div>
                  <div class="nav-user-bx" v-else>
                    <img :src="userData.avator" alt="">
                  </div>
                  <div class="read-btn">
                    <router-link :to="'write'">
                      <span class="write-icon-bx">
                        <svg-icon iconClass="writeIcon"></svg-icon>
                      </span>
                      <span>写文章</span>
                    </router-link>
                  </div>
              </div>
          </div>
          <div class="article-out-bx">
              <label-com></label-com>
              <!--文章列表-->
              <article-list></article-list>
          </div>
      </div>
  </div>
</template>

<script>
  import {getUserInfo} from '@/service/getData';
  import articleList from '@/components/articleLists/articleList';
  import labelCom from '@/components/label/label';
  export default {
    name: 'home',
    components: {
      articleList,
      labelCom
    },
    data () {
      return {
        userData: ''
      }
    },
    mounted() {
      let _this = this;
      getUserInfo().then((res)=>{
        console.log(res);
        if(res.success){
          _this.userData = res.data;
        }
      });
    },
    methods: {
      gotosigin: function() {
        this.$router.push({ name: 'sign_up'});
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./home.less";
</style>
