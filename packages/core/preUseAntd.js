/**
 * 预加载antd组件
 */
import Vue from "vue";
import { pluginManager } from "../utils/index";
import {
  ConfigProvider,
  Input,
  InputNumber,
  Select,
  Checkbox,
  Radio,
  Rate,
  Slider,
  Switch,
  TreeSelect,
  Cascader,
  Alert,
  Button,
  Upload,
  TimePicker,
  DatePicker,
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

pluginManager.addComponent("input", Input);
pluginManager.addComponent("textarea", Input.TextArea);
pluginManager.addComponent("number", InputNumber);
pluginManager.addComponent("select", Select);
pluginManager.addComponent("checkbox", Checkbox.Group);
pluginManager.addComponent("checkboxItem", Checkbox);
pluginManager.addComponent("radio", Radio.Group);
pluginManager.addComponent("radioItem", Radio);
pluginManager.addComponent("radioButton", Radio.Button);
pluginManager.addComponent("switch", Switch, "checked");
pluginManager.addComponent("rate", Rate);
pluginManager.addComponent("aSlider", Slider);
pluginManager.addComponent("treeSelect", TreeSelect);
pluginManager.addComponent("cascader", Cascader);
pluginManager.addComponent("alert", Alert);
pluginManager.addComponent("aButton", Button);
pluginManager.addComponent("timePicker", TimePicker);
pluginManager.addComponent("datePicker", DatePicker);
pluginManager.addComponent("rangePicker", DatePicker.RangePicker);
pluginManager.addComponent("monthPicker", DatePicker.MonthPicker);
pluginManager.addComponent("upload", Upload);
pluginManager.addComponent("uploadDragger", Upload.Dragger);

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
