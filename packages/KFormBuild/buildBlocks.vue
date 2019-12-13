<template>
  <!-- 栅格布局 -->
  <a-row
    v-if="record.type === 'grid'"
    class="grid-row"
    :gutter="record.options.gutter"
  >
    <a-col
      class="grid-col"
      v-for="(colItem, idnex) in record.columns"
      :key="idnex"
      :span="colItem.span || 0"
    >
      <buildBlocks
        @handleReset="$emit('handleReset')"
        v-for="item in colItem.list"
        :key="item.key"
        :record="item"
        :config="config"
      />
    </a-col>
  </a-row>
  <!-- 卡片布局 -->
  <a-card
    v-else-if="record.type === 'card'"
    class="grid-row"
    :title="record.name"
  >
    <buildBlocks
      @handleReset="$emit('handleReset')"
      v-for="item in record.list"
      :key="item.key"
      :record="item"
      :config="config"
    />
  </a-card>
  <!-- 表格布局 -->
  <table
    v-else-if="record.type === 'table'"
    class="kk-table-9136076486841527"
    :class="{
      bright: record.options.bright,
      small: record.options.small,
      bordered: record.options.bordered
    }"
    :style="{
      width: record.options.width,
      marginTop: record.options.marginTop,
      marginRight: record.options.marginRight,
      marginBottom: record.options.marginBottom,
      marginLeft: record.options.marginLeft
    }"
  >
    <tr v-for="(trItem, trIndex) in record.trs" :key="trIndex">
      <td
        class="table-td"
        v-for="(tdItem, tdIndex) in trItem.tds"
        :key="tdIndex"
        :colspan="tdItem.colspan"
        :rowspan="tdItem.rowspan"
      >
        <buildBlocks
          @handleReset="$emit('handleReset')"
          v-for="item in tdItem.list"
          :key="item.key"
          :record="item"
          :config="config"
        />
      </td>
    </tr>
  </table>

  <KFormItem
    @handleReset="$emit('handleReset')"
    v-else
    :key="record.key"
    :record="record"
    :config="config"
  />
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */
import KFormItem from "../KFormItem/index";
export default {
  name: "buildBlocks",
  props: {
    record: {
      type: Object,
      required: true
    },
    config: {
      type: Object,
      required: true
    }
  },
  components: {
    KFormItem
  }
};
</script>
