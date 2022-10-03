<template>
  <main class="page-content">
    <main-footer></main-footer>
  </main>
</template>

<script>


import MainFooter from '@Component/Home/Footer.vue'

export default {
  name: 'Home',
  components: {
    MainFooter,
  },
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../scss/partials/variables';


</style>
