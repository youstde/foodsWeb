<template>
  <div class='skeleton_load_bx'>
    <!-- one -->
    <div class='one_bx'>
      <div class="top_input_bx">
        <flexbox>
          <flexbox-item class='toggle_store' :span='3'>
            <div class='toggle_store_inner'></div>
          </flexbox-item>
          <flexbox-item :span='9'>
            <div class="input_bx"></div>
          </flexbox-item>
        </flexbox>
      </div>
      <img class='main_img' src="@/assets/logo_.pic_hd.png" alt="">
      <div class="top_nav_bx">
        <div class="inner">
          <flexbox>
            <flexbox-item class='inner_item_out'>
              <div class="item"><img src="@/assets/logo_.pic_hd.png" alt=""></div>
            </flexbox-item>
            <flexbox-item class='inner_item_out'>
              <div class="item"><img src="@/assets/logo_.pic_hd.png" alt=""></div>
            </flexbox-item>
            <flexbox-item class='inner_item_out'>
              <div class="item"><img src="@/assets/logo_.pic_hd.png" alt=""></div>
            </flexbox-item>
            <flexbox-item class='inner_item_out'>
              <div class="item"><img src="@/assets/logo_.pic_hd.png" alt=""></div>
            </flexbox-item>
            <flexbox-item class='inner_item_out'>
              <div class="item"><img src="@/assets/logo_.pic_hd.png" alt=""></div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
    <!-- two -->
    <div class="two_bx">
      <div class="fast_news">
        <div class="inner">
          <div class="item"></div>
        </div>
      </div>
      <div class="time_discount">
        <div class='inner'>
          <div class="top">
            <flexbox>
              <flexbox-item :style="{'text-align':'left'}">
                <span class='item'></span>
              </flexbox-item>
              <flexbox-item :style="{'text-align':'right'}">
                <span class='item'></span>
              </flexbox-item>
            </flexbox>
          </div>
        </div>
        <div class="main_container">
          <flexbox>
            <flexbox-item class='item'>
              <div class='inner'>
                <img src="@/assets/logo_.pic_hd.png" alt="">
              </div>
            </flexbox-item>
            <flexbox-item class='item'>
              <div class='inner'>
                <img src="@/assets/logo_.pic_hd.png" alt="">
              </div>
            </flexbox-item>
            <flexbox-item class='item'>
              <div class='inner'>
                <img src="@/assets/logo_.pic_hd.png" alt="">
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
      <!-- s -->
       <div class="last_bx">
         <div class="time_discount">
          <div class='inner'>
              <div class="top">
                <flexbox>
                  <flexbox-item :style="{'text-align':'left'}">
                    <span class='item'></span>
                  </flexbox-item>
                  <flexbox-item :style="{'text-align':'right'}">
                    <span class='item'></span>
                  </flexbox-item>
                </flexbox>
              </div>
            </div>
        </div>
       </div>
       <!-- e -->
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import { getStoreData } from '@/service/getData'

  export default {
    name: 'skeleton-load',
    components: {
      Flexbox,
      FlexboxItem,
    },
    data () {
      return {
      }
    },
    mounted() {
      this.fetchStoreData()
    },
    methods: {
      fetchStoreData() {
        this.requestFetching = true
        getStoreData({
          t: 'list'
        }).then(res => {
          if(res && res.errcode === 0) {
            const { query: { mecid } } = this.$route
            console.log(mecid)
            const { list } = res.data
            if(mecid) {
              // 指定门店
              list.forEach(item => {
                if(`${item.id}` === mecid) {
                  this.$store.commit('SET_MERCHANT', item)
                  localStorage.setItem('merchant', JSON.stringify(item))
                }
              })
            } else {
              const { merchant } = res.data
              this.$store.commit('SET_MERCHANT', merchant)
              localStorage.setItem('merchant', JSON.stringify(merchant))
            }
            this.$router.push({
              path: '/home',
            })
          }
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/style/mixin';
  .skeleton_load_bx {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
    background-color: #eeeeee;
    .one_bx {
      height: 15rem;
      background-color: #eeeeee;
      padding-top: 2.25rem;
      padding: 0.5rem 0.75rem 0;
      position: relative;
      .top_input_bx {
        .input_bx {
          width: 100%;
          height: 1.75rem;
          background-color: #fff;
          @include borderRadius(0.2rem);
        }
        .toggle_store {
          height: 1.75rem;
          padding-right: 0.4rem;
          .toggle_store_inner {
            height: 100%;
            background-color: #fff;
          }
        }
      }
      .main_img {
        width: 7rem;
        height: 7rem;
        @include positionCenter;
      }
      .top_nav_bx {
        width: 100%;
        position: absolute;
        bottom: -2.1rem;
        left: 0;
        padding: 0 0.75rem 0;
        .inner {
          width: 100%;
          background-color: #fff;
          height: 4.2rem;
          @include borderRadius(0.3rem);
          .inner_item_out {
            height: 4.2rem;
            position: relative;
            .item {
              width: 2.25rem;
              height: 2.25rem;
              @include borderRadius(50%);
              background-color: #eeeeee;
              @include positionCenter;
              img {
                width: 70%;
                height: 70%;
                @include positionCenter;
              }
            }
          }
        }
      }
    }
    .two_bx {
      padding-top: 2.5rem;
      .fast_news {
        padding: 0 0.75rem 1rem;
        .inner {
          width: 100%;
          height: 2.25rem;
          background-color: #fff;
          position: relative;
          .item {
            width: 4rem;
            height: 1rem;
            background-color: #eee;
            @include positionMiddle;
            left: 1rem;
          }
        }
      }
      .time_discount {
        width: 100%;
        .inner {
          padding: 0 0.75rem 0;
          .top {
            padding-bottom: 0.5rem;
            .item {
              display: inline-block;
              width: 4rem;
              height: 1rem;
              background: #fff;
            }
          }
        }
        .main_container {
          width: 100%;
          height: 9.1rem;
          background: #fff;
          padding-left: 0.75rem;
          .item {
            height: 6rem;
            padding: 0.6rem 0.75rem 0 0;
            .inner {
              width: 100%;
              height: 6rem;
              background-color: #eee;
              position: relative;
              img {
                display: block;
                width: 3rem;
                height: 3rem;
                @include positionCenter;
              }
            }
          }
        }
      }
      .last_bx {
        padding-top: 0.5rem;
      }
    }
  }
</style>
