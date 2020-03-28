<!--
 * @Description: 折叠组件
 * @Author: kcz
 * @Date: 2020-01-13 00:37:54
 * @LastEditors: kcz
 * @LastEditTime: 2020-03-28 11:32:39
 -->
<template>
  <draggable
    tag="ul"
    :value="list"
    v-bind="{
      group: { name: 'form-draggable', pull: 'clone', put: false },
      sort: false,
      animation: 180,
      ghostClass: 'moving'
    }"
    @start="handleStart($event, list)"
  >
    <li
      v-for="(val, index) in list"
      :key="index"
      @dragstart="$emit('generateKey', list, index)"
      @click="$emit('handleListPush', val)"
    >
      <svg v-if="val.icon" class="icon" aria-hidden="true">
        <use :xlink:href="`#${val.icon}`"></use>
      </svg>
      {{ val.label }}
    </li>
  </draggable>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "collapseItem",
  props: ["list"],
  components: {
    draggable
  },
  methods: {
    handleStart(e, list) {
      this.$emit("start", list[e.oldIndex].type);
    }
  }
};
</script>
