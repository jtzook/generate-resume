
<script lang="ts" setup>
import ButtonGroup from './ButtonGroup.vue'

const tailwind = ["w-full", "rounded-r-lg", "bg-gray-900"]
</script>

<template>
  <div :class="['panel', ...tailwind]">
    <ButtonGroup />
  </div>
</template>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  flex: 1 0 50px;
  min-width: 200px;
  max-width: 300px;
  height: 250px;
  margin-top: 4rem;
}
</style>