<template>
  <a-config-provider :locale="locale">
    <a-form
      v-if="
        typeof value.list !== 'undefined' && typeof value.config !== 'undefined'
      "
      class="k-form-build-9136076486841527"
      :layout="value.config.layout"
      :hideRequiredMark="value.config.hideRequiredMark"
      :form="form"
      @submit="handleSubmit"
      :style="value.config.customStyle"
    >
      <buildBlocks
        ref="buildBlocks"
        @handleReset="handleReset"
        v-for="(record, index) in value.list"
        :record="record"
        :dynamicData="dynamicData"
        :config="value.config"
        :key="index"
      />
    </a-form>
  </a-config-provider>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 * description 将json数据构建成表单
 */
import buildBlocks from "./buildBlocks";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
// import moment from "moment";
export default {
  name: "KFormBuild",
  data() {
    return {
      locale: zhCN,
      form: this.$form.createForm(this)
    };
  },
  // props: ["value", "dynamicData"],
  props: {
    value: {
      type: Object,
      required: true
    },
    dynamicData: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  components: {
    buildBlocks
  },
  methods: {
    // moment,
    handleSubmit(e) {
      // 提交按钮触发，并触发submit函数，返回getData函数
      e.preventDefault();
      this.$emit("submit", this.getData);
    },
    handleReset() {
      // 重置表单
      this.form.resetFields();
    },
    getData() {
      // 提交函数，提供父级组件调用
      return new Promise((resolve, reject) => {
        try {
          this.form.validateFields((err, values) => {
            if (err) {
              reject(err);
            }
            this.$refs.buildBlocks.forEach(item => {
              if (!item.validationSubform()) {
                reject(err);
              }
            });
            resolve(values);
          });
        } catch (err) {
          reject(err);
        }
      });
    }
  }
};
</script>
