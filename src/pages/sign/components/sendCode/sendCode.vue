<template>
  <div class='send_code_bx'>
    <div v-if='isSending' class='count_down'>{{time}}s</div>
    <div v-else class='send_code_btn' @click='sendCode'>获取验证码</div>
  </div>
</template>

<script>
import { sendCode } from './service'
import { setTimeout } from 'timers';

  export default {
    name: 'send-code',
    components: {

    },
    props: [

    ],
    data () {
      return {
        isSending: false,
        baseTime: 60,
        time: 60
      }
    },
    mounted() {

    },
    methods: {
      sendCode() {
        const { time } = this;
        this.isSending = true;
        sendCode({
          t: 'send.code',
          mobile: '18626875836',
          type: 'login'
        }).then((res) => {
          if(res.errcode === 0) {
            // 请求成功
          } else {
            const { baseTime } = this;
            this.isSending = false;
            this.time = baseTime;
          }
          console.log(res)
        })
        this.countDown(time);
      },
      countDown(time) {
        this.time = time - 1;
        if((time - 1) < 0 ) {
          const { baseTime } = this;
          this.isSending = false;
          this.time = baseTime;
          return;
        }
        setTimeout(() => {
          this.countDown(time - 1);
        }, 1e3)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  @import './index.scss';
</style>
