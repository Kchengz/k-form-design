<!--
 * @Description: 子表单 用于批量填入数据
 * @Author: kcz
 * @Date: 2020-03-27 18:36:56
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-28 17:44:54
 -->
<template>
  <a-form-model
    ref="dynamicValidateForm"
    layout="inline"
    :model="dynamicValidateForm"
  >
    <a-table
      class="batch-table"
      :pagination="false"
      :rowKey="record => record.key"
      :columns="columns"
      :dataSource="dynamicValidateForm.domains"
      bordered
      :scroll="{ x: record.list.length * 190 + 80, y: record.options.scrollX }"
    >
      <template
        v-for="item in record.list"
        :slot="item.key"
        slot-scope="text, record, index"
      >
        <KFormModelItem
          :key="item.key + '1'"
          :record="item"
          :parentDisabled="disabled"
          :index="index"
          :domains="dynamicValidateForm.domains"
          v-model="record[item.model]"
          @input="handleInput"
        />
      </template>
      <template slot="dynamic-delete-button" slot-scope="text, record">
        <a-icon
          v-if="!disabled"
          class="dynamic-delete-button"
          type="minus-circle-o"
          @click="removeDomain(record)"
        />
      </template>
    </a-table>
    <a-button type="dashed" :disabled="disabled" @click="addDomain">
      <a-icon type="plus" />增加
    </a-button>
  </a-form-model>
</template>

<script>
import KFormModelItem from "./module/KFormModelItem";
export default {
  name: "KBatch",
  props: ["record", "value"],
  components: {
    KFormModelItem
  },
  data() {
    return {
      dynamicValidateForm: {
        domains: []
      }
    };
  },
  computed: {
    columns() {
      let columns = this.record.list.map((item, index) => {
        return {
          title: item.label,
          dataIndex: item.key,
          width: index === this.record.list.length - 1 ? "" : "190px",
          scopedSlots: { customRender: item.key }
        };
      });
      columns.push({
        title: "操作",
        dataIndex: "dynamic-delete-button",
        fixed: "right",
        width: "80px",
        scopedSlots: { customRender: "dynamic-delete-button" }
      });
      return columns;
    },
    disabled() {
      return this.record.options.disabled;
    }
  },
  methods: {
    validationSubform() {
      let verification;
      this.$refs.dynamicValidateForm.validate(valid => {
        verification = valid;
      });
      return verification;
    },
    resetForm() {
      this.$refs.dynamicValidateForm.resetFields();
    },
    removeDomain(item) {
      const index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      let data = {};
      this.record.list.forEach(item => {
        data[item.model] = item.options.defaultValue;
      });

      this.dynamicValidateForm.domains.push({
        ...data,
        key: Date.now()
      });
      this.handleInput();
    },
    handleInput() {
      this.$emit("change", this.dynamicValidateForm.domains);
    }
  }
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
