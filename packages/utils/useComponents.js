/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from "vue";
import { pluginManager } from "./getPluginManager";

import {
  ConfigProvider,
  Layout,
  Card,
  Empty,
  Form,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Icon,
  message,
  Tooltip,
  FormModel,
  Collapse
} from "ant-design-vue";

pluginManager.addComponent("input", () => import("ant-design-vue/lib/input"));
pluginManager.addComponent(
  "colorPicker",
  async () => (await import("vcolorpicker"))["default"]["colorPicker"]
);
pluginManager.addComponent("textarea", () =>
  import("ant-design-vue/lib/input/TextArea")
);
pluginManager.addComponent("number", () =>
  import("ant-design-vue/lib/input-number")
);
pluginManager.addComponent("select", () => import("ant-design-vue/lib/select"));
pluginManager.addComponent("checkbox", () =>
  import("ant-design-vue/lib/checkbox/Group")
);
pluginManager.addComponent("checkboxItem", () =>
  import("ant-design-vue/lib/checkbox/Checkbox")
);
pluginManager.addComponent("radio", () =>
  import("ant-design-vue/lib/radio/Group")
);

pluginManager.addComponent("radioItem", () =>
  import("ant-design-vue/lib/radio/Radio")
);

pluginManager.addComponent("radioButton", () =>
  import("ant-design-vue/lib/radio/RadioButton")
);
pluginManager.addComponent(
  "switch",
  () => import("ant-design-vue/lib/switch"),
  "checked"
);

pluginManager.addComponent("rate", () => import("ant-design-vue/lib/rate"));
pluginManager.addComponent("slider", () => import("ant-design-vue/lib/slider"));
pluginManager.addComponent("treeSelect", () =>
  import("ant-design-vue/lib/tree-select")
);
pluginManager.addComponent("cascader", () =>
  import("ant-design-vue/lib/cascader")
);

pluginManager.addComponent("alert", () => import("ant-design-vue/lib/alert"));
pluginManager.addComponent("button", () => import("ant-design-vue/lib/button"));
pluginManager.addComponent("divider", () =>
  import("ant-design-vue/lib/divider")
);

pluginManager.addComponent("date", () => import("../KDatePicker/index"));
pluginManager.addComponent("time", () => import("../KTimePicker/index"));
pluginManager.addComponent("uploadFile", () => import("../UploadFile/index"));
pluginManager.addComponent("uploadImg", () => import("../UploadImg/index"));
pluginManager.addComponent("batch", () => import("../KBatch/index"));
pluginManager.addComponent("selectInputList", () =>
  import("../KSelectInputList/index")
);
pluginManager.addComponent("editor", () => import("../KEditor/index"));

pluginManager.addComponent("timePicker", () =>
  import("ant-design-vue/lib/time-picker")
);
pluginManager.addComponent("datePicker", () =>
  import("ant-design-vue/lib/date-picker")
);

pluginManager.addComponent("rangePicker", () =>
  import("ant-design-vue/lib/date-picker/RangePicker")
);
pluginManager.addComponent("monthPicker", async () => {
  const datePicker = await import("ant-design-vue/lib/date-picker");
  return datePicker.default["MonthPicker"];
});

pluginManager.addComponent("upload", () => import("ant-design-vue/lib/upload"));
pluginManager.addComponent("uploadDragger", () =>
  import("ant-design-vue/lib/upload/Dragger")
);

Vue.use(ConfigProvider);
Vue.use(Tooltip);
Vue.use(Empty);
Vue.use(FormModel);
Vue.use(Collapse);
Vue.use(Layout);
Vue.use(Card);
Vue.use(Form);
Vue.use(Row);
Vue.use(Col);
Vue.use(Modal);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Icon);

Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$message = message;
