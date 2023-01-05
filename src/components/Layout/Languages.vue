<template>
  <div class="language-parent-container">
    <div class="language-container">
      <div class="language-header">
        Languages
      </div>
      <div class="language-text">
        <h2>Afrikaans</h2>
        <p>Native or bilingual proficiency</p>
        <h2>English</h2>
        <p>Native or bilingual proficiency</p>
        <h2>German</h2>
        <p>Limited working proficiency</p>
      </div>
    </div>
  </div>
</template>

<script>



export default {
  name: 'Languages',
  data() {
    return {
      
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.language-parent-container {
  display: flex;
  justify-content: center;
  padding-top: 5px;
}

.language-container {
  width: 800px;
  background-color: #1d2226;
  border-radius: 7px;
  padding-bottom: 10px;
}

@media only screen and (max-width: 1200px){
  .language-container {
    width: 630px;
  }
}

@media only screen and (max-width: 1000px){
  .language-container {
    width: 400px;
  }
}

@media only screen and (max-width: 800px){
  .language-container {
    width: 500px;
  }
}

@media only screen and (max-width: 550px){
  .language-container {
    width: 380px;
  }
}

@media only screen and (max-width: 400px){
  .language-container {
    width: 350px;
  }
}

.language-header {
  color: #fff;
  font-size: 20px;
  padding: 20px 0 10px 25px;
}

.language-text {
  padding: 10px 25px 0 25px;
}

.language-text h2 {
  color: #fff;
  font-size: 16px;
  padding-bottom: 5px;
  padding-top: 10px;
}

.language-text p {
  padding-bottom: 10px;
  font-size: 14px;
  color: #ffffff99;
  border-bottom: 1px solid #ffffff1f;
}

.language-text :last-of-type {
  border-bottom: none;
  padding-bottom: 5px;
}

</style>
