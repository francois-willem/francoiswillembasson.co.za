<template>
  <div class="hero-container-parent">
    <div class="hero-container">
      <div class="hero-container-image">
        <img :src="images.BackgroundPhoto" alt="">
      </div>
      <div class="profile-pic">
        <img :src="images.ProfilePic" alt="">
      </div>
      <div class="hero-text">
        <div class="hero-full-name">
          Francois-Willem Basson
        </div>
        <div class="hero-occupation">
          Software Developer
        </div>
        <div class="hero-address">
          City of Cape Town, Western Cape, South Africa
        </div>
      </div>
      
    </div>
  </div>
  
  
</template>

<script>
import BackgroundPhoto from '@Asset/images/background-photo.jpeg'
import ProfilePic from '@Asset/images/profile-pic.png'


export default {
  name: 'Hero',
  data() {
    return {
      images: {
        BackgroundPhoto,
        ProfilePic
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.hero-container-parent {
  display: flex;
  justify-content: center;
  padding-top: 25px;
}

.hero-container {
  border-top-left-radius: 7px;
  background-color: #1d2226;
  border-radius: 7px;
  width: 800px;
}

.hero-container-image img {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  width: 800px;
}

.profile-pic {
  padding-left: 25px;
}

.profile-pic img {
  width: 180px;
  top: 196px;
  position: absolute;
  border: 4px solid #1d2226;
  border-radius: 50%;
}

.hero-text {
  padding: 90px 0 20px 25px;
}

.hero-full-name {
  color: #fff;
  font-size: 24px;
}

.hero-occupation {
  color: #dddddd;
  font-size: 16px;
  font-weight: 300;
  padding: 1px 0 0 0
}

.hero-address {
  color: #adadad;
  font-size: 14px;
  font-weight: 200;
  padding-top: 8px;
}

</style>
