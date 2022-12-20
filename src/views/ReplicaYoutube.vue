<template>
  <main class="page-content">
    <youtube-header></youtube-header>
      <div class="main-menus">
        <sidebar-menu></sidebar-menu>
        <div class="content">
          <category-selector></category-selector>
          <div class="video-content-container">
            <video-content></video-content>
          </div>
        </div>
      </div>
    <!-- <main-footer></main-footer> -->
  </main>
</template>

<script>

import YoutubeHeader from '@Component/Layout/YoutubeHeader.vue'
// import MainFooter from '@Component/Home/Footer.vue'
import SidebarMenu from '@Component/Layout/SidebarMenu.vue'
import CategorySelector from '@Component/Layout/CategorySelector.vue'
import VideoContent from '@Component/Layout/VideoContent.vue'

export default {
  name: 'ReplicaYoutube',
  components: {
    YoutubeHeader,
    // MainFooter,
    SidebarMenu,
    CategorySelector,
    VideoContent,
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
