<template>
  <DocTitle>Dialog 对话框示例</DocTitle>
  <CodePer :component="DialogDemo01"/>
  <CodePer :component="DialogDemo02"/>
  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import DocTitle from "../DocTitle.vue";
import Attr from "../Attr.vue";
import CodePer from "../CodePer.vue";
import DialogDemo01 from "../../demo-code/DemoDialog/DialogDemo01.vue";
import DialogDemo02 from "../../demo-code/DemoDialog/DialogDemo02.vue";
import {ref} from "vue";
import {columns} from "../../lib/data";

export default {
  name: "DialogDoc.vue",
  components: {DocTitle, Attr:Attr, CodePer, DialogDemo01, DialogDemo02},
  setup(){
    const data = ref([
      {
        params: 'visible',
        desc: '是否展示对话框',
        type: 'boolean',
        select: 'true / false',
        default: 'false'
      },
      {
        params: 'width',
        desc: '对话框宽度',
        type: 'string',
        select: '0%~100%',
        default: '50%',
      },
      {
        params: 'top',
        desc: '顶部距离',
        type: 'string',
        select: '0%~100%',
        default: '15%',
      },
      {
        params: 'closeOnClickOverlay',
        desc: '是否允许点击遮罩层关闭弹出框',
        type: 'boolean',
        select: 'true / false',
        default: 'false',
      },
      {
        params: 'ok',
        desc: '确认触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
      {
        params: 'cancel',
        desc: '取消触发函数',
        type: 'function',
        select: '()=>{}',
        default: '--',
      },
    ])
    return {DialogDemo01, DialogDemo02, columns, data}
  }
}
</script>

<style lang="scss" scoped>

</style>
