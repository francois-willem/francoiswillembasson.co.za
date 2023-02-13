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
        <p>CSS</p>
        <p>Responsive Web Design</p>
        <p>... more to follow soon. I'm constantly experimenting and expanding my skillset.</p>
      </div>
    </div>
  </div>
    
  
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {

    }
  },
  created(){
    this.testMethod()
  },
  methods: {
    testMethod() {
      console.log('Hello World!')
      this.anotherTestMethod()
    },
    anotherTestMethod() {
      console.log('Bye World!')
    }
  }
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

@media only screen and (max-width: 1200px){
  .skills-container {
    width: 630px;
  }
}

@media only screen and (max-width: 1000px){
  .skills-container {
    width: 400px;
  }
}

@media only screen and (max-width: 800px){
  .skills-container {
    width: 500px;
  }
}

@media only screen and (max-width: 550px){
  .skills-container {
    width: 380px;
  }
}

@media only screen and (max-width: 400px){
  .skills-container {
    width: 350px;
  }
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