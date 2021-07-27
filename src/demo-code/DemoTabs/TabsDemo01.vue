<demo>
基础用法
</demo>
<template>
  <Tabs v-model:selected="title">
    <TabItem title="游戏">游戏</TabItem>
    <TabItem title="漫画">漫画</TabItem>
    <TabItem title="跑步">跑步</TabItem>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import {ref} from "vue";
import TabItem from "../../lib/TabItem.vue";
export default {
  name: "TabsDemo01",
  components: {TabItem, Tabs},
  setup(){
    const title = ref('游戏')
    return {title}
  }
}
</script>

