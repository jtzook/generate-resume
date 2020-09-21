<template>
  <div class="page bg-gray-600 overflow-auto">
    <div class="content-container flex pt-8">
      <div class="side-column">
        <Sidebar v-if="showSidebar"></Sidebar>
      </div>
      <Card class="card-flex" />
      <div class="side-column hide-below-lg"></div>
    </div>

    <Footer />
  </div>
</template>

<script>
  import { unref } from "vue";
  import { library, dom } from "@fortawesome/fontawesome-svg-core";
  import { faCamera } from "@fortawesome/free-solid-svg-icons";

  import Card from "./components/card/Card.vue";
  import Footer from "./components/Footer.vue";
  import Sidebar from "./components/Sidebar.vue";

  import useAppState from "./composables/useAppState";

  library.add(faCamera);
  dom.watch();

  export default {
    setup() {
      const { showSidebar } = useAppState();

      return unref(showSidebar);
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
  @import "@/assets/scss/variables.scss";

  .content-container {
    flex: 1 0 auto;

    .card-flex {
      flex: 4.5 auto;
    }

    .side-column {
      flex: 1 10%;

      // TODO: enable when sidebar active
      // &.hide-below-lg {
      //   @media only screen and (max-width: $lg) {
      //     display: none;
      //   }
      // }
    }
  }
</style>
