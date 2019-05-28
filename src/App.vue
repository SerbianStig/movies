<template>
  <div id="app">
    <keep-alive include="Movies">
     <router-view/>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
</style>
