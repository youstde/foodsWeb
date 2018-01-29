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
                  <a href="javascript:void(0);" class="nav-user-bx" v-else>
                    <img :src="userData.avator" alt="">
                    <span class="bottom-icon">
                      <svg-icon iconClass="bottomArrow"></svg-icon>
                    </span>
                    <ul class="slide-menu">
                      <li>
                        <span>
                          <svg-icon iconClass="userCenter"></svg-icon>
                        </span>
                        我的主页
                      </li>
                      <li>
                        <span>
                          <svg-icon iconClass="follow"></svg-icon>
                        </span>
                        我的关注
                      </li>
                      <li @click="exit">
                        <span>
                          <svg-icon iconClass="exit"></svg-icon>
                        </span>
                        退出
                      </li>
                    </ul>
                  </a>
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
              <!--标签列表-->
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
  import tools from '@/util/tools';
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
//    computed: {
//      ...mapGetters([
//        'labels'
//      ])
//    },
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
      },
      exit() {
        //线上
        if(process.env.NODE_ENV === 'production') {
          tools.setCookie('USER_ID', "", -1, '.stblog.ltyun.cc', '/');
        }else {
          //本地
          tools.setCookie('USER_ID', "", -1, '.youstde.blog.com', '/');
        }
        window.location.reload();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./home.less";
</style>
