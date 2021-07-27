<template>
  <DocTitle>Switch 开关示例</DocTitle>
  <CodePer :component="SwitchDemo1"/>
  <CodePer :component="SwitchDemo2"/>

  <Attr :columns="columns" :data="data"></Attr>
</template>

<script lang="ts">
import DocTitle from "../DocTitle.vue";
import Attr from '../Attr.vue';
import CodePer from "../CodePer.vue";
import {ref} from "vue";
import SwitchDemo1 from "../../demo-code/DemoSwitch/SwitchDemo1.vue"
import SwitchDemo2 from "../../demo-code/DemoSwitch/SwitchDemo2.vue";
import {columns} from "../../lib/data";

export default {
  name: "SwitchDoc.vue",
  components: {DocTitle, CodePer, Attr},
  setup(){
    const data = ref([
        {
          params: 'value',
          desc: '是否选中',
          type: 'boolean',
          select: 'false/true',
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
    return {SwitchDemo1, SwitchDemo2, data, columns}
  }
}
</script>

<style lang="scss" scoped>

</style>
