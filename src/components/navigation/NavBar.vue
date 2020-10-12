<template>
  <nav :class="styling.navBar">
    <div
      :class="[...styling.hamburgerBun]"
      @click="togglePanel"
    >
      <i :class="styling.hamburger"></i>
    </div>
    <div class="flex-0 text-gray-200">
      <span class="text-sm">Reactive Resume</span>
    </div>
    <div class="flex-1 flex justify-end hide-if-mobile">
      <div
        @click="$emit('export-to-csv')"
        :class="['export-button', ...styling.exportButton]"
      >Export</div>
    </div>
  </nav>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const styling = {
      navBar: [
        "nav-bar",
        "flex",
        "items-center",
        "justify-between",
        "bg-gray-900",
        "p-3",
      ],
      hamburgerBun: ["flex", "flex-1", "text-left", "text-gray-200", "mr-2"],
      hamburger: [
        "fas",
        "fa-bars",
        "hover:text-gray-900",
        "hover:bg-gray-200",
        "cursor-pointer",
      ],
      exportButton: [
        "text-sm",
        "leading-tight",
        "border",
        "rounded",
        "text-gray-200",
        "border-gray-200",
        "hover:text-gray-900",
        "hover:bg-gray-200",
        "cursor-pointer",
      ],
    };

    const togglePanel = inject("togglePanel");

    return {
      styling,
      togglePanel,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.hide-if-mobile {
  @media only screen and (max-width: $sm) {
    display: none;
  }
}

.nav-bar {
  height: 40px;

  .export-button {
    width: 60px;
    padding: 0.1rem 0.5rem;
  }
}
</style>