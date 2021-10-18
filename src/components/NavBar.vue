<script setup lang="ts">
import { inject } from 'vue'

const togglePanel = inject("togglePanel")

const styling = {
  navBar: [
    'navbar',
    'flex items-center justify-between',
    'p-4',
    'bg-blue-600',
  ],
  hamburgerBun: ['flex', 'text-gray-200', 'hover:text-blue-600 hover:bg-gray-200'],
  hamburger: [
    'fas fa-bars',
    'cursor-pointer',
  ],
  exportButton: [
    'text-sm',
    'leading-tight',
    'border',
    'rounded',
    'text-gray-200',
    'border-gray-200',
    'hover:bg-gray-200 hover:text-gray-900',
    'cursor-pointer',
  ],
}
</script>

<template>
  <nav :class="styling.navBar">
    <div class="flex-1 flex">
      <button
        :class="[...styling.hamburgerBun]"
        @click="togglePanel"
      >
        <i :class="styling.hamburger"></i>
      </button>
    </div>

    <div class="flex-0 text-gray-200">
      <span>generate-resume</span>
    </div>

    <div class="flex-1 flex justify-end hide-if-mobile">
      <button :class="['export-button', ...styling.exportButton]">Export</button>
    </div>
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