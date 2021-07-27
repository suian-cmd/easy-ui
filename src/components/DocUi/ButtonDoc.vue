<template>
  <DocTitle>Button 按钮示例</DocTitle>
  <CodePer :component="ButtonDemo01"/>
  <CodePer :component="ButtonDemo02"/>
  <CodePer :component="ButtonDemo03"/>
  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import DocTitle from "../DocTitle.vue";
import Attr from "../Attr.vue";
import CodePer from "../CodePer.vue";
import {ref} from "vue";
import ButtonDemo01 from "../../demo-code/DemoButton/ButtonDemo01.vue";
import ButtonDemo02 from "../../demo-code/DemoButton/ButtonDemo02.vue";
import ButtonDemo03 from "../../demo-code/DemoButton/ButtonDemo03.vue";
import {columns} from "../../lib/data";

export default {
  name: "ButtonDoc",
  components: {DocTitle, Attr, CodePer},
  setup(){
    const data = ref([
      {
        params: 'theme',
        desc: '按钮颜色',
        type: 'string',
        select: 'primary / warning / success / danger',
        default: 'default'
      },
      {
        params: 'size',
        desc: '尺寸大小',
        type: 'string',
        select: 'small / normal / large',
        default: 'normal'
      },
      {
        params: 'loading',
        desc: '是否加载中',
        type: 'boolean',
        select: 'false / true',
        default: 'false'
      },
      {
        params: 'disabled',
        desc: '是否禁用',
        type: 'boolean',
        select: 'false/true',
        default: 'false'
      }
    ])
    return {ButtonDemo01, ButtonDemo02,
      ButtonDemo03, columns, data}
  }

}
</script>

<style lang="scss" scoped>

</style>
