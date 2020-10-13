<template>
  <div class="page bg-gray-600 overflow-auto">
    <NavBar @export-to-csv="exportToCSV(cardContent)" />

    <div class="content-container flex pt-12 pb-6">
      <div class="side-column">
        <Panel v-if="showPanel"></Panel>
      </div>
      <ResumeCard
        ref="cardContent"
        class="card-flex"
      />
      <div :class="['side-column', {'hide-below-lg': showPanel}]"></div>
    </div>

    <div :class="footerStyling">
      <span class="mr-0 sm:mr-2">© 2020 - Jared Zook</span>
      <span class="mr-2 font-black hidden sm:inline">&#183;</span>
      <a
        class="text-gray-400 hover:text-gray-800"
        target="_blank"
        href="https://github.com/jtzook/reactive-resume"
      >See Project Repository on GitHub</a>
    </div>
  </div>
</template>

<script>
import { provide, ref } from "vue";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import useResume from "@/composables/useResume";

import ResumeCard from "@/components/ResumeCard.vue";
import Panel from "@/components/Panel.vue";
import NavBar from "@/components/NavBar.vue";

library.add(faCamera);
dom.watch();

export default {
  setup() {
    const { exportToCSV } = useResume();

    const showPanel = ref(false);
    const cardContent = ref(null);

    provide("togglePanel", () => (showPanel.value = !showPanel.value));

    return {
      showPanel,
      cardContent,
      exportToCSV,
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
    flex: 1 5%;

    &.hide-below-lg {
      @media only screen and (max-width: $lg) {
        display: none;
      }
    }
  }
}
</style>
