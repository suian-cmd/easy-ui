<demo>
  基础用法
</demo>
<template>
  <Radio label="游戏" v-model="labelVal"/>
  <Radio label="漫画" v-model="labelVal"/>
  <div class="picked">Picked:{{labelVal}}</div>
</template>

<script lang="ts">
import Radio from "../../lib/Radio.vue";
import {ref} from "vue";
export default {
  name: "RadioDemo01",
  components: { Radio},
  setup(){
    const labelVal = ref('游戏')
    return {labelVal}
  }

}
</script>

<style lang="scss" scoped>
.picked{
  padding: 10px 0;
}
</style>
