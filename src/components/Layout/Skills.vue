<template>
  <div class="skills-container-parent">
    <div class="skills-container">
      <div class="skills-header">
        Skills
      </div>
      <div class="skills-text">
        <p>Vue.js</p>
        <p>Javascript</p>
        <p>HTML5</p>
        <p>SASS</p>
        <p>And much more... Just give me some time</p>
      </div>
    </div>
  </div>
    
  
</template>

<script>
export default {
  name: 'Skills',
  data() {

  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/partials/variables';

.skills-container-parent {
  display: flex;
  justify-content: center;
  padding-top: 5px;
}

.skills-container {
  width: 800px;
  background-color: #1d2226;
  border-radius: 7px;
  padding-bottom: 10px;
}

.skills-header {
  color: #fff;
  font-size: 20px;
  padding: 20px 0 10px 25px;
}

.skills-text {
  color: #fff;
  font-size: 14px;
  padding: 10px 0 0 25px;
}

.skills-text p {
  padding-bottom: 10px;
}

</style>