<template>
  <div
    id="resume-content"
    :class="cardContentStyling"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  setup() {
    const cardContentStyling = [
      "flex flex-col flex-1",
      "px-6 md:px-10",
      "py-6 md:py-8",
    ];
    return {
      cardContentStyling,
    };
  },
};
</script>