<template>
  <div class="home-bx">
     test
     <bottom-nav></bottom-nav>
     <svg-icon iconClass='phone'></svg-icon>
  </div>
</template>

<script>
  import tools from '@/util/tools'
  import { setTimeout } from 'timers'
  import BottomNav from '@/components/bottomNav/bottomNav.vue'
  export default {
    name: 'home',
    components: {
      BottomNav
    },
    data () {
      return {
        userData: '',
        value: [1,2,3]
      }
    },
//    computed: {
//      ...mapGetters([
//        'labels'
//      ])
//    },
    mounted() {
      setTimeout(() => {
        this.$store.commit('SET_IS_LOADING', false)
      }, 2e3)
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "./index.scss";
</style>
