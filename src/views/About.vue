<template>
  <div class="about">
    <MyHeader/>
    <div class="jumbotron jumbotron-fluid" v-if="!loaded">
      <div class="text-center" style="border-radius: 20px;">
        <b-spinner label="Spinning"></b-spinner>
        <b-spinner type="grow" label="Spinning"></b-spinner>
        <b-spinner variant="primary" label="Spinning"></b-spinner>
        <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
        <b-spinner variant="success" label="Spinning"></b-spinner>
        <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
      </div>
    </div>
    <div>
      <b-jumbotron class="jumbotron p-50 mt-50 mx-100" v-if="loaded" >
        <b-card style="border-radius: 20px;">
          <b-media no-body>
            <b-media-aside vertical-align="center">
              <div class="img">
                <img style=" max-width: 500px; max-height: auto; border-radius: 20px; " :src="'http://imdb2.mars-server.net/'+info.data.data.mov_img">
              </div>
            </b-media-aside>
            <b-media-body class="ml-3">
              <h2 class="mt-0">{{ info.data.data.mov_name }}</h2>
              <hr class="my-4">
              <p>{{ info.data.data.mov_desc }}</p>
            </b-media-body>
          </b-media>
        </b-card>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
import MyHeader from "../components/MyHeader.vue";
import api from "../api/index.js";

export default {
  name: "about",
  components: {
    MyHeader,
  },
  data: function() {
    return {
      info: [],
      loaded: false,
      id: this.$route.params.id
    };
  },
  mounted() {
    api.getMovie(this.id).then(response => {
      this.info = response;
      setTimeout(() => (this.loaded = true), 600);
    });
  }
};
</script>

