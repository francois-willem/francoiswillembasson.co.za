<template>
  <div class="contacts-parent-container">
    <div class="contacts-container">
      <div class="contacts-header">
        <h2>People I know</h2>
      </div>

      <div class="contacts-text">
        <div class="contacts-section">
          <div class="contacts-pic">
            <img :src="images.trystan" alt="">
          </div>
          <div class="contacts-info">
            <div class="contacts-name">
              <a href="https://www.linkedin.com/in/trystan-yslie-35b75b1b5/" target="_blank">
              Trystan Yslie
              </a>
            </div>
            <div class="contacts-occupation">
              <p>Retail Assistant at</p>
              <p>Hurley</p>
              
            </div>
            <a href="https://www.linkedin.com/in/trystan-yslie-35b75b1b5/" target="_blank">
              <div class="contacts-connect-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="connect-svg" width="16" height="16" focusable="false">
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>
                <span>Connect</span>
              </div>
            </a>

          </div>
        </div>
      </div>

      <div class="contacts-text">
        <div class="contacts-section">
          <div class="contacts-pic">
            <img :src="images.christian" alt="">
          </div>
          <div class="contacts-info">
            <div class="contacts-name">
              <a href="https://www.linkedin.com/in/cscottsa/" target="_blank">
              Christian Scott
              </a>
            </div>
            <div class="contacts-occupation">
              <p>Javascript Engineer at</p>
              <p>White Hat Gaming</p>
            </div>
            <a href="https://www.linkedin.com/in/cscottsa/" target="_blank">
              <div class="contacts-connect-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="connect-svg" width="16" height="16" focusable="false">
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>
                <span>Connect</span>
              </div>
            </a>
            
          </div>
        </div>
      </div>

      <div class="contacts-text">
        <div class="contacts-section">
          <div class="contacts-pic">
            <img :src="images.neilBenjamin" alt="">
          </div>
          <div class="contacts-info">
            <div class="contacts-name">
              <a href="https://www.linkedin.com/in/neil-benjamin-547805a7/" target="_blank">
              Neil Benjamin
              </a>
            </div>
            <div class="contacts-occupation">
              <p>Web Development, Music Education,</p>
              <p>Sound Design</p>
            </div>
            <a href="https://www.linkedin.com/in/neil-benjamin-547805a7/" target="_blank">
              <div class="contacts-connect-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="connect-svg" width="16" height="16" focusable="false">
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>
                <span>Connect</span>
              </div>
            </a>
            

          </div>
        </div>
      </div>

      <div class="contacts-text">
        <div class="contacts-section">
          <div class="contacts-pic">
            <img :src="images.neilBasson" alt="">
          </div>
          <div class="contacts-info">
            <div class="contacts-name">
              <a href="https://www.linkedin.com/in/neil-basson-54627b215/" target="_blank">
              Neil Basson
              </a>
            </div>
            <div class="contacts-occupation">
              <p>Receiving administrator at</p>
              <p>United Distributors</p>
            </div>
            <a href="https://www.linkedin.com/in/neil-basson-54627b215/" target="_blank">
              <div class="contacts-connect-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" class="connect-svg" width="16" height="16" focusable="false">
                  <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                </svg>
                <span>Connect</span>
              </div>
            </a>
            

          </div>
        </div>
      </div>

    </div>
  </div>
  
</template>

<script>

import trystan from '@Asset/images/trystan-pic.jpeg'
import christian from '@Asset/images/christian-pic.jpeg'
import neilBenjamin from '@Asset/images/neilbenjamin-pic.jpeg'
import neilBasson from '@Asset/images/neilbasson-pic.jpeg'

export default {
  name: 'Blank',
  data() {
    return {
      images: {
        trystan,
        christian,
        neilBenjamin,
        neilBasson,
      },
      
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../../scss/partials/variables';

.contacts-parent-container {
  display: flex;
  justify-content: center;
  padding-left: 25px;
  padding-top: 25px;
}

@media only screen and (max-width: 800px){
  .contacts-parent-container {
    padding-left: 0;
    padding-top: 5px;
  }
}

.contacts-container {
  width: 300px;
  height: fit-content;
  background-color: #1d2226;
  border-radius: 7px;
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px;
}

@media only screen and (max-width: 1200px){
  .contacts-container {
    width: 280px;
  }
}

@media only screen and (max-width: 800px){
  .contacts-container {
    width: 400px;
  }
}

@media only screen and (max-width: 800px){
  .contacts-container {
    width: 500px;
  }
}

@media only screen and (max-width: 550px){
  .contacts-container {
    width: 380px;
  }
}

@media only screen and (max-width: 400px){
  .contacts-container {
    width: 350px;
  }
}

// .language-text {
//   padding: 10px 25px 0 25px;
// }

.contacts-header h2 {
  color: #fff;
  font-size: 20px;
  padding-bottom: 5px;
  padding-top: 10px;
}

.contacts-section {
  display: flex;
  border-bottom: 1px solid #ffffff1f;
  padding-top: 10px;
  padding-bottom: 10px;
}

.contacts-name {
  color: #fff;
  padding-bottom: 3px;
}

.contacts-name:hover {
  color: #70b5f9;
  text-decoration: underline;
}

.contacts-occupation {
  color: #ffffffd5;
  font-size: 14px;
  padding-bottom: 7px;
}

.contacts-pic {
  margin-right: 12px;
}

.contacts-pic img {
  width: 48px;
  border-radius: 50%;
}

.connect-svg {
  fill: #fff;
}

.contacts-connect-button {
  height: 32px;
  width: 113px;
  border: 1px solid #ffffffd5;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.contacts-connect-button:hover {
  background-color: #4e4e4e;
  border: 2px solid #ffffffd5;
}

.contacts-connect-button span {
  color: #ffffffd5;
  padding-left: 3px;
}
</style>
