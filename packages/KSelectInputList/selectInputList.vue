<!--
 * @Description: 多列选择 用于选择并且需要输入的表单
 * @Author: kcz
 * @Date: 2020-03-27 18:36:56
 * @LastEditors: kcz
 * @LastEditTime: 2021-05-16 11:03:45
 -->
<template>
  <a-form-model
    class="select-input-list-box"
    ref="dynamicValidateForm"
    layout="inline"
    :model="dynamicValidateForm"
  >
    <div v-for="(column, i) in record.columns" :key="i">
      <a-form-model-item>
        <a-checkbox
          v-if="record.options.multiple"
          @change="onCheckboxChange($event, i)"
          :checked="dynamicValidateForm.domains[i].checked"
        >
          {{ column.label }}
        </a-checkbox>
        <a-radio
          v-else
          @change="onRadioChange($event, i)"
          :checked="dynamicValidateForm.domains[i].checked"
          >{{ column.label }}</a-radio
        >
      </a-form-model-item>
      <span v-for="(item, index) in column.list" :key="index">
        <KFormModelItem
          :key="item.key + '1'"
          :record="item"
          :config="config"
          :parentDisabled="disabled"
          :domains="dynamicValidateForm.domains[i]"
          :dynamicData="dynamicData"
          v-model="dynamicValidateForm.domains[i][item.model]"
          @input="handleInput"
        />
      </span>
    </div>
  </a-form-model>
</template>

<script>
import KFormModelItem from "./module/KFormModelItem";
export default {
  name: "KBatch",
  props: ["record", "value", "dynamicData", "config", "parentDisabled"],

  components: {
    KFormModelItem
  },
  watch: {
    value: {
      // value 需要深度监听及默认先执行handler函数
      handler(val) {
        const initValue = val || [];
        if (!initValue.length) {
          this.record.columns.forEach(item => {
            const itemData = {};
            item.list.forEach(e => e.model && (itemData[e.model] = null));
            itemData.checked = false;
            itemData.value = item.value;
            itemData.label = item.label;
            initValue.push(itemData);
          });
        }

        this.dynamicValidateForm.domains = initValue;
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      dynamicValidateForm: {
        domains: []
      }
    };
  },
  computed: {
    disabled() {
      return this.record.options.disabled || this.parentDisabled;
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
    onCheckboxChange(e, index) {
      this.dynamicValidateForm.domains[index].checked = e.target.checked;
      this.handleInput();
    },
    onRadioChange(e, index) {
      this.dynamicValidateForm.domains.forEach(item => (item.checked = false));
      this.dynamicValidateForm.domains[index].checked = e.target.checked;
      this.handleInput();
    },
    handleInput() {
      this.$emit("change", this.dynamicValidateForm.domains);
    }
  },
  mounted() {
    this.handleInput();
  }
};
</script>
