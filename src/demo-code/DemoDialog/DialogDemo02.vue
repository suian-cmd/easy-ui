<demo>
函数式调用
</demo>
<template>
  <Button theme="primary" size="small" @click="showDialog">
    一键打开Dialog
  </Button>
</template>

<script lang="ts">
import Button from "../../lib/Button.vue";
import {openDialog} from "../../lib/openDialog";

export default {
  name: "DialogDemo02",
  components: {Button},
  setup(){
    const showDialog = ()=>{
      openDialog({
        title: '标题',
        content:'这里是内容',
        visible: true,
        closeOnClickOverlay: true,
        ok: ()=>{
          console.log('确认')
          return true
        },
        cancel: ()=>{
          console.log('取消')
          return true
        }
      })
    }
    return {showDialog}
  }
}
</script>
