<template>
  <main class="page-content">
    <main-header></main-header>
    <linkedin-header></linkedin-header>
    <div class="body-content">
      <div class="main-content">
        <hero></hero>
        <about></about>
        <skills></skills>
        <languages></languages>
      </div>
      <div class="side-content">
        <contacts></contacts>
      </div>
    </div>
    <main-footer></main-footer>
      
    
    
  </main>
</template>

<script>


import MainHeader from '@Component/Home/MainHeader.vue';
import Hero from '@Component/Layout/Hero.vue';
import About from '@Component/Layout/About.vue';
import MainFooter from '@Component/Home/Footer.vue'
import LinkedinHeader from '@Component/Home/LinkedinHeader.vue'
import Skills from '@Component//Layout/Skills.vue'
import Languages from '@Component/Layout/Languages.vue'
import Contacts from '@Component/Layout/Contacts.vue'

export default {
  name: 'Home',
  components: {
    MainHeader,
    Hero,
    About,
    MainFooter,
    LinkedinHeader,
    Skills,
    Languages,
    Contacts,
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

.main-content {
  display: flex;
  flex-direction: column;
}

.body-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.side-content {
  display: flex;
}

.content {
  width: calc(100% - 240px);
  overflow: hidden;
}


</style>
