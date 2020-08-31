<template>
  <div class="app">
    <div class="h-screen w-screen bg-teal-800 px-8 py-10">
      <resume />
    </div>
  </div>
</template>

<script>
import Resume from './components/Resume.vue'
export default {
  name: 'App',
  components: {
    Resume,
  }
}
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
