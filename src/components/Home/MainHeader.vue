<template>
  <nav class="navigation">

    <div class="logo">
      <a href="">fb</a>
    </div>

    <div class="menu">

      <div class="menu-container">
        <a href="#">Home</a>
      </div>

      <div 
      v-on:click="toggleDropdown(1)"
      :class="{ ' open-menu ': !showDropdown }"
      class="menu-container">
        <a href="#">Projects</a>
      </div>

      <div v-show="showDropdown" class="dropdown-menu-container">
          <div class="dropdown-menu">
            <div class="dropdown-link">
              <div class="project-logo">
                <img :src="images.loveevents" alt="">
              </div>
              <a href="https://www.loveevents.co.za/" target="_blank">
              Love Events
              </a>
            </div>
            <div class="dropdown-link">
              <div class="project-logo">
                <img :src="images.firstaid4life" alt="">
              </div>
              <a href="https://www.firstaid4life.co.za/" target="_blank">FirstAid4Life
              </a>
            </div>
            <div class="dropdown-link">
              <div class="project-logo">
                <img :src="images.youtube" alt="">
              </div>
              <a href="/replica-youtube">
              Youtube-Replica
              </a>
            </div>
          </div>
        </div>

      <div class="menu-container">
        <a href="#">Contact me</a>
      </div>
      <div class="menu-container-theme">
        <div class="moon-icon">
          <img :src="images.moonIcon" alt="">
        </div>
        <div class="sun-icon">
          <img :src="images.sunIcon" alt="">
        </div>
      </div>
    </div>
  </nav>
  
</template>

<script>
import loveevents from '@Asset/images/loveevents-logo.png'
import firstaid4life from '@Asset/images/firstaid-logo.png'
import youtube from '@Asset/images/youtube-logo.png'
import moonIcon from '@Asset/images/moon-icon-60.png'
import sunIcon from '@Asset/images/sun-icon-60.png'


export default {
  name: 'MainHeader',
  data() {
    return {
      images: {
        loveevents,
        firstaid4life,
        youtube,
        moonIcon,
        sunIcon,
      },
      showDropdown: false
      
    }
  },
  methods: {
    toggleDropdown(number) {
      if (number == 1) {
        this.showDropdown = !this.showDropdown
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.navigation {
  display: flex;
  justify-content: space-around;
  height: 70px;
  background-color: #1d2226;
  align-items: center;
}

.logo {
  color: #fff;
}

.logo :hover {
  cursor: crosshair;
}

a {
  box-shadow: inset 0 0 0 0 #fff;
  color: #fff;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .4s ease-in-out, box-shadow .4s ease-in-out;
}

a:hover {
  box-shadow: inset 200px 0 0 0 #fff;
  color: #000;
}

.menu {
  display: flex;
  color: #fff;
}

.menu-container {
  padding-right: 20px;
}

.menu-container:hover {
  cursor: pointer;
}

.dropdown-menu-container {
  position: absolute;
  top: 75px;
  left: 1300px;
  width: 230px;
  max-height: 400px;
  overflow: hidden;
  transition: max-height 0.5s;
}

@media only screen and (max-width: 1700px){ 
  .dropdown-menu-container {
    left: 1125px;
  }
}

.dropdown-menu-container.open-menu {
  max-height: 0px;
}

.dropdown-menu {
  display: flex;
  flex-direction: column;
  background: #1d2226;
  padding: 10px 20px 10px 20px;
  border-radius: 7px;
}

.dropdown-link {
  display: flex;
  padding-bottom: 5px;
}

.project-info {
  display: flex;
  align-items: center;
}

.project-logo {
  padding-right: 10px;
}

.project-logo img {
  width: 20px;
}

.menu-container-theme {
  display: flex;
}

.moon-icon {
  padding-left: 20px;
  display: block;
}

.moon-icon img {
  width: 20px;
}

.sun-icon {
  padding-left: 20px;
  display: block;
}

.sun-icon img {
  width: 20px;
  color: yellow;
}



</style>
