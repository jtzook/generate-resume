<template>
  <div :class="tailwind.contentCard">
    <CardHeader @click="toggleResumeMode" />
    <div :class="tailwind.cardBody">
      <SingleColumnResume v-show="state.resumeMode === 'classic'" />
      <MultiColumnResume v-show="state.resumeMode !== 'classic'" />
    </div>
  </div>
</template>

<script>
  import { reactive } from "vue";
  import CardHeader from "./CardHeader";
  import SingleColumnResume from "./resumes/SingleColumnResume";
  import MultiColumnResume from "./resumes/MultiColumnResume";

  export default {
    setup() {
      const state = reactive({
        resumeMode: "modern",
      });
      const toggleResumeMode = () => {
        state.resumeMode = state.resumeMode === "classic" ? "modern" : "classic";
      };
      const tailwind = {
        contentCard: [
          "flex flex-col flex-1",
          "bg-gray-100",
          "mx-8 mt-8",
          "rounded-lg",
          "overflow-auto",
        ],
        cardBody: ["flex flex-col flex-1", "px-6 md:px-10", "py-6 md:py-8"],
      };
      return {
        state,
        toggleResumeMode,
        tailwind,
      };
    },
    components: {
      CardHeader,
      SingleColumnResume,
      MultiColumnResume,
    },
  };
</script>
