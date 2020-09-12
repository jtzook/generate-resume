<template>
  <div>
    <div class="resume-header">
      <h1>First Last</h1>
    </div>
    <div class="resume-body">
      <div class="left-panel">left panel</div>
      <div class="right-panel">right panel</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .resume-body {
    display: flex;

    .left-panel {
      flex: 1 0 33%;
    }

    .right-panel {
      flex: 1 0 67%;
    }
  }
</style>