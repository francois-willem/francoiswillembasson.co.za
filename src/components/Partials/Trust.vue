<template>
  <section class="trust">
    <div class="trust__item" v-lazyload>
      <img :data-src="images.InfinityCircleIcon" alt="infinity circle icon">
      <span class="trust__label">
        Unlimited Edits
      </span>
    </div>
    <div class="trust__item" v-lazyload>
      <img :data-src="images.ArtistIcon" alt="artist icon">
      <span class="trust__label">
        Real Artists
      </span>
    </div>
    <div class="trust__item" v-lazyload>
      <img :data-src="images.QuickIcon" alt="quick icon">
      <span class="trust__label">
        Quick &#38; Easy
      </span>
    </div>
    <div class="trust__item" v-lazyload>
      <img :data-src="images.SmileIcon" alt="smile icon">
      <span class="trust__label">
        Love your art
      </span>
    </div>
  </section>
</template>

<script>
import LazyLoadDirective from '@Directive/LazyLoadDirective.js'

import InfinityCircleIcon from '@Asset/images/icons/infinity-circle-icon.webp';
import ArtistIcon from '@Asset/images/icons/artist-icon.webp';
import QuickIcon from '@Asset/images/icons/quick-icon.webp';
import SmileIcon from '@Asset/images/icons/smile-icon.webp';

export default {
  name: 'Trust',
  directives: {
    lazyload: LazyLoadDirective
  },
  data() {
    return {
      images: {
        InfinityCircleIcon,
        ArtistIcon,
        QuickIcon,
        SmileIcon
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables';

.trust {
  display: flex;
  color: #ffffff;
  background: $accent-color;
  padding: 40px 15px;
  @media only screen and (max-width: 1023px) {
    padding: 70px 15px;
  }

  @media only screen and (max-width: 418px) {
    flex-wrap: wrap;
    justify-content: space-around;
    .trust__item {
      flex: initial;
      width: 135px;

      &:nth-child(3), &:nth-child(4) {
        margin-top: 35px;
      }
    }
  }
}

.trust__item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;

  img {
    width: 100%;
    max-width: 70px;
    height: 70px;
  }
}

.trust__label {
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  text-align: center;
}

</style>
