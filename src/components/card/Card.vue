<template>
  <div :class="['card', ...tailwind.card]">
    <CardHeader />
    <CardContent>
      <SingleColumnResume v-show="resumeOptions.resumeMode === 'classic'" />
      <MultiColumnResume v-show="resumeOptions.resumeMode !== 'classic'" />
    </CardContent>
  </div>
</template>

<script>
import useResumeOptions from "../../composables/useResumeOptions";

import CardHeader from "./CardHeader.vue";
import CardContent from "./CardContent.vue";
import SingleColumnResume from "../resume/SingleColumnResume.vue";
import MultiColumnResume from "../resume/MultiColumnResume.vue";

export default {
  components: {
    CardHeader,
    CardContent,
    SingleColumnResume,
    MultiColumnResume,
  },

  setup() {
    const { resumeOptions } = useResumeOptions();

    const tailwind = {
      card: [
        "flex flex-col flex-1",
        "bg-gray-100",
        "mx-8",
        "rounded-lg",
        "overflow-auto",
      ],
    };

    return {
      tailwind,
      resumeOptions,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 950px;
}
</style>
