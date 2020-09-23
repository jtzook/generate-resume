<template>
  <nav
    id="nav-bar"
    :class="tailwind.navBar"
  >
    <div class="flex-1 text-left text-gray-200 mr-2">
      <div
        @click="toggleSidebar"
        class="flex"
      >
        <i :class="tailwind.hamburger"></i>
      </div>
    </div>
    <div class="flex-0 text-gray-200">
      <span class="text-sm">Reactive Resume</span>
    </div>
    <div class="flex-1 flex justify-end hide-if-mobile">
      <div
        @click="toggleResumeMode"
        :class="['export-button', ...tailwind.exportButton]"
      >Export</div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    const tailwind = {
      navBar: ["flex", "items-center", "justify-between", "bg-gray-900", "p-3"],
      hamburger: ["fas", "fa-bars", "hover:text-gray-900", "hover:bg-gray-200"],
      exportButton: [
        "text-sm",
        "leading-tight",
        "border",
        "rounded",
        "text-gray-200",
        "border-gray-200",
        "hover:text-gray-900",
        "hover:bg-gray-200",
      ],
    };

    return {
      tailwind,
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

#nav-bar {
  height: 40px;

  .export-button {
    width: 60px;
    padding: 0.1rem 0.5rem;
  }
}
</style>