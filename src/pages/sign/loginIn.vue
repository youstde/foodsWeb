<template>
  <div class="login-out-bx">
    <div class="login">
      <div class="main">
        <div class="logo">
          <a href="/">
            <img src="//oss.ltcdn.cc/stblog/blogimage/blog_logo.png" alt="">
          </a>
        </div>
        <div class="login-title">
          <div class="left active">
            <router-link :to="'sign_in'">登录</router-link>
          </div>
          <span class="dot"></span>
          <div class="right">
            <router-link :to="'sign_up'">注册</router-link>
          </div>
        </div>
        <div class="user-input-bx">
          <div class="user-icon">
            <svg-icon iconClass="phone"></svg-icon>
          </div>
          <input type="number" v-model="userPhone" placeholder="手机号" @blur="checkPhone">
        </div>
        <div class="user-input-bx">
          <div class="user-icon">
            <svg-icon iconClass="password"></svg-icon>
          </div>
          <input type="password" v-model="userPwd" placeholder="密码" @blur="checkPwd">
        </div>
        <button class="login-in-btn" @click="submit">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {signIn} from '@/service/getData';
  export default {
    name: 'signIn',
    data () {
      return {
        userPhone: '',
        userPwd: '',
        checkUserPhone: false,
        checkUserPwd: false,
        referer: 'home'
      }
    },
    mounted() {
      console.log(this.$route.params.referer);
      if(this.$route.params && this.$route.params.referer) {
        this.referer = this.$route.params.referer;
      }
    },
    methods: {
      submit () {
        let _this = this;
        if(this.checkUserPwd && this.checkUserPhone) {
            signIn({
              userPwd: hex_md5(this.userPwd),
              userPhone: this.userPhone
            }).then(function(data){
               if(data.success) {
                 _this.$store.commit('SET_TIP', {
                   type: 'success',
                   message: data.data.msg
                 });
                 setTimeout(()=>{
                   _this.$router.push({ name: _this.referer});
                 },1e3);
               }else {
                 _this.$store.commit('SET_TIP', {
                   type: 'err',
                   message: data.data.msg
                 });
               }
            });
        }
      },
      checkPhone() {
        //去首尾空格
        let phone = this.userPhone.replace(/(^\s*)|(\s*$)/g, '');
        if(!/^1[34578]\d{9}$/.test(phone)) {
          this.$store.commit('SET_TIP', {
            type: 'warning',
            message: '手机号格式不正确!'
          });
          this.checkUserPhone = false;
          return;
        }
        this.checkUserPhone = true;
      },
      checkPwd() {
        let userPwd = this.userPwd.replace(/(^\s*)|(\s*$)/g, '');
        if(/\s+/.test(userPwd)) {
          this.$store.commit('SET_TIP', {
            type: 'warning',
            message: '密码中不能出现空格!'
          });
          this.checkUserPwd = false;
          return;
        }
        this.checkUserPwd = true;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import './login.less';
  .user-input-bx{
    &:nth-of-type(odd) {
      border-bottom: 0;
    }
  }
  .login-in-btn {
    color: #fff;
    width: 100%;
    height:43px;
    font-size: 16px;
    font-weight: 500;
    background-color: #187cb7;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 20px;
  }

</style>
