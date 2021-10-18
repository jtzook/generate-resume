<script lang="ts" setup>
import ButtonGroup from "./ButtonGroup.vue";

const tailwind = [
  "w-full",
  "bg-black",
  "transition duration-500 ease-in-out"
];
</script>

<template>
  <div :class="['panel', ...tailwind]">
    <!-- <ButtonGroup /> -->
  </div>
</template>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 100%;
}
</style>
