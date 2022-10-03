<template>
  <div v-if="loading" class="page-loading-icon">
    <div class="background"></div>
    <!-- <div class="icon"></div> -->
    <div class="icon-2">
      <img :src="images.LoadingIcon" alt="loading-icon">
    </div>
  </div>
</template>

<script>
import LoadingIcon from '@Asset/images/logo-loading-icon.gif'

export default {
  name: 'PageLoadingIcon',
  props: ['loading'],
  data() {
    return {
      images: {
        LoadingIcon
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables';
.background {
  position: fixed;
  background-color: black;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.6;
  user-select: none;
  z-index: 99999;
}

.icon-2 {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $brand-color-3;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  height: 55px;
  width: 55px;
  border: 2px solid #202020;
  border-radius: 50%;
  z-index: 999999;
  box-shadow: 0px 0px 4px 1px rgba(47,173,253,0.75);
  -webkit-box-shadow: 0px 0px 4px 1px rgba(47,173,253,0.75);
  -moz-box-shadow: 0px 0px 4px 1px rgba(47,173,253,0.75);

  img {
    height: 50px;
    width: 50px;
  }
}

.icon {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #202020;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  height: 50px;
  width: 50px;
  border: 2px solid #202020;
  z-index: 999999;

  // Spinner starts
  &:before {
    content: '';
    position: absolute;
    right: 9px;
    top: 20px;
    margin-top: -11px;
    width: 20px;
    height: 20px;
    border: 4px solid #6fd862;
    border-left-color: transparent;
    border-radius: 50%;

    transition-duration: 0.5s;
    transition-property: opacity;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-name: rotate;
    animation-timing-function: linear;
  }
  &:after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 0px;

    transition-delay: 0.5s;
    transition-duration: 0.75s;
    transition-property: width;
  }

  &.sending {
    pointer-events: none;
    cursor: not-allowed;
    &:before {
      transition-delay: 0.5s;
      transition-duration: 1s;
      opacity: 1;
    }
    &:after {
      transition-delay: 0s;
      width: 20px;
    }
  }

  // Animations
  //**********************//
  @mixin rotate {
    //  IGNORE ERROR LINES :VS CODE ISSUE
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  //  IGNORE ERROR LINES :VS CODE ISSUE
  @keyframes rotate {
    @include rotate;
  }
}
</style>
