<template>
  <div>
    <MyHeader/>
    <div class="container">
      <div class="jumbotron jumbotron-fluid" v-if="!loaded">
        <div class="text-center">
          <b-spinner label="Spinning"></b-spinner>
          <b-spinner type="grow" label="Spinning"></b-spinner>
          <b-spinner variant="primary" label="Spinning"></b-spinner>
          <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
          <b-spinner variant="success" label="Spinning"></b-spinner>
          <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
        </div>
      </div>
      <div v-if="loaded" class="row">
        <div v-for="(movie, index) in info.data.data" :key="index">
          <Movie
            :title="movie.mov_name"
            :imageurl="'http://imdb2.mars-server.net'+movie.mov_img"
            :description="movie.mov_desc"
            :infoLink="movie.mov_id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import api from "../api/index.js";
import Movie from "../components/Movie.vue";
import { setTimeout } from "timers";
import MyHeader from "../components/MyHeader.vue";

export default {
  name: "movies",
  data() {
    return {
      info: [{}],
      loaded: false
    };
  },
  components: {
    Movie,
    MyHeader
  },
  created() {
    api.getMovies().then(response => {
      this.info = response;
      setTimeout(() => (this.loaded = true), 500);
    });
  }
};
</script>

<style scoped>
</style>

