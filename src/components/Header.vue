<template>
  <header>
    <img
      class="logo"
      src="https://user-images.githubusercontent.com/66211721/136697010-60b0f85b-8d48-4dc0-b521-1abbe5cdcd8d.png"
      alt="logo" 
      @click="$router.push({name:'Home'})" />
    <form
      class="movie-search"
      @submit.prevent="searchMovies"
      @submit="$router.push({name:'Movie'})">
      <input
        v-model="movieTitle"
        class="movie-search-input"
        type="text"
        placeholder="영화제목을 입력하세요" />
      <button class="movie-search-submit">
        🔎
      </button>
    </form>
  </header>
</template>

<script>
export default {
  data() {
    return {
      movieTitle: ''
    }
  },
  methods: {
    searchMovies() {
      this.$store.dispatch('movie/searchMovies', {
        movieTitle: this.movieTitle
      })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #F73E3E;
  .logo{
    height: 250px;;
    margin:0px;
    padding:0px;
    cursor: pointer;

  }
  .welcom {
    border: none;
    background-color: #F73E3E;
    font-size: 30px;
    color: white;
    &:hover {
      color: lightcoral;
    }
  }

  .movie-search {
    display: flex;

    .movie-search-input {
      height:50px;
      width: 100%;
      border-right: none;
      border: none;
      border-radius: 0.1rem;
      background-color: white;

      &::placeholder {
        color: black;
      }

    }

    .movie-search-submit {
      height: 53px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      min-width: 60px;
      border: none;
      border-radius: 0.1rem;
      &:hover {
        background-color: lightcoral;
      }
    }
  }
}

@media all and (max-width: 1020px) {
    .movie-search-input {
  width:100%;
  min-width: 100px;  
  
  }

}
@media all and (min-width: 1021px) {
    .movie-search-input {
  min-width: 300px;
  max-width:500px;
  
  
  }
}
</style> 