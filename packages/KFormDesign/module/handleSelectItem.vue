<template>
  <div class="drag-move-box" :class="{ active: record.key === selectItem.key }">
    <div class="form-item-box" @click="$emit('handleSelectItem', record)">
      <kFormItem :config="config" :record="record" />
    </div>
    <div class="drag-move" v-if="record.key === selectItem.key">
      <a-icon type="swap" />
    </div>
    <div
      class="copy"
      v-if="record.key === selectItem.key"
      @click="$emit('handleCopy')"
    >
      <a-icon type="copy" />
    </div>
    <div
      class="delete"
      v-if="record.key === selectItem.key"
      @click="$emit('handleDetele')"
    >
      <a-icon type="delete" />
    </div>
  </div>
</template>
<script>
/*
 * athor kcz
 * date 2019-11-20
 */
import kFormItem from "../../KFormItem/index";
export default {
  props: {
    record: {
      type: Object,
      required: true
    },
    selectItem: {
      type: Object,
      default: () => {}
    },
    config: {
      type: Object,
      required: true
    }
  },
  components: {
    kFormItem
  }
};
</script>
