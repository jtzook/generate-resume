<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <div class="header"></div>
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
  grid-template-columns: [sidebar-left] auto [content] 800px [sidebar-right] auto [end];
  grid-template-rows: [header] 60px [body] auto [footer] 60px;
}

.header {
  grid-column-start: sidebar-left;
  grid-column-end: end;
  grid-row-start: header;
  /* grid-row-end: 3; */
  background-color: aqua;
}
</style>
