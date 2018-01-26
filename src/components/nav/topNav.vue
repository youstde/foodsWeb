<template>
  <div class="nav">
    <div class="nav-logo">
      <router-link :to="'/'" style="display:block;">
        <img src="//oss.ltcdn.cc/stblog/blogimage/blog_logo_two.png" alt="">
      </router-link>
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
        <ul class="slide-menu">
          <li>test</li>
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
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "./nav.less";
</style>
