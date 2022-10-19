// 预加载组件

// const checkboxItem = () => import("ant-design-vue/lib/checkbox/Checkbox");
// const aButton = () => import("ant-design-vue/lib/button");
// const codemirror = async () =>
//   (await import("vue-codemirror-lite"))["codemirror"];
// const upload = () => import("ant-design-vue/lib/upload");
// const input = () => import("ant-design-vue/lib/input");
// const rate = () => import("ant-design-vue/lib/rate");
// const checkbox = () => import("ant-design-vue/lib/checkbox/Group");
// const radio = () => import("ant-design-vue/lib/radio/Group");
// const radioButton = () => import("ant-design-vue/lib/radio/RadioButton");
// const radioItem = () => import("ant-design-vue/lib/radio/Radio");
// const textarea = () => import("ant-design-vue/lib/input/TextArea");
// const select = () => import("ant-design-vue/lib/select");
// const colorPicker = async () =>
//   (await import("vcolorpicker"))["default"]["colorPicker"];
// const aSwitch = () => import("ant-design-vue/lib/switch");
// const number = () => import("ant-design-vue/lib/input-number");
// const aSlider = () => import("ant-design-vue/lib/slider");

import {
  Button,
  Checkbox,
  Upload,
  Input,
  InputNumber,
  Rate,
  Radio,
  Switch,
  Select,
  Slider
} from "ant-design-vue";

import colorPicker from "vcolorpicker";
import codemirror from "vue-codemirror-lite";

export const preLoadComponents = {
  checkboxItem: Checkbox,
  aButton: Button,
  codemirror,
  upload: Upload,
  input: Input,
  rate: Rate,
  checkbox: Checkbox.Group,
  radio: Radio.Group,
  radioButton: Radio.Button,
  radioItem: Radio,
  textarea: Input.TextArea,
  select: Select,
  colorPicker,
  aSwitch: Switch,
  number: InputNumber,
  aSlider: Slider
};
