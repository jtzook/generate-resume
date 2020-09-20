<template>
  <nav
    id="nav-bar"
    class="flex items-center justify-between bg-gray-900 p-3"
  >
    <div class="flex-1 text-left text-gray-200 mr-2">
      <div class="flex">
        <i class="fas fa-bars hover:text-gray-900 hover:bg-gray-200" />
      </div>
    </div>
    <div class="flex-0 text-gray-200">
      <span class="text-sm">Reactive Resume</span>
    </div>
    <div class="flex-1 text-right hide-if-mobile">
      <a
        href="#"
        class="export-button text-sm px-2 leading-none border rounded text-gray-200 border-gray-200 hover:text-gray-900 hover:bg-gray-200"
      >Export</a>
    </div>
  </nav>
</template>

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
      padding: 0.1rem 0.5rem;
    }
  }
</style>