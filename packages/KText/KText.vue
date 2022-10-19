<template>
  <div
    :style="{
      textAlign: record.options.textAlign,
      transform: 'translateY(-2px)',
      paddingRight: '8px'
    }"
  >
    <label
      :class="{ 'ant-form-item-required': record.options.showRequiredMark }"
      :style="{
        fontFamily: record.options.fontFamily,
        fontSize: record.options.fontSize,
        color: record.options.color
      }"
      v-text="record.label"
    ></label>
  </div>
</template>
<script>
export default {
  name: "KText",
  props: ["record"]
};
</script>
