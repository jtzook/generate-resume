<template>
  <div
    id="app"
    class="flex justify-center h-screen w-screen bg-gray-600 text-center overflow-auto"
  >
    <div
      id="page-card"
      class="flex-1 max-w-4xl bg-gray-100 m-12 rounded overflow-auto"
    >
      <NavBar />
      <div
        id="page"
        class="px-6 md:px-10  py-6 md:py-10"
      >
        <ResumePage />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import ResumePage from "./components/ResumePage";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

library.add(faCamera);
dom.watch();

export default {
  name: "App",
  components: {
    NavBar,
    ResumePage,
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
