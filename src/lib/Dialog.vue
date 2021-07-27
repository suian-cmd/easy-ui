<template>
  <template v-if="visible">
<!--    Teleport组件用于指定挂载到哪一个标签下-->
    <Teleport to="body">
      <div class="easy-dialog-overlay" @click="onClickOverlay"></div>
      <div class="easy-dialog-wrapper" :style="styles">
        <div class="easy-dialog">
          <header>
            <slot name="title"></slot>
            <span class="easy-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button @click="cancel" size="small">取消</Button>
            <Button theme="primary" size="small" @click="ok">确认</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import Button from "./Button.vue";

export default {
  name: "Dialog",
  components: {Button},
  props: {
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15%'
    },
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup(props, context){
    const styles = {
      minWidth: props.width,
      top: props.top
    }
    const close = ()=>{
      context.emit('update:visible', !props.visible)
    }
    const onClickOverlay = ()=>{
      if(props.closeOnClickOverlay){
        close()
      }
    }
    const ok = ()=>{
      if(props.ok && props.ok() != false){
        close()
      }
    }
    const cancel = ()=>{
      if(props.cancel && props.cancel()){
        close()
      }
    }
    return {styles, close, onClickOverlay, ok, cancel}
  }
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.easy-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 30;
  }

  &-wrapper {
    min-width: 50%;
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 31;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    margin: 15px 0;
  }

  > main {
    padding: 12px 16px;
    line-height: 1.8;
  }

  > footer {
    margin: 15px 0;
    border-top: 1px solid $border-color;
    padding: 12px 2px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
