<template>
  <div :class="tailwindClasses">
    <span class="mr-0 sm:mr-2 text-gray-400">© 2021, Jared Zook</span>
    <span class="mr-2 font-black hidden sm:inline">&#183;</span>
    <a
      class="text-blue-400 hover:text-blue-800"
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
        "flex flex-shrink-0 justify-center items-center",
        "flex-col-reverse sm:flex-row",
        "text-gray-400",
        "py-2",
      ],
    };
  },
};
</script>

<style>
</style>