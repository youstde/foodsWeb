<template>
  <div class="nav">
    <div class="nav-logo">
      <router-link :to="'/'" style="display:block;">
        <img src="//oss.ltcdn.cc/stblog/blogimage/blog_logo_two.png" alt="">
      </router-link>
    </div>
    <div class="nav-key-word-bx">
      <router-link :to="'/'">发现</router-link>
      <router-link :to="'/'">关注</router-link>
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
</template>

<script>
  import {getUserInfo} from '@/service/getData';
  import tools from '@/util/tools';
  export default {
    name: 'topNav',
    data() {
      return {
        userData: ''
      }
    },
    mounted() {
      let _this = this;
      getUserInfo().then((res) => {
        console.log(res);
        if (res.success) {
          _this.userData = res.data;
        }
      });
    },
    methods: {
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
<style lang="scss" scoped>
  @import "./nav.scss";
</style>
