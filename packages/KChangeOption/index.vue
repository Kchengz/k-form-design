<template>
  <div class="option-change-container">
    <a-row v-if="type === 'option' || type === 'tab'" :gutter="8">
      <div class="option-change-box" v-for="(val, index) in value" :key="index">
        <a-col :span="9"><Input v-model="val.label" placeholder="名称"/></a-col>
        <a-col :span="9"><Input v-model="val.value" placeholder="值"/></a-col>
        <a-col :span="6"
          ><div @click="handleDelete(index)" class="option-delete-box">
            <a-icon type="delete" /></div
        ></a-col>
      </div>
      <a-col :span="24"><a @click="handleAdd">添加</a></a-col>
    </a-row>

    <a-row v-if="type === 'rules'" :gutter="8">
      <span v-for="(val, index) in value" :key="index">
        <div class="option-change-box" v-if="index !== 0">
          <a-col :span="18"
            ><Input v-model="val.message" placeholder="提示信息"
          /></a-col>
          <a-col :span="18"
            ><Input v-model="val.pattern" placeholder="正则表达式pattern"
          /></a-col>
          <a-col :span="6"
            ><div @click="handleDelete(index)" class="option-delete-box">
              <a-icon type="delete" /></div
          ></a-col>
        </div>
      </span>
      <a-col :span="24"><a @click="handleAddRules">增加校验</a></a-col>
    </a-row>
    <a-row v-else-if="type === 'colspan'" :gutter="8">
      <div class="option-change-box" v-for="(val, index) in value" :key="index">
        <a-col :span="18"
          ><InputNumber
            style="width:100%"
            :max="24"
            v-model="val.span"
            placeholder="名称"
        /></a-col>
        <a-col :span="6"
          ><div @click="handleDelete(index)" class="option-delete-box">
            <a-icon type="delete" /></div
        ></a-col>
      </div>
      <a-col :span="24"><a @click="handleAddCol">添加</a></a-col>
    </a-row>
  </div>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 修改多选、下拉、单选等控件options的组件，添加移除校验规制的组件
 */
import { pluginManager } from "../utils/getUtility";
const Input = pluginManager.getComponent("input").component;
const InputNumber = pluginManager.getComponent("number").component;
export default {
  name: "KChangeOption",
  components: {
    Input,
    InputNumber
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: "option"
    }
  },
  methods: {
    handleAdd() {
      // 添加
      const addData = [
        ...this.value,
        {
          value: `${this.value.length + 1}`,
          label: "选项" + (this.value.length + 1),
          list: this.type === "tab" ? [] : undefined
        }
      ];
      this.$emit("input", addData);
    },
    handleAddCol() {
      // 添加栅格Col
      const addData = [
        ...this.value,
        {
          span: 12,
          list: []
        }
      ];
      this.$emit("input", addData);
    },
    handleAddRules() {
      const addData = [
        ...this.value,
        {
          pattern: "",
          message: ""
        }
      ];
      this.$emit("input", addData);
    },
    handleDelete(deleteIndex) {
      // 删除
      this.$emit(
        "input",
        this.value.filter((val, index) => index !== deleteIndex)
      );
    }
  }
};
</script>
