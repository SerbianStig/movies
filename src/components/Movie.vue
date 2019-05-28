<template>
  <div id="card">
    <b-card
      overlay
      :img-src='imageurl'
      text-variant="white"
      style="max-width: 13rem; min-height: 260px; "
      class="pull-down col-6 col-xs-6 col-sm-3 col-md-2 col-lg-1">
      <b-button class="btn pull-right pull-down"  variant="primary" 
        @click="$router.push({name: 'about', params: { id: infoLink },})">Info
      </b-button>
      <b-card-text>{{ title }}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
    name: 'movie',
    props: {
      infoLink: String,
      title: String,
      imageurl: String,
      description: String,
    },
    methods: {
    },
};
</script>

<style scoped>
  #card{
    margin: 10px;
  }

  #card img{
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 4px;
  }


</style>

