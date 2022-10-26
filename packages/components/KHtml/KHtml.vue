<template>
  <div v-html="record.options.defaultValue"></div>
</template>
<script>
export default {
  name: "KHtml",
  props: ["record"]
};
</script>
