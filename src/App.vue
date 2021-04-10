<template>
  <div id="app">
    <div app id="header">
      <img src="./assets/data/header_background.jpg" alt="Header Logo" id="header_img">
    </div>

    <br>

    <router-view></router-view>

  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative; /**/
  width: 100%;
}
</style>

<script>


export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
