<!--
 * @Description: 子表单 用于批量填入数据
 * @Author: kcz
 * @Date: 2020-03-27 18:36:56
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-27 18:58:08
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
    >
      <template slot="value" slot-scope="text, record, index">
        <a-form-model-item
          :rules="{
            required: true,
            message: '不能为空'
          }"
          :prop="'domains.' + index + '.value'"
        >
          <a-input
            v-model="record.value"
            placeholder="please input domain"
            style="margin-right: 8px"
          />
        </a-form-model-item>
      </template>
      <template slot="dynamic-delete-button" slot-scope="text, record">
        <a-icon
          class="dynamic-delete-button"
          type="minus-circle-o"
          @click="removeDomain(record)"
        />
      </template>
    </a-table>
    <a-button type="dashed" @click="addDomain">
      <a-icon type="plus" />Add field
    </a-button>
  </a-form-model>
</template>

<script>
export default {
  name: "KBatch",
  data() {
    return {
      dynamicValidateForm: {
        domains: []
      }
    };
  },
  computed: {
    columns() {
      const columns = [
        {
          title: "Name",
          dataIndex: "value",
          scopedSlots: { customRender: "value" }
        },
        {
          title: "操作",
          dataIndex: "dynamic-delete-button",
          fiexd: "right",
          width: "80px",
          scopedSlots: { customRender: "dynamic-delete-button" }
        }
      ];
      return columns;
    }
  },
  methods: {
    submitForm() {
      this.$refs.dynamicValidateForm.validate(valid => {
        if (valid) {
          console.log(this.dynamicValidateForm.domains);
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
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
