<template>
  <div class="easy-attr">
    <h2>Attributes</h2>
    <table class="attr-table">
      <thead>
      <tr>
        <th class="easy-attr-title"
            v-for="(item, index) in columns" :key="index">
          {{item.title}}
        </th>
      </tr>
      </thead>
      <tbody v-for="item in data">
        <td class="easy-attr-title td"
            v-for="(value, key) in item" :key="key">
          {{value}}
        </td>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: "Attr.vue",
  props: {
    columns: {
      type: Object
    },
    data: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.easy-attr {
  width: 100%;
  overflow-x: auto;

  h2 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 30px 0 20px;
    padding: 0px 5px;
  }

  .attr-table {
    width: 100%;
    border-collapse: collapse;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
    border: 1px solid #dcdfe6;
  }

  .easy-attr-title {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 270px;
    overflow-y: auto;
  }

  .td {
    color: #606266;
    font-size: 14px;
  }
}
</style>
