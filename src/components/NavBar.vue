<script setup lang="ts">
import { inject } from 'vue';

const styling = {
  navBar: [
    'navbar',
    'flex items-center justify-between',
    'p-3',
    'bg-blue-600',
  ],
  hamburgerBun: ['flex', 'flex-1', 'text-left', 'text-gray-200', 'mr-2'],
  hamburger: [
    'fas',
    'fa-bars',
    'hover:text-gray-900',
    'hover:bg-gray-200',
    'cursor-pointer',
  ],
  exportButton: [
    'text-sm',
    'leading-tight',
    'border',
    'rounded',
    'text-gray-200',
    'border-gray-200',
    'hover:text-gray-900',
    'hover:bg-gray-200',
    'cursor-pointer',
  ],
}

const togglePanel = inject("togglePanel")
</script>

<template>
  <nav :class="styling.navBar">
  NAVBAR
    <!-- <div
      :class="[...styling.hamburgerBun]"
      @click="togglePanel"
    >
      <i :class="styling.hamburger"></i>
    </div>
    <div class="flex-0 text-gray-200">
      <span class="text-sm">generate-resume</span>
    </div>
    <div class="flex-1 flex justify-end hide-if-mobile">
      <div :class="['export-button', ...styling.exportButton]">Export</div>
    </div> -->
  </nav>
</template>

<style lang="scss" scoped>
@import "src/assets/scss/variables.scss";

.hide-if-mobile {
  @media only screen and (max-width: $sm) {
    display: none;
  }
}
.export-button {
  width: 60px;
  padding: 0.1rem 0.5rem;
}
</style>