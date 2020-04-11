/* eslint-disable */
/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from 'vue'
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
  Collapse,
  Cascader,
  TreeSelect
} from 'ant-design-vue'

Vue.use(TreeSelect)
Vue.use(ConfigProvider)
Vue.use(Cascader)
Vue.use(Tooltip)
Vue.use(FormModel)
Vue.use(Collapse)
Vue.use(Layout)
Vue.use(Input)
Vue.use(Rate)
Vue.use(Slider)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Switch)
Vue.use(Radio)
Vue.use(Checkbox)
Vue.use(Select)
Vue.use(Card)
Vue.use(Form)
Vue.use(Row)
Vue.use(Col)
Vue.use(Modal)
Vue.use(Table)
Vue.use(Tabs)
Vue.use(Icon)
Vue.use(Steps)
Vue.use(Alert)
Vue.use(Tag)
Vue.use(Divider)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Upload)
// Vue.use(notification)

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
// Vue.prototype.$notification = notification
// Vue.prototype.$info = Modal.info
// Vue.prototype.$success = Modal.success
// Vue.prototype.$error = Modal.error
// Vue.prototype.$warning = Modal.warning


