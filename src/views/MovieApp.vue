<template>
<div class="movie-page">
  <input v-model="searchQuery" @keyup="searchMovies" placeholder="Search for a movie...">
    <ul>
      <li v-for="movie in movies" :key="movie.imdbID">{{ movie.Title + ' (' + movie.Year + ')'}} 
        <!-- Another way to do this -->
        <!-- {{ '(' + movie.Year + ')' }} -->
        </li>
    </ul>
</div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      searchQuery: '',
      movies: []
    }
  },
  methods: {
    // if searchQuery has more than 3 characters display movies from API, if there is is less than 3 characters display nothing, (console will get an error)
    searchMovies() {
      if (this.searchQuery.length < 3) return
      axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=201d0112&s=${this.searchQuery}`)
      // if the above statement is correct it will display
        .then(response => {
          console.log(response)
          this.movies = response.data.Search
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/partials/variables';
.movie-page {
  padding: 25px;
}

li {
  height: 30px;
  color: #fff;
}

</style>
