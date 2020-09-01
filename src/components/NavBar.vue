<template>
  <nav class="flex items-center justify-between bg-gray-900 p-3">
    <div class="flex-1 text-left text-gray-200 mr-2 hover:text-gray-900 hover:bg-gray-200">
      <i class="fas fa-bars" />
    </div>
    <div class="flex-0 text-gray-200">
      <span class="text-sm">
        Reactive Resume
      </span>
    </div>
    <div class="flex-1 text-right hide-if-mobile">
      <a
        href="#"
        class="text-sm px-2 py-1 leading-none border rounded text-gray-200 border-gray-200 hover:text-gray-900 hover:bg-gray-200"
      >Export to PDF</a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* sm */
@media only screen and (max-width: 640px) {
  .hide-if-mobile {
    display: none;
  }
}
</style>