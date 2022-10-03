<template>
  <div class="top-banner" :class="{ 'top-banner--double-line': isTopBannerDoubleLine, 'top-banner--bold': isBold }" v-html="text"></div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  data() {
    return {
      text: 'Need help? Contact our support via WhatsApp or call <span class="middle-dot">&#183;</span> 071 815 4919',
      // text: '10% of every order will go to an animal cruelty or adoption organization in South Africa every month <span class="middle-dot">&#183;</span> <a href="/petifyfoundation">make a difference!</a>',
      // mobile: '10% of your order cost will <span class="middle-dot">&#183;</span> <a href="/petifyfoundation">make a difference with us!</a>',
      isMobile: true,
      isDesktop: false,
      isTopBannerDoubleLine: false,
      isBold: false
    }
  },
  mounted() {
    this.setDeviceVariables()
    this.setTopBannerText()
    window.addEventListener('resize', () => {
      this.setDeviceVariables()
      this.setTopBannerText()
    }, false)
  },
  watch:{
    $route (to, from){
      this.setTopBannerText()
    }
  },
  methods: {
    setDeviceVariables() {
      if (document.documentElement.clientWidth < 1024) {
        this.isMobile = true
        this.isDesktop = false
      } else {
        this.isMobile = false
        this.isDesktop = true
      }
    },
    setTopBannerText() {
      //isMobile
      if (this.isMobile) {
        this.isBold = true;
        switch (this.$route.path) {
          case '/':
          case '/faq':
          case '/refunds':
          case '/terms':
          case '/privacy-policy':
            this.isTopBannerDoubleLine = true
            break;
          default:
            this.text = 'Need help? Contact our support via WhatsApp or call <span class="middle-dot">&#183;</span> 071 815 4919'
            this.isTopBannerDoubleLine = false
          }

      // isDesktop
      } else {
        this.isBold = false;
        switch (this.$route.path) {
          default:
            this.text = 'Need help? Contact our support via WhatsApp or call <span class="middle-dot">&#183;</span> 071 815 4919'
            this.isTopBannerDoubleLine = false
          }
      }
      
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/partials/variables';

.top-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $accent-color;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
  height: 25px;
  padding: 0 5px;

  @media only screen and (min-width: 1024px) {
    font-size: 13px;
  }

  &--double-line {
    height: 35px;
  }

  &--bold {
    font-weight: 600;
    font-size: 13px;
  }

  .middle-dot {
    font-weight: 700;
    padding: 0 5px;
  }

  a {
    color: #06c !important;
    font-weight: 500;
    text-decoration: none;
  }
}
</style>
