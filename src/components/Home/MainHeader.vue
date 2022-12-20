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
              <a href="https://www.loveevents.co.za/" target="_blank">
              Love Events
              </a>
            </div>
            <div class="dropdown-link">
              <a href="https://www.firstaid4life.co.za/" target="_blank">FirstAid4Life
              </a>
            </div>
            <div class="dropdown-link">
              <a href="/replica-youtube">
              Youtube-Replica
              </a>
            </div>
          </div>
        </div>
      <div class="menu-container">
        <a href="#">Contact me</a>
      </div>
    </div>
  </nav>
  
</template>

<script>



export default {
  name: 'MainHeader',
  data() {
    return {
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
  top: 60px;
  left: 1300px;
  width: 200px;
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
  padding: 5px 10px;
  margin: 10px;
}

.dropdown-link {
  padding-bottom: 5px;
}

.project-info {
  display: flex;
  align-items: center;
}




</style>
