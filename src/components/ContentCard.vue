<template>
  <div class="flex-1 max-w-3xl bg-gray-100 mx-12 mt-12 mb-4 rounded overflow-auto">
    <CardHeader />
    <div class="mx-6 md:mx-10  my-6 md:my-8">
      <div class="p-4 md:p-6 border">
        <SingleColumnResume v-show="state.mode === 'classic'" />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import CardHeader from "./CardHeader";
import SingleColumnResume from "./resumes/SingleColumnResume";

export default {
  components: {
    CardHeader,
    SingleColumnResume,
  },

  setup() {
    const state = reactive({
      mode: "classic",
    });

    return {
      state,
    };
  },
};
</script>