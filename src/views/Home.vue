<template>
  <main class="page-content">
    <main-header></main-header>
    <linkedin-header></linkedin-header>
    <hero></hero>
    <about></about>
    <main-footer></main-footer>
  </main>
</template>

<script>


import MainHeader from '@Component/Home/MainHeader.vue';
import Hero from '@Component/Layout/Hero.vue';
import About from '@Component/Layout/About.vue';
import MainFooter from '@Component/Home/Footer.vue'
import LinkedinHeader from '@Component/Home/LinkedinHeader.vue'

export default {
  name: 'Home',
  components: {
    MainHeader,
    Hero,
    About,
    MainFooter,
    LinkedinHeader,
  },
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../scss/partials/variables';

.main-menus {
  display: flex;
}

.content {
  width: calc(100% - 240px);
  overflow: hidden;
}


</style>
