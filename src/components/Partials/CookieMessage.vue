<template>
  <div class="cookie-message">
    <div>Please note that we use cookies to offer you a better user experience and analyse site traffic. By continuing to use our site, you agree to our cookie policy (<router-link to="/privacy-policy">Privacy Policy</router-link>).</div>
    <button class="btn--cookie" v-on:click="accept">I Agree</button>
  </div>
</template>

<script>

export default {
  name: "CookieMessage",
  methods: {
    accept() {
      localStorage.setItem('POPI:accepted', true);
      this.$store.commit('toggleCookieMessage');
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/partials/variables";

.cookie-message {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f4f4f4;
  color: #000000;
  padding: 20px 20px;
  z-index: 99999;
  border-top: 1px solid $accent-color;

  a {
    text-decoration: underline;
    cursor: pointer;
  }

  button {
    margin-left: 15px;
  }

  @media only screen and (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
    button {
      margin-left: 0;
      margin-top: 10px;
    }
  }
}

</style>
