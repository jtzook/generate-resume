<script setup lang="ts">
import { provide, ref } from 'vue'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import NavBar from './components/NavBar.vue'
import ResumeCard from './components/ResumeCard.vue'
import Footer from './components/Footer.vue'

library.add(faCamera)
dom.watch()

const showPanel = ref(false)

provide('togglePanel', () => (showPanel.value = !showPanel.value));
</script>

<template>
  <div class="layout">
    <NavBar />
    <div class="sidebar-left">
      <div v-if="showPanel">implement me</div>
    </div>
    <div class="page">
      <ResumeCard />
    </div>
    <div class="sidebar-right"></div>
    <Footer />
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
  --header-footer-height: 60px;
  --gap: 16px;
  --body-max-height: calc(
    100vh - (var(--header-footer-height) * 2) - (var(--gap) * 2)
  );

  display: grid;
  grid-template-columns: [sidebar-left] min(300px) [page-content] minmax(350px, 800px) [sidebar-right] min(250px);
  grid-template-rows: [header] 60px [body] max(var(--body-max-height)) [footer] 60px;
  column-gap: var(--gap);
  row-gap: var(--gap);
}

.navbar {
  grid-column-start: sidebar-left;
  grid-column-end: 5;
  grid-row-start: header;
  grid-row-end: body;
}

.sidebar-left {
  grid-column-end: page-content;
  grid-row-start: body;
  grid-row-end: footer;
}

.page {
  grid-column-start: page-content;
  grid-row-start: body;
  grid-row-end: footer;
}

.sidebar-right {
  grid-column-start: sidebar-right;
  grid-column-end: end;
  grid-row-start: body;
  grid-row-end: footer;
}

.footer {
  grid-column-start: sidebar-left;
  grid-column-end: end;
  grid-row-start: footer;
}
</style>
