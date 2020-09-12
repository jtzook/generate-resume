<template>
  <div class="page bg-gray-600 overflow-auto">
    <div class="content-container flex">
      <div class="side-column"></div>
      <div
        class="flex"
        style="flex-basis: 780px;"
      >
        <ContentCard />
      </div>
      <div class="side-column"></div>
    </div>

    <Footer />
  </div>
</template>

<script>
  import { reactive, ref, provide } from "vue";

  import { library, dom } from "@fortawesome/fontawesome-svg-core";
  import { faCamera } from "@fortawesome/free-solid-svg-icons";

  import Footer from "./components/Footer";
  import ContentCard from "./components/ContentCard";

  library.add(faCamera);
  dom.watch();

  export default {
    setup() {
      const resumeMode = reactive(ref("classic"));
      const toggleResumeMode = () => {
        resumeMode === "classic" ? "modern" : "classic";
      };
      provide(resumeMode);
      return {
        resumeMode,
        toggleResumeMode,
      };
    },
    components: {
      Footer,
      ContentCard,
    },
  };
</script>

<style>
  .page {
    display: flex;
    flex-direction: column;
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
  .content-container {
    flex: 1 0 auto;

    .side-column {
      flex: 1 1 5%;
    }
  }
</style>
