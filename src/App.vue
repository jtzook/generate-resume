<template>
  <div class="page bg-gray-600 overflow-auto">
    <div class="content-container flex">
      <div class="sidebar-flex">
        <Sidebar></Sidebar>
      </div>
      <Card class="card-flex" />
      <div class="sidebar-flex">
        <Sidebar></Sidebar>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
  import { reactive, ref, provide } from "vue";

  import { library, dom } from "@fortawesome/fontawesome-svg-core";
  import { faCamera } from "@fortawesome/free-solid-svg-icons";

  import Card from "./components/card/Card.vue";
  import Footer from "./components/Footer.vue";
  import Sidebar from "./components/Sidebar.vue";

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
      Card,
      Footer,
      Sidebar,
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

    .card-flex {
      flex: 4.5 auto;
    }

    .sidebar-flex {
      flex: 1 10%;
      overflow: auto;
    }
  }
</style>
