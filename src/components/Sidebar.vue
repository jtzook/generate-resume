<template>
  <div :class="state.tailwind"></div>
</template>

<script>
  export default {
    setup() {
      const state = {
        tailwind: ["flex", "bg-black"],
      };
      return { state };
    },
  };
</script>

<style lang="scss" scoped>
</style>