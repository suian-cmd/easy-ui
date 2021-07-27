<template>
  <article class="markdown-body" v-html="content"/>
</template>

<script lang="ts">
export default {
  name: "Markdown.vue",
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
