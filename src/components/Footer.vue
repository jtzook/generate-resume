<template>
  <div :class="[...tailwind]">
    <span class="mr-2">© 2020 - Jared Zook</span>
    <span class="mr-2 hidden sm:inline">&#183;</span>
    <a
      class="text-gray-400 hover:text-gray-800"
      target="_blank"
      href="https://github.com/jtzook/vue-resume"
    >See Project Repository on GitHub</a>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tailwind: [
          "my-2",
          "justify-center",
          "flex flex-grow flex-shrink-0",
          "flex-col-reverse sm:flex-row",
        ],
      };
    },
  };
</script>