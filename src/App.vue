<template>
  <div class="page bg-gray-900 overflow-auto">
    <NavBar />

    <div class="content-container flex pt-6 pb-6">
      <div class="side-column">
        <Panel v-if="showPanel"></Panel>
      </div>
      <ResumeCard class="resume-card" />
      <div :class="['side-column', {'hide-below-lg': showPanel}]"></div>
    </div>

    <Footer />
  </div>
</template>

<script>
  import { provide, ref } from "vue";
  import { library, dom } from "@fortawesome/fontawesome-svg-core";
  import { faCamera } from "@fortawesome/free-solid-svg-icons";

  import ResumeCard from "@/components/ResumeCard.vue";
  import Panel from "@/components/Panel.vue";
  import NavBar from "@/components/NavBar.vue";
  import Footer from "@/components/Footer.vue";

  library.add(faCamera);
  dom.watch();

  export default {
    setup() {
      const showPanel = ref(false);

      provide("togglePanel", () => (showPanel.value = !showPanel.value));

      return {
        showPanel,
        footerStyling: [
          "py-2",
          "justify-center items-center",
          "flex flex-shrink-0",
          "flex-col-reverse sm:flex-row",
        ],
      };
    },

    components: {
      ResumeCard,
      Panel,
      NavBar,
      Footer,
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
    width: 100vw;
    height: 100vh;
  }
</style>

<style lang="scss" scoped>
  @import "@/assets/scss/variables.scss";

  .content-container {
    flex: 1 0 auto;

    .resume-card {
      flex: 4.5 auto;
      max-width: 975px;
    }

    .side-column {
      flex: 1 5%;

      &.hide-below-lg {
        @media only screen and (max-width: $lg) {
          display: none;
        }
      }
    }
  }
</style>
