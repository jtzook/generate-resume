<template>
  <div :class="['card', ...tailwind.card]">
    <NavBar />
    <CardContent>
      <SingleColumnResume v-show="resumeOptions.resumeMode === 'classic'" />
      <MultiColumnResume v-show="resumeOptions.resumeMode !== 'classic'" />
    </CardContent>
  </div>
</template>

<script>
import useResumeOptions from "@/composables/useResumeOptions";

import NavBar from "@/components/navigation/NavBar.vue";
import SingleColumnResume from "@/components/resume/SingleColumnResume.vue";
import MultiColumnResume from "@/components/resume/MultiColumnResume.vue";

import CardContent from "./CardContent.vue";

export default {
  components: {
    NavBar,
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
