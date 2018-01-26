<template>
  <div class="tip-box" v-show="tipShow">
    <!--错误提示-->
    <div :class="tip.type">
      <div class="tip-icon-bx">
        <svg-icon :iconClass="tip.type"></svg-icon>
      </div>
      <div class="message-bx">{{tip.message}}</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'vue-tip',
    data () {
      return {
        tipShow: false,
        isTime: false
      }
    },
    mounted() {

    },
    watch:{
      tip:function(val){
        //do method again
        this.setShow();
      }
    },
    methods: {
      setShow() {
        if(this.isTime) return;
        let _this = this;
        this.tipShow = true;
        this.isTime = true;
        setTimeout(()=>{
          _this.tipShow = false;
          _this.isTime = false;
        }, 3e3);
      }
    },
    computed: {
      ...mapGetters([
        'tip'
      ])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .tip-box {
    padding: 0 10px;
    height:auto;
    background-color: #fff;
    position: fixed;
    top:-40px;
    left: 50%;
    z-index: 99999;
    box-shadow: 0 0 10px #ccc;
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -ms-transform: translate(-50%);
    -o-transform: translate(-50%);
    transform: translate(-50%);
    animation:tipMove 0.5s forwards;
    -webkit-animation:tipMove 0.5s forwards;
    div {
      height:40px;
    }
    .tip-icon-bx {
      width: 25px;
      height: 25px;
      padding-top: 7px;
      float: left;
    }
    .message-bx {
      font-size: 15px;
      line-height:40px;
      padding-left: 10px;
      float: left;
    }
    .success {
      color: #42c02e;
    }
    .err {

    }
    .warning {

    }
  }
  @keyframes tipMove {
    from {
      top:-40px;
    }
    to {
      top:0;
    }
  }
</style>
