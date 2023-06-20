<template>
  <div class="about-parent-container">
    <div class="about-container">
      <div class="about-header">
        <div class="about-header-text">
          About me
        </div>
      </div>
      <div class="about-text-container">
        <div class="about-text">
          <p>
            As a frontend developer, I embrace the art of crafting intuitive user experiences like a pro. But when I'm not coding, you'll find me juggling between debugging code and changing diapers with unmatched precision. When I'm not immersed in the world of pixels, I channel my inner gamer, exploring virtual realms and conquering digital quests. And if that's not enough excitement, you might catch me tearing up the streets on my bike or geeking out over the latest car tech innovations. Coding, diapers, games, bikes, and cars – my life is an exhilarating blend of pixels and parenthood!
          </p>
          <p>
            With 1.5 years of hands-on experience in front-end development, I bring a well-rounded skillset to the table, including HTML, CSS, SASS, Javascript, Vue.js, Responsive web design, Git, and REST API experience. I've honed my craft on real projects (see the Projects section, references are available upon request) and have more experience under my belt than most Junior developers out there. 
          </p>
          <p>
            I am the ideal candidate for companies seeking a semi-skilled professional who is ready to hit the ground running and bring immediate value to the team.
          </p>
          <p>
            About my past? Since a young age I felt inspired to become an Accountant as I've always been good with maths and the sideline interest in trading and investing. So I studied Accounting for a few years, but realised my true passion for Software Development and made the daring switch to the tech Industry.
          </p>
          <p>
            I do not cease to impress.
          </p>
        </div>
      </div>
        
    </div>
    
  </div>
  
</template>

<script>



export default {
  name: 'About',
  data() {
    return {
      
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.about-parent-container {
  display: flex;
  justify-content: center;
  padding-top: 5px;
}

.about-container {
  background-color: #1d2226;
  width: 800px;
  padding-bottom: 10px;
  border-radius: 7px;
}

@media only screen and (max-width: 1200px){
  .about-container {
    width: 630px;
  }
}

@media only screen and (max-width: 1000px){
  .about-container {
    width: 400px;
  }
}

@media only screen and (max-width: 800px){
  .about-container {
    width: 500px;
  }
}

@media only screen and (max-width: 550px){
  .about-container {
    width: 380px;
  }
}

@media only screen and (max-width: 400px){
  .about-container {
    width: 350px;
  }
}

.about-header {
  padding: 20px 0 10px 25px;
}

.about-header-text {
  color: #fff;
  font-size: 20px;
}

.about-text-container {
  padding-left: 25px;
  padding-right: 25px;
}

.about-text {
  color: #fff;
  font-size: 14px;
}

.about-text p {
  padding-bottom: 20px;
}

.about-text a {
  box-shadow: inset 0 0 0 0 #ff0000;
  color: #fff;
  margin: 0 -.25rem;
  padding: 0 .25rem;
  transition: color .4s ease-in-out, box-shadow .4s ease-in-out;
}

.about-text a:hover {
  box-shadow: inset 200px 0 0 0 #ff0000;
  color: #fff;
}

</style>
