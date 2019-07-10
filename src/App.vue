<template>
  <div id="app">
    <router-view/>
    <div v-if='isShowCover' class="coverage_bx" @touchmove.prevent @click='closeCover'></div>
    <base-loading v-if='toggleLoading'></base-loading>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import baseLoading from '@/components/baseLoading/baseLoading'
  import { getAccountBase, getStoreData } from '@/service/getData'

  export default {
    name: 'App',
    components: {
      baseLoading
    },
    data() {
      return {
        type: '',
        message: '',
        toggleLoading: false
      }
    },
    mounted() {
      this.fetchStoreData()
      const uuId = localStorage.getItem('uuId')
      if(!uuId) {
        getAccountBase({
          t: 'guid'
        }).then(res => {
          if(res && res.errcode === 0) {
            localStorage.setItem('uuId', res.data)
          }
        })
      }
      window.onMessage('toggle:loading', (bol) => {
        this.toggleLoading = bol
      })
    },
    computed: {
      ...mapGetters([
        'isShowCover'
      ])
    },
    methods: {
      fetchStoreData() {
        getStoreData({
          t: 'list'
        }).then(res => {
          if(res && res.errcode === 0) {
            const { merchant } = res.data
            this.$store.commit('SET_MERCHANT', merchant)
          }
        })
      },
      closeCover() {
        console.log('close')
        this.$store.commit('SET_IS_SHOW_COVER', false)
      }
    }
  }
</script>

<style lang="scss">
  @import 'src/style/common';
  @import 'src/style/mixin';
  .clear {
    clear:both;
  }
  a {
    color: #969696;
    text-decoration: none;
  }
  body {
    color: #333333;
  }
  input,button {
    outline: none;
  }
  html,body {
    width: 100%;
    height: 100%;
    max-width: $maxWidth;
    background-color: $bgColor;
    margin: 0;
    padding:0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height:100%;
    // margin-bottom: 2.5rem;
  }

  .coverage_bx {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0,0,0,0.4);
  }

  // cube-Ui样式覆盖
  .cube-btn {
    padding: 0.6rem 0 !important;
    -webkit-border-radius: 1.2rem !important;
    -moz-border-radius: 1.2rem !important;
    -ms-border-radius: 1.2rem !important;
    -o-border-radius: 1.2rem !important;
    border-radius: 1.2rem !important;
  }

  .swiper-pagination-progressbar-fill {
    background: $themeColor !important;
  }
</style>
