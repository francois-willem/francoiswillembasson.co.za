<template>
  <div class="app">
    
    
    <router-view />

    <!-- <cookie-message v-if="getPOPICookie()"></cookie-message> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// Third party libraries
import api from '@API'

// Components
// import MainHeader from '@Component/Home/MainHeader.vue'


// Styles
import '../../scss/global.scss'


export default {
  name: 'App',

  components: {
    // MainHeader,
    
  },
  computed: {
  },
  created() {
    this.checkPOPICookie()
    
  },
  methods: {
    checkPOPICookie() {
      if (!this.getPOPICookie() === true) {
        // this.$store.commit('toggleCookieMessage')
      }
    },
    getPOPICookie() {
      return localStorage.getItem('POPI:accepted')
    },
  },
}
</script>

<style lang="scss">


// .app {
// }
</style>
