<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.layout {
  display: grid;
  grid-template-columns: [sidebar-left] auto [content] 800px [sidebar-right] auto;
  grid-template-rows: [header] 60px [body] auto [footer] 60px;
}
</style>
