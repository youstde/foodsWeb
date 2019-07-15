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
        <cube-validator ref='phoneValidator' :model="telphone" :rules="phoneRules" :messages="phoneMessages">
          <input class='telphone' v-model="telphone" type="number" placeholder="请输入手机号" />
        </cube-validator>
        <span class='line'></span>
      </div>
      <div class='input_bx'>
        <cube-validator ref='codeValidator' :model="phoneCode" :rules="codeRules" :messages="codeMessages">
          <input class='telphone_code' v-model="phoneCode" type="number" placeholder="请输入验证码" />
          <send-code :phone='telphone'></send-code>
        </cube-validator>
        <span class='line'></span>
      </div>
      <div class='submit_btn'><cube-button :disabled='isSending' @click='submit'>确定</cube-button></div>
    </div>
    <toast-type :type='showToastType' :message='toastTypeValue' :showToast='showWarningToast' :onHide="onHide"></toast-type>
    <div class='statement'>登录即代表你同意<router-link to='/useragreement'>《用户使用条款和隐私声明》</router-link></div>
  </div>
</template>

<script>
  import ToastType from '@/components/toastType/toastType'
  import SendCode from './components/sendCode/sendCode'
  import { login } from './service'
  import { setTimeout } from 'timers';
  import { getStoreData } from '@/service/getData'

  export default {
    name: 'sign',
    components: {
      ToastType,
      SendCode
    },
    data () {
      return {
        fromLink: '',
        showWarningToast:false,
        isSending: false,
        showToastType: '',
        toastTypeValue: '',
        telphone: '',
        phoneCode: '',
        phoneRules: {
          required: true,
          type: 'number',
          pattern: /^1[34578]\d{9}$/
        },
        phoneMessages: {
          pattern: '请输入正确手机号'
        },
        codeRules: {
          required: true,
          type: 'number',
          custom: (val) => {
            return val.length === 6
          }
        },
        codeMessages: {
          custom: '验证码长度应为6'
        }
      }
    },
    mounted() {
      console.log('this.$route:', this.$route)
      const userInfo = localStorage.getItem('user_info')
      if(userInfo) this.$router.push({path:'/myzoe'})
      const { query: {from} } = this.$route
      if(from) {
        this.fromLink = from
      }
    },
    methods: {
      fetchStoreData() {
        getStoreData({
          t: 'list'
        }).then(res => {
          if(res && res.errcode === 0) {

          }
        })
      },
      submit() {
        const { phoneCode, telphone } = this;
        const vPhone = this.$refs.phoneValidator.validate()
        const vCode = this.$refs.codeValidator.validate()
        let isLegal = true
        this.isSending = true;
        Promise.all([vPhone, vCode]).then((validResult) => {
          validResult.some((valid) => {
            if(!valid) isLegal = false
            return !valid
          })
          if(isLegal) {
            // 发送请求拿数据request
            login({
              t: 'login',
              mobile: telphone,
              code: phoneCode,
              c: 'weixin'
            }).then((res) => {
              if(res.errcode === 0) {
                localStorage.setItem('user_info', JSON.stringify(res.data))
                this.onShowToast('success', '登录成功!')
                setTimeout(() => {
                  if(this.fromLink) window.location.href = this.fromLink
                  this.$router.push({path:'/myzoe'})
                }, 1e3)
              } else {
                const toast = this.$createToast({
                  txt: res.message,
                  type: 'error'
                })
                toast.show()
              }
            })
          } else {
            // 警告提醒
            this.onShowToast('warn', '请输入完整的的信息')
          }
          this.isSending = false;
        })
      },
      onShowToast(type, value) {
        this.showToastType = type
        this.toastTypeValue = value
        this.showWarningToast = true
      },
      onHide() {
        this.showWarningToast = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
