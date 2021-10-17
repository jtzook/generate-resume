<script setup lang="ts">
import useResume from "../composables/useResume";

import SingleColumnResume from "src/components/SingleColumnResume.vue";
import MultiColumnResume from "src/components/MultiColumnResume.vue";

const { resumeOptions } = useResume();

const cardStyling = [
  "card",
  "flex flex-col flex-1",
  "bg-gray-100",
  "rounded",
  "overflow-auto",
  "text-center",
]

const cardContentStyling = [
  "flex flex-col flex-1",
  "mx-6 md:mx-10",
  "my-6 md:my-8",
  "border-solid",
]
</script>

<template>
  <div :class="cardStyling">
    <div :class="cardContentStyling">
      <SingleColumnResume v-show="resumeOptions.resumeMode === 'classic'" />
      <MultiColumnResume v-show="resumeOptions.resumeMode !== 'classic'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
