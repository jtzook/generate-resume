<template>
  <div :class="['Panel', ...state.tailwind]">
    <ButtonGroup />
  </div>
</template>

<script lang="ts>
import ButtonGroup from "./ButtonGroup";

export default {
  setup() {
    const state = {
      tailwind: ["w-full", "rounded-r-lg", "bg-gray-900"],
    };
    return { state };
  },

  components: {
    ButtonGroup,
  },
};
</script>

<style lang="scss" scoped>
.Panel {
  display: flex;
  flex-direction: column;
  flex: 1 0 50px;
  min-width: 200px;
  max-width: 300px;
  height: 250px;
  margin-top: 4rem;
}
</style>