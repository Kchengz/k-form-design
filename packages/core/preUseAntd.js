/**
 * 预加载antd组件
 */
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

/**
 * 注册Antd组件
 * @param {*} App
 */
export function useAntd(App) {
  App.use(ConfigProvider);
  App.use(Tooltip);
  App.use(Empty);
  App.use(FormModel);
  App.use(Collapse);
  App.use(Layout);
  App.use(Card);
  App.use(Form);
  App.use(Row);
  App.use(Col);
  App.use(Modal);
  App.use(Table);
  App.use(Tabs);
  App.use(Icon);
}
