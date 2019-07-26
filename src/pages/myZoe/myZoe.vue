<template>
  <div class='my_zoe_bx'>
    <div class='top_bx'>
      <div class='top_banner'>
        <img src="@/assets/my-top-bg.png" alt="">
      </div>
      <div class='user_avatar'>
        <span class='not_login'><svg-icon iconClass='my-moren'></svg-icon></span>
      </div>
      <div class='user_name_bx' v-if='userInfo'>{{userInfo.name}}</div>
      <div class='login_link' v-else><router-link to='/sign'>登录/注册</router-link></div>
      <div class='login_out' v-if='userInfo' @click='loginOut'>退出</div>
    </div>
    <div class='middle_center_bx'>
      <div class="nav_list">
        <flexbox class='flex_bx'>
          <flexbox-item class='zoe_nav_item' v-for='(item, i) in navArr' :key='i'>
            <router-link :to='item.path'>
              <span class='icon_bx'><svg-icon :iconClass='item.icon'></svg-icon></span>
              <p class='item_label'>{{item.label}}</p>
            </router-link>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="service_phone">
        <div class="title">客服电话</div>
        <p>17301747954</p>
      </div>
      <!-- <div class='statement_bx'>
        <router-link to='/useragreement'>
        《用户使用条款和隐私声明》
        </router-link>
      </div> -->
    </div>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  import BottomNav from '@/components/bottomNav/bottomNav'

  import { getAccountBase } from '@/service/getData'
import { setTimeout } from 'timers';

  export default {
    name: 'my-zoe',
    components: {
      Flexbox,
      FlexboxItem,
      BottomNav
    },
    data () {
      return {
        navArr: [
          {
            path: '/orderlist',
            icon: 'order',
            label: '我的订单'
          },
          {
            path: '/adressmanagement',
            icon: 'adress-manament',
            label: '地址管理'
          }
        ],
        userInfo: null
      }
    },
    mounted() {
      const userInfoStr = localStorage.getItem('user_info')
      if(userInfoStr) {
        this.userInfo = JSON.parse(userInfoStr)
      }
    },
    methods: {
      loginOut() {
        getAccountBase({
          t: 'logout'
        }).then(res => {
          if(res && res.errcode === 0) {
            const { sk } = res.data
            localStorage.removeItem('user_info')
            localStorage.removeItem('active_serial_no')
            localStorage.removeItem('car_nums')
            // localStorage.removeItem('merchant')
            localStorage.setItem('uuId', sk)
            setTimeout(() => {
              window.location.reload()
            }, 100)
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import 'src/style/mixin.scss';
  @import './index.scss';
</style>
