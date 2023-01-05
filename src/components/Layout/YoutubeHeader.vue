<template>
  <div class="header-main">

    <div class="header-left">
      <div class="burger-icon-container">
        <burger-icon></burger-icon>
      </div> 
      <a href="/">
        <div class="youtube-logo-container">
          <youtube-logo></youtube-logo>
          <span class="country-code">ZA</span>
        </div>
      </a>
    </div>

    <!-- <div class="link">
      <router-link to="/replica-youtube">Youtube Replica</router-link>
    </div> -->

    <div class="header-middle">
      <div class="search-bar">
        <form action="" class="search-box">
          <div class="search-container">
            <div class="input-container">
              <search-icon-before></search-icon-before>
              <input class="search-bar-input" type="" placeholder="Search" name="q">
              <button type="submit">
                <div class="search-icon-container">
                  <search-icon></search-icon>
                </div>
              </button>
            </div>
            
            <div class="voice-search-container">
                <voice-search></voice-search>
              </div>
          </div>
      </form>
      </div>
    </div>

    <div class="header-right">
      <div class="option-dots-container">
        <option-dots></option-dots>
      </div>
      <a href="/" class="btn-sign-in">
        <sign-in-icon></sign-in-icon>
        <div class="sign-in-text">
          SIGN IN
        </div>
      </a>
    </div>

  </div>
</template>

<script>
import BurgerIcon from '@Component/Partials/svg/BurgerIcon.vue'
import YoutubeLogo from '@Component/Partials/svg/YoutubeLogo.vue'
import SearchIcon from '@Component/Partials/svg/SearchIcon.vue'
import VoiceSearch from '@Component/Partials/svg/VoiceSearch.vue'
import OptionDots from '@Component/Partials/svg/OptionDots.vue'
import SignInIcon from '@Component/Partials/svg/SignInIcon.vue'
import SearchIconBefore from '@Component/Partials/svg/SearchIconBefore.vue'

export default {
  components: { 
    BurgerIcon, 
    YoutubeLogo,
    SearchIcon,
    VoiceSearch,
    OptionDots,
    SignInIcon,
    SearchIconBefore,
  },
  name: 'YoutubeHeader',
  data() {
    return {
      
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

// header left

.header-main {
  display: flex;
  position: absolute;
  flex-direction: row;
  height: 56px;
  padding: 0 16px;
  background-color: #212121;
  align-items: center;
  justify-content: space-between;
  top: 0;
  right: 0;
  left: 0;
}

.header-left {
  display: flex;
  height: 100%;
  padding: 16px 16px 16px 8px;
}

.burger-icon {
  fill: #ffffff;
}

.youtube-logo {
  fill: #ffffff;
}

.youtube-logo-container {
  position: relative;
  display: flex;
  max-width: 96px;
  margin-left: 24px;
}

.country-code {
  position: absolute;
  right: -16px;
  top: -2px;
  color: #aaa;
  font-size: 9px;
  font-weight: 1000;
}
// header middle

.header-middle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-box {
  display: flex;
  max-width: 728px;
  height: 40px;
  width: 100%;
}

.search-container {
  display: flex;
}

.input-container {
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-left: 34px;

  &:focus-within {
    padding-left: 34px;
    margin-left: 0;

    input {
      padding-left: 34px;
    }

    .search-icon-before {
      display: block;
    }
  }
}

.search-icon-before {
  display: none;
  position: absolute; 
  left: 44px;
  height: 20px;
  width: 20px;
  fill: #ffffff;
}

input {
  background-color: #111111;
  font-size: 15px;
  padding: 2px 6px;
  width: 525px;
  height: 40px;
  border: 1px solid rgb(48, 48, 48);
  color: #ffffff;
  margin-left: 34px;
}

input:focus, textarea:focus {
  outline: none;
  border: 1px solid #1c62b9;
  width: 558px;
  margin-left: 0;
}

button {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 6px;
  height: 40px;
  width: 64px;
  background-color: rgb(48, 48, 48);
  fill: #ffffff;
  border: none;
}

.search-icon-container {
  justify-content: center;
  height: 24px;
  width: 52px;
  margin: 0px;
}

.voice-search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
  margin-left: 5px;
  border-radius: 50%;
  background: #191919;
  margin-left: 10px;
}

.voice-search {
  fill: rgb(255, 254, 254);
  height: 24px;
  width: 24px;
}

// header right

.option-dots-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  cursor: pointer;
}

.header-right {
  display: flex;
  align-items: center;
}

.option-dots {
  fill: rgb(255, 254, 254);
  height: 24px;
  width: 24px;
  margin-right: 15px;
}

.btn-sign-in {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #3ea6ff;
  border: 1px solid #3ea6ff;
  padding: 5px 11px;
  height: 36px;
}

.sign-in-icon {
  height: 24px;
  width: 24px;
  fill: #3ea6ff;
}

.sign-in-text {
  margin-left: 8px;
}

</style>