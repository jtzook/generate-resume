<template>
  <div :class="['sidebar', ...state.tailwind]"></div>
</template>

<script>
export default {
  setup() {
    const state = {
      tailwind: ["h-full w-full", "rounded-r-lg", "bg-gray-900"],
    };
    return { state };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  flex: 1 0 50px;
  min-width: 200px;
  max-width: 300px;
}
</style>