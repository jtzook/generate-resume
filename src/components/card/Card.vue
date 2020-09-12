<template>
  <div :class="tailwind.Card">
    <CardHeader @click="toggleResumeMode" />
    <CardContent>
      <SingleColumnResume v-show="state.resumeMode === 'classic'" />
      <MultiColumnResume v-show="state.resumeMode !== 'classic'" />
    </CardContent>
  </div>
</template>

<script>
  import { reactive } from "vue";

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
      const state = reactive({
        resumeMode: "modern",
      });
      const toggleResumeMode = () => {
        state.resumeMode = state.resumeMode === "classic" ? "modern" : "classic";
      };
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
        state,
        toggleResumeMode,
        tailwind,
      };
    },
  };
</script>
