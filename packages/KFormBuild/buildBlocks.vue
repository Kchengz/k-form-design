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
        ref="nestedComponents"
        @handleReset="$emit('handleReset')"
        v-for="item in colItem.list"
        :dynamicData="dynamicData"
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
    :title="record.label"
  >
    <buildBlocks
      ref="nestedComponents"
      @handleReset="$emit('handleReset')"
      v-for="item in record.list"
      :dynamicData="dynamicData"
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
    :style="record.options.customStyle"
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
          ref="nestedComponents"
          @handleReset="$emit('handleReset')"
          v-for="item in tdItem.list"
          :dynamicData="dynamicData"
          :key="item.key"
          :record="item"
          :config="config"
        />
      </td>
    </tr>
  </table>

  <KFormItem
    ref="nestedComponents"
    @handleReset="$emit('handleReset')"
    v-else
    :dynamicData="dynamicData"
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
    },
    dynamicData: {
      type: Object,
      required: true
    }
  },
  components: {
    KFormItem
  },
  methods: {
    validationSubform() {
      // 验证动态表格
      return this.$refs.nestedComponents.validationSubform();
    }
  }
};
</script>
