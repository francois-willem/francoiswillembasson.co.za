<template>
  <div class="page-content">
    <div class="refunds fill-page">
      <div class="container">
          
          <h1>
            Refunds
          </h1>
          <div>
            <p>Work can start on your order straight away, so we are not able to cancel orders once they are placed. We will however aim to work with you to resolve any issues you have.</p>
            <p>In the event your order is damaged when you receive it, we will endeavour to rectify that with you by providing you with a replacement. You will need to send in photos of the damage and also photos of the packaging.</p>
            <p>If your order is lost in transit (the time period for being classed as lost is dependant on the delivery location) we will send a replacement out to you.</p>
            <p>Please get in touch if you have any issues as we are always here to help.</p>
          </div>

      </div>
    </div>
    
    <footer-single></footer-single>
  </div>
</template>

<script>
import FooterSingle from '@Component/Layout/FooterSingle.vue';

export default {
  name: "Refunds",
  metaInfo: {
    title: 'Refunds - Petify',
    meta: [{
      vmid: '1',
      name: 'description',
      content: 'Petify &#183; Create your own custom pet fleece blanket in seconds. We come up with innovative personalized pet products that makes you feel good. We deliver all over South Africa.'
    }],
  },
  components: {
    FooterSingle
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/partials/variables';

.refunds {
  font-family: 'DM Sans';
  color: #4a5568;
  max-width: 655px;
  padding: 40px 0 30px 0;
  margin: 0 auto;
}

 h1 {
  color: $accent-color;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  letter-spacing: -.025em;
}

h3 {
  color: #1a202c;
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: .6em;
  line-height: 1.6;
}

strong {
  color: #1a202c;
  font-weight: 600;
  line-height: 1.75;
}

p {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  line-height: 1.75;
}

ul {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  list-style: none;
  padding: 0;

  li {
    position: relative;
    padding-left: 1.75em;
    margin-top: .5em;
    margin-bottom: .5em;
    line-height: 1.75;

    &:before {
      content: "";
      position: absolute;
      background-color: #cbd5e0;
      border-radius: 50%;
      width: .375em;
      height: .375em;
      top: .6875em;
      left: .25em;
    }
  }
}
</style>
