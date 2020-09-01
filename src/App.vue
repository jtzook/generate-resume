<template>
  <div
    id="app"
    class="h-screen w-screen bg-gray-600 overflow-auto"
  >
    <div class="bg-white mx-8 my-8 overflow-auto">
      <NavBar />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
