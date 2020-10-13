<template>
  <div :class="cardStyling">
    <NavBar @export-to-csv="exportToCSV(cardContent)" />
    <div
      ref="cardContent"
      :class="cardContentStyling"
    >
      <SingleColumnResume v-show="resumeOptions.resumeMode === 'classic'" />
      <MultiColumnResume v-show="resumeOptions.resumeMode !== 'classic'" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import useResume from "@/composables/useResume";
import useResumeOptions from "@/composables/useResumeOptions";

import NavBar from "@/components/NavBar.vue";
import SingleColumnResume from "@/components/SingleColumnResume.vue";
import MultiColumnResume from "@/components/MultiColumnResume.vue";

export default {
  components: {
    NavBar,
    SingleColumnResume,
    MultiColumnResume,
  },

  setup() {
    const { exportToCSV } = useResume();
    const { resumeOptions } = useResumeOptions();

    const cardContent = ref(null);

    return {
      resumeOptions,
      exportToCSV,
      cardContent,
      cardStyling: [
        "card",
        "flex flex-col flex-1",
        "bg-gray-100",
        "mx-8",
        "rounded",
        "overflow-auto",
      ],
      cardContentStyling: [
        "flex flex-col flex-1",
        "mx-6 md:mx-10",
        "my-6 md:my-8",
        "border-solid",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 930px;
}
</style>
