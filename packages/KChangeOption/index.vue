<template>
  <div class="option-change-container">
    <a-row v-if="type === 'option'" :gutter="8">
      <div class="option-change-box" v-for="(val, index) in value" :key="index">
        <a-col :span="9"
          ><a-input v-model="val.label" placeholder="名称"
        /></a-col>
        <a-col :span="9"><a-input v-model="val.value" placeholder="值"/></a-col>
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
            ><a-input v-model="val.message" placeholder="提示信息"
          /></a-col>
          <a-col :span="18"
            ><a-input v-model="val.pattern" placeholder="正则表达式pattern"
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
          ><a-input-number
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
export default {
  name: "KChangeOption",
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
      let addData = [
        ...this.value,
        {
          value: "",
          label: ""
        }
      ];
      this.$emit("input", addData);
    },
    handleAddCol() {
      // 添加栅格Col
      let addData = [
        ...this.value,
        {
          span: 12,
          list: []
        }
      ];
      this.$emit("input", addData);
    },
    handleAddRules() {
      let addData = [
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
<style lang="less" scoped>
.option-change-container {
  width: calc(100% - 8px);
}
.option-change-box {
  height: 38px;
  padding-bottom: 6px;
  .option-delete-box {
    margin-top: 3px;
    background: #ffe9e9;
    color: #f22;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 50%;
    overflow: hidden;
    transition: all 0.3s;
    &:hover {
      background: #f22;
      color: #fff;
    }
  }
}
</style>
