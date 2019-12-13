<template>
  <a-form
    v-if="
      typeof value.list !== 'undefined' && typeof value.config !== 'undefined'
    "
    class="k-form-build"
    :layout="value.config.layout"
    :hideRequiredMark="value.config.hideRequiredMark"
    :form="form"
    @submit="handleSubmit"
    :style="{
      width: value.config.width,
      marginTop: value.config.marginTop,
      marginRight: value.config.marginRight,
      marginBottom: value.config.marginBottom,
      marginLeft: value.config.marginLeft
    }"
  >
    <buildBlocks
      @handleReset="handleReset"
      v-for="(record, index) in value.list"
      :record="record"
      :config="value.config"
      :key="index"
    />
  </a-form>
</template>
<script>
/*
 * author kcz
 * date 2019-11-20
 */
import buildBlocks from "./buildBlocks";
import moment from "moment";
export default {
  name: "KFormBuild",
  data() {
    return {
      form: this.$form.createForm(this)
    };
  },
  // model:{
  //   prop:['value']
  // },
  props: ["value"],
  components: {
    buildBlocks
  },
  methods: {
    moment,
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
            let dateList = [];
            let getDateList = array => {
              array.forEach(item => {
                if (["time", "date"].includes(item.type)) {
                  dateList.push(item);
                } else if (item.type === "grid") {
                  item.columns.forEach(val => {
                    getDateList(val.list);
                  });
                } else if (item.type === "table") {
                  item.trs.forEach(val => {
                    val.tds.forEach(tdItem => {
                      getDateList(tdItem.list);
                    });
                  });
                } else if (item.type === "card") {
                  getDateList(item.list);
                }
              });
            };
            getDateList(this.value.list);
            // 时间为moment，在上传前需要处理
            // const timeComponents = this.value.list.filter(
            //   item => item.type === "time" || item.type === "date"
            // );
            for (let i = 0; i < dateList.length; i++) {
              if (!values[dateList[i].model]) {
                // 没有值跳出循环
                continue;
              }
              if (!Array.isArray(values[dateList[i].model])) {
                // 处理单个时间
                values[dateList[i].model] = values[dateList[i].model].format(
                  dateList[i].options.format
                );
              } else {
                // 处理多个时间
                values[dateList[i].model] = values[dateList[i].model].map(
                  item => item.format(dateList[i].options.format)
                );
              }
            }
            // console.log(values);
            resolve(values);
          });
        } catch (err) {
          reject(err);
        }
      });
    }
    // selectUser (val, item) {
    //   const formJson = {}
    //   formJson[item.model] = val

    //   this.form.setFieldsValue(formJson)
    // },
    // handleSelectChange (value) {
    //   this.$emit('change', value)
    // }
  }
};
</script>
