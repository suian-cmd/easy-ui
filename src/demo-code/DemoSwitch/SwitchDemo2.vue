<demo>
禁用状态
</demo>
<template>
  <Switch v-model:value="checked" :disabled="true"></Switch>
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
import {ref} from "vue";
export default {
  name: "SwitchDemo.vue",
  components: {Switch},
  setup(){
    const checked = ref(false)
    return {checked}
  }
}
</script>

