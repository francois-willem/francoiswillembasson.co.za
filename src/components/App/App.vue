<template>
  <div class="app">
    <main-header></main-header>
    
    <router-view />

    <!-- <cookie-message v-if="getPOPICookie()"></cookie-message> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

// Third party libraries
import api from '@API'

// Components
import MainHeader from '@Component/Layout/MainHeader.vue'
import CookieMessage from '@Component/Partials/CookieMessage.vue'

// Styles
import '../../scss/global.scss'


export default {
  name: 'App',
  components: {
    MainHeader,
    CookieMessage,
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
.app {
}
</style>
