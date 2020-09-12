<template>
  <div class="flex-1 max-w-3xl bg-gray-100 mx-12 mt-12 mb-4 rounded-lg overflow-auto">
    <CardHeader @click="toggleResumeMode" />
    <div class="mx-6 md:mx-10 my-6 md:my-8">
      <div class="p-4 md:p-6 border">
        <SingleColumnResume v-show="state.resumeMode === 'classic'" />
        <MultiColumnResume v-show="state.resumeMode !== 'classic'" />
      </div>
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
