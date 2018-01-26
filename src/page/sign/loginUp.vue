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
          <div class="left">
            <router-link :to="'sign_in'">登录</router-link>
          </div>
          <span class="dot"></span>
          <div class="right active">
            <router-link :to="'sign_up'">注册</router-link>
          </div>
        </div>
        <div class="user-input-bx">
          <div class="user-icon">
            <svg-icon iconClass="user"></svg-icon>
          </div>
          <input type="text" v-model="userName" placeholder="您的昵称" @blur="checkUsername">
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
        <div class="avator-bx">
          <div class="input-file-bx">
            <div class="input-file-inner-bx">
              <img id="portrait" :src="baseImg" width="60" height="60">
              <input id="avator" type="file" name="file" @change="showPreview"/>
            </div>
          </div>
          <div class="input-upload-btn-bx" v-show="selectImg">
            <input class="upload-btn" @click="uploadImg" type="button" value="上传">
          </div>
          <div class="clear"></div>
        </div>
        <base-loading v-show="loading"></base-loading>
        <button class="submit active" @click="submit">注册</button>
      </div>

    </div>
  </div>
</template>

<script>
  import {signUp,imageUpload} from '@/service/getData';
  import IconSvg from "../../components/svgIcon/svgIcon.vue";

  export default {
    components: {IconSvg},
    name: 'signUp',
    data () {
      return {
        tip: {
          type: 'err',
          message: 'sdsf'
        },
        selectImg: false,
        loading: false,
        canSubmit: false,
        checkUserName: false,
        checkUserPhone: false,
        checkUserPwd: false,
        checkUserAvator: false,
        baseImg: '//oss.ltcdn.cc/game/Images/IMG_6755.png',
        userName: '',
        userPhone: '',
        userPwd: ''
      }
    },
    methods: {
      submit () {
        let _this = this;
        if(this.checkUserName && this.checkUserPhone && this.checkUserPwd && this.checkUserAvator) {
          signUp({
            userName: this.userName,
            userPwd: hex_md5(this.userPwd),
            userPhone: this.userPhone,
            avator: this.baseImg
          }).then(function(data){
              if(data.success) {
                _this.$store.commit('SET_TIP', {
                  type: 'success',
                  message: data.data.msg
                });
                setTimeout(()=>{
                  _this.$router.push({ name: 'sign_in'});
                },1e3);
              }else {
                _this.$store.commit('SET_TIP', {
                  type: 'err',
                  message: data.data.msg
                });
              }
          });
        }else {
          this.$store.commit('SET_TIP', {
            type: 'warning',
            message: '请正确填写信息!'
          });
        }
      },
      uploadImg() {
        var _this = this;
        this.loading = true;
        imageUpload({
          avator:this.baseImg
        }).then(function(res){
          if(res.success) {
            _this.baseImg = res.data.picUrl;
            _this.loading = false;
            _this.checkUserAvator = true;
            _this.selectImg = false;
            _this.$store.commit('SET_TIP', {
              type: 'success',
              message: res.data.msg
            });
          }else {
            _this.$store.commit('SET_TIP', {
              type: 'err',
              message: res.data.msg
            });
          }
        });
      },
      showPreview(e) {
        var _this = this;
        this.loading = true;
         var file = e.target.files[0];
          // 进行校验，确保上传的为图片
          if(!file){
              this.loading = false;
              return;
          }
          if(!/image\/\w+/.test(file.type)){
            alert("请上传图片！");
            return false;
          }
          if(window.FileReader) {
            var fr = new FileReader();
            console.log(fr)
            fr.onloadend = function(e) {
              _this.baseImg = e.target.result;
              _this.loading = false;
              _this.selectImg = true;
            };
            fr.readAsDataURL(file);
          }
      },
      checkUsername() {
        if(!this.userName){
          this.checkUserName = false;
          return;
        };
        if(/\s+/.test(this.userName)) {
          this.$store.commit('SET_TIP', {
            type: 'warning',
            message: '昵称中不能出现空格!'
          });
          this.checkUserName = false;
          return;
        }
        this.checkUserName = true;
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
  .user-input-bx:nth-of-type(even) {
    border-top: 0;
    border-bottom: 0;
  }
  .submit {
    width: 100%;
    height:43px;
    font-size: 16px;
    font-weight:500;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    border: 0 none;
    cursor:pointer;
    &.active {
      color: #fff;
      background-color: #42c02e;
    }
    &.disable {
      color: #f1f1f1;
      background-color: #c8c8c8;
    }
  }
</style>
