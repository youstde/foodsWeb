<template>
  <div class="write-bx">
    <top-nav></top-nav>
    <div class="post-image-out">
        <div class="article-title">
          <label for="articleTitle">文章标题:</label>
          <input id="articleTitle" type="text" v-model="articleTitle">
        </div>
        <div class="select-label-bx" v-show="labels">
          <select @change="setLabel">
              <option>---请选择标签---</option>
              <option :value="item.id" v-for="item in labels">{{item.title}}</option>
          </select>
        </div>
        <div class="post-img-out-bx">
            <div style="float:left;line-height: 100px;">上传封面图片(可选):&nbsp;</div>
            <div class="post-image-bx" style="float:left;">
              <input type="file" class="post-image-input" @change="showPreview">
              <img class="post-view" :src="baseImg" alt="">
            </div>
            <div class="upload-image" @click="uploadImg" v-show="isSelectImg">上传图片</div>
        </div>
        <div class="clear"></div>
    </div>
    <mavon-editor ref=md @imgAdd="$imgAdd" v-model="value"/>
    <button class="submitBtn" @click="submit">确定</button>
    <base-loading v-show="loading"></base-loading>
  </div>
</template>

<script>
  import {imageUpload, publicArticle, getLabel, getUserInfo} from '@/service/getData';
  import topNav from '@/components/nav/topNav';
  export default {
    name: 'write',
    components: {
      topNav
    },
    data () {
      return {
        value: '',  //文章内容
        isSelectImg: false,
        loading: false,
        labels: [],
        label: '',  //文章标签ID
        articleTitle: '', //文章标题
        baseImg: '//stblog.oss-cn-beijing.aliyuncs.com/stblog/7j096tgqq71516948976898.png'  //文章封面图片
      }
    },
    beforeRouteEnter(to, from, next) {
      getUserInfo().then((res)=>{
        if(res.success) {
          next();
        }else {
          next(vm=>{
            vm.$router.push({ name: 'sign_in', params: {referer: 'write'}});
          });
        }
      });
    },
    mounted() {
      let _this = this;
      getLabel().then((res)=>{
        console.log(res);
        if(res.success) {
          _this.labels = res.data;
          _this.$store.commit('SET_LABELS', res.data);
        }
      });
    },
    methods: {
      $imgAdd(pos, $file){
        var _this = this;
        // 第一步.将图片上传到服务器.
        var formdata = new FormData();
        formdata.append('image', $file);
        imageUpload({
          avator:$file.miniurl
        }).then(function(res){
          if(res.success) {
            _this.$refs.md.$img2Url(pos, res.data.picUrl);
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
      test(test) {
        console.log(test);
      },
      showPreview(e) {
        var _this = this;
        this.loading = true;
        this.isSelectImg = false;
        var file = e.target.files[0];
        // 进行校验，确保上传的为图片
        if(!file){
          this.loading = false;
          return;
        }
        if(!/image\/\w+/.test(file.type)){
          alert("请上传图片！");
          _this.isSelectImg = false;
          _this.loading = false;
          return false;
        }
        if(window.FileReader) {
          var fr = new FileReader();
          console.log(fr)
          fr.onloadend = function(e) {
            _this.baseImg = e.target.result;
            _this.loading = false;
            _this.isSelectImg = true;
          };
          fr.readAsDataURL(file);
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
      setLabel(e) {
        this.label = e.target.value;
        console.log(Number(e.target.value));
      },
      submit() {
        let _this = this;
        let subStr = this.value.slice(0,200);
        subStr = subStr.replace(/!\[(.*?)\]\((.*?)\)/, '');
        subStr = subStr.replace(/\<img\s+src=\'(.*?)\'\/\>/, '');
        subStr = subStr.replace(/\s+/, '');
        subStr += '......';
        console.log(subStr);
        if(!this.articleTitle || !this.value || !this.label) {
          this.$store.commit('SET_TIP', {
            type: 'warning',
            message: '请填写完整信息'
          });
          return;
        }
        publicArticle({
          title: this.articleTitle,
          detail: this.value,
          postImg: this.isSelectImg?this.baseImg: '',
          label: this.label,
          resume: subStr
        }).then((res)=>{
            console.log(res);
            if(res.success) {
                this.$store.commit('SET_TIP', {
                  type: 'success',
                  message: res.data.msg
                });
                setTimeout(()=>{
                    _this.$router.push({ name: 'home'});
                },2e3);
            }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "./write.scss";
</style>
