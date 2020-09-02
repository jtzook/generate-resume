<template>
  <div
    id="resume-page"
    class="p-4 md:p-6 border"
  >
    <SingleColumnResume />
  </div>
</template>

<script>
import SingleColumnResume from "./resumes/SingleColumnResume";
// import MultiColumnResume from "./resumes/MultiColumnResume";

export default {
  components: {
    SingleColumnResume,
    //     MultiColumnResume,
  },
};
</script>

<style scoped>
</style>