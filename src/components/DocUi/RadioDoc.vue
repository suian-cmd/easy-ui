<template>
  <div>
    <DocTitle>Radio 单选框示例</DocTitle>
    <CodePer :component="RadioDemo01"/>
    <Attr :columns="columns" :data="data"/>
  </div>
</template>

<script lang="ts">
import DocTitle from "../DocTitle.vue";
import Attr from "../Attr.vue";
import CodePer from "../CodePer.vue";
import {ref} from "vue";
import RadioDemo01 from "../../demo-code/DemoRadio/RadioDemo01.vue";
import {columns} from "../../lib/data";

export default {
  name: "RadioDoc.vue",
  components: {DocTitle, Attr, CodePer},
  setup(){
    const data = ref([
      {
        params: 'label',
        desc: 'radio 标签的值',
        type: 'string/number/boolean',
        select: '自定义',
        default: '自定义'
      },
      {
        params: 'v-model',
        desc: '选定的 radio 标签的值',
        type: '随着 label 属性类型改变',
        select: '自定义',
        default: 'label 属性中的任意一个值'
      }
    ])
    return {RadioDemo01, data, columns}
  }
}
</script>

<style lang="scss" scoped>

</style>
