<template>
  <div class="flex-1 max-w-3xl bg-gray-100 mx-12 mt-12 mb-4 rounded overflow-auto">
    <CardHeader />
    <div class="mx-6 md:mx-10  my-6 md:my-8">
      <div class="p-4 md:p-6 border">
        <SingleColumnResume />
      </div>
    </div>
  </div>
</template>

<script>
import CardHeader from "./CardHeader";
import SingleColumnResume from "./resumes/SingleColumnResume";
// import MultiColumnResume from "./resumes/MultiColumnResume";

export default {
  components: {
    CardHeader,
    SingleColumnResume,
    //     MultiColumnResume,
  },
};
</script>