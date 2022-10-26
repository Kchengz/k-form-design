<template>
  <div :style="`width:${record.options.width}`" class="slider-box">
    <div class="slider">
      <Slider v-bind="this.$attrs" v-model="sliderValue" />
    </div>
    <div class="number" v-if="record.options.showInput">
      <InputNumber
        style="width: 100%"
        v-bind="this.$attrs"
        v-model="sliderValue"
      />
    </div>
  </div>
</template>
<script>
import { pluginManager } from "../../utils/index";
const Slider = pluginManager.getComponent("aSlider").component;
const InputNumber = pluginManager.getComponent("number").component;
export default {
  name: "KSlider",
  props: ["record", "value"],
  components: { Slider, InputNumber },
  computed: {
    sliderValue: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit("change", e);
      }
    }
  }
};
</script>
