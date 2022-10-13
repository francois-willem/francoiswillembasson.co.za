<template>
  <div class="sidebar-menu"> <!-- GREEN -->
    <div class="sidebar-guide-top-links"> <!-- BLUE -->
      <div class="sidebar-guide-home"> <!-- RED -->

        <div class="sidebar-guide-home-icon"> <!-- YELLOW-->
          <home-icon></home-icon>
        </div>
        <div class="sidebar-guide-home-description">
          Home
        </div>
      </div>

      <div class="sidebar-guide-explore"> <!-- YELLOW-->
        <div class="sidebar-guide-explore-icon">
          <explore-icon></explore-icon>
        </div>
        <div class="sidebar-guide-explore-description">
          Explore
        </div>
      </div>

      <div class="sidebar-guide-shorts"> <!-- YELLOW-->
        <div class="sidebar-guide-shorts-icon">
          <shorts-icon></shorts-icon>
        </div>
        <div class="sidebar-guide-shorts-description">
          Shorts
        </div>
      </div>

      <div class="sidebar-guide-subscriptions"> <!-- YELLOW-->
        <div class="sidebar-guide-subscriptions-icon">
          <subscriptions-icon></subscriptions-icon>
        </div>
        <div class="sidebar-guide-subscriptions-description">
          Subscriptions
        </div>
      </div>
    </div>

    <div class="sidebar-guide-account-links"> <!-- BLUE -->
      <div class="sidebar-guide-library">
        <div class="sidebar-guide-library-icon">
          <library-icon></library-icon>
        </div>
        <div class="sidebar-guide-library-description">
          Library
        </div>
      </div>

      <div class="sidebar-guide-history">
        <div class="sidebar-guide-history-icon">
          <history-icon></history-icon>
        </div>
        <div class="sidebar-guide-history-description">
          History
        </div>
      </div>
    </div>

    <div class="sidebar-guide-login">
      <div class="sidebar-guide-login-description">
        Sign in to like videos, comment, and to subscribe.
      </div>
      <a href="account.google.com/sigin" class="btn-sign-in">
        <sign-in-icon></sign-in-icon>
        <div class="sign-in-text">
          SIGN IN
        </div>
      </a>
    </div>

    <div class="sidebar-guide-explore-links">
      <div class="sidebar-guide-explore-explore">
        EXPLORE
      </div>
      <div class="sidebar-guide-music">
        <div class="sidebar-guide-music-icon">
          <img :src="images.MusicIcon" alt="">
        </div>
        <div class="sidebar-guide-music-description">
          Music
        </div>
      </div>
      <div class="sidebar-guide-sports">
        <div class="sidebar-guide-sports-icon">
          <img :src="images.SportsIcon" alt="">
        </div>
        <div class="sidebar-guide-sports-description">
          Sports
        </div>
      </div>
      <div class="sidebar-guide-gaming">
        <div class="sidebar-guide-gaming-icon">
          <img :src="images.GamingIcon" alt="">
        </div>
        <div class="sidebar-guide-gaming-description">
          Gaming
        </div>
      </div>
      <div class="sidebar-guide-news">
        <div class="sidebar-guide-news-icon">
          <img :src="images.NewsIcon" alt="">
        </div>
        <div class="sidebar-guide-news-description">
          News
        </div>
      </div>
      <div class="sidebar-guide-360-video">
        <div class="sidebar-guide-360-icon">
          <img :src="images.DegreeIcon" alt="">
        </div>
        <div class="sidebar-guide-360-video-description">
          360° Video
        </div>
      </div>
    </div>

    <div class="browse-channel-section">
      <div class="browse-channel">
        <div class="browse-channel-icon">
          <browse-channel></browse-channel>
        </div>
        <div class="browse-channel-description">
          Browse channels
        </div>
      </div>
    </div>
      
  </div>
</template>

<script>
import HomeIcon from '@Component/Partials/svg/HomeIcon.vue'
import ExploreIcon from '@Component/Partials/svg/ExploreIcon.vue'
import ShortsIcon from '@Component/Partials/svg/ShortsIcon.vue'
import SubscriptionsIcon from '@Component/Partials/svg/SubscriptionsIcon.vue'
import LibraryIcon from '@Component/Partials/svg/LibraryIcon.vue'
import HistoryIcon from '@Component/Partials/svg/HistoryIcon.vue'
import SignInIcon from '@Component/Partials/svg/SignInIcon.vue'
import BrowseChannel from '@Component/Partials/svg/BrowseChannel.vue'

