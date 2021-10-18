<script setup lang="ts">
const footerClasses = [
  'footer',
  'flex justify-center items-center',
  'flex-col-reverse sm:flex-row',
  'text-gray-400',
];
</script>

<template>
  <div :class="footerClasses">
    <span class="mr-0 sm:mr-2">© 2021, Jared Zook</span>
    <span class="mr-2 font-black hidden sm:inline">&#183;</span>
    <a
      target="_blank"
      href="https://github.com/jtzook/reactive-resume"
      >See Project Repository on GitHub</a
    >
  </div>
</template>
