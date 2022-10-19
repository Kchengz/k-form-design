<template>
  <Divider
    v-if="record.label !== ''"
    :orientation="record.options.orientation || 'center'"
    >{{ record.label }}</Divider
  >
  <Divider v-else-if="record.label === ''" />
</template>
<script>
import { Divider } from "ant-design-vue";
export default {
  name: "KDivider",
  props: ["record"],
  components: { Divider }
};
</script>
