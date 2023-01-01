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
  padding-top: 5px;
}

.footer-container {
  background-color: #1d2226;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}

.footer-container img {
  width: 33px;
  padding-right: 5px;
}

// .footer-container a:last-child {
//   background-color: #fff;
//   height: 30px;
//   width: 30px;
// }

</style>
