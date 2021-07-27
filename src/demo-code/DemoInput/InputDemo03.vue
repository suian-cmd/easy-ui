<demo>
支持禁用
</demo>
<template>
  <Input placeholder="禁用" v-model:value="text" disabled/>
</template>

<script lang="ts">
import Input from "../../lib/Input.vue";
import {ref} from "vue";

export default {
  name: "InputDemo03",
  components: {Input},
  setup(props){
    const text = ref('')
    return {text}
  }

}
</script>
