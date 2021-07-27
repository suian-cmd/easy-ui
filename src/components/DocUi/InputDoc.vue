<template>
  <DocTitle>Input 输入框类型</DocTitle>
  <CodePer :component="InputDemo01"/>
  <CodePer :component="InputDemo02"/>
  <CodePer :component="InputDemo03"/>
  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import DocTitle from "../DocTitle.vue";
import Attr from "../Attr.vue";
import CodePer from "../CodePer.vue";
import {ref} from "vue";
import InputDemo02 from "../../demo-code/DemoInput/InputDemo02.vue";
import InputDemo01 from "../../demo-code/DemoInput/InputDemo01.vue";
import InputDemo03 from "../../demo-code/DemoInput/InputDemo03.vue";
import {columns} from "../../lib/data";

export default {
  name: "InputDoc.vue",
  components: {DocTitle, Attr:Attr, CodePer},
  setup(){
    const data = ref([
      {
        params: 'name',
        desc: 'input标签名',
        type: 'string',
        select: '任意字符串',
        default: '空'
      },
      {
        params: 'type',
        desc: '文本框类型',
        type: 'string',
        select: '支持所有原生input的类型',
        default: 'text'
      },
      {
        params: 'placeholder',
        desc: '占位符',
        type: 'string',
        select: '任意字符串',
        default: '空'
      },
      {
        params: 'disabled',
        desc: '禁用',
        type: 'boolean',
        select: 'false/true',
        default: 'false'
      }
    ])
    return {InputDemo01, InputDemo02, InputDemo03, columns, data}
  }
}
</script>

<style lang="scss" scoped>

</style>
