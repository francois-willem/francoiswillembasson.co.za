<template>
  <div
    v-if="show"
    class="header-banner"
    :class="{
      'header-banner--hide-mobile': hideOnMobile,
      'header-banner--hide-desktop': hideOnDesktop,
      [styleClass]: true
    }"
  >
    {{ options[id] }}
  </div>
</template>

<script>
export default {
  name: 'HeaderBanner',
  props: [
    'id',
    'styleClass',
    // Never display include both attributes on one component
    'hideOnMobile',
    'hideOnDesktop',
  ],
  data() {
    return {
      options: {
        1: "Can't customize something the way you'd like? Let us know via WhatsApp.",
        2: 'This is a preview of your blanket, it will update as you make changes.',
      },
    }
  },
  computed: {
    show() {
      if (this.id) {
        if (-1 < this.id < Object.keys(this.options).length) return true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables';

.header-banner {
  background-color: $accent-color;
  text-align: center;
  padding: 12px 8px;

  &--hide-mobile {
    @media only screen and (max-width: 1023px) {
      display: none;
    }
  }

  &--hide-desktop {
    @media only screen and (min-width: 1024px) {
      display: none;
    }
  }

  a {
    text-decoration: none;
  }

  &.black-friday-sale {
    background-color: red;
    color: #FFFFFF;
  }
}
</style>
