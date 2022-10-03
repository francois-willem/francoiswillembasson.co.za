<template>
  <div class="login fill-page">
    <div class="left">
      <img class="logo" :src="images.LogoTogether" alt="logo together">
    </div>
    <div class="right">
      <h1>Login</h1>

      <!-- firebase ui -->
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>

      <div class="extra-text">Need help? Contact our support via WhatsApp or call <span class="middle-dot">&#183;</span> 071 815 4919</div>
    </div>
  </div>
</template>

<script>
import PageLoadingIcon from '@Component/Partials/PageLoadingIcon.vue'
import FooterSingle from '@Component/Layout/FooterSingle.vue';

import LogoTogether from '@Asset/images/logo-together.png'
import EventBusService from '@Service/eventBus.service'
import { initFirebaseAuthUI } from "@Service/firebaseuiHelper.js";

export default {
  name: "Login",
  metaInfo: {
    title: 'Login - Printr',
  },
  components: {
    PageLoadingIcon,
    FooterSingle
  },
  data() {
    return {
      images: {
        LogoTogether
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  mounted: () => {
    initFirebaseAuthUI();
  },
  created() {
    EventBusService.$on('READY_USER_STATE', () => {
      if (this.user) {
        this.$router.push({ name: 'MyAccountDashboard' })
      }
    })
  },
};
</script>

<style lang="scss" scoped>
// Component needs to be UNSCOPED for firebaseui lib
@import '../scss/partials/variables';
@import '../scss/lib/firebaseui';

.login {
  display: flex;
  height: 100%;
  color: #4a5568;
  // padding: 40px 0 30px 0;
  .left {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: $brand-color-3;

    .logo {
      height: 280px;
    }
  }
  .right {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

h1 {
  color: $accent-color;
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -.025em;
  margin: 0 0 10px 0;
}

h3 {
  color: #1a202c;
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: .6em;
  line-height: 1.6;
}

.extra-text {
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;
  font-size: 14px;
  text-align: center;
}
</style>
