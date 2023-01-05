<template>
  <div class="footer-parent-container">
    <div class="footer-container">
      <a href="https://www.facebook.com/francoiswillemb1" target="_blank">
        <img :src="images.FacebookIcon" alt="facebook icon">
      </a>
      <a href="https://www.instagram.com/fwillem_b/" target="_blank">
        <img :src="images.InstagramIcon" alt="instagram icon">
      </a>
      <a href="https://www.linkedin.com/in/francois-willem-basson-35bba9b3/" target="_blank">
        <img :src="images.LinkedinIcon" alt="linkedin icon">
      </a>
    </div>
    <div class="contact-me-container">
      <div class="email">
        <a href="mailto:francoiswillembasson@gmail.com">francoiswillembasson@gmail.com</a>
      </div>
      <div class="contact-number">
        Contact number: (+27) 78 450 7495
      </div>
    </div>
  </div>
  
</template>

<script>

import FacebookIcon from '@Asset/images/icon-facebook.png'
import InstagramIcon from '@Asset/images/icon-instagram.png'
import LinkedinIcon from '@Asset/images/icon-linkedin.png'


export default {
  name: 'MainFooter',
  data() {
    return {
      images: {
        FacebookIcon,
        InstagramIcon,
        LinkedinIcon,
      }
      
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.footer-parent-container {
  display: flex;
  background-color: #1d2226;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  align-items: center;
  justify-content: space-around;
  margin-top: 5px;
}

@media only screen and (max-width: 550px){
  .footer-parent-container {
    padding-left: 5px;
  }
}

.footer-container {
  display: flex;
}

.footer-container img {
  width: 33px;
  padding-right: 5px;
  display: flex;
}

.contact-me-container {
  color: #fff;
  padding-left: 10px;
}

@media only screen and (max-width: 550px){
  .contact-me-container {
    font-size: 14px;
  }
}

.email {
  padding-bottom: 5px;
}

// .footer-container a:last-child {
//   background-color: #fff;
//   height: 30px;
//   width: 30px;
// }

</style>
