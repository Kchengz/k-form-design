<!--
 * @Description: 日期选择器
 * @Author: kcz
 * @Date: 2020-01-11 15:38:28
 * @LastEditors: kcz
 * @LastEditTime: 2022-10-16 16:29:14
 -->
<template>
  <!-- 月份选择 -->
  <MonthPicker
    :style="`width:${record.options.width}`"
    v-if="record.options.format === 'YYYY-MM' && record.options.range === false"
    :disabled="record.options.disabled || parentDisabled"
    :allowClear="record.options.clearable"
    :placeholder="record.options.placeholder"
    :format="record.options.format"
    @change="handleSelectChange"
    :value="date"
  />
  <!-- 日期选择 -->
  <DatePicker
    :style="`width:${record.options.width}`"
    v-else-if="record.options.range === false"
    :disabled="record.options.disabled || parentDisabled"
    :show-time="record.options.showTime"
    :allowClear="record.options.clearable"
    :placeholder="record.options.placeholder"
    :format="record.options.format"
    @change="handleSelectChange"
    :value="date"
  />

  <!-- 范围日期选择 -->
  <RangePicker
    :style="`width:${record.options.width}`"
    v-else-if="record.options.range === true"
    :show-time="record.options.showTime"
    :disabled="record.options.disabled || parentDisabled"
    :allowClear="record.options.clearable"
    :placeholder="record.options.rangePlaceholder"
    :format="record.options.format"
    @change="handleSelectChange"
    :value="date"
  />
</template>
<script>
import moment from "moment";
// import { DatePicker } from "ant-design-vue";
import { pluginManager } from "../utils/getPluginManager";

const DatePicker = pluginManager.getComponent("datePicker");
const RangePicker = pluginManager.getComponent("rangePicker");
const MonthPicker = pluginManager.getComponent("monthPicker");

export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ["record", "value", "parentDisabled"],
  components: {
    DatePicker: DatePicker.component,
    RangePicker: RangePicker.component,
    MonthPicker: MonthPicker.component
  },
  data() {
    return {
      // date: undefined
    };
  },
  computed: {
    date() {
      if (
        !this.value ||
        (this.record.options.range && this.value.length === 0)
      ) {
        return undefined;
      } else if (this.record.options.range) {
        return this.value.map(item => moment(item, this.record.options.format));
      } else {
        return moment(this.value, this.record.options.format);
      }
    }
  },
  methods: {
    handleSelectChange(val) {
      let date;
      if (!val || (this.record.options.range && val.length === 0)) {
        date = "";
      } else if (this.record.options.range) {
        date = val.map(item => item.format(this.record.options.format));
      } else {
        date = val.format(this.record.options.format);
      }
      this.$emit("change", date);
      this.$emit("input", date);
    }
  }
};
</script>
