<template>
  <div :class="['card', cardStyling]">
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

import NavBar from "@/components/navigation/NavBar.vue";
import SingleColumnResume from "@/components/resume/SingleColumnResume.vue";
import MultiColumnResume from "@/components/resume/MultiColumnResume.vue";

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
        "flex flex-col flex-1",
        "bg-gray-100",
        "mx-8",
        "rounded-lg",
        "overflow-auto",
      ],
      cardContentStyling: [
        "resume",
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
  max-width: 950px;

  .resume {
    border: 1px solid black;
  }
}
</style>
