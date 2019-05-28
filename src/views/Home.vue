<template>
  <div>
    <MyHeader/>
    <div class="container" v-if="!loaded">
      <div class="jumbotron jumbotron-fluid">
        <div class="text-center">
          <b-spinner label="Spinning"></b-spinner>
          <b-spinner type="grow" label="Spinning"></b-spinner>
          <b-spinner variant="primary" label="Spinning"></b-spinner>
          <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
          <b-spinner variant="success" label="Spinning"></b-spinner>
          <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>
        </div>
      </div>
    </div>
    <div class="jumbotron text-center" v-if="loaded">
      <b-button  class="text-center" href="/movies" variant="primary">Browse movie selection</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { setTimeout } from "timers";
import MyHeader from "../components/MyHeader.vue";

export default {
  name: "home",
  components: {
    MyHeader
  },
  data() {
    return {
      loaded: false
    };
  },
  created() {
    setTimeout(() => (this.loaded = true), 500);
  }
};
</script>

<style scoped>
</style>

