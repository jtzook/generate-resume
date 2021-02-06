<template>
  <div :class="tailwindClasses">
    <span class="mr-0 sm:mr-2">© 2020 - Jared Zook</span>
    <span class="mr-2 font-black hidden sm:inline">&#183;</span>
    <a
      class="text-gray-400 hover:text-gray-800"
      target="_blank"
      href="https://github.com/jtzook/reactive-resume"
      >See Project Repository on GitHub</a
    >
  </div>
</template>

<script>
export default {
  setup() {
    return {
      tailwindClasses: [
        "py-2",
        "justify-center items-center",
        "flex flex-shrink-0",
        "flex-col-reverse sm:flex-row",
      ],
    };
  },
};
</script>

<style>
</style>