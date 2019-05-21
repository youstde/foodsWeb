<template>
  <div class='sign_bx'>
    <div class="banner_bx">
      <img class='banner' src="@/assets/login-banner.jpg" alt="">
      <div class="title">
        <img src="@/assets/login-title.png" alt="">
      </div>
    </div>
    <div class="login_form">
      <div class='input_bx'>
        <input class='telphone' v-model="telphone" type="number" placeholder="请输入手机号" />
        <span class='warring_tip'>请输入正确的手机号</span>
        <span class='line'></span>
      </div>
      <div class='input_bx'>
        <input class='telphone' v-model="phoneCode" type="number" placeholder="请输入验证码" />
        <span class='warring_tip'>请输入正确的手机号</span>
        <span class='line'></span>
      </div>
      <div class='submit_btn'><cube-button>确定</cube-button></div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'sign',
    data () {
      return {
        telphone: '',
        phoneCode: '',
        validity: {
          telphone: {
            rule: /^1[34578]\d{9}$/,
            message: '请输入正确手机号'
          },
          phoneCode: {
            rule: /(^\s*)|(\s*$)/g,
            message: '请输入正确格式的验证码'
          }
        }
      }
    },
    mounted() {
      this.$store.commit('SET_IS_LOADING', false)
    },
    methods: {
      checkPhone() {
        //去首尾空格
        let phone = this.userPhone.replace(/(^\s*)|(\s*$)/g, '');
        if(!/^1[34578]\d{9}$/.test(phone)) {

          this.checkUserPhone = false;
          return;
        }
        this.checkUserPhone = true;
      },
      checkPwd() {
        let userPwd = this.userPwd.replace(/(^\s*)|(\s*$)/g, '');
        if(/\s+/.test(userPwd)) {

          this.checkUserPwd = false;
          return;
        }
        this.checkUserPwd = true;
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
