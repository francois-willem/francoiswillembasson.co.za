<template>
  <nav class="navigation">

    <div class="logo">
      <a href="/">
        <Porsche></Porsche>
      </a>
    </div>

    <div class="menu">

      <!-- <div class="menu-container">
        <a href="#">Home</a>
      </div> -->

      <div 
      v-on:click="toggleDropdown(1)"
      :class="{ ' open-menu ': !showDropdown }"
      class="menu-container-projects">
        <div class="project-container">Projects</div>
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
            <div class="dropdown-link">
              <div class="project-logo">
                <img :src="images.youtube" alt="">
              </div>
              <a href="/weather">
              Weather App
              </a>
            </div>
            <div class="dropdown-link">
              <div class="project-logo">
                <img :src="images.youtube" alt="">
              </div>
              <a href="/movie-search">
              Movie Search
              </a>
            </div>
          </div>
        </div>
      </div>



      <div class="menu-container">
        <a href="mailto:francoiswillembasson@gmail.com">Contact me</a>
      </div>
      <div class="menu-container-theme">
        <div class="moon-icon-container">
          <moon-icon></moon-icon>
        </div>
        <div 
        v-on:click="toggleLightMode(1)"
        :class="{ ' light-mode ' : !showLightMode }"
        class="sun-icon-container">
          <sun-icon></sun-icon>
        </div>
      </div>

      <div
      v-on:click="toggleLinkedinHeader(2)"
      :class="{ ' open-drop ' : !showLinkedinHeader }"
      class="linkedin-header-button">
        <div class="dropdown-svg">
          <dropdown-icon></dropdown-icon>
        </div>
        
      </div>
      <!-- <div class="linkedin-header-button-drop">
        <img :src="images.dropDownArrow" alt="">
      </div> -->

    </div>

  </nav>

 
  
</template>

<script>
import loveevents from '@Asset/images/loveevents-logo.png'
import firstaid4life from '@Asset/images/firstaid-logo.png'
import youtube from '@Asset/images/youtube-logo.png'
import DropdownIcon from '@Component/Partials/svg/DropdownIcon.vue'
import MoonIcon from '@Component/Partials/svg/MoonIcon.vue'
import SunIcon from '@Component/Partials/svg/SunIcon.vue'
import Porsche from '@Component/Partials/svg/Porsche.vue'



export default {
  components: {
    DropdownIcon,
    MoonIcon,
    SunIcon,
    Porsche,
  },

  name: 'MainHeader',
  data() {
    return {
      

      images: {
        loveevents,
        firstaid4life,
        youtube,
  
      },
      showDropdown: false,
      showLightMode: true,
    }
  },
  computed: {
    showLinkedinHeader() {
      return this.$store.state.showLinkedinHeader
    }
  },
  methods: {
    toggleDropdown(number) {
      if (number == 1) {
        this.showDropdown = !this.showDropdown
      }
    },
    toggleLinkedinHeader() {
      this.$store.commit('setShowLinkedinHeader', {
        showLinkedinHeader: !this.showLinkedinHeader
      })
    },
    toggleLightMode(number) {
      if (number == 1) {
        this.showLightMode = !this.showLightMode
      }
    }
  }
}
</script>
<style lang="scss">
@import '../../scss/partials/variables';

.navigation {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  height: 70px;
  background-color: #1d2226;
  align-items: center;
  border-bottom: 1px solid #ffffff1f;
  z-index: 5;
}

.race-car {
  fill: #fff;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}

@keyframes hvr-buzz-out {
  10% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  20% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  30% {
    -webkit-transform: translateX(3px) rotate(2deg);
    transform: translateX(3px) rotate(2deg);
  }
  40% {
    -webkit-transform: translateX(-3px) rotate(-2deg);
    transform: translateX(-3px) rotate(-2deg);
  }
  50% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  60% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  70% {
    -webkit-transform: translateX(2px) rotate(1deg);
    transform: translateX(2px) rotate(1deg);
  }
  80% {
    -webkit-transform: translateX(-2px) rotate(-1deg);
    transform: translateX(-2px) rotate(-1deg);
  }
  90% {
    -webkit-transform: translateX(1px) rotate(0);
    transform: translateX(1px) rotate(0);
  }
  100% {
    -webkit-transform: translateX(-1px) rotate(0);
    transform: translateX(-1px) rotate(0);
  }
}

.race-car:hover {
  fill: #0a69f8;
  transition: fill .7s ease-in-out;
}

.race-car:hover, .race-car:focus, .race-car:active {
  -webkit-animation-name: hvr-buzz-out;
  animation-name: hvr-buzz-out;
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: 3;
  animation-iteration-count: 3;
}

@media only screen and (max-width: 550px) {
  .race-car {
    width: 45px;
  }
}

.menu a {
  box-shadow: inset 0 0 0 0 #fff;
  color: #fff;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .4s ease-in-out, box-shadow .4s ease-in-out;
}

.menu a:hover {
  box-shadow: inset 200px 0 0 0 #fff;
  color: #000;
}

.project-container {
  box-shadow: inset 0 0 0 0 #fff;
  color: #fff;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .2s ease-in-out, box-shadow .2s ease-in-out;
}

.project-container:hover {
  box-shadow: inset 70px 0 0 0 #fff;
  color: #000;
  cursor: pointer;
}

.menu {
  display: flex;
  color: #fff;
  // align-items: center;
}

.menu-container {
  padding-right: 20px;
  padding-left: 100px;
}

@media only screen and (max-width: 550px) {
  .menu-container {
    padding-left: 80px;
    padding-right: 10px;
  }
}

.menu-container-projects {
  padding-right: 20px;
  position: absolute;
  
}

.menu-container:hover {
  cursor: pointer;
}

.dropdown-menu-container {
  position: relative;
  top: 30px;
  right: 20px;
  width: 230px;
  max-height: 400px;
  overflow: hidden;
  transition: max-height 0.5s;
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
  border: 1.5px solid #080808;
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

.moon-icon-container {
  padding-left: 20px;
  display: block;
}

.moon-icon {
  fill: #bcbcbc;
  width: 20px;
}

.sun-icon {
  fill: #ffff00;
  width: 20px;
}

.sun-icon:hover {
  cursor: pointer;
}

.navigation.light-mode {
  background-color: #fff;
}

.sun-icon-container {
  padding-left: 20px;
  display: block;
}

@media only screen and (max-width: 550px) {
  .moon-icon-container {
    padding-left: 10px
  }

  .sun-icon-container {
    padding-left: 10px;
  }
}

.linkedin-header-button {
  padding-left: 20px;
  fill: #1100ff;
}

.linkedin-header-button:hover {
  cursor: pointer;
}

.linkedin-header-button.open-drop {
  fill: #fff;
}

// .open-drop {
//   color: red;
//   height: 200px;
// }

</style>
