<script setup lang="ts">
</script>

<template>
  <div class="layout">
    <div class="navbar"></div>
    <div class="sidebar-a"></div>
    <div class="page"></div>
    <div class="sidebar-b"></div>
    <div class="footer"></div>
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
  --header-height: 60px;
  --footer-height: 60px;
  --body-max-height: calc(100vh - var(--header-height) - var(--footer-height));

  display: grid;
  grid-template-columns: [sidebar-left] min(300px) [page-content] minmax(350px, 800px) [sidebar-right] min(250px);
  grid-template-rows: [header] 60px [body] max(var(--body-max-height)) [footer] 60px;
}

.navbar {
  grid-column-start: sidebar-left;
  grid-column-end: 5;
  grid-row-start: header;
  grid-row-end: body;
  background-color: rgb(48, 6, 116);
}

.sidebar-a {
  grid-column-end: page-content;
  grid-row-start: body;
  grid-row-end: footer;
  background-color: rgba(10, 88, 75, 0.836);
}

.page {
  grid-column-start: page-content;
  grid-row-start: body;
  grid-row-end: footer;
  background-color: rgb(146, 97, 7);
}

.sidebar-b {
  grid-column-start: sidebar-right;
  grid-column-end: end;
  grid-row-start: body;
  grid-row-end: footer;
  background-color: rgba(10, 88, 75, 0.836);
}

.footer {
  grid-column-start: sidebar-left;
  grid-column-end: end;
  grid-row-start: footer;
  background-color: rgb(48, 6, 116);
}
</style>
