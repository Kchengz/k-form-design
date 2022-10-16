/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from "vue";
import { pluginManager } from "./PluginManager";
import {
  ConfigProvider,
  Layout,
  Input,
  Rate,
  Slider,
  InputNumber,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Empty,
  Form,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Icon,
  Steps,
  Alert,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  message,
  Upload,
  Tooltip,
  FormModel,
  Collapse
} from "ant-design-vue";
import vcolorpicker from "vcolorpicker";

pluginManager.addComponent("input", () => import("ant-design-vue/lib/input"));
pluginManager.addComponent("number", () =>
  import("ant-design-vue/lib/input-number")
);
pluginManager.addComponent("select", () => import("ant-design-vue/lib/select"));
pluginManager.addComponent("checkbox", () =>
  import("ant-design-vue/lib/checkbox/Group")
);
pluginManager.addComponent("radio", () =>
  import("ant-design-vue/lib/radio/Group")
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

pluginManager.addComponent("date", () => import("../KDatePicker/index"));
pluginManager.addComponent("time", () => import("../KTimePicker/index"));
pluginManager.addComponent("uploadFile", () => import("../UploadFile/index"));
pluginManager.addComponent("uploadImg", () => import("../UploadImg/index"));
pluginManager.addComponent("batch", () => import("../KBatch/index"));
pluginManager.addComponent("selectInputList", () =>
  import("../KSelectInputList/index")
);
pluginManager.addComponent("editor", () => import("../KEditor/index"));

Vue.use(ConfigProvider);
Vue.use(Tooltip);
Vue.use(Empty);
Vue.use(FormModel);
Vue.use(Collapse);
Vue.use(Layout);
Vue.use(Input);
Vue.use(Rate);
Vue.use(Slider);
Vue.use(InputNumber);
Vue.use(Button);
Vue.use(Switch);
Vue.use(Radio);
Vue.use(Checkbox);
Vue.use(Select);
Vue.use(Card);
Vue.use(Form);
Vue.use(Row);
Vue.use(Col);
Vue.use(Modal);
Vue.use(Table);
Vue.use(Tabs);
Vue.use(Icon);
Vue.use(Steps);
Vue.use(Alert);
Vue.use(Tag);
Vue.use(Divider);
Vue.use(DatePicker);
Vue.use(TimePicker);
Vue.use(Upload);
Vue.use(vcolorpicker);

Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$message = message;
