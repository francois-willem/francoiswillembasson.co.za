<template>
  <!-- <a class="whatsapp-button" v-on:click="window.open('https://wa.me/27604448175', '_blank')"> -->
  <a class="whatsapp-button" href="https://wa.me/27604448175" target="_black">
    <img :src="images.WhatsappIcon" alt="whatsapp button">
  </a>
</template>

<script>
import WhatsappIcon from '@Asset/images/whatsapp-icon.png';

export default {
  name: "WhatsappButton",
  data() {
    return {
      images: {
        WhatsappIcon
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/partials/variables";

.whatsapp-button {
  display: none;
  position: fixed;
  bottom: 5px;
  right: 5px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  z-index: 10;
  @media only screen and (max-width: 768px) {
    display: block;
  }

  img {
    width: 100%;
    border-radius: 43px;
    @media only screen and (max-width: 400px) {
      width: 50px;
    }
  }
}

</style>
