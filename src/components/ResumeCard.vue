<template>
  <div :class="cardStyling">
    <div :class="cardContentStyling">
      <SingleColumnResume v-show="resumeOptions.resumeMode === 'classic'" />
      <MultiColumnResume v-show="resumeOptions.resumeMode !== 'classic'" />
    </div>
  </div>
</template>

<script>
import useResumeOptions from "@/composables/useResumeOptions";

import SingleColumnResume from "@/components/SingleColumnResume.vue";
import MultiColumnResume from "@/components/MultiColumnResume.vue";

export default {
  components: {
    SingleColumnResume,
    MultiColumnResume,
  },

  setup() {
    const { resumeOptions } = useResumeOptions();

    return {
      resumeOptions,
      cardStyling: [
        "card",
        "flex flex-col flex-1",
        "bg-gray-100",
        "rounded",
        "overflow-auto",
        "text-center",
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
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
