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
  Tooltip,
  FormModel,
  Collapse
} from "ant-design-vue";

import { preLoadComponents } from "./preLoadComponents";

pluginManager.addComponent("input", preLoadComponents.input);
pluginManager.addComponent("textarea", preLoadComponents.textarea);
pluginManager.addComponent("number", preLoadComponents.number);
pluginManager.addComponent("select", preLoadComponents.select);
pluginManager.addComponent("checkbox", preLoadComponents.checkbox);
pluginManager.addComponent("checkboxItem", preLoadComponents.checkboxItem);
pluginManager.addComponent("radio", preLoadComponents.radio);
pluginManager.addComponent("radioItem", preLoadComponents.radioItem);
pluginManager.addComponent("radioButton", preLoadComponents.radioButton);
pluginManager.addComponent("switch", preLoadComponents.aSwitch, "checked");
pluginManager.addComponent("rate", preLoadComponents.rate);
pluginManager.addComponent("aSlider", preLoadComponents.aSlider);
pluginManager.addComponent("aButton", preLoadComponents.aButton);
pluginManager.addComponent("colorPicker", preLoadComponents.colorPicker);
pluginManager.addComponent("codemirror", preLoadComponents.codemirror);
pluginManager.addComponent("upload", preLoadComponents.upload);

pluginManager.addComponent("treeSelect", () =>
  import("ant-design-vue/lib/tree-select")
);
pluginManager.addComponent("cascader", () =>
  import("ant-design-vue/lib/cascader")
);
pluginManager.addComponent("alert", () => import("ant-design-vue/lib/alert"));
pluginManager.addComponent("button", () => import("../KButton/index"));
pluginManager.addComponent("divider", () => import("../KDivider/index"));
pluginManager.addComponent("html", () => import("../KHtml/index"));
pluginManager.addComponent("slider", () => import("../KSlider/index"));
pluginManager.addComponent("text", () => import("../KText/index"));

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