// Images
import MusicIcon from '@Asset/images/music-icon.jpeg'
import SportsIcon from '@Asset/images/sports-icon.jpeg'
import GamingIcon from '@Asset/images/gaming-icon.jpeg'
import NewsIcon from '@Asset/images/news-icon.jpeg'
import DegreeIcon from '@Asset/images/360-icon.jpeg'

export default {
  components: {
    HomeIcon,
    ExploreIcon,
    ShortsIcon,
    SubscriptionsIcon,
    LibraryIcon,
    HistoryIcon,
    SignInIcon,
    BrowseChannel,
  },
  name: 'SidebarMenu', 
  data() {
    return {
      images: {
        MusicIcon,
        SportsIcon,
        GamingIcon,
        NewsIcon,
        DegreeIcon,
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.sidebar-menu {
  background-color: #212121;
  min-width: 240px;
  width: 100%;
}

.sidebar-guide-top-links {
  padding: 12px 0;
  border-bottom: 1px solid #4e4e4e;
}

.sidebar-guide-home {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.home-icon {
  height: 24px;
  width: 24px;
  margin: 0 24px 0 0;
  fill: #ffffff;
}

.sidebar-guide-home-description {
  font-size: 14px;
  color: #ffffff;
}

.sidebar-guide-explore {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.explore-icon {
  height: 24px;
  width: 24px;
  margin: 0 24px 0 0;
  fill: #ffffff;
}

.sidebar-guide-explore-description {
  font-size: 14px;
  color: #ffffff;
}

.sidebar-guide-shorts {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.shorts-icon {
  height: 24px;
  width: 24px;
  margin: 0 24px 0 0;
  fill: #ffffff;
}

.sidebar-guide-shorts-description {
  font-size: 14px;
  color: #ffffff;
}

.sidebar-guide-subscriptions {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.subscriptions-icon {
  height: 24px;
  width: 24px;
  margin: 0 24px 0 0;
  fill: #ffffff;
}

.sidebar-guide-subscriptions-description {
  font-size: 14px;
  color: #ffffff;
}

.sidebar-guide-account-links {
  padding: 8px 0;
  border-bottom: 1px solid #4e4e4e;
}

.sidebar-guide-library {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.library-icon {
  height: 24px;
  width: 24px;
  margin: 0 24px 0 0;
  fill: #ffffff;
}

.sidebar-guide-library-description {
  font-size: 14px;
  color: #ffffff;
}

.sidebar-guide-history {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.history-icon {
  height: 24px;
  width: 24px;
  margin: 0 24px 0 0;
  fill: #ffffff;
}

.sidebar-guide-history-description {
  font-size: 14px;
  color: #ffffff;
}

.sidebar-guide-login {
  padding: 16px 32px;
  border-bottom: 1px solid #4e4e4e;
}

.sidebar-guide-login-description {
  font-size: 14px;
  color: #ffffff;
}

.btn-sign-in {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  padding: 5px 15px;
  height: 36px;
  width: 116.75px;
  margin-top: 12px;
}

.sign-in-icon {
  height: 24px;
  width: 24px;
  fill: #3ea6ff;
}

.sign-in-text {
  margin-left: 8px;
}

// Explore section

.sidebar-guide-explore-links {
  padding: 8px 0;
}

.sidebar-guide-explore-explore {
  color: #aaaaaa;
  padding: 8px 24px;
  height: 32px;
  font-size: 14px;
}

.sidebar-guide-music {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.sidebar-guide-music-icon img {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-right: 24px;
}

.sidebar-guide-music-description {
  color: #ffffff;
  font-size: 14px;
}

.sidebar-guide-sports {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.sidebar-guide-sports-icon img {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-right: 24px;
}

.sidebar-guide-sports-description {
  color: #ffffff;
  font-size: 14px;
}

.sidebar-guide-gaming {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.sidebar-guide-gaming-icon img {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-right: 24px;
}

.sidebar-guide-gaming-description {
  color: #ffffff;
  font-size: 14px;
}

.sidebar-guide-news {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.sidebar-guide-news-icon img {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-right: 24px;
}

.sidebar-guide-news-description {
  color: #ffffff;
  font-size: 14px;
}

.sidebar-guide-360-video {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
}

.sidebar-guide-360-icon img {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  margin-right: 24px;
}

.sidebar-guide-360-video-description {
  color: #ffffff;
  font-size: 14px;
}

.browse-channel-section {
  padding: 8px 0;
  border-top: 1px solid #4e4e4e;
  border-bottom: 1px solid #4e4e4e;
}

.browse-channel {
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 24px;
  
}

.browse-channel-icon {
  height: 24px;
  width: 24px;
  margin: 0 24px 0 0;
  fill: #ffffff;
}

.browse-channel-description {
  font-size: 14px;
  
  color: #ffffff;
}

</style>