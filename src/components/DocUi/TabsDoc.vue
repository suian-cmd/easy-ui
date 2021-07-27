<template>
  <DocTitle>Tabs 标签页示例</DocTitle>
  <CodePer :component="TabsDemo01"/>
  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import DocTitle from "../DocTitle.vue";
import Attr from "../Attr.vue";
import CodePer from "../CodePer.vue";
import {ref} from "vue";
import TabsDemo01 from "../../demo-code/DemoTabs/TabsDemo01.vue";
import {columns} from "../../lib/data";

export default {
  name: "TabsDoc.vue",
  components: {DocTitle, Attr: Attr, CodePer},
  setup(){
    const data = ref([
      {
        params: 'selected',
        desc: 'Tabs 选中的项',
        type: 'String',
        select: 'TabItem 中的 title',
        default: '--'
      },
      {
        params: 'TabItem',
        desc: 'Tab 标签项',
        type: 'component',
        select: 'TabItem',
        default: '--'
      }
    ])
    return {TabsDemo01, data, columns}
  }
}
</script>

<style lang="scss" scoped>

</style>
