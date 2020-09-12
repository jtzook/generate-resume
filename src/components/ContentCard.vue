<template>
  <div class="flex flex-col flex-1 bg-gray-100 m-8 rounded-lg overflow-auto">
    <CardHeader @click="toggleResumeMode" />
    <div class="flex flex-col flex-1 mx-6 md:mx-10 my-6 md:my-8">
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
      return {
        state,
        toggleResumeMode,
      };
    },
    components: {
      CardHeader,
      SingleColumnResume,
      MultiColumnResume,
    },
  };
</script>
