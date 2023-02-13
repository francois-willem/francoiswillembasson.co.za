<template>
<main>
  <div class="weather-page" :style="{ 'background-image': `url(${images.coldImage})` }">
   
    <div class="search-box">
    <input 
    type="text" 
    class="search-bar" 
    placeholder="Enter City"
    v-model="query"
    @keypress="fetchWeather">
    </div>

    <div class="weather-wrap" v-if="weather.main">
      <div class="location-box">
        <div class="location">{{ weather.name }}, {{ weather.sys.country }}
        </div>
        <div class="date">{{ dateBuilder() }}</div>
      </div>

      <div class="weather-box">
        <div class="temp">{{ Math.round(weather.main.temp) }}°C</div>
        <div class="weather">{{ weather.weather[0].main }}</div>
      </div>
    </div>
  </div>
</main>
</template>

<script>

import coldImage from '@Asset/images/cold-bg.jpg'
import warmImage from '@Asset/images/warm-bg.jpg'

export default {
  name: 'WeatherApp',
  data() {
    return {
      api_key: '44099c99b40fd5758acc7dd97340c8cb',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      images: {
        coldImage,
        warmImage,
      }
    }
  },
  methods: {
    // this is a method that is called from the template when a city has been entered in the input area
    fetchWeather(e) {
        // fetchWeather method being defined
      if (e.key == "Enter"){
        // If Enter is pressed the API is being called(fetch)
        fetch(
          `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
          )
          // data is being requested from API
          
          .then((res) => {
            // A response is triggered from the API
            
            return res.json();
          })
          // The API sends the data to this site
          .then(this.setResults);
          // The data from the API is then showed
      }
    },
    // This is a method that sets the value of the weather property to the value of the results parameter. This stores the results and can be used later
    setResults (results) {
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
      return `${day}, ${date} ${month} ${year}`;
    },
  }
  
}
</script>
<style lang="scss" scoped>
@import '../scss/partials/variables';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Montserrat", sans-serif;
}

.weather-page {
  min-height: 100vh;
  padding: 25px;
  width: 100%;
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;

  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0px 16px 0px;
}

.location-box .location {
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  /* text-shadow: 1px 3px rgba(0, 0, 0, 0.25); */
}

.location-box .date {
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  /* font-style: italic; */
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: aliceblue;
  font-size: 95px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  margin: 30px 0px;
}

.weather-box .weather {
  color: #fff;
  font-size: 40px;
  font-weight: 500;
}

</style>
