<template>
  <div class="doc-title">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "DocTitle.vue"
}
</script>

<style lang="scss" scoped>
.doc-title{
  display: block;
  font-size: 28px;
  margin-bottom: 40px;
  padding: 5px;
  box-shadow: rgb(0 0 0 / 40%) 2px 3px 8px;
}
</style>
