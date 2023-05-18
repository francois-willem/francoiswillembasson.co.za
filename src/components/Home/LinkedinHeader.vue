<template>
  <nav class="linkedin-navigation"
  v-on:click="toggleLinkedinHeader(2)"
  :class="{ ' open-drop ' : !showLinkedinHeader }">

    <div class="left-nav">
      <div class="linkedin-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#fff" class="mercado-match" width="41" height="41" focusable="false">
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
          </path>
        </svg>
      </div>
      <form action="" class="search-box">
        <div class="search-container">
          <div class="input-container">
            <div class="search-icon-container">
              <search-icon></search-icon>
            </div>
            <input class="search-bar-input" type="" placeholder="Search" name="q">
          </div>
        </div>
      </form>
        
    </div>
    
    <div class="right-nav">
      <div class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="svg-icon" width="24" height="24" focusable="false">
          <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
        </svg>
        <div class="svg-text">Home</div>
      </div>
      <div class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="svg-icon" width="24" height="24" focusable="false">
          <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z">
          </path>
        </svg>
        <div class="svg-text">My network</div>
      </div>
      <div class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="svg-icon" width="24" height="24" focusable="false">
          <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z">
          </path>
        </svg>
        <div class="svg-text">Jobs</div>
      </div>
      <div class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="svg-icon" width="24" height="24" focusable="false">
          <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z">
          </path>
        </svg>
        <div class="svg-text">Messaging</div>
      </div>
      <div class="icon-container">
        <img :src="images.ProfilePic" class="linkedin-profile-pic">
        <div class="svg-text">Me</div>
      </div>
      <div class="icon-container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="svg-icon" width="24" height="24" focusable="false">
          <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z">
          </path>
        </svg>
        <div class="svg-text">Work</div>
      </div>
    </div>
    
  </nav>
  
</template>

<script>

import DarkLogo from '@Asset/images/fb-logo-dark.jpeg'

import DarkLogoFb from '@Component/Partials/svg/logo-fb-dark.vue'
import SearchIcon from '@Component/Partials/svg/SearchIcon.vue'
import ProfilePic from '@Asset/images/LinkedinV1.jpg'

export default {
  components: {
    DarkLogoFb,
    SearchIcon,
  },

  name: 'LinkedinHeader',
  data() {
    return {
      images: {
        DarkLogo,
        ProfilePic,
      },
      showLinkedinHeader: false,
      
    }
  },
  methods: {
    toggleLinkedinHeader(number) {
      if (number == 2) {
        this.showLinkedinHeader = !this.showLinkedinHeader
      }
    },
  }
}
</script>
<style lang="scss">
@import '../../scss/partials/variables';

.left-nav {
  display: flex;
  align-items: center;
}

.linkedin-logo {
  display: flex;
}

.linkedin-navigation {
  display: flex;
  align-items: center;
  height: 55px;
  background-color: #1d2226;
  margin-top: 75px;
  border-bottom: 1px solid #ffffff1f;
  border-top: 1px solid #ffffff1f;
  z-index: 5;
  padding: 0 20px;
  justify-content: center;
}

.search-box {
  padding-left: 10px;
}

.search-icon-container {
  justify-content: center;
  height: 24px;
  position: absolute;
  padding: 0 2px;
}

.input-container {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 280px;
  margin-right: 100px;
}

.input-container:focus-within {
  max-width: 360px;
  transition: max-width .3s ease-out;
  margin-right: 0;
}

@media only screen and (max-width: 950px){
  .input-container {
    width: 150px;
    margin-right: 0;
  }

  .input-container:focus-within {
    width: 150px;
    transition: none;
  }
}

@media only screen and (max-width: 800px){
  .input-container input {
    display: none;
  }
  .input-container {
    width: 40px;
  }
  .icon-container {
    width: 40px;
  }
  .search-icon-container {
    fill: #fff;
  }
}

@media only screen and (max-width: 400px){
  .input-container {
    width: 30px;
  }
  .icon-container {
    width: 30px;
  }
}

input {
  border-radius: 6px;
  height: 35px;
  width: 280px;
  padding-left: 30px;
  font-size: 14px;
  background-color: #38434f;
  box-shadow: none;
  color: #ffffffe6;
  border: 0;
}

input:focus {
  width: 380px;
  padding-left: 38px;
  font-size: 16px;
}

@media only screen and (max-width: 950px){
  input {
    width: 150px;
  }

  input:focus {
    max-width: 150px;
    padding-left: 30px;
    font-size: 14px;
  }
}

.right-nav {
  display: flex;
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  width: 80px;
  height: 55px;
  color: #ffffff99;
}

@media only screen and (max-width: 800px){
  .icon-container {
    width: 50px;
  }
}

.icon-container:hover {
  color: #fff;
}

.icon-container:last-child {
  border-left: 1px solid #ffffff1f;
}

.linkedin-profile-pic {
  border-radius: 50%;
  width: 24px;
  height: 24px;
}

@media only screen and (max-width: 800px){
  .svg-text {
    display: none;
  }
}

// .open-drop {
//   color: #ff0000;
// }

</style>