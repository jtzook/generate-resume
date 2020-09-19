<template>
  <div :class="tailwind.Card">
    <CardHeader @click="toggleResumeMode" />
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
      const { resumeOptions, toggleResumeMode } = useResumeOptions();

      const tailwind = {
        Card: [
          "flex flex-col flex-1",
          "bg-gray-100",
          "mx-8 mt-8",
          "rounded-lg",
          "overflow-auto",
        ],
      };

      return {
        resumeOptions,
        toggleResumeMode,
        tailwind,
      };
    },
  };
</script>
