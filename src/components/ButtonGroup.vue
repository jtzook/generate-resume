<template>
  <div class="button-group">
    <button>Modern</button>
    <button>Classic</button>
  </div>
</template>

<style lang="scss" scoped>
.button-group button {
  background-color: #4caf50; /* Green background */
  border: 1px solid green; /* Green border */
  color: white; /* White text */
  padding: 10px 24px; /* Some padding */
  cursor: pointer; /* Pointer/hand icon */
  float: left; /* Float the buttons side by side */
}

.button-group button:not(:last-child) {
  border-right: none; /* Prevent double borders */
}

.button-group button:hover {
  background-color: #3e8e41;
}

// clear floats (clearfix hack)
.button-group:after {
  content: "";
  clear: both;
  display: table;
}
</style>