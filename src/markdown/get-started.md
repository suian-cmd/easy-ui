# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Input, Switch, Radio, Dialog, openDialog, TabItem,  Tabs } from "suian-easy-ui"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Input, Switch, Radio, Dialog, openDialog, TabItem,  Tabs} from "suian-easy-ui"
import 'suian-easy-ui/dist/lib/easy.css'
export default {
  components: {Button}
}
</script>
```
