<template>
  <div
    id="app"
    class="bg-gray-600 overflow-auto"
  >
    <div class="body">
      <div class="side-column"></div>

      <ContentCard class="content" />

      <div class="side-column"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import Footer from "./components/Footer";
import ContentCard from "./components/ContentCard";

library.add(faCamera);
dom.watch();

export default {
  name: "App",
  components: {
    Footer,
    ContentCard,
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
  width: 100vw;
  height: 100vh;
}
</style>

<style lang="scss" scoped>
.body {
  height: calc(100% - 50px);
  display: flex;

  .side-column {
    flex: 1 1 5%;
  }

  .content {
    flex: 1 1 768px;
  }
}
</style>