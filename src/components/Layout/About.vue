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
            I'm well spoken in English, Afrikaans(native) and study German on the side.
          </p>
          
          <p>
            For the past year and a half, I've been involved in a few web development projects, collaborating with friends of mine in the development industry. Currently I'm available for a tech related position with a vision to grow into a developer role over time.
          </p>
          
          <p>
            I started off by helping with HTML and CSS for a month or so, and then started diving into JavaScript, learning on the go, go see in the Projects section. My first solo site was hardcoding <a href="https://www.loveevents.co.za/" target="_blank">https://www.loveevents.co.za/</a>  pure HTML and CSS. Another site I built was <a href="https://www.firstaid4life.co.za/" target="_blank">https://www.firstaid4life.co.za/</a>.
          </p>
          

          <p>
            I then started building a replica of Youtube's home page to showcase my skills. This will also be found under projects.
          </p>
          
          <p>
            Currently I'm helping out with <a href="https://petify.co.za/">www.petify.co.za</a>, which is a friend of mine's side hustle. 
            Tech: HTML, SCSS, JavaScript, VueJs, NodeJs, Firebase.
          </p>
          
          <p>
            Since a young age I felt inspired to become an Accountant as I've always been good with maths and the sideline interest in trading and investing. So I studied Accounting for a few years, but realised my true passion for Software Development and Design and made the daring switch to the tech Industry.
          </p>
          
          <p>
            I see myself as a valuable asset to any company that shares in my desire to grow and strive to be the best at what they do.
          </p>
          
          <p>
            Interests: Motorsport, Rugby, Gym, Football
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
