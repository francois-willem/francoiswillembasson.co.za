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
          Front-end Developer
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
import ProfilePic from '@Asset/images/LinkedinV1.jpg'



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
  components: {
  
  },
  
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.hero-container-parent {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 25px;
}

@media only screen and (max-width: 800px){
  .hero-container-parent {
    padding-top: 10px;
  }
}

.hero-container {
  border-top-left-radius: 7px;
  background-color: #1d2226;
  border-radius: 7px;
  width: 800px;
}

@media only screen and (max-width: 1200px){
  .hero-container {
    width: 630px;
  }
}

@media only screen and (max-width: 1000px){
  .hero-container {
    width: 400px;
  }
}

@media only screen and (max-width: 800px){
  .hero-container {
    width: 500px;
  }
}

@media only screen and (max-width: 550px){
  .hero-container {
    width: 380px;
  }
}

@media only screen and (max-width: 400px){
  .hero-container {
    width: 350px;
  }
}

.hero-container-image img {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  width: 800px;
}

@media only screen and (max-width: 1200px){
  .hero-container-image img {
    width: 630px;
  }
}

@media only screen and (max-width: 1000px){
  .hero-container-image img {
    width: 400px;
  }
}

@media only screen and (max-width: 800px){
  .hero-container-image img {
    width: 500px;
  }
}

@media only screen and (max-width: 550px){
  .hero-container-image img {
    width: 380px;
  }
}

@media only screen and (max-width: 550px){
  .hero-container-image img {
    width: 350px;
  }
}

.profile-pic {
  padding-left: 25px;
}

.profile-pic img {
  width: 180px;
  top: 110px;
  position: absolute;
  border: 4px solid #1d2226;
  border-radius: 50%;
}

@media only screen and (max-width: 1200px){
  .profile-pic img {
    width: 160px;
    top: 90px;
  }
}

@media only screen and (max-width: 1000px){
  .profile-pic img {
    width: 110px;
    top: 65px;
  }
}

@media only screen and (max-width: 550px){
  .profile-pic img {
    width: 100px;
    top: 40px;
  }
}

.hero-text {
  padding: 75px 0 20px 25px;
}

@media only screen and (max-width: 1000px){
  .hero-text {
    padding-top: 60px;
  }
}

@media only screen and (max-width: 800px){
  .hero-text {
    padding-top: 45px;
  }
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
