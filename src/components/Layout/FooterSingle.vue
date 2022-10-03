<template>
  <div class="footer-single">
    <div class="links">
      <router-link to="/privacy-policy">Privacy Policy</router-link>
      <router-link to="/refunds">Refunds</router-link>
      <router-link to="/terms">Terms</router-link>
    </div>
    <div class="rights-reserved">&copy; 2022 Printr (Pty) Ltd. All rights reserved.</div>
  </div>
</template>

<script>
export default {
  name: "FooterSingle",
};
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables';
$background-color: $dark-color;

.footer-single {
  display: flex;
  flex-direction: column;
  min-height: 60px;
  font-size: 14px;
  color: #ffffff;
  background-color: $background-color;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
  }

  div {
    flex: 1;
  }
}

.links {
  padding-bottom: 10px;
  @media only screen and (min-width: 1024px) {
    padding-bottom: 0;
  }

  a {
    margin-right: 5px;
      &:hover {
        color: $accent-color;
      }
  }
}

.rights-reserved {
  text-align: center;
  @media only screen and (min-width: 1024px) {
    text-align: right;
  }
}
</style>
