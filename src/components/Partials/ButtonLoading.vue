<template>
  <a
    v-on:click="onclick"
    class="button-loading-styling button alert round"
    :class="{ disabled, loading, ...classes }"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "ButtonLoading",
  props: {
    classes: {
      type: Object,
      default: null
    },
    onclick: {
      type: Function,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/partials/variables";

.button-loading-styling {
  position: relative;
  display: block;
  width: 100%;
  color: #202020;
  background: $accent-color;
  font-size: 18px;
  font-weight: 400;
  padding: 10px 0;
  text-align: center;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  &.disabled {
    opacity: 0.4;
    cursor: initial;
    pointer-events: none;
  }
  &.loading {
    opacity: 0.4;
    cursor: initial;
    pointer-events: none;
  }
}

// Button style
//**********************//
.button:not(.disabled) {
  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: 17px;
    margin-top: -11px;
    width: 20px;
    height: 20px;
    border: 4px solid;
    border-left-color: transparent;
    border-radius: 50%;

    opacity: 0;
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

  &.loading {
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
</style>